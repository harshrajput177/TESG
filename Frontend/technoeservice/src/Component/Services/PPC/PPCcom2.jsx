import React from 'react';
import '../../../Style/Services-css/SMM-CSS/SmmCom2.css';
import { FaDollarSign, FaChartLine, FaBullhorn, FaSearchDollar } from 'react-icons/fa';
import img1 from '../../../image/ppcs-1024x763.jpg';

const PPCAdvertising = () => {
  return (
    <div className="SMMcom2-container">
      <div className="SMMcom2-header-section">
        <div className="SMMcom2-header-text">
          <h1>Why Your Business Should Invest in PPC Advertising</h1>
          <p className="SMMcom2-subtitle">Drive Targeted Traffic and Maximize ROI with Paid Search Campaigns</p>
          <p className="SMMcom2-intro">
            PPC advertising is a powerful way to get immediate visibility on search engines and social media platforms by targeting customers ready to buy.
          </p>
          <p className="SMMcom2-intro">
            Our expert PPC management services optimize your ad spend, improve click-through rates, and increase conversions to grow your business effectively.
          </p>
          <p className="SMMcom2-intro">Here’s why PPC should be a key part of your marketing strategy:</p>
        </div>
        <div className="SMMcom2-header-image">
          <img src={img1} alt="PPC advertising illustration" />
        </div>
      </div>

      <div className="SMMcom2-features-grid">
        <div className="SMMcom2-feature-card">
          <FaDollarSign className="SMMcom2-icon" />
          <h3>Cost-Effective Advertising</h3>
          <p>
            Only pay when someone clicks your ad, ensuring your budget is spent on real potential customers.
          </p>
        </div>

        <div className="SMMcom2-feature-card">
          <FaChartLine className="SMMcom2-icon" />
          <h3>Targeted Campaigns with Measurable Results</h3>
          <p>
            Reach your ideal audience with precise targeting and track every conversion with detailed analytics.
          </p>
        </div>

        <div className="SMMcom2-feature-card">
          <FaBullhorn className="SMMcom2-icon" />
          <h3>Quick Visibility and Brand Awareness</h3>
          <p>
            Launch campaigns that put your brand at the top of search results instantly, boosting awareness and driving traffic.
          </p>
        </div>

        <div className="SMMcom2-feature-card">
          <FaSearchDollar className="SMMcom2-icon" />
          <h3>Continuous Optimization for Better ROI</h3>
          <p>
            We constantly analyze and refine your campaigns to lower costs and improve performance over time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PPCAdvertising;
