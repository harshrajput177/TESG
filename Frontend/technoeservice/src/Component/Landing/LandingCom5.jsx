import React, { useState } from "react";
import "../../Style/Landing-css/LandingCom5.css";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FaxIcon from '@mui/icons-material/Fax';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import EmailIcon from '@mui/icons-material/Email';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/api/contact/query', formData);
      alert(res.data.message);
      setFormData({ username: '', email: '', message: '' });
    } catch (error) {
      console.error('Submit Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="Landingform-contact-container">
      <h2 className="Landingform-contact-heading">LET'S CONNECT</h2>

      <div className="Landingform-contact-info-section">
        <div className="Landingform-contact-box">
          <HomeWorkIcon className="Landingform-social-icon-contactform" />
          <h4>OUR MAIN OFFICE</h4>
          <p>SF-3 , H-96 <br />Noida Sector 63</p>
        </div>
        <div className="Landingform-contact-box">
          <LocalPhoneIcon className="Landingform-social-icon-contactform" />
          <h4>PHONE NUMBER</h4>
          <p>+91 9958926555<br />+91 9958931555</p>
        </div>
        <div className="Landingform-contact-box">
          <FaxIcon className="Landingform-social-icon-contactform" />
          <h4>FAX</h4>
          <p>+91 9958926555</p>
        </div>
        <div className="Landingform-contact-box">
          <EmailIcon className="Landingform-social-icon-contactform" />
          <h4>MAIL</h4>
          <p>info@technoesgroup.com</p>
        </div>
      </div>

      <div className="Landingform-contact-bottom">
        <div className="Landingform-contact-form">
          <h3>GET A FREE CASE EVALUATION TODAY!</h3>
          <p>AVAILABLE 24 HOURS A DAY!</p>
          <br />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Enter your Name"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter a valid email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="Landingform-contact-map">
          <h3>WE ARE HERE</h3>
          <p>MON-FRI 10:00AM-7PM / PHONES ARE OPEN 24/7</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d14018.789670389097!2d77.3610408!3d28.6273342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x0:0x0!2zMjjCsDM3JzMzLjkiTiA3N8KwMjEnNDAuOCJF!3m2!1d28.6260722!2d77.366896!4m5!1s0x390cef7accb25b3b:0xf66263d160f70e00!2sGWI(Techno%20E%20Services%20LLP.)%20-%20Digital%20Marketing%20Agency%2C%2096%2FG4%2C%20H%20Block%2C%20Sector%2063%2C%20Noida%2C%20Uttar%20Pradesh%20201301!3m2!1d28.6265885!2d77.3778685!5e0!3m2!1sen!2sin!4v1717412345678!5m2!1sen!2sin"
            width="100%"
            height="250"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="GWI Office Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;

