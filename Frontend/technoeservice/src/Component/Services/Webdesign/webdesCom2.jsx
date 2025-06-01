import React from 'react';
import '../../../Style/Services-css/SMM-CSS/SmmCom2.css';
import { FaPalette, FaMobileAlt, FaRocket, FaUserFriends } from 'react-icons/fa';
import img1 from '../../../image/Why-Business-Needs-a-Website-scaled.png';

const WebDesign = () => {
  return (
    <div className="SMMcom2-container">
      <div className="SMMcom2-header-section">
        <div className="SMMcom2-header-text">
          <h1>Why Your Business Needs Professional Web Design</h1>
          <p className="SMMcom2-subtitle">Create an Engaging and Conversion-Driven Online Presence</p>
          <p className="SMMcom2-intro">
            A stunning website is more than just visuals — it’s your brand’s digital face. Professional web design ensures your site is user-friendly, mobile-responsive, and built to turn visitors into loyal customers.
          </p>
          <p className="SMMcom2-intro">
            Our web design experts blend creativity with functionality to craft websites that stand out and deliver real business results.
          </p>
          <p className="SMMcom2-intro">Here’s why investing in expert web design matters:</p>
        </div>
        <div className="SMMcom2-header-image">
          <img src={img1} alt="Web design illustration" />
        </div>
      </div>

      <div className="SMMcom2-features-grid">
        <div className="SMMcom2-feature-card">
          <FaPalette className="SMMcom2-icon" />
          <h3>Unique Visual Identity</h3>
          <p>
            We craft custom designs that reflect your brand personality and set you apart from competitors.
          </p>
        </div>

        <div className="SMMcom2-feature-card">
          <FaMobileAlt className="SMMcom2-icon" />
          <h3>Responsive & Mobile-Friendly</h3>
          <p>
            Your site will look stunning and function smoothly across all devices, providing a seamless user experience.
          </p>
        </div>

        <div className="SMMcom2-feature-card">
          <FaRocket className="SMMcom2-icon" />
          <h3>Fast Loading & SEO Optimized</h3>
          <p>
            Speed and search visibility matter — we build websites that load quickly and are optimized for top search rankings.
          </p>
        </div>

        <div className="SMMcom2-feature-card">
          <FaUserFriends className="SMMcom2-icon" />
          <h3>Designed for Conversions</h3>
          <p>
            We focus on creating layouts and CTAs that guide visitors toward taking action, whether it's making a purchase or contacting you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebDesign;
