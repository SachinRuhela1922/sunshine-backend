const mongoose = require('mongoose');
module.exports = mongoose.model('Setting', new mongoose.Schema(
  { key: { type: String, unique: true }, value: mongoose.Schema.Types.Mixed },
  { timestamps: true }
));
