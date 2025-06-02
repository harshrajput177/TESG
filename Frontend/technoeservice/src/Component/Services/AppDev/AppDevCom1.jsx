import React from "react";
import "../../../Style/Services-css/CRMdev-CSS/CRMcom1.css";
import contentImage from "../../../image/istockphoto-1054541696-612x612.jpg"; // Update with actual image path

const CRMDevCom1 = () => {
  return (
    <div className="CRMDevCom1-main-container">
      <div className="CRMDevCom1-container">
        <div className="CRMDevCom1-text-section">
          <h1 className="CRMDevCom1-title">Transforming Ideas into Powerful Apps</h1>
          <h2 className="CRMDevCom1-subtitle">
            Crafting Custom Mobile & Web Applications for Modern Businesses
          </h2>
          <p>
            In the digital age, having a sleek, functional, and user-friendly app 
            is essential for businesses that want to stay ahead. At <strong>Gwi Techno-e-Service</strong>, 
            we specialize in <strong>app development</strong> that brings your ideas to life — whether it’s 
            a mobile app, web application, or cross-platform solution.
          </p>
          <p>
            Our expert developers work closely with you to understand your goals, 
            design intuitive interfaces, and build scalable architectures. From 
            e-commerce apps and booking systems to custom dashboards and SaaS platforms, 
            we ensure your app is optimized for performance, security, and a seamless 
            user experience that keeps customers engaged.
          </p>
        </div>
        <div className="CRMDevCom1-image-section">
          <img src={contentImage} alt="App Development Team at Work" />
        </div>
      </div>
      <div className="under-Agency">
        <p>
          At <strong>Gwi Techno-e-Service</strong>, we offer end-to-end app development services, 
          including UI/UX design, backend development, API integrations, and rigorous 
          testing. Whether you’re a startup with a big idea or an enterprise looking 
          to modernize operations, we create custom applications that drive innovation, 
          enhance customer engagement, and deliver measurable results.
        </p>
      </div>
    </div>
  );
};

export default CRMDevCom1;
