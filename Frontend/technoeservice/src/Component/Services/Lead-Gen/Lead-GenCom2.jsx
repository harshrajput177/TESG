import React from 'react';
import '../../../Style/Services-css/SMM-CSS/SmmCom2.css';
import { FaBullseye, FaUsers, FaEnvelopeOpenText, FaChartLine } from 'react-icons/fa';
import img1 from '../../../image/Lead-Generation-Character-Illustration-700.webp';

const LeadGeneration = () => {
  return (
    <div className="SMMcom2-container">
      <div className="SMMcom2-header-section">
        <div className="SMMcom2-header-text">
          <h1>Why Your Business Needs Expert Lead Generation Services</h1>
          <p className="SMMcom2-subtitle">Fuel Your Sales Pipeline With Qualified Leads</p>
          <p className="SMMcom2-intro">
            Generating leads isn’t just about gathering contact details — it’s about attracting the right prospects who are ready to engage with your brand.
          </p>
          <p className="SMMcom2-intro">
            Our professional lead generation services combine data-driven strategies, targeted campaigns, and smart automation to fill your pipeline with high-quality leads that convert.
          </p>
          <p className="SMMcom2-intro">Here’s why investing in expert lead generation pays off:</p>
        </div>
        <div className="SMMcom2-header-image">
          <img src={img1} alt="Lead generation illustration" />
        </div>
      </div>

      <div className="SMMcom2-features-grid">
        <div className="SMMcom2-feature-card">
          <FaBullseye className="SMMcom2-icon" />
          <h3>Targeted Outreach Strategies</h3>
          <p>
            We identify and reach your ideal audience through tailored campaigns that speak directly to their needs and interests.
          </p>
        </div>

        <div className="SMMcom2-feature-card">
          <FaUsers className="SMMcom2-icon" />
          <h3>High-Quality Lead Capture</h3>
          <p>
            Our optimized landing pages, forms, and funnels ensure you capture the most relevant and engaged prospects.
          </p>
        </div>

        <div className="SMMcom2-feature-card">
          <FaEnvelopeOpenText className="SMMcom2-icon" />
          <h3>Multi-Channel Lead Nurturing</h3>
          <p>
            We use email, social, and remarketing tactics to keep your leads warm and guide them through the buyer’s journey.
          </p>
        </div>

        <div className="SMMcom2-feature-card">
          <FaChartLine className="SMMcom2-icon" />
          <h3>Measurable Growth & ROI</h3>
          <p>
            With detailed tracking and analytics, we ensure your lead generation efforts translate into real business results and revenue growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeadGeneration;
