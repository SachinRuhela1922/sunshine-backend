require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.disable('x-powered-by');
// gzip responses (npm install compression). The site still works if the package is missing.
try { app.use(require('compression')()); } catch { console.warn('Tip: run "npm install" to enable gzip compression'); }
const CLIENT = (process.env.CLIENT_URL || '').trim().replace(/\/$/, '');
app.use(cors({
  origin: (origin, cb) => cb(null, !origin || origin === CLIENT || /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin))
}));
app.use(express.json({ limit: '5mb' }));

app.get('/', (req, res) => res.json({ ok: true, message: 'Sunshine School API running' }));
app.use('/api', require('./routes/api'));

const PORT = process.env.PORT || 5000;
// start listening right away (so hosting platforms see the port), MongoDB connects in parallel
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
mongoose
  .connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 15000 })
  .then(() => {
    console.log('MongoDB connected');
    require('./services/social').startTokenRefresh();
    require('./routes/api').warm && require('./routes/api').warm(); // pre-load content into memory
  })
  .catch((e) => { console.error('MongoDB connection error:', e.message); process.exit(1); });
