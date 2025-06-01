// App.jsx
import React from "react";
import "../../../Style/About-css/Careers-css/CareersCom1.css";
import contentImage from "../../../image/business-strategy-crm-solution-customer-relationship-management-concept-tiny-businessman-perform-data-analysis-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg";

const CareerCom1 = () => {
  return (
    <div className="CRMDevCom1-main-container">
      <div className="CRMDevCom1-container">
        <div className="CRMDevCom1-text-section">
          <h1 className="CRMDevCom1-title">Unlock Your Career Potential with Gwi Techno E Service</h1>
          <h2 className="CRMDevCom1-subtitle">
            Join a Leading Digital Marketing Company Driving Professional Growth
          </h2>
          <p>
            <strong>Gwi Techno E Service</strong> is more than just a workplace — it’s a hub of innovation, 
            creativity, and opportunity. As a top-tier digital marketing company, we are committed 
            to providing outstanding employment opportunities that empower individuals to build 
            meaningful and rewarding careers.
          </p>
          <p>
            We believe in nurturing talent, fostering continuous learning, and creating an environment 
            where ambition meets possibility. Whether you are just starting your journey or looking to 
            elevate your professional path, Gwi Techno E Service offers diverse roles, dynamic projects, 
            and a supportive culture that helps you achieve your career goals.
          </p>
        </div>
        <div className="CRMDevCom1-image-section">
          <img src={contentImage} alt="Career Opportunities at Gwi Techno E Service" />
        </div>
      </div>
      <div className="under-Agency">
        <p>
          At <strong>Gwi Techno E Service</strong>, we specialize in delivering cutting-edge digital 
          marketing solutions while investing in the growth and success of our people. From personalized 
          career development plans to collaborative team environments, we are dedicated to helping 
          our employees thrive. Join us and become part of a company that values innovation, professionalism, 
          and the power of human potential.
        </p>
      </div>
    </div>
  );
};

export default CareerCom1;
