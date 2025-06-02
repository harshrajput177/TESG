import React from 'react';
import '../../../Style/Services-css/SMM-CSS/SmmCom2.css';
import { FaMobileAlt, FaRocket, FaCogs, FaShieldAlt } from 'react-icons/fa';
import img1 from '../../../image/app-development-flat-design-concept-illustration_198565-63.jpg';

const AppDevelopment = () => {
  return (
    <div className="SMMcom2-container">
      <div className="SMMcom2-header-section">
        <div className="SMMcom2-header-text">
          <h1>Why Your Business Needs Custom App Development</h1>
          <p className="SMMcom2-subtitle">Bring Your Ideas to Life with Scalable, High-Performance Apps</p>
          <p className="SMMcom2-intro">
            A custom-built app empowers your business to connect with customers, streamline operations, 
            and stand out in the competitive digital space — all while reflecting your unique brand identity.
          </p>
          <p className="SMMcom2-intro">
            At <strong>Gwi Techno-e-Service</strong>, we deliver end-to-end app development services that ensure a seamless 
            user experience, strong backend architecture, and future-ready solutions.
          </p>
          <p className="SMMcom2-intro">Here’s why investing in custom app development can elevate your business:</p>
        </div>
        <div className="SMMcom2-header-image">
          <img src={img1} alt="App development illustration" />
        </div>
      </div>

      <div className="SMMcom2-features-grid">
        <div className="SMMcom2-feature-card">
          <FaMobileAlt className="SMMcom2-icon" />
          <h3>Tailored User Experience</h3>
          <p>
            We design intuitive, user-friendly interfaces that enhance customer satisfaction and boost engagement across devices.
          </p>
        </div>

        <div className="SMMcom2-feature-card">
          <FaRocket className="SMMcom2-icon" />
          <h3>High Performance & Speed</h3>
          <p>
            Our apps are built for speed, scalability, and smooth performance, ensuring a flawless experience even under heavy load.
          </p>
        </div>

        <div className="SMMcom2-feature-card">
          <FaCogs className="SMMcom2-icon" />
          <h3>Custom Features & Integrations</h3>
          <p>
            From payment gateways to API integrations and advanced functionalities, we develop solutions tailored to your business needs.
          </p>
        </div>

        <div className="SMMcom2-feature-card">
          <FaShieldAlt className="SMMcom2-icon" />
          <h3>Secure & Future-Ready</h3>
          <p>
            We prioritize data security, regular updates, and scalable architectures to keep your app protected and adaptable as you grow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppDevelopment;
