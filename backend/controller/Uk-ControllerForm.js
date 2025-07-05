const contactform = require('../model/Uk-Contactform');

const submitContactForm = async (req, res) => {
  const { name, business, email, phone, projectType, message, heardFrom } = req.body;

  if (!name || !business || !email || !phone || !projectType || !message) {
    return res.status(400).json({ error: 'All required fields must be filled.' });
  }

  try {
    const data = new contactform({ name, business, email, phone, projectType, message, heardFrom });
    await data.save();
    res.status(200).json({ message: 'Message saved successfully!' });
  } catch (error) {
    console.error('Error saving contact form:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { submitContactForm };
