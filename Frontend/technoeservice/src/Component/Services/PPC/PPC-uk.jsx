// App.jsx
import React from "react";
import "../../../Style/Services-css/PPC-CSS/PPC-uk.css";
import contentImage from "../../../image/pngtree-ppc-people-for-marketing-design-png-image_6377284.png"; // Update with actual image path

const PPCCom1 = () => {
  return (
    <div className="PPCCom1-main-container-uk">
      <div className="PPCCom1-container">
        <div className="PPCCom1-text-section">
          <h1 className="PPCCom1-title">Understanding PPC Campaign Management</h1>
          <h2 className="PPCCom1-subtitle">
            Data-Driven Strategies to Maximize Your Advertising ROI
          </h2>
          <p>
            In the competitive online advertising world, <strong>Pay-Per-Click (PPC)</strong> 
            campaigns play a vital role in driving immediate, measurable traffic to your 
            business. Studies show that <strong>PPC visitors are 50% more likely</strong> 
            to convert compared to organic visitors, highlighting the power of targeted 
            paid ads on platforms like Google Ads, Bing, and social media.
          </p>
          <p>
            PPC management isn’t just about running ads; it’s about crafting well-optimized 
            campaigns, conducting thorough keyword research, designing compelling ad creatives, 
            and continuously monitoring performance. PPC specialists analyze click-through rates, 
            cost-per-click, and conversion data to fine-tune campaigns and ensure every ad dollar 
            is delivering maximum impact.
          </p>
        </div>
        <div className="PPCCom1-image-section">
          <img src={contentImage} alt="PPC Campaign Management Team Graphic" />
        </div>
      </div>
      <div className="under-Agency">
        <p>
          At our agency, we adopt a performance-focused approach to PPC advertising. 
          From search and display ads to retargeting and paid social, we align your 
          business goals with the right audience, delivering high-quality leads and 
          maximizing return on investment through constant optimization and 
          data-backed decisions.
        </p>
      </div>
    </div>
  );
};

export default PPCCom1;