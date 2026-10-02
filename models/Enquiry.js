const mongoose = require('mongoose');
module.exports = mongoose.model('Enquiry', new mongoose.Schema(
  { name: String, phone: String, email: String, message: String },
  { timestamps: true }
));
