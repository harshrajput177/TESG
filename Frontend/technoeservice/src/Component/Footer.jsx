import React from "react";
import "../Style/Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h2>Newsletter</h2>
        <div className="newsletter-input">
          <input type="email" placeholder="Email Address" />
          <button>Submit</button>
        </div>
        <div className="social-icons">
          <FacebookIcon />
          <InstagramIcon />
          <LinkedInIcon />
          <XIcon />
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-column brand-info">
          <h3><span className="logo">🤖</span> ElectroHub</h3>
          <p>Your one-stop destination for the latest electronics, gadgets, and smart devices at unbeatable prices.</p>
          <p>Call us: 364 484 4828</p>
          <p>Email: electrohub@gmail.net</p>
        </div>

        <div className="footer-column">
          <h4>Shop by</h4>
          <ul>
            <li>Services</li>
            <li>Work</li>
            <li>Know Us More</li>
            <li>Blog</li>                       
            <li>Tools</li>
       
          </ul>
        </div>

        <div className="footer-column">
          <h4>Useful Links</h4>
          <ul>
            <li>Home One</li>
            <li>Home Two</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Utility Pages</h4>
          <ul>
            <li>Style Guide</li>
            <li>Protected Password</li>
            <li>404 Not Found</li>
            <li>License</li>
            <li>Changelog</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>electrohub.net © Copyright 2026</p>
      </div>
    </footer>
  );
};

export default Footer;