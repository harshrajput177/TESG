const mongoose = require('mongoose');

const proposalSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  company: { type: String, required: true },
  website: { type: String },
  email: { type: String, required: true },
  phone: { type: String },
  companySize: { type: String, required: true },
  heardFrom: { type: String },
  services: { type: [String], required: true },
  businessDetails: { type: String },
  consent: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Proposal', proposalSchema);
