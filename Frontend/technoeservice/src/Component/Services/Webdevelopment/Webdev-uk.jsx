import React from "react";
import "../../../Style/Services-css/Webdevelop-css/WebdevCom1.css";
import contentImage from "../../../image/hy.webp";

const WebDevCom1 = () => {
  return (
    <div className="WebDevCom1-main-wrapper-uk">
      <div className="WebDevCom1-main-container">
        <div className="WebDevCom1-container">
          <div className="WebDevCom1-text-section">
            <h1 className="WebDevCom1-title">Understanding Web Development</h1>
            <h2 className="WebDevCom1-subtitle">
              Tailored Solutions to Build Powerful Digital Experiences
            </h2>
            <p>
              In today’s fast-paced digital landscape, a robust online presence is essential 
              for businesses aiming to stand out, engage audiences, and drive growth. 
              Research shows that <strong>over 75% of users</strong> judge a company’s credibility 
              based on its <strong>website design and performance</strong>. This underlines the need 
              for creating seamless, functional, and visually appealing web experiences.
            </p>
            <p>
              That’s where web development comes into play. It involves a strategic blend 
              of planning, designing, coding, and optimizing websites or web applications. 
              Web developers continually test functionalities, improve user interfaces, 
              and integrate the latest technologies to ensure every interaction adds 
              value and delivers results.
            </p>
          </div>
          <div className="WebDevCom1-image-section">
            <img src={contentImage} alt="Web Development Team Graphic" />
          </div>
        </div>
        <div className="under-Agency">
          <p>
            At our agency, we follow an end-to-end approach to bring your digital vision 
            to life. We combine cutting-edge development practices with intuitive design 
            to create websites that not only look stunning but also perform seamlessly, 
            aligning perfectly with your brand’s goals.
          </p>
        </div>
      </div>

      <div className="WebDevCom1-wave-background">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="rgba(255, 255, 255, 0.3)"
            d="M0,224L48,224C96,224,192,224,288,218.7C384,213,480,203,576,176C672,149,768,107,864,80C960,53,1056,43,1152,53.3C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default WebDevCom1;
