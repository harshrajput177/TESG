// backend/models/contactSchema.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  business: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  projectType: { type: String, required: true },
  message: { type: String, required: true },
  heardFrom: { type: String, default: '' }
}, {
  timestamps: true
});

module.exports = mongoose.model('dataclientuk', contactSchema);
