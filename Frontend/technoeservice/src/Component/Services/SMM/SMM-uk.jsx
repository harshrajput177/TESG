// App.jsx
import React from "react";
import "../../../Style/Services-css/SMM-CSS/SMM-uk.css";
import contentImage from "../../../image/ads-dv360-lytics.png" // Update with actual image path

const SmmCom1 = () => {
  return (
     <div className="WebHostingCom1-main-wrapper-uk">
    <div className="SMMcom1-main-container-uk">
    <div className="SMMcom1-container">
      <div className="SMMcom1-text-section">
        <h1 className="SMMcom1-title">Understanding Social Media Management</h1>
        <h2 className="SMMcom1-subtitle">
          Personalized Strategies to Drive Strong Online Connections
        </h2>
        <p>
          In the ever-evolving digital world, social media platforms play a crucial role
          in helping businesses stay connected, build communication, and grow their
          communities. A recent study revealed that <strong>over 57% of users</strong>
          follow business profiles to <strong>discover new offerings or services</strong>.
          This highlights the importance of sharing meaningful content that connects
          and resonates with your audience.
        </p>
        <p>
          That’s where social media management comes in. It involves a thoughtful mix of
          content planning, creation, and publishing across various platforms. Social
          media managers consistently audit accounts, analyze audience behavior, and
          craft strategies to ensure every post adds value and relevance.
        </p>
     
      </div>
      <div className="SMMcom1-image-section">
        <img src={contentImage} alt="Social Media Strategy Graphic" />
      </div>

    </div>
     <div className="under-Agency">
          <p>
          At our agency, we embrace a comprehensive method to handle your social media
          presence. We align organic engagement tactics with smart paid campaigns to
          deliver consistent visibility and measurable outcomes tailored to your brand’s
          goals.
        </p>
      </div>
      </div>

       <div className="WebHostingCom1-wave-background">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,224L48,224C96,224,192,224,288,218.7C384,213,480,203,576,176C672,149,768,107,864,80C960,53,1056,43,1152,53.3C1248,64,1344,96,1392,112L1440,128L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
      </div>
  );
};

export default SmmCom1;
