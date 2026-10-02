const mongoose = require('mongoose');
const schema = new mongoose.Schema(
  { key: { type: String, unique: true, default: 'site' }, data: { type: mongoose.Schema.Types.Mixed, default: {} } },
  { minimize: false, timestamps: true }
);
module.exports = mongoose.model('Content', schema);
