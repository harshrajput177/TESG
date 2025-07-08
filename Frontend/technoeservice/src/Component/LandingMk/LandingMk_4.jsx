import React, { useState } from "react";
import '../../Style/LandingMk-css/LandingMk_4.css';
import {  FaFacebookF, FaGoogle, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const ContactForm = () => {
  // 👉 1. state
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
    heardFrom: "",
    consent: false,
  });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  // 👉 2. handlers
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const res = await fetch(
        "https://tesg-backend.onrender.com/api/Ukfrom/Ukcontact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to submit form");

      setStatus({ loading: false, success: "Thank you! We’ll be in touch.", error: null });
      // clear
      setFormData({
        name: "",
        business: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
        heardFrom: "",
        consent: false,
      });
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message });
    }
  };

  // 👉 3. JSX (inputs now controlled – note name="" attributes)
  return (
    <div className="uk-contact-container">
      {/* left content (as‑is) */}
      <div className="uk-contact-left">
        <h1>Want to discuss a project?</h1>
   <p>
          Tell us a little about your project and one of our team will be in touch with you as soon as possible.
        </p>
        <div className="uk-contact-info">
          <p><strong>General enquiries</strong><br />info@technoesgroup.com</p>
          <p><strong>Support enquiries</strong><br />hr@technoesgroup.com</p>
        </div>
        <div className="uk-social-buttons">
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

      {/* right – form */}
      <div className="uk-contact-right">
        <form onSubmit={handleSubmit}>
          <div className="uk-form-group   front-text">
            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="business"
              placeholder="Business Name*"
              value={formData.business}
              onChange={handleChange}
              required
            />
          </div>

          <div className="uk-form-group  front-text">
            <input
              type="email"
              name="email"
              placeholder="Email Address*"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Contact Number*"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="uk-form-group">
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
            >
              <option value="">Type of Project*</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile App">Mobile App</option>
              <option value="Marketing">digital Marketing</option>
                        <option value="Web Development">SEO</option>
              <option value="Mobile App">PPC</option>
              <option value="Marketing">SMM</option>
                        <option value="Web Development">Ecommerce Plateform</option>
              <option value="Mobile App">CRM Development</option>
              <option value="Marketing">Web Design</option>
                        <option value="Web Development">Recruitment Service</option>
            </select>
          </div>

          <div className="uk-form-group">
            <textarea
              name="message"
              placeholder="Please detail your requirements here"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="uk-form-group">
            <select
              name="heardFrom"
              value={formData.heardFrom}
              onChange={handleChange}
            >
              <option value="">How did you hear about us? (Optional)</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Google">Google</option>
              <option value="Referral">Referral</option>
            </select>
          </div>

          <div className="uk-form-group checkbox">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
            />
            <label>
              In order to submit your details to us, please provide consent to the terms of our <a href="#">privacy policy</a>
            </label>
          </div>

          <button
            type="submit"
            className="uk-submit-button"
            disabled={status.loading}
          >
            {status.loading ? "Submitting…" : "Submit details"}
          </button>
        </form>

        {/* success / error feedback */}
        {status.success && <p className="form-success">{status.success}</p>}
        {status.error && <p className="form-error">{status.error}</p>}
      </div>
    </div>
  );
};

export default ContactForm;



