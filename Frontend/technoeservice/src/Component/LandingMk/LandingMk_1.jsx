import React from "react";
import "../../Style/LandingMk-css/LandingMk_1.css";
import img1 from '../../image/hy.webp'

const HeroSection = () => {
  return (
    <div className="hero-container-uk">
      <div className="extra-circle"></div>
      <div className="hero-content-uk">
        <h1>Empowering Brands Digitally<br />with Gwi Techno E Service</h1>
        <p>
          At Gwi Techno E Service, we don’t just build websites—we craft powerful digital identities. 
          From SEO and marketing to full-stack web development, our strategies turn businesses into 
          trusted digital leaders.
        </p>
        <button className="start-btn-uk">Get Started ➤</button>
      </div>
      <div className="hero-illustration-uk">
        <img src={img1} alt="Digital Agency Illustration" />
      </div>
    </div>
  );
};

export default HeroSection;

