import React from "react";
import "../../../Style/About-css/Who-We-are-css/Who-w1.css";
import contentImage from "../../../image/depositphotos_308095066-stock-illustration-generating-new-leads-concept-vector.jpg"; // Update with actual image path

const WhoCom1 = () => {
  return (
    <div className="LeadGenCom1-main-container">
      <div className="LeadGenCom1-container">
        <div className="LeadGenCom1-text-section">
          <h1 className="LeadGenCom1-title">Who We Are: Gwi Techno-e-Service</h1>
          <h2 className="LeadGenCom1-subtitle">
            Your Trusted Partner in Digital Growth & Innovation
          </h2>
          <p>
            At <strong>Gwi Techno-e-Service</strong>, we are a passionate team of digital experts dedicated 
            to helping businesses succeed in the online world. We specialize in a wide range of services, 
            including <strong>web design</strong>, <strong>web development</strong>, <strong>SEO</strong>, <strong>lead generation</strong>, and much more, 
            all tailored to meet the unique needs of our clients.
          </p>
          <p>
            Our mission is simple: to create impactful digital solutions that drive results. Whether it’s building 
            a stunning website, improving your search rankings, or generating high-quality leads, we combine 
            creativity, technology, and strategy to deliver measurable success. With a focus on innovation 
            and client satisfaction, we help you stay ahead in today’s competitive digital landscape.
          </p>
        </div>
        <div className="LeadGenCom1-image-section">
          <img src={contentImage} alt="Digital Marketing Team at Gwi Techno-e-Service" />
        </div>
      </div>
      <div className="under-Agency">
        <p>
          As a full-service digital marketing agency, <strong>Gwi Techno-e-Service</strong> is committed to driving 
          growth and maximizing ROI for businesses of all sizes. From inbound marketing and SEO 
          to paid campaigns, social media outreach, and email funnels, we craft customized strategies 
          that attract, engage, and convert your ideal audience. Partner with us to unlock your brand’s 
          full potential and achieve long-term success in the digital world.
        </p>
      </div>
    </div>
  );
};

export default WhoCom1;
