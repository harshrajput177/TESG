import React from "react";
import "../../Style/Landing-css/LandingCom5.css";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FaxIcon from '@mui/icons-material/Fax';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <div className="Landingform-contact-container">
      <h2 className="Landingform-contact-heading">LET'S CONNECT</h2>

      <div className="Landingform-contact-info-section">
        <div className="Landingform-contact-box">
          <i className="fas fa-map-marker-alt"> <HomeWorkIcon  className="Landingform-social-icon-contactform"/></i>
          <h4>OUR MAIN OFFICE</h4>
          <p>SF-3 , H-96 <br />Noida Sector 63</p>
        </div>
        <div className="Landingform-contact-box">
          <i className="fas fa-phone"><LocalPhoneIcon className="Landingform-social-icon-contactform"/></i>
          <h4>PHONE NUMBER</h4>
          <p>+91 9319313968<br />+91 9458006097</p>
        </div>
        <div className="Landingform-contact-box">
          <i className="fas fa-fax"> <FaxIcon className="Landingform-social-icon-contactform"/></i>
          <h4>FAX</h4>
          <p>+91 9319313968</p>
        </div>
        <div className="Landingform-contact-box">
          <i className="fas fa-envelope"> <EmailIcon className="Landingform-social-icon-contactform"/></i>
          <h4>MAIL</h4>
          <p> info@technoesgroup.com</p>
        </div>
      </div>

      <div className="Landingform-contact-bottom">
        <div className="Landingform-contact-form">
          <h3>GET A FREE CASE EVALUATION TODAY!</h3>
          <p>AVAILABLE 24 HOURS A DAY!</p>
          <form>
            <input type="text" placeholder="Enter your Name" required />
            <input type="email" placeholder="Enter a valid email address" required />
            <textarea placeholder="Enter your message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="Landingform-contact-map">
          <h3>WE ARE HERE</h3>
          <p>MON-FRI 10:00AM-7PM / PHONES ARE OPEN 24/7</p>
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
