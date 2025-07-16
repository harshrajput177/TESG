import React, { useState } from 'react';
import '../../Style/ContactUs-css/ContactUsCom1.css';

const ProposalForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    website: '',
    email: '',
    phoneCode: '+91',
    phone: '',
    companySize: '',
    heardFrom: '',
    services: [],
    businessDetails: '',
    consent: false
  });

  const servicesList = [
    'App Development','Web Development','SEO', 'PPC', 'Social Media Organic', 'Social Media Ads',
    'Web Design', 'CRO', 'Reputation / Reviews', 'Local SEO', 'Content Writing', 'Photography / Video',
    'Web Hosting', 'Amazon Marketing', 'Email Marketing', 'ADA Compliance', 'Link Building'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'services') {
      if (checked) {
        setFormData({ ...formData, services: [...formData.services, value] });
      } else {
        setFormData({ ...formData, services: formData.services.filter(service => service !== value) });
      }
    } else if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        // Optionally reset the form
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          website: '',
          email: '',
          phoneCode: '+91',
          phone: '',
          companySize: '',
          heardFrom: '',
          services: [],
          businessDetails: '',
          consent: false
        });
      } else {
        alert('Failed to submit form.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong.');
    }
  };

  return (
    <div className="proposal-container">
      <div className="form-section">
        <h1>Experience Real Results</h1>
        <p className='Partner-p'>Partner with GWI Internet Marketing Agency and scale your business.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name*" required />
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name*" required />
          </div>
          <div className="form-row">
            <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company/Organization*" required />
            <input type="text" name="website" value={formData.website} onChange={handleChange} placeholder="Website" />
          </div>
          <div className="form-row">
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address*" required />
            <div className="phone-input">
              <select name="phoneCode" value={formData.phoneCode} onChange={handleChange} className="country-code">
                <option value="+91">IN +91</option>
                <option value="+44">UK +44</option>
                <option value="+44">US +1</option>
              </select>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter phone number" required />
            </div>
          </div>
          <div className="form-row">
            <select name="companySize" value={formData.companySize} onChange={handleChange} required>
              <option value="">Company Size*</option>
              <option value="1-10">1–10</option>
              <option value="11-50">11–50</option>
              <option value="51-200">51–200</option>
              <option value="201+">201+</option>
            </select>
            <input type="text" name="heardFrom" value={formData.heardFrom} onChange={handleChange} placeholder="How did you hear about GWI?" />
          </div>
          <div className="services">
            <p>Services*</p>
            <div className="checkbox-grid">
              {servicesList.map((service) => (
                <label key={service}>
                  <input
                    type="checkbox"
                    name="services"
                    value={service}
                    checked={formData.services.includes(service)}
                    onChange={handleChange}
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>
          <textarea
            name="businessDetails"
            value={formData.businessDetails}
            onChange={handleChange}
            placeholder="Tell us about your business"
          />
          <div className="consent">
            <label>
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
              />
              I consent to receive notifications and promotional messages
            </label>
          </div>
          <button type="submit" className="submit-btn">SEND MY FREE PROPOSAL</button>
          <p className="call-text">In a hurry? Give us a call now at <a href="tel:9319315798">+91 9958926555</a></p>
        </form>
        <p className="disclaimer">
          By checking the box above, you consent to receive informational SMS and SMS-based appointment reminders from GWI Ideas at the phone number provided. Msg & data rates may apply. Msg frequency varies. Unsubscribe at any time by replying STOP. Reply HELP for help. <a href="#">Privacy Policy & Terms</a>.
        </p>
      </div>
  <div className="info-section">
        <h2>Ready to Dominate Your Market?</h2>
        <p>Jumpstart your digital marketing success in 3 easy steps:</p>
        <div className="steps">
          <div className="step">
            <span>1</span>
            <div>
              <h3>Contact Us</h3>
              <p>Fill out our brief contact form, and we’ll be in touch with you soon to learn more about your business.</p>
            </div>
          </div>
          <div className="step">
            <span>2</span>
            <div>
              <h3>Launch Targeted Campaigns</h3>
              <p>Our digital marketing experts will work closely with you to implement data-driven strategies that drive business growth.</p>
            </div>
          </div>
          <div className="step">
            <span>3</span>
            <div>
              <h3>Achieve Lasting Growth</h3>
              <p>Solidify your digital presence, expand your brand reach and see outstanding results month-over-month.</p>
            </div>
          </div>
        </div>
        <div className="contact-details">
          <h4>Headquarters:</h4>
           Suite 5 Margaret Powell House, 401-447, Milton Keynes, Buckinghamshire U.K. MK9 3BN
           <h4>Phone Number :</h4> 
             <p>UK :+44 190-888-1080 </p>
           <p>USA :+1 469-608-2203</p>
            <h4>Branch Office:</h4>
            H-96, SF-3, Sector-63, Noida, 201301, India
          <h4>Main Phone:</h4>
          <p>+91 9958926555</p>
          <h4>Office Hours:</h4>
          <p>Mon-Fri, 10:00am – 7:00pm </p>
        </div>
        </div>
    </div>
  );
};

export default ProposalForm;

