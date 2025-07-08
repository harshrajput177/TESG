// App.jsx
import React from "react";
import "../../../Style/Services-css/Lead-gen-CSS/Lead-genCom1.css";
import contentImage from "../../../image/depositphotos_308095066-stock-illustration-generating-new-leads-concept-vector.jpg"; // Update with actual image path

const LeadGenCom1 = () => {
  return (
    <div className="LeadGenCom1-main-container-uk">
      <div className="LeadGenCom1-container">
        <div className="LeadGenCom1-text-section">
          <h1 className="LeadGenCom1-title">Mastering the Art of Lead Generation</h1>
          <h2 className="LeadGenCom1-subtitle">
            Turning Interested Visitors into Qualified Business Opportunities
          </h2>
          <p>
            In today’s competitive market, it’s not enough to attract visitors — 
            you need to capture their interest and guide them through a journey 
            that transforms them into leads. Effective <strong>lead generation</strong> 
            strategies help businesses build a steady pipeline of potential customers 
            who are genuinely interested in their products or services.
          </p>
          <p>
            Lead generation involves a mix of strategic content creation, targeted 
            campaigns, landing page optimization, and smart use of tools like forms, 
            CTAs, and lead magnets. By understanding your audience’s pain points and 
            offering real value, you can increase engagement and boost your chances 
            of converting visitors into actionable leads.
          </p>
        </div>
        <div className="LeadGenCom1-image-section">
          <img src={contentImage} alt="Lead Generation Strategy Team" />
        </div>
      </div>
      <div className="under-Agency">
        <p>
          At our agency, we specialize in crafting custom lead generation systems 
          designed to fit your business goals. Whether it’s through inbound content, 
          paid campaigns, email funnels, or social outreach, we focus on attracting 
          high-quality prospects and nurturing them into long-term relationships 
          that drive growth and revenue.
        </p>
      </div>
    </div>
  );
};

export default LeadGenCom1;
