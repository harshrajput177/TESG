const Contact = require('../model/QueryModel');

const submitContactForm = async (req, res) => {
  try {
    const { username, email, message } = req.body;

    if (!username || !email || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const contact = new Contact({ username, email, message });
    await contact.save();

    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact form error:', error.message);
    res.status(500).json({ success: false, message: 'Server Error. Please try again.' });
  }
};

module.exports = { submitContactForm };

