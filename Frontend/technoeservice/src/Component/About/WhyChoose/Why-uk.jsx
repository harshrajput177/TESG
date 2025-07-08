import React from 'react';
import '../../../Style/About-css/Why-Choose-css/Why-uk.css';
import {
  FaCogs,
  FaUserTie,
  FaChartLine,
  FaHandshake,
  FaThumbsUp,
  FaUsers,
  FaBalanceScale,
  FaHandsHelping,
} from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <>
      <section className="uk-why-choose">
        <h2>Why Choose Us?</h2>
        <p className="subtitle">Empowering Brands With Data-Driven Digital Growth</p>
        <p className="description">
          At GWI (Techno E Services LLP), we don't just offer digital marketing services — we partner in your business growth.
          <br />
          Our team of skilled professionals helps you stand out online, attract your target audience, and convert leads into loyal customers.
        </p>
        <button className="cta-button">LET’S ELEVATE YOUR ONLINE PRESENCE</button>

        <div className="features">
          <div className="feature">
            <FaCogs className="icon" />
            <h4>Tailored Strategies</h4>
          </div>
          <div className="feature">
            <FaUserTie className="icon" />
            <h4>Experienced Experts</h4>
          </div>
          <div className="feature">
            <FaChartLine className="icon" />
            <h4>Transparent Reporting</h4>
          </div>
        </div>
      </section>

      <section className="our-culture">
        <h2>Our Culture</h2>
        <p className="subtitle">Driven by Innovation, Collaboration, and Purpose</p>
        <p className="description">
          At GWI, we believe that our people are our biggest strength. We’ve built a culture where learning, creativity, and growth are constant.
          <br />
          Every project is a team effort — and every client, a long-term relationship built on trust, performance, and results.
        </p>

        <div className="culture-grid">
          <div className="culture-item">
            <FaHandshake className="icon blue" />
            <h4>OWNERSHIP</h4>
            <p>We empower every team member to take responsibility, make decisions, and contribute with confidence.</p>
          </div>
          <div className="culture-item">
            <FaThumbsUp className="icon teal" />
            <h4>RECOGNITION</h4>
            <p>We acknowledge the contributions of our team and celebrate milestones, big or small.</p>
          </div>
          <div className="culture-item">
            <FaUsers className="icon green" />
            <h4>COLLABORATION</h4>
            <p>Success happens when diverse minds unite. We thrive on open communication and shared goals.</p>
          </div>
          <div className="culture-item">
            <FaCogs className="icon green" />
            <h4>INTEGRITY</h4>
            <p>We stay honest, transparent, and fair in all our dealings — internally and externally.</p>
          </div>
          <div className="culture-item">
            <FaBalanceScale className="icon olive" />
            <h4>GROWTH</h4>
            <p>We invest in learning and development to help our people and clients scale sustainably.</p>
          </div>
          <div className="culture-item">
            <FaHandsHelping className="icon orange" />
            <h4>WORK-LIFE BALANCE</h4>
            <p>We value personal well-being and provide a flexible environment where creativity thrives.</p>
          </div>
        </div>

        <button className="cta-button">EXPLORE THE GWI EXPERIENCE</button>
      </section>
    </>
  );
};

export default WhyChooseUs;

