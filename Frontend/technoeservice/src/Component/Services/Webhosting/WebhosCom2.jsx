import React from 'react';
import '../../../Style/Services-css/SMM-CSS/SmmCom2.css';
import { FaServer, FaCloud, FaShieldAlt, FaTachometerAlt } from 'react-icons/fa';
import img1 from '../../../image/34-342157_web-hosting-illustration-hd-png-download-removebg-preview.png';

const WebHostingService = () => {
  return (
    <div className="SMMcom2-container">
      <div className="SMMcom2-header-section">
        <div className="SMMcom2-header-text">
          <h1>Why Reliable Web Hosting is Essential for Your Business</h1>
          <p className="SMMcom2-subtitle">Ensure Fast, Secure, and Always-Available Websites</p>
          <p className="SMMcom2-intro">
            Web hosting is the foundation that keeps your website accessible online 24/7. Without reliable hosting, even the best website won’t reach your audience.
          </p>
          <p className="SMMcom2-intro">
            Our web hosting solutions guarantee high performance, strong security, and expert support so your business website runs smoothly and efficiently.
          </p>
          <p className="SMMcom2-intro">Here’s why choosing the right web hosting service matters:</p>
        </div>
        <div className="SMMcom2-header-image">
          <img src={img1} alt="Web hosting illustration" />
        </div>
      </div>

      <div className="SMMcom2-features-grid">
        <div className="SMMcom2-feature-card">
          <FaServer className="SMMcom2-icon" />
          <h3>High-Speed Server Performance</h3>
          <p>
            Our hosting servers are optimized for fast load times, ensuring your visitors have a seamless browsing experience.
          </p>
        </div>

        <div className="SMMcom2-feature-card">
          <FaCloud className="SMMcom2-icon" />
          <h3>Scalable Cloud Hosting</h3>
          <p>
            Easily scale your resources up or down based on traffic, so your website stays stable even during traffic spikes.
          </p>
        </div>

        <div className="SMMcom2-feature-card">
          <FaShieldAlt className="SMMcom2-icon" />
          <h3>Robust Security Measures</h3>
          <p>
            Protect your website with firewalls, malware scanning, SSL certificates, and daily backups for peace of mind.
          </p>
        </div>

        <div className="SMMcom2-feature-card">
          <FaTachometerAlt className="SMMcom2-icon" />
          <h3>24/7 Expert Support</h3>
          <p>
            Our dedicated support team is available around the clock to resolve any issues quickly and keep your site online.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebHostingService;
