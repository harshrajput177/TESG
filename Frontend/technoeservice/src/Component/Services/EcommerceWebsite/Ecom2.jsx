import React from 'react';
import '../../../Style/Services-css/SMM-CSS/SmmCom2.css';
import { FaShoppingCart, FaMobileAlt, FaDatabase, FaLock } from 'react-icons/fa';
import img1 from '../../../image/png-clipart-digital-marketing-social-media-marketing-promotion-advertising-marketing-search-engine-optimization-public-relations-thumbnail-removebg-preview.png';

const EcommerceWeb = () => {
  return (
    <div className="SMMcom2-container">
      <div className="SMMcom2-header-section">
        <div className="SMMcom2-header-text">
          <h1>Why Your Business Needs a Powerful Ecommerce Website</h1>
          <p className="SMMcom2-subtitle">Expand Your Reach and Boost Sales with a Seamless Online Store</p>
          <p className="SMMcom2-intro">
            Ecommerce websites are the backbone of modern retail. They allow businesses to sell products 24/7 to customers worldwide with ease and efficiency.
          </p>
          <p className="SMMcom2-intro">
            Professional ecommerce development ensures your store is user-friendly, secure, and optimized to convert visitors into loyal customers.
          </p>
          <p className="SMMcom2-intro">Here’s why investing in expert ecommerce web development is a game changer:</p>
        </div>
        <div className="SMMcom2-header-image">
          <img src={img1} alt="Ecommerce website illustration" />
        </div>
      </div>

      <div className="SMMcom2-features-grid">
        <div className="SMMcom2-feature-card">
          <FaShoppingCart className="SMMcom2-icon" />
          <h3>User-Friendly Shopping Experience</h3>
          <p>
            We design intuitive navigation, smooth product browsing, and simple checkout processes that keep customers coming back.
          </p>
        </div>

        <div className="SMMcom2-feature-card">
          <FaMobileAlt className="SMMcom2-icon" />
          <h3>Mobile-Optimized Storefront</h3>
          <p>
            With increasing mobile shoppers, we ensure your ecommerce site is fully responsive and performs flawlessly on all devices.
          </p>
        </div>

        <div className="SMMcom2-feature-card">
          <FaDatabase className="SMMcom2-icon" />
          <h3>Secure Payment & Inventory Management</h3>
          <p>
            We integrate reliable payment gateways and efficient inventory systems to keep your store running smoothly and securely.
          </p>
        </div>

        <div className="SMMcom2-feature-card">
          <FaLock className="SMMcom2-icon" />
          <h3>Advanced Security Features</h3>
          <p>
            Protect your customers’ data and build trust with robust security measures including SSL, data encryption, and fraud prevention.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EcommerceWeb;
