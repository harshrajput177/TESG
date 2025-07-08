// App.jsx
import React from "react";
import "../../../Style/Services-css/Webdesign-CSS/Webdescom1.css";
import contentImage from "../../../image/360_F_575744213_xDU4dVUMXMJOERoAOofBUNoIIbzJXxYU.jpg"; // Update with actual image path

const WebDesignCom1 = () => {
  return (
    <div className="WebDesignCom1-main-container-uk">
      <div className="WebDesignCom1-container">
        <div className="WebDesignCom1-text-section">
          <h1 className="WebDesignCom1-title">Understanding Web Design</h1>
          <h2 className="WebDesignCom1-subtitle">
            Crafting Engaging Visual Experiences with Figma, Canva, and More
          </h2>
          <p>
            In today’s competitive digital market, your website’s visual appeal and 
            user experience play a crucial role in grabbing attention and building 
            trust. Studies reveal that <strong>nearly 94% of first impressions</strong> 
            are design-related, making it essential to create layouts that are not 
            only beautiful but also functional and user-friendly.
          </p>
          <p>
            That’s where modern web design steps in. Using tools like <strong>Figma</strong> 
            for wireframing and prototyping, <strong>Canva</strong> for visual content creation, 
            and other design platforms, web designers craft detailed user interfaces 
            (UI) and seamless user experiences (UX). Every color choice, typography, 
            and interaction is planned carefully to reflect your brand and engage 
            your target audience effectively.
          </p>
        </div>
        <div className="WebDesignCom1-image-section">
          <img src={contentImage} alt="Web Design Team Using Figma and Canva" />
        </div>
      </div>
      <div className="under-Agency">
        <p>
          At our agency, we adopt a holistic approach to web design, combining 
          creativity with strategy. Whether it’s designing pixel-perfect layouts 
          in Figma, creating eye-catching visuals in Canva, or ensuring smooth 
          responsive design, we work closely with you to deliver digital experiences 
          that leave a lasting impact.
        </p>
      </div>
    </div>
  );
};

export default WebDesignCom1;