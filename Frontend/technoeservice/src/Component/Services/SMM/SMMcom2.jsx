import React from 'react';
import '../../../Style/Services-css/SMM-CSS/SmmCom2.css';
import { FaCogs, FaBullhorn, FaUsers, FaChartLine } from 'react-icons/fa';
import img1 from '../../../image/png-clipart-digital-marketing-social-media-marketing-promotion-advertising-marketing-search-engine-optimization-public-relations-thumbnail-removebg-preview.png';

const SocialMediaManagement = () => {
  return (
    <div className="SMMcom2-container">
      <div className="SMMcom2-header-section">
        <div className="SMMcom2-header-text">
          <h1>Why Your Business Needs Social Media Management</h1>
          <p className="SMMcom2-subtitle">Boost Your Online Presence and Drive Real Results</p>
          <p className="SMMcom2-intro">
            Social Media Management (SMM) is more than just posting updates on Facebook and Instagram — it’s about building relationships, growing your brand, and turning followers into loyal customers.
          </p>
          <p className="SMMcom2-intro">
            With professional SMM services, you can engage your audience with targeted content, consistent branding, and data-driven strategies that maximize your reach and impact.
          </p>
          <p className="SMMcom2-intro">Here’s why investing in expert social media management is essential:</p>
        </div>
        <div className="SMMcom2-header-image">
          <img src={img1} alt="Social media illustration" />
        </div>
      </div>

      <div className="SMMcom2-features-grid">
        <div className="SMMcom2-feature-card">
          <FaBullhorn className="SMMcom2-icon" />
          <h3>Strategic Content Creation</h3>
          <p>
            Professional SMM teams craft tailored content that speaks directly to your target audience, ensuring your brand voice is consistent and engaging across all platforms.
          </p>
        </div>

        <div className="SMMcom2-feature-card">
          <FaCogs className="SMMcom2-icon" />
          <h3>Efficient Scheduling and Automation</h3>
          <p>
            Stay active without lifting a finger. SMM tools and experts schedule your posts at optimal times, maintain consistency, and ensure your social media calendar is always full.
          </p>
        </div>

        <div className="SMMcom2-feature-card">
          <FaUsers className="SMMcom2-icon" />
          <h3>Audience Engagement & Community Building</h3>
          <p>
            Building a loyal online community requires timely responses, thoughtful interactions, and proactive engagement. SMM specialists help you foster meaningful connections with your followers.
          </p>
        </div>

        <div className="SMMcom2-feature-card">
          <FaChartLine className="SMMcom2-icon" />
          <h3>Performance Tracking & Analytics</h3>
          <p>
            Expert social media managers analyze your performance data, adjust strategies based on insights, and ensure your campaigns deliver measurable ROI and growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaManagement;
