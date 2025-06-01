// App.jsx
import React from "react";
import "../../../Style/Services-css/CRMdev-CSS/CRMcom1.css";
import contentImage from "../../../image/business-strategy-crm-solution-customer-relationship-management-concept-tiny-businessman-perform-data-analysis-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg"; // Update with actual image path

const CRMDevCom1 = () => {
  return (
    <div className="CRMDevCom1-main-container">
      <div className="CRMDevCom1-container">
        <div className="CRMDevCom1-text-section">
          <h1 className="CRMDevCom1-title">Revolutionizing Business with CRM Development</h1>
          <h2 className="CRMDevCom1-subtitle">
            Building Customized Systems to Enhance Customer Relationships
          </h2>
          <p>
            In today’s fast-paced business world, managing customer interactions 
            efficiently is the key to sustainable growth. <strong>CRM development</strong> 
            helps businesses centralize customer data, streamline processes, and 
            personalize communication — all within a single, powerful system.
          </p>
          <p>
            From automating follow-ups and tracking leads to managing sales pipelines 
            and analyzing customer behavior, a well-designed CRM empowers your team 
            to deliver exceptional service. Our developers create tailored CRM solutions 
            that align with your unique workflows, ensuring smooth integration with 
            your existing tools and maximizing productivity.
          </p>
        </div>
        <div className="CRMDevCom1-image-section">
          <img src={contentImage} alt="CRM Development Strategy Team" />
        </div>
      </div>
      <div className="under-Agency">
        <p>
          At our agency, we specialize in end-to-end CRM development, from system design 
          and module customization to third-party integrations and performance optimization. 
          Whether you need a lightweight CRM for startups or a robust enterprise-grade 
          solution, we craft platforms that help you strengthen customer relationships, 
          boost sales efficiency, and drive long-term success.
        </p>
      </div>
    </div>
  );
};

export default CRMDevCom1;
