// App.jsx
import React from "react";
import "../../../Style/Services-css/SMM-CSS/SMMcom1.css";
import contentImage from "../../../image/employment-agency-for-recruitment-or-placement-job-service-with-skilled-and-experienced-career-laborers-in-flat-cartoon-illustration-vector.jpg"; // Update with actual image path

const PRCom1 = () => {
  return (
    <div className="SMMcom1-main-container">
      <div className="SMMcom1-container">
        <div className="SMMcom1-text-section">
          <h1 className="SMMcom1-title">Permanent Staffing Excellence</h1>
          <h2 className="SMMcom1-subtitle">
            Reliable Recruitment Services for Long-Term Team Success
          </h2>
          <p>
            In today’s competitive business world, building a strong, dependable workforce 
            is essential for sustainable growth. Companies aren’t just looking to fill 
            positions — they’re seeking talented professionals who will become long-term 
            contributors and drive business success. Research shows that 
            <strong>over 65% of organizations</strong> partner with staffing experts to 
            <strong>streamline permanent hiring</strong> and ensure the right fit.
          </p>
          <p>
            Permanent staffing services go beyond basic recruitment. They involve a 
            thorough process of identifying, vetting, and placing candidates who align 
            with your company’s values, goals, and culture. By combining deep market 
            knowledge with precise talent matching, expert recruiters help businesses 
            secure dedicated employees who are ready to grow alongside the organization.
          </p>
        </div>
        <div className="SMMcom1-image-section">
          <img
            src={contentImage}
            alt="Permanent Staffing Recruitment Graphic"
          />
        </div>
      </div>
      <div className="under-Agency">
        <p>
          At GWI, we specialize in delivering comprehensive permanent staffing solutions. 
          Our team uses advanced sourcing techniques, rigorous screening processes, and 
          tailored engagement strategies to provide you with top-tier candidates who 
          meet both technical and cultural requirements. Whether you need to scale your 
          teams or fill critical roles, we help you build a workforce that drives 
          long-term value and success.
        </p>
      </div>
    </div>
  );
};

export default PRCom1;
