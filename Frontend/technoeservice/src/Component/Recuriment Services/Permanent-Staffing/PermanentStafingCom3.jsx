import React from 'react';
import './ScreeningProcess.css';

const steps = [
  {
    number: '1',
    text: "We use AI to review resumes, ensuring candidates' skills and experiences match job requirements precisely for optimal fit.",
  },
  {
    number: '2',
    text: "Internal interviews are conducted to evaluate each candidate's suitability for the specific role within the organization.",
  },
  {
    number: '3',
    text: "Our recruitment team performs in-depth interviews to determine how well candidates align with your company's culture and specific needs.",
  },
  {
    number: '4',
    text: "Shortlisted candidates are forwarded with detailed profiles and insights, assisting you in the evaluation and decision-making process effectively.",
  },
  {
    number: '5',
    text: "Finally, we conduct thorough reference checks and background verifications to confirm the candidates' qualifications and reliability.",
  },
];

const ScreeningProcess = () => {
  return (
    <div className="screening-container">
      <h2 className="screening-title">
        Candidates <span className="highlight-blue">Screening</span> and <span className="highlight-blue">Selection Process</span>
      </h2>
      <div className="screening-steps">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <div className="step-circle">{step.number}</div>
            <div className="step-line" />
            <p className="step-text">{step.text}</p>
          </div>
        ))}
      </div>
      <div className="hire-now">
        <a href="#" className="hire-link">Get Hire Now →</a>
      </div>
    </div>
  );
};

export default ScreeningProcess;
