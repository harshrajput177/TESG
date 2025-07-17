import React from "react";
import "../Style/Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import logo from '../image/63761c632c2b88416ffd24413df2f3d7.png'



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
     <a href="https://www.facebook.com/people/Technoes-Group/61563181743221/" target="_blank" rel="noopener noreferrer">
  <FacebookIcon />
</a>
<a href="https://www.instagram.com/technoeservices/" target="_blank" rel="noopener noreferrer">
  <InstagramIcon />
</a>
<a href="https://www.linkedin.com/company/gwi-techno-e-services-llp/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
  <LinkedInIcon />
</a>


        </div>
      </div>
      <div className="footer-content">
        <div className="footer-column brand-info">
          <h3><span className="tesg-logo">
            <img src={logo} alt="" className="Gwi-tesg-logo-img"/> 
            </span> GWI Techno-EService</h3>

   <p>Headquarters:</p>
           Suite 5 Margaret Powell House, 401-447, Milton Keynes, Buckinghamshire U.K. MK9 3BN
           <p>Phone Number : 190-888-1080</p>
          <p>Call us: +91 9958926555</p>
          <p>Email: info@technoesgroup.com</p>
        </div>

        <div className="footer-column">
          <h4>Shop by</h4>
          <ul>
           <a href="/services/website-development"> <li>Services</li></a>
           <a href="/about/Who-are"> <li>Know Us More</li></a>                     
          <a href="/about/Why-choose">  <li>Why Choose Us</li></a>
       
          </ul>
        </div>

        <div className="footer-column">
          <h4>Useful Links</h4>
          <ul>
           <a href="/"> <li>Home</li></a>
           <a href="/blog"> <li>Blog</li></a>
          <a href="/ContactUs">  <li>Contact</li></a>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Utility Pages</h4>
          <ul>
            <a href="/services/Permanent-Staffing"><li>Recruitment Services</li></a>
          <a href="/services/HR-Services"><li>HR Services</li></a>
            <a href="/Careers"><li>Career</li></a>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>GWI Techno-E-Service © Copyright 2025</p>
      </div>
    </footer>
  );
};

export default Footer;