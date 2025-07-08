// App.jsx
import React from "react";
import "../../../Style/Services-css/SMM-CSS/SMMcom1.css";
import contentImage from "../../../image/hr-department-human-resources-management-employer-hiring-candidates-recruitment-agency-employment-headhunting-business-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg"; // Update with actual image path

const HRCom1 = () => {
  return (
    <div className="SMMcom1-main-container-uk">
      <div className="SMMcom1-container">
        <div className="SMMcom1-text-section">
          <h1 className="SMMcom1-title">Understanding Permanent Staffing</h1>
          <h2 className="SMMcom1-subtitle">
            Tailored Recruitment Solutions to Build Strong, Lasting Teams
          </h2>
          <p>
            In today’s competitive business landscape, securing the right talent is
            crucial for sustainable growth. Organizations are constantly seeking skilled
            professionals who align with their values, culture, and long-term vision.
            Studies show that <strong>over 60% of companies</strong> rely on specialized
            staffing agencies to <strong>find top-tier candidates</strong> and streamline
            the hiring process.
          </p>
          <p>
            That’s where permanent staffing services come in. It’s not just about filling
            roles — it’s about identifying and attracting candidates who will contribute
            meaningfully over time. Expert recruiters assess skill sets, match candidates
            to company needs, and ensure the right cultural fit, so your business builds a
            team ready for long-term success.
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
          At GWI, we take a comprehensive approach to recruitment. Our team combines
          advanced sourcing techniques, rigorous screening, and personalized client
          engagement to deliver qualified candidates who meet your unique business needs.
          We help you build reliable, future-ready teams — driving measurable outcomes and
          lasting impact.
        </p>
      </div>
    </div>
  );
};

export default HRCom1;
