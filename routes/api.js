const router = require('express').Router();
const jwt = require('jsonwebtoken');
const multer = require('multer');
const crypto = require('crypto');
const cloudinary = require('cloudinary').v2;
const Content = require('../models/Content');
const Enquiry = require('../models/Enquiry');
const defaults = require('../defaultContent');
const social = require('../services/social');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 100 * 1024 * 1024 } });
const SECRET = process.env.JWT_SECRET || 'sunshine_secret';
const clone = (o) => JSON.parse(JSON.stringify(o));
const isObj = (v) => v && typeof v === 'object' && !Array.isArray(v);
const same = (a, b) => {
  const x = crypto.createHash('sha256').update(String(a)).digest();
  const y = crypto.createHash('sha256').update(String(b)).digest();
  return crypto.timingSafeEqual(x, y);
};

function auth(req, res, next) {
  const t = (req.headers.authorization || '').replace('Bearer ', '');
  try { jwt.verify(t, SECRET); next(); } catch { res.status(401).json({ error: 'Unauthorized' }); }
}

// fills keys that are missing in saved data (useful when new sections are added later)
function deepFill(target, def) {
  let changed = false;
  for (const k of Object.keys(def)) {
    if (target[k] === undefined) { target[k] = clone(def[k]); changed = true; }
    else if (isObj(target[k]) && isObj(def[k]) && deepFill(target[k], def[k])) changed = true;
  }
  return changed;
}

async function getDoc() {
  let doc = await Content.findOne({ key: 'site' });
  if (!doc) return Content.create({ key: 'site', data: clone(defaults) });
  if (deepFill(doc.data, defaults)) { doc.markModified('data'); await doc.save(); }
  return doc;
}

// In-memory cache of the site content: the public site is read-heavy, so MongoDB is hit only
// on the first request and after the admin saves (cache is cleared on every write).
let cache = null, loading = null;
async function getContent() {
  if (cache) return cache;
  if (!loading) loading = getDoc().then((d) => (cache = d.data)).finally(() => { loading = null; });
  return loading;
}

// ---------- Public ----------
router.get('/content', async (req, res) => {
  try {
    res.set('Cache-Control', 'no-cache'); // browser revalidates with ETag -> tiny 304 reply when nothing changed
    res.json(await getContent());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

router.get('/health', (req, res) => res.json({ ok: true }));

const hits = new Map(); // tiny in-memory rate limit for the contact form
router.post('/enquiries', async (req, res) => {
  try {
    const ip = req.ip, now = Date.now();
    const recent = (hits.get(ip) || []).filter((t) => now - t < 3600000);
    if (recent.length >= 5) return res.status(429).json({ error: 'Too many messages, try later' });
    const { name, phone, email, message } = req.body || {};
    if (!name || !message) return res.status(400).json({ error: 'Name and message are required' });
    await Enquiry.create({ name: String(name).slice(0, 100), phone: String(phone || '').slice(0, 30), email: String(email || '').slice(0, 100), message: String(message).slice(0, 2000) });
    hits.set(ip, [...recent, now]);
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// Latest Instagram + Facebook posts (public, cached)
router.get('/social', async (req, res) => {
  try { res.json({ posts: (await social.getFeed()).posts }); }
  catch (e) { res.json({ posts: [] }); }
});

// ---------- Admin ----------
router.post('/login', (req, res) => {
  const { username, password } = req.body || {};
  if (same(username, process.env.ADMIN_USERNAME || 'admin') && same(password, process.env.ADMIN_PASSWORD || 'admin123')) {
    return res.json({ token: jwt.sign({ admin: true }, SECRET, { expiresIn: '12h' }) });
  }
  res.status(401).json({ error: 'Wrong username or password' });
});

router.put('/content', auth, async (req, res) => {
  try {
    if (!isObj(req.body) || !Object.keys(req.body).length) return res.status(400).json({ error: 'Invalid content' });
    const doc = await getDoc();
    doc.data = req.body; deepFill(doc.data, defaults); doc.markModified('data'); await doc.save();
    cache = null; // next public request loads the fresh data
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

router.post('/content/reset', auth, async (req, res) => {
  try {
    const doc = await getDoc();
    doc.data = clone(defaults); doc.markModified('data'); await doc.save();
    cache = null;
    res.json(doc.data);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

router.get('/social/status', auth, async (req, res) => {
  const f = await social.getFeed(true);
  const pick = (x) => ({ configured: x.configured, ok: x.ok, error: x.error || '', count: x.posts.length });
  res.json({ instagram: pick(f.instagram), facebook: pick(f.facebook) });
});

router.get('/enquiries', auth, async (req, res) => res.json(await Enquiry.find().sort({ createdAt: -1 })));
router.delete('/enquiries/:id', auth, async (req, res) => { await Enquiry.findByIdAndDelete(req.params.id); res.json({ ok: true }); });

// image/video -> Cloudinary -> URL
router.post('/upload', auth, upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file' });
  const opts = { resource_type: 'auto', folder: 'sunshine-school' };
  if (process.env.CLOUDINARY_UPLOAD_PRESET) opts.upload_preset = process.env.CLOUDINARY_UPLOAD_PRESET;
  cloudinary.uploader.upload_stream(opts, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ url: result.secure_url, public_id: result.public_id });
  }).end(req.file.buffer);
});

module.exports = router;
module.exports.warm = () => getContent().catch(() => {});
