// App.jsx
import React from "react";
import "../../../Style/Services-css/Ecom-CSS/Ecom1.css";
import contentImage from "../../../image/617-6175517_shop-smart-e-commerce-illustration-png-transparent-png-removebg-preview.png"; // Update with actual image path

const EcommerceDevCom1 = () => {
  return (
    <div className="EcommerceDevCom1-main-container-uk">
      <div className="EcommerceDevCom1-container">
        <div className="EcommerceDevCom1-text-section">
          <h1 className="EcommerceDevCom1-title">Building Seamless Ecommerce Experiences</h1>
          <h2 className="EcommerceDevCom1-subtitle">
            Custom Online Stores Designed to Convert and Scale
          </h2>
          <p>
            A successful ecommerce platform isn’t just about listing products — it’s 
            about creating a smooth, intuitive shopping journey that delights customers 
            and drives sales. From smart product filtering and mobile-first design 
            to secure checkout and integrated payment gateways, every detail matters 
            in delivering a standout online store.
          </p>
          <p>
            Our ecommerce development services cover every stage of the process: 
            strategy, UX/UI design, development, and post-launch optimization. We 
            build scalable platforms tailored to your brand, ensuring fast load times, 
            easy navigation, and seamless integration with inventory, CRM, and analytics 
            tools to help you grow.
          </p>
        </div>
        <div className="EcommerceDevCom1-image-section">
          <img src={contentImage} alt="Ecommerce Development Team" />
        </div>
      </div>
      <div className="under-Agency">
        <p>
          At our agency, we turn your ecommerce vision into a fully functional, 
          high-performing online store. With a focus on user experience and 
          long-term growth, we ensure your platform is ready to attract visitors, 
          convert leads, and retain loyal customers — all while keeping operations 
          smooth behind the scenes.
        </p>
      </div>
    </div>
  );
};

export default EcommerceDevCom1;