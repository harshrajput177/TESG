import React from "react";
import "../../../Style/About-css/Careers-css/CareersCom2.css";

const steps = [
  {
    number: 1,
    title: "Initial Screening by Talent Acquisition",
    description:
      "Our hiring journey begins with a personalized interaction from the GWI Talent Team. We'll connect with you to learn more about your background, goals, and alignment with the role. This step helps us ensure mutual compatibility before moving forward."
  },
  {
    number: 2,
    title: "Meet the Leadership",
    description:
      "Candidates shortlisted from the initial round are invited to a virtual session with our Founder and CEO. You'll gain valuable insight into GWI’s mission, evolution, and core values — and have the opportunity to ask direct questions about our vision."
  },
  {
    number: 3,
    title: "Collaborative Group Interview",
    description:
      "You’ll participate in an engaging group interview with other top candidates. Our leadership team will lead structured, round-robin-style questions to assess your problem-solving, communication, and cultural alignment. It’s also your chance to interact with fellow talents and gain a broader perspective on the role."
  },
  {
    number: 4,
    title: "Role-Specific Task & Team Interaction",
    description:
      "Finalists are invited for a deep-dive round, where you may be asked to complete a task or short project related to the role. You'll also meet with team leads and department heads to evaluate both skill fit and synergy with the team."
  }
];

const CandidateExperience = () => {
  return (
    <div className="Career-candidate-experience">
      <h1>Our Candidate Experience</h1>
      <h3>We Follow a Transparent & Thoughtful Hiring Process</h3>
      <p>
        At GWI, we aim to bring on passionate digital marketing professionals who share our hunger for innovation and growth. Our four-step hiring process is designed to ensure that every candidate is respected, informed, and inspired throughout their journey.
      </p>

      <div className="Career-steps-container">
        {steps.map((step) => (
          <div key={step.number} className="Career-step-box">
            <div className="Career-step-circle">STEP {step.number}</div>
            <div className="Career-step-content">
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidateExperience;
