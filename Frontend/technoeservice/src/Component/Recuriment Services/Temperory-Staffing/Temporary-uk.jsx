// App.jsx
import React from "react";
import "../../../Style/RecurimentService-css/TemproryService-css/Temporary-uk.css";
import contentImage from "../../../image/pngtree-employment-agency-for-recruitment-or-placement-job-service-with-skilled-and-experienced-career-laborers-in-flat-cartoon-illustration-picture-image_8696738.png"; // Update with actual image path

const TRCom1 = () => {
  return (
    <div className="Temporaray-main-container-uk">
      <div className="SMMcom1-container">
        <div className="SMMcom1-text-section">
          <h1 className="SMMcom1-title">Temporary & Contract Staffing Solutions</h1>
          <h2 className="SMMcom1-subtitle">
            Flexible Workforce Support for Agile Business Needs
          </h2>
          <p>
            In today’s fast-paced market, businesses need the agility to scale their 
            workforce quickly in response to shifting demands, seasonal peaks, and 
            specialized project needs. Studies reveal that 
            <strong>over 55% of organizations</strong> rely on temporary and contract 
            staffing solutions to access skilled talent without long-term commitments.
          </p>
          <p>
            Temporary and contract staffing isn’t just about filling short-term gaps — 
            it’s about providing immediate access to qualified professionals who can 
            hit the ground running. From project-based roles to interim positions, 
            expert recruiters ensure you get the right talent, at the right time, 
            with minimal hiring overhead and maximum efficiency.
          </p>
        </div>
        <div className="SMMcom1-image-section">
          <img
            src={contentImage}
            alt="Temporary Contract Staffing Recruitment Graphic"
          />
        </div>
      </div>
      <div className="under-Agency">
        <p>
          At GWI, we deliver tailored temporary and contract staffing solutions designed 
          to keep your business agile and competitive. Our extensive talent pool, 
          fast turnaround times, and customized recruitment strategies ensure you 
          get top-tier professionals precisely when you need them. Whether you're 
          managing a surge in workload or executing specialized projects, we help you 
          maintain performance and flexibility — without compromising on quality.
        </p>
      </div>
    </div>
  );
};

export default TRCom1;