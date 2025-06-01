import React from "react";
import "../../../Style/About-css/Careers-css/CareersCom2.css";

const steps = [
  {
    number: 1,
    title: "Initial Communication by the People Operations Team",
    description:
      "You will be introduced to the company by one of our high-powered recruiters at Thrive, who will have several communication exchanges with you to make initial assessments that determine if you’re a fit for the role."
  },
  {
    number: 2,
    title: "Invitation To Meet Founder & CEO Matt Bowman",
    description:
      "This is a key step in the process and is where you will join a Zoom call and be introduced to Thrive Founder and President Matt Bowman as he does a live slide presentation taking you through the history of Thrive. There is also a Q/A at the end of this presentation to ask Matt any questions you have."
  },
  {
    number: 3,
    title: "Invitation to the Group Interview",
    description:
      "You will join a group interview. This is what makes our interview process stand out. You will join other candidates who have been invited to interview for the same position (typically between 4-6 candidates) and meet the Thrive leadership team as they bring you through a series of questions that are done in a round-robin format so that every candidate has the opportunity to answer the same questions. At the end of the two-hour group interview, we will open it up again for you to ask the leadership team any questions you may have."
  },
  {
    number: 4,
    title: "Skills and Culture Fit Assessment",
    description:
      "After the group interview, we will narrow it down to the finalists who will move to round No. 2. Depending on the role, this round might include a project or a skills assessment. You will spend a one-on-one Zoom call with the department managers, where you will get to know the team leads and supervisors you will be working with."
  }
];

const CandidateExperience = () => {
  return (
    <div className="candidate-experience">
      <h1>Our Candidate Experience</h1>
      <h3>We Hire in a Five-Step Process</h3>
      <p>
        We believe in hiring the best digital marketing talent in the world. We give our candidates every
        opportunity to get to know us, just as we want to get to know them. Our five-step interview process includes:
      </p>

      <div className="steps-container">
        {steps.map((step) => (
          <div key={step.number} className="step-box">
            <div className="step-circle">STEP {step.number}</div>
            <div className="step-content">
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