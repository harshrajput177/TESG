import React from 'react';
import '../../../Style/Services-css/SMM-CSS/SmmCom5.css';
import { FaMobileAlt, FaCode, FaUserTie, FaBullseye, FaAward, FaFileAlt } from 'react-icons/fa';

const AppDevelopmentWhyChoose = () => {
  return (
    <div className="thrive-wrapper">
      <h1 className="heading">Why Choose GWI Techno-E-Service for Your Mobile App Development</h1>
      <h2 className="subheading">Flexible Packages Tailored to Meet Your Business Goals</h2>
      <p className="description">
        Mobile app development is more than just coding — it’s about building intuitive, scalable, and user-friendly solutions that deliver value. Whether you’re a startup or an enterprise, we craft customized mobile apps to suit your industry, business size, and budget.
      </p>
      <p className="description">
        With years of experience delivering cutting-edge mobile applications, GWI Techno-E-Service knows the ins and outs of app development, from idea validation to post-launch support. Stop searching for “mobile app development near me” — partner with our expert developers to turn your vision into reality.
      </p>
      <p className="description">Here’s why businesses trust us for their app projects:</p>

      <div className="benefits-grid">
        <div className="benefit-card">
          <FaMobileAlt className="icon" />
          <h3>Customized App Solutions</h3>
          <p>
            We tailor each mobile app project to your specific needs — from UI/UX design to feature integration — ensuring the final product fits your business objectives perfectly.
          </p>
        </div>

        <div className="benefit-card">
          <FaCode className="icon" />
          <h3>Expert Development Team</h3>
          <p>
            Our skilled developers specialize in iOS, Android, and cross-platform technologies, ensuring your app is built using the best frameworks and coding standards.
          </p>
        </div>

        <div className="benefit-card">
          <FaUserTie className="icon" />
          <h3>Dedicated Project Managers</h3>
          <p>
            Think of us as your extended tech team. Your dedicated project manager ensures smooth communication, clear milestones, and timely delivery.
          </p>
        </div>

        <div className="benefit-card">
          <FaBullseye className="icon" />
          <h3>Market-Driven Approach</h3>
          <p>
            We combine market research with user insights to design apps that resonate with your audience, improve retention, and boost engagement.
          </p>
        </div>

        <div className="benefit-card">
          <FaAward className="icon" />
          <h3>Focus on Quality & Performance</h3>
          <p>
            Our QA and testing processes ensure your app is fast, secure, and bug-free across devices — we prioritize quality over shortcuts.
          </p>
        </div>

        <div className="benefit-card">
          <FaFileAlt className="icon" />
          <h3>Transparent Progress Reports</h3>
          <p>
            Stay in the loop with regular progress updates, detailed reports, and access to project insights, helping you track success every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppDevelopmentWhyChoose;
