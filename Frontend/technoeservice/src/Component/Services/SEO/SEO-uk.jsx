// App.jsx
import React from "react";
import "../../../Style/Services-css/SEO-CSS/Seo-uk.css";
import contentImage from "../../../image/pngtree-modern-flat-design-concept-of-web-seo-analysis-with-characters-can-png-image_5332900-removebg-preview.png"; // Update with actual image path

const SEOCom1 = () => {
  return (
    <div className="SEOCom1-main-container-uk">
      <div className="SEOCom1-container">
        <div className="SEOCom1-text-section">
          <h1 className="SEOCom1-title">Understanding Search Engine Optimization (SEO)</h1>
          <h2 className="SEOCom1-subtitle">
            Boosting Your Online Visibility with Proven SEO Strategies
          </h2>
          <p>
            In today’s digital landscape, <strong>93% of online experiences</strong> 
            begin with a search engine, making <strong>SEO</strong> a critical 
            component of any business’s online presence. With the right strategies, 
            you can improve your website’s rankings, attract organic traffic, and 
            increase your chances of converting visitors into loyal customers.
          </p>
          <p>
            SEO goes far beyond adding keywords — it’s about optimizing on-page 
            elements, improving technical performance, enhancing user experience, 
            and building authoritative backlinks. SEO specialists conduct detailed 
            audits, keyword research, competitor analysis, and content optimization 
            to ensure your site stays visible and relevant in an ever-changing 
            search landscape.
          </p>
        </div>
        <div className="SEOCom1-image-section">
          <img src={contentImage} alt="SEO Strategy and Optimization Team" />
        </div>
      </div>
      <div className="under-Agency">
        <p>
          At our agency, we take a holistic approach to SEO, combining 
          cutting-edge tools and proven techniques to boost your rankings. 
          From local SEO and technical audits to content marketing and link 
          building, we tailor our strategy to your unique business goals, 
          helping you achieve long-term organic growth and measurable results.
        </p>
      </div>
    </div>
  );
};

export default SEOCom1;