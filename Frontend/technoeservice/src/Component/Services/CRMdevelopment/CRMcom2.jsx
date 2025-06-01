import React from 'react';
import '../../../Style/Services-css/SMM-CSS/SmmCom2.css';
import { FaUsers, FaChartPie, FaCogs, FaShieldAlt } from 'react-icons/fa';
import img1 from '../../../image/png-clipart-digital-marketing-social-media-marketing-promotion-advertising-marketing-search-engine-optimization-public-relations-thumbnail-removebg-preview.png';

const CRMDevelopment = () => {
  return (
    <div className="SMMcom2-container">
      <div className="SMMcom2-header-section">
        <div className="SMMcom2-header-text">
          <h1>Why Your Business Needs Custom CRM Development</h1>
          <p className="SMMcom2-subtitle">Streamline Customer Relationships and Boost Sales Efficiency</p>
          <p className="SMMcom2-intro">
            A tailored CRM system helps you manage your customer data, sales processes, and marketing efforts all in one place, designed specifically for your business needs.
          </p>
          <p className="SMMcom2-intro">
            Our expert CRM development services deliver scalable, user-friendly solutions that improve team collaboration and customer satisfaction.
          </p>
          <p className="SMMcom2-intro">Here’s why investing in custom CRM development can transform your business:</p>
        </div>
        <div className="SMMcom2-header-image">
          <img src={img1} alt="CRM development illustration" />
        </div>
      </div>

      <div className="SMMcom2-features-grid">
        <div className="SMMcom2-feature-card">
          <FaUsers className="SMMcom2-icon" />
          <h3>Centralized Customer Data</h3>
          <p>
            Keep all your customer information organized and accessible, enabling personalized communication and faster service.
          </p>
        </div>

        <div className="SMMcom2-feature-card">
          <FaChartPie className="SMMcom2-icon" />
          <h3>Advanced Analytics & Reporting</h3>
          <p>
            Gain insights into sales trends, customer behavior, and campaign performance to make data-driven decisions.
          </p>
        </div>

        <div className="SMMcom2-feature-card">
          <FaCogs className="SMMcom2-icon" />
          <h3>Automated Workflow Management</h3>
          <p>
            Automate repetitive tasks like follow-ups, lead scoring, and email campaigns to improve efficiency and reduce errors.
          </p>
        </div>

        <div className="SMMcom2-feature-card">
          <FaShieldAlt className="SMMcom2-icon" />
          <h3>Secure and Scalable Platform</h3>
          <p>
            Our CRM solutions ensure your data is protected with robust security measures and can grow alongside your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CRMDevelopment;
