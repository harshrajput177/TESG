// App.jsx
import React from "react";
import "../../../Style/Services-css/SMM-CSS/SMMcom1.css";
import contentImage from "./content-image.png"; // Update with actual image path

const App = () => {
  return (
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
        <p>
          At our agency, we embrace a comprehensive method to handle your social media
          presence. We align organic engagement tactics with smart paid campaigns to
          deliver consistent visibility and measurable outcomes tailored to your brand’s
          goals.
        </p>
      </div>
      <div className="SMMcom1-image-section">
        <img src={contentImage} alt="Social Media Strategy Graphic" />
      </div>
    </div>
  );
};

export default App;
