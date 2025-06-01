// App.jsx
import React from "react";
import "../../../Style/Services-css/Webhosting-CSS/WebhostCom1.css";
import contentImage from "../../../image/saas-concept-with-people-scene-in-flat-cartoon-design-man-computing-using-cloud-technology-programming-and-working-with-hosting-software-as-a-service-illustration-visual-stor.jpg"; // Update with actual image path

const WebHostingCom1 = () => {
  return (
    <div className="WebHostingCom1-main-container">
      <div className="WebHostingCom1-container">
        <div className="WebHostingCom1-text-section">
          <h1 className="WebHostingCom1-title">Powering Your Online Presence with Reliable Web Hosting</h1>
          <h2 className="WebHostingCom1-subtitle">
            Scalable, Secure, and High-Performance Hosting Solutions for Every Business
          </h2>
          <p>
            A strong website needs more than just great design — it depends on 
            dependable hosting that guarantees speed, uptime, and protection. 
            <strong>Web hosting</strong> forms the backbone of your digital presence, 
            supporting smooth user experiences and ensuring your brand stays available 
            around the clock.
          </p>
          <p>
            Whether you’re running a blog, an e-commerce store, or a corporate website, 
            the right hosting solution makes a big difference. We offer optimized plans 
            for every stage — from shared hosting and VPS to dedicated servers and 
            cloud setups — delivering unmatched performance, daily backups, and 
            robust security.
          </p>
        </div>
        <div className="WebHostingCom1-image-section">
          <img src={contentImage} alt="Web Hosting Servers and Team" />
        </div>
      </div>
      <div className="under-Agency">
        <p>
          At our agency, we handle the technical complexities so you don’t have to. 
          From seamless site migrations to continuous monitoring and support, 
          our web hosting services keep your online operations smooth and resilient. 
          Let’s partner up to make sure your website is fast, secure, and ready 
          to scale as your business grows.
        </p>
      </div>
    </div>
  );
};

export default WebHostingCom1;
