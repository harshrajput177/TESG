// App.jsx
import React from "react";
import "../../../Style/Services-css/Webdevelop-css/WebdevCom1.css";
import contentImage from "../../../image/360_F_447036650_BwtW5SmAIxgdJxJunRvkiaysLkjgDAFB.jpg"; // Update with actual image path

const WebDevCom1 = () => {
  return (
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
  );
};

export default WebDevCom1;
