// Fetches latest Instagram + Facebook Page posts and caches them (so Meta API is not hit on every visit)
const Setting = require('../models/Setting');

const TTL = 10 * 60 * 1000; // 10 minutes
const LIMIT = 12;
let cache = null;
let cacheAt = 0;

async function getJSON(url) {
  const r = await fetch(url);
  const j = await r.json().catch(() => ({}));
  if (!r.ok || j.error) throw new Error(j.error?.message || `HTTP ${r.status}`);
  return j;
}

// Instagram token: env value, unless a refreshed one was saved in DB for that same env token
async function igToken() {
  const env = (process.env.INSTAGRAM_ACCESS_TOKEN || '').trim();
  if (!env) return '';
  const s = await Setting.findOne({ key: 'ig_token' });
  return s?.value?.from === env && s.value.token ? s.value.token : env;
}

async function fetchInstagram() {
  const token = await igToken();
  if (!token) return { configured: false, posts: [] };
  const fields = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp';
  const j = await getJSON(`https://graph.instagram.com/me/media?fields=${fields}&limit=${LIMIT}&access_token=${token}`);
  const posts = (j.data || []).map((m) => ({
    id: 'ig_' + m.id, platform: 'instagram', text: m.caption || '',
    image: m.media_type === 'VIDEO' ? m.thumbnail_url || '' : m.media_url || '',
    video: m.media_type === 'VIDEO', link: m.permalink, date: m.timestamp
  }));
  return { configured: true, posts };
}

async function fetchFacebook() {
  const token = (process.env.FACEBOOK_PAGE_TOKEN || '').trim();
  if (!token) return { configured: false, posts: [] };
  const page = (process.env.FACEBOOK_PAGE_ID || 'me').trim();
  const fields = 'id,message,full_picture,permalink_url,created_time';
  const j = await getJSON(`https://graph.facebook.com/v21.0/${page}/posts?fields=${fields}&limit=${LIMIT}&access_token=${token}`);
  const posts = (j.data || []).filter((p) => p.message || p.full_picture).map((p) => ({
    id: 'fb_' + p.id, platform: 'facebook', text: p.message || '',
    image: p.full_picture || '', video: false, link: p.permalink_url, date: p.created_time
  }));
  return { configured: true, posts };
}

async function load(name, fn, old) {
  try { return { ...(await fn()), ok: true }; }
  catch (e) { return { configured: true, ok: false, error: e.message, posts: old?.posts || [] }; }
}

async function getFeed(force = false) {
  if (!force && cache && Date.now() - cacheAt < TTL) return cache;
  const [instagram, facebook] = await Promise.all([
    load('instagram', fetchInstagram, cache?.instagram),
    load('facebook', fetchFacebook, cache?.facebook)
  ]);
  const posts = [...instagram.posts, ...facebook.posts].sort((a, b) => new Date(b.date) - new Date(a.date));
  cache = { instagram, facebook, posts };
  cacheAt = Date.now();
  return cache;
}

// Instagram long-lived tokens last 60 days; refresh them automatically (works once token is 24h+ old)
async function refreshIgToken() {
  const token = await igToken();
  if (!token) return;
  try {
    const j = await getJSON(`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`);
    if (j.access_token) {
      await Setting.findOneAndUpdate(
        { key: 'ig_token' },
        { value: { token: j.access_token, from: (process.env.INSTAGRAM_ACCESS_TOKEN || '').trim() } },
        { upsert: true }
      );
      console.log('Instagram token refreshed');
    }
  } catch (e) { console.log('Instagram token refresh skipped:', e.message); }
}

function startTokenRefresh() {
  setTimeout(refreshIgToken, 15000);
  setInterval(refreshIgToken, 24 * 3600 * 1000);
}

module.exports = { getFeed, startTokenRefresh };
