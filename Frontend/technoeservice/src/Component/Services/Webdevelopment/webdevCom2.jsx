import React from 'react';
import '../../../Style/Services-css/SMM-CSS/SmmCom2.css';
import { FaCogs, FaLaptopCode, FaDatabase, FaMobileAlt } from 'react-icons/fa';
import img1 from '../../../image/png-clipart-digital-marketing-social-media-marketing-promotion-advertising-marketing-search-engine-optimization-public-relations-thumbnail-removebg-preview.png';

const WebDevelopment = () => {
  return (
    <div className="SMMcom2-container">
      <div className="SMMcom2-header-section">
        <div className="SMMcom2-header-text">
          <h1>Why Your Business Needs Professional Web Development</h1>
          <p className="SMMcom2-subtitle">Build a Powerful Online Presence with Custom Web Solutions</p>
          <p className="SMMcom2-intro">
            In today’s digital age, a professional website is your business’s most valuable asset. It’s more than just an online presence — it’s a platform to engage customers, showcase your brand, and drive sales.
          </p>
          <p className="SMMcom2-intro">
            Expert web development combines cutting-edge technology with creative design to deliver fast, responsive, and scalable websites tailored to your unique needs.
          </p>
          <p className="SMMcom2-intro">Here’s why investing in professional web development will benefit your business:</p>
        </div>
        <div className="SMMcom2-header-image">
          <img src={img1} alt="Web development illustration" />
        </div>
      </div>

      <div className="SMMcom2-features-grid">
        <div className="SMMcom2-feature-card">
          <FaLaptopCode className="SMMcom2-icon" />
          <h3>Custom Website Design & Development</h3>
          <p>
            Get a website built exactly how you envision — with custom layouts, features, and functionalities that perfectly match your brand and business goals.
          </p>
        </div>

        <div className="SMMcom2-feature-card">
          <FaMobileAlt className="SMMcom2-icon" />
          <h3>Responsive & Mobile-Friendly</h3>
          <p>
            With most users browsing on mobile devices, we ensure your website looks and works flawlessly across all screen sizes and devices.
          </p>
        </div>

        <div className="SMMcom2-feature-card">
          <FaDatabase className="SMMcom2-icon" />
          <h3>Robust Backend & Database Integration</h3>
          <p>
            From content management systems to e-commerce platforms, our web development services include secure backend solutions and seamless database management.
          </p>
        </div>

        <div className="SMMcom2-feature-card">
          <FaCogs className="SMMcom2-icon" />
          <h3>Optimized Performance & SEO</h3>
          <p>
            We build fast-loading, SEO-optimized websites to improve user experience and help your business rank higher on search engines.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
