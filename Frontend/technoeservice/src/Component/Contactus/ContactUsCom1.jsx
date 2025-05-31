import React from 'react';
import '../../Style/ContactUs-css/ContactUsCom1.css';

const ProposalForm = () => {
  return (
    <div className="proposal-container">
      <div className="form-section">
        <h1>Experience Real Results</h1>
        <p>Partner with Thrive Internet Marketing Agency and scale your business.</p>
        <form>
          <div className="form-row">
            <input type="text" placeholder="First Name*" />
            <input type="text" placeholder="Last Name*" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Company/Organization*" />
            <input type="text" placeholder="Website" />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Email Address*" />
            <div className="phone-input">
              <span>+91</span>
              <input type="tel" placeholder="81234 56789" />
            </div>
          </div>
          <div className="form-row">
            <select>
              <option>Company Size*</option>
            </select>
            <input type="text" placeholder="How did you hear about Thrive?" />
          </div>
          <div className="services">
            <p>Services*</p>
            <div className="checkbox-grid">
              {['SEO', 'PPC', 'Social Media Organic', 'Social Media Ads', 'Web Design', 'CRO', 'Reputation / Reviews', 'Local SEO', 'Content Writing', 'Photography / Video', 'Web Hosting', 'Amazon Marketing', 'Email Marketing', 'ADA Compliance', 'Link Building'].map((service) => (
                <label key={service}>
                  <input type="checkbox" /> {service}
                </label>
              ))}
            </div>
          </div>
          <textarea placeholder="Tell us about your business"></textarea>
          <div className="consent">
            <label>
              <input type="checkbox" /> I consent to receive notifications and promotional messages
            </label>
          </div>
          <button type="submit" className="submit-btn">SEND MY FREE PROPOSAL</button>
          <p className="call-text">In a hurry? Give us a call now at <a href="tel:866-908-4748">866-908-4748</a></p>
        </form>
        <p className="disclaimer">
          By checking the box above, you consent to receive informational SMS and SMS-based appointment reminders from Thrive Ideas at the phone number provided. Msg & data rates may apply. Msg frequency varies. Unsubscribe at any time by replying STOP. Reply HELP for help. <a href="#">Privacy Policy & Terms</a>.
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
          <p>4604 Park Springs Blvd, Suite 140, Arlington, TX 76017</p>
          <h4>Main Phone:</h4>
          <p>(866) 908-4748</p>
          <h4>Office Hours:</h4>
          <p>Mon-Fri, 8:30am – 5:30pm CT</p>
        </div>
      </div>
    </div>
  );
};

export default ProposalForm;
