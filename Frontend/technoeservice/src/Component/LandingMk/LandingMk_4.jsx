import React, { useState } from 'react';
import '../../Style/LandingMk-css/LandingMk_4.css';
import { FaUser, FaEnvelope, FaFacebookF, FaGoogle, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import img_1 from '../../image/remove-filter.png';
import axios from 'axios';

const ContactForm = () => {
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
      const res = await axios.post('https://tesg-backend.onrender.com/api/contact/query', formData);
      alert(res.data.message);
      setFormData({ username: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div className='main-container-uk'>
      <div className="contact-wrapper-uk">
        <div className="contact-left-uk">
          <div className="contact-image-uk">
            <img src={img_1} alt="Phone Icon" />
          </div>
        </div>

        <div className="contact-right-uk">
          <h2>Contact us</h2>
          <form className="contact-form-uk" onSubmit={handleSubmit}>
            <div className="input-group-uk">
              <FaUser className="formicon-uk" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group-uk">
              <FaEnvelope className="formicon-uk" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group-uk">
              <textarea
                name="message"
                placeholder="Message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button className="submit-btn-uk" type="submit">Submit →</button>
          </form>

          <div className="or-divider-uk">Or</div>
          <div className="social-icons-uk">
            <a href="https://www.facebook.com/people/Technoes-Group/61563181743221/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="social-icon-uk fb" />
            </a>
            <a href="https://g.co/kgs/G96Rz1q" target="_blank" rel="noopener noreferrer">
              <FaGoogle className="social-icon-uk gp" />
            </a>
            <a href="https://www.instagram.com/technoeservices/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon-uk tw" />
            </a>
            <a href="https://www.linkedin.com/company/technoesgroup/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="social-icon-uk fb" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

