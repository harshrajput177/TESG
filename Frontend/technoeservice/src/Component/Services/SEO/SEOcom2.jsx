import React from 'react';
import '../../../Style/Services-css/SMM-CSS/SmmCom2.css';
import { FaSearch, FaChartLine, FaLink, FaUsers } from 'react-icons/fa';
import img1 from '../../../image/png-clipart-digital-marketing-social-media-marketing-promotion-advertising-marketing-search-engine-optimization-public-relations-thumbnail-removebg-preview.png';

const SEOService = () => {
  return (
    <div className="SMMcom2-container">
      <div className="SMMcom2-header-section">
        <div className="SMMcom2-header-text">
          <h1>Why Your Business Needs Expert SEO Services</h1>
          <p className="SMMcom2-subtitle">Increase Your Website Visibility and Drive Organic Traffic</p>
          <p className="SMMcom2-intro">
            SEO (Search Engine Optimization) is essential for businesses looking to grow their online presence and attract quality visitors without relying on paid ads.
          </p>
          <p className="SMMcom2-intro">
            Our professional SEO services use proven strategies to improve your website’s ranking on search engines, helping you reach more potential customers organically.
          </p>
          <p className="SMMcom2-intro">Here’s why investing in expert SEO can transform your business:</p>
        </div>
        <div className="SMMcom2-header-image">
          <img src={img1} alt="SEO illustration" />
        </div>
      </div>

      <div className="SMMcom2-features-grid">
        <div className="SMMcom2-feature-card">
          <FaSearch className="SMMcom2-icon" />
          <h3>Comprehensive Keyword Research</h3>
          <p>
            We identify the most relevant and high-traffic keywords for your business, ensuring your content targets the right audience at the right time.
          </p>
        </div>

        <div className="SMMcom2-feature-card">
          <FaLink className="SMMcom2-icon" />
          <h3>Quality Link Building</h3>
          <p>
            Our team builds authoritative backlinks to your site from trusted sources, boosting your domain authority and improving search rankings.
          </p>
        </div>

        <div className="SMMcom2-feature-card">
          <FaUsers className="SMMcom2-icon" />
          <h3>On-Page Optimization</h3>
          <p>
            From meta tags and headers to site structure and content optimization, we ensure your website meets SEO best practices to rank higher and convert visitors.
          </p>
        </div>

        <div className="SMMcom2-feature-card">
          <FaChartLine className="SMMcom2-icon" />
          <h3>Performance Tracking & Reporting</h3>
          <p>
            We continuously monitor your SEO progress with detailed analytics, providing transparent reports and adapting strategies for maximum results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SEOService;
