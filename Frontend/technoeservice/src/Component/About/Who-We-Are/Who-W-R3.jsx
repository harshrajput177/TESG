import React from "react";
import "../../../Style/About-css/Who-We-are-css/Who-w3.css";
import { FaLock, FaCheckCircle, FaBolt, FaHandshake } from "react-icons/fa";

const ClientSuccess = () => {
  return (
    <div className="client-success-container">
      <div className="client-success-left">
        <img
          src="/images/illustration.png" // Replace with actual image path
          alt="Digital Strategy Illustration"
          className="client-success-image"
        />
      </div>
      <div className="client-success-right">
        <p className="section-subtitle">SOME REASONS TO WORK TOGETHER</p>
        <h2 className="section-title">
          Our Goal Is Client’s Success And <br /> Future Growth
        </h2>
        <p className="section-description">
          We provide marketing services to startups and small businesses looking
          for a partner for their digital media. We work with you, not for you.
        </p>

        <div className="reasons">
          <div className="reason-box">
            <span className="reason-number">01.</span>
            <FaLock className="reason-icon" />
            <div>
              <h4>We Believe In Security</h4>
              <p>
                We protect your brand and data like our own—your trust is our
                strength.
              </p>
            </div>
          </div>

          <div className="reason-box">
            <span className="reason-number">02.</span>
            <FaCheckCircle className="reason-icon" />
            <div>
              <h4>We Believe In Quality</h4>
              <p>
                Every detail matters—our team ensures high-quality outputs with
                every campaign.
              </p>
            </div>
          </div>

          <div className="reason-box">
            <span className="reason-number">03.</span>
            <FaBolt className="reason-icon" />
            <div>
              <h4>We Believe In Ability</h4>
              <p>
                Our skilled professionals are dedicated to solving your problems
                efficiently and creatively.
              </p>
            </div>
          </div>

          <div className="reason-box">
            <span className="reason-number">04.</span>
            <FaHandshake className="reason-icon" />
            <div>
              <h4>We Believe In Relation</h4>
              <p>
                Long-term partnerships matter—our success is built on strong
                client relationships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSuccess;
