import React from "react";
import "../../Style/Landing-css/LandingCom5.css";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FaxIcon from '@mui/icons-material/Fax';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">LET'S CONNECT</h2>

      <div className="contact-info-section">
        <div className="contact-box">
          <i className="fas fa-map-marker-alt"> <HomeWorkIcon  className="social-icon-contactform"/></i>
          <h4>OUR MAIN OFFICE</h4>
          <p>SoHo 94 Broadway St New<br />York, NY 1001</p>
        </div>
        <div className="contact-box">
          <i className="fas fa-phone"><LocalPhoneIcon className="social-icon-contactform"/></i>
          <h4>PHONE NUMBER</h4>
          <p>234-9876-5400<br />888-0123-4567 (Toll Free)</p>
        </div>
        <div className="contact-box">
          <i className="fas fa-fax"> <FaxIcon className="social-icon-contactform"/></i>
          <h4>FAX</h4>
          <p>1-234-567-8900</p>
        </div>
        <div className="contact-box">
          <i className="fas fa-envelope"> <EmailIcon className="social-icon-contactform"/></i>
          <h4>MAIL</h4>
          <p>hello@theme.com</p>
        </div>
      </div>

      <div className="contact-bottom">
        <div className="contact-form">
          <h3>GET A FREE CASE EVALUATION TODAY!</h3>
          <p>AVAILABLE 24 HOURS A DAY!</p>
          <form>
            <input type="text" placeholder="Enter your Name" required />
            <input type="email" placeholder="Enter a valid email address" required />
            <textarea placeholder="Enter your message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="contact-map">
          <h3>WE ARE HERE</h3>
          <p>MON-FRI 8:30AM-5PM / PHONES ARE OPEN 24/7</p>
          <iframe
            src="https://www.google.com/maps?q=Manhattan&output=embed"
            width="100%"
            height="250"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
