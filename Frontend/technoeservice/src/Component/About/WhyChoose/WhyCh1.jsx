// WhyChooseUs.jsx
import React from 'react';
import '../../../Style/About-css/Why-Choose-css/Why-ChooseCom1.css';
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
      <section className="why-choose">
        <h2>Why Choose Us?</h2>
        <p className="subtitle">We Empower Your Brand and Grow Together</p>
        <p className="description">
          At Thrive Internet Marketing Agency, we build meaningful, long-term relationships and drive real results.
          <br />
          Focus on what you do best while our digital marketing experts ensure your online success!
        </p>
        <button className="cta-button">OUTGROW YOUR COMPETITION</button>

        <div className="features">
          <div className="feature">
            <FaCogs className="icon" />
            <h4>Proven Methodology</h4>
          </div>
          <div className="feature">
            <FaUserTie className="icon" />
            <h4>Dedicated Account Managers</h4>
          </div>
          <div className="feature">
            <FaChartLine className="icon" />
            <h4>Analytics and Results</h4>
          </div>
        </div>
      </section>

      <section className="our-culture">
        <h2>Our Culture</h2>
        <p className="subtitle">It Is Who We Are and How We Work!</p>
        <p className="description">
          Thrive is proud to rank among the Inc. 5000 fastest-growing companies in the United States for seven consecutive years.
          Since the Inc. 5000 List started in 1982, only 1.5% of companies have made the list seven times!
          But our commitment to success doesn’t stop here. We continuously invest in our employees to ensure personal and operational excellence.
        </p>

        <div className="culture-grid">
          <div className="culture-item">
            <FaHandshake className="icon blue" />
            <h4>EMPOWERMENT</h4>
            <p>We encourage our employees to reach beyond their daily responsibilities, explore their interests and stretch their capabilities.</p>
          </div>
          <div className="culture-item">
            <FaThumbsUp className="icon teal" />
            <h4>APPRECIATION</h4>
            <p>We recognize and celebrate the accomplishments and hard work of our team members, as well as how they elevate others to reach their desired goals.</p>
          </div>
          <div className="culture-item">
            <FaUsers className="icon green" />
            <h4>TEAMWORK</h4>
            <p>Our collaboration is based on empathy, support and trust in each other’s expertise, skills, opinion and good intentions.</p>
          </div>
          <div className="culture-item">
            <FaCogs className="icon green" />
            <h4>INTEGRITY</h4>
            <p>We act fairly towards our colleagues, clients and local communities at all times.</p>
          </div>
          <div className="culture-item">
            <FaBalanceScale className="icon olive" />
            <h4>NURTURING</h4>
            <p>We encourage and support all our employees with their personal and professional development.</p>
          </div>
          <div className="culture-item">
            <FaHandsHelping className="icon orange" />
            <h4>BALANCE</h4>
            <p>We prioritize work-life balance to maintain a healthier, more productive workforce.</p>
          </div>
        </div>

        <button className="cta-button">DISCOVER OUR UNIQUE BRAND STORY</button>
      </section>
    </>
  );
};

export default WhyChooseUs;
