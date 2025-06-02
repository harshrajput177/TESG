// App.jsx
import React from "react";
import "../../../Style/Services-css/SMM-CSS/SMMcom1.css";
import contentImage from "../../../image/concept-choice-worker-personnel-staff-recruitment-employee-hiring-flat-cartoon-colorful-vector-illustration-hiring-330115127.webp"; // Update with actual image path

const NicheCom1 = () => {
  return (
    <div className="SMMcom1-main-container">
      <div className="SMMcom1-container">
        <div className="SMMcom1-text-section">
          <h1 className="SMMcom1-title">Mastering Niche Hiring</h1>
          <h2 className="SMMcom1-subtitle">
            Specialized Recruitment for Critical, High-Impact Roles
          </h2>
          <p>
            In today’s rapidly evolving industries, businesses face increasing pressure 
            to secure specialized talent with rare skill sets. Whether it’s advanced 
            technology, healthcare, finance, or engineering, finding professionals who 
            meet highly specific requirements is no easy task. Studies show that 
            <strong>over 70% of companies</strong> struggle to fill niche roles due to 
            limited talent availability and intense market competition.
          </p>
          <p>
            That’s where niche hiring solutions step in. It’s not just about recruitment — 
            it’s about precise talent mapping, market intelligence, and building a 
            strong employer value proposition to attract exceptional candidates. 
            Our expert recruiters understand the nuances of specialized fields, 
            ensuring every placement aligns perfectly with your business’s technical, 
            operational, and cultural needs.
          </p>
        </div>
        <div className="SMMcom1-image-section">
          <img
            src={contentImage}
            alt="Niche Hiring Recruitment Graphic"
          />
        </div>
      </div>
      <div className="under-Agency">
        <p>
          At GWI, we deliver tailored niche hiring solutions that go beyond standard 
          staffing. Using targeted outreach, industry-specific networks, and 
          advanced screening techniques, we connect you with high-caliber talent 
          that’s often hidden from traditional recruitment channels. 
          Our mission is to help you secure rare expertise that drives innovation, 
          growth, and long-term success.
        </p>
      </div>
    </div>
  );
};

export default NicheCom1;
