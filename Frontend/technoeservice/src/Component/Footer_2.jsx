import React from 'react';
import '../Style/Footer_2.css';
import img1 from "../image/63761c632c2b88416ffd24413df2f3d7.png"

function Footer() {
  return (
    <footer className="uk-footer-container">
      <div className="uk-footer-top">
        <div className="uk-footer-section">
         <img src={img1} alt="" className="uk-footer-logo"/>
        </div>
        <div className="uk-footer-section">
      <a href="/uk">Home</a>
      <a href="/uk/about/Who-are">About</a>
         <a href="/uk/services/website-development">Services</a>
        <a href="/ContactUs">Contact Us</a>
        </div>
        <div className="uk-footer-social">
          <a href="https://www.linkedin.com/company/technoesgroup/">Linkedin</a>
          <a href="https://www.instagram.com/technoeservices/">Instagram</a>
          <a href="https://www.facebook.com/people/Technoes-Group/61563181743221/">Facebook</a>
        </div>
      </div>

      <hr className="uk-footer-divider" />

      <div className="uk-footer-bottom">
        <p>© Blue Frontier IT Ltd 2025</p>
        <div className="uk-footer-links">
          <a href="#">Sitemap</a>
          <span>|</span>
          <a href="#">Policies</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
