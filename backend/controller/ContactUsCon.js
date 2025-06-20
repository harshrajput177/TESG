const Proposal = require('../model/ContactModel');

const submitProposal = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      company,
      website,
      email,
      phone,
      companySize,
      heardFrom,
      services,
      businessDetails,
      consent,
    } = req.body;

    const newProposal = new Proposal({
      firstName,
      lastName,
      company,
      website,
      email,
      phone,
      companySize,
      heardFrom,
      services,
      businessDetails,
      consent,
    });

    await newProposal.save();
    res.status(201).json({ message: 'Proposal submitted successfully' });
  } catch (error) {
    console.error('Error submitting proposal:', error);
    res.status(500).json({ error: 'Failed to submit proposal' });
  }
};

module.exports = { submitProposal };
