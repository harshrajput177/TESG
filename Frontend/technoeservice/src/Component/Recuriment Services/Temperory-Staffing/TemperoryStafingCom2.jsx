import React from 'react';
import '../../../Style/RecurimentService-css/TemproryService-css/TempoCom2.css';

const steps = [
  {
    number: '1',
    title: 'Understanding Client Requirements',
    description:
      "HiringGo starts by fully understanding the client’s needs, ensuring an accurate understanding of their staffing requirements including skill set, experience level and cultural fit within the IT sector.",
    icon: '📝',
  },
  {
    number: '2',
    title: 'A team of recruiters Get into Action',
    description:
      "Our dedicated team of experienced IT recruiters leap into action, leveraging their industry expertise to identify and connect with top talent. Proactive sourcing and personalized outreach are integral parts of our recruitment strategy.",
    icon: '👥',
  },
  {
    number: '3',
    title: 'AI-based candidate Evaluation Software',
    description:
      "HiringGo uses advanced AI technology for candidate assessment. Our highly developed software analyzes resumes, evaluates skills and assesses compatibility, enabling an efficient and fair shortlisting process i.e. tailored to client specifications.",
    icon: '🤖',
  },
  {
    number: '4',
    title: 'Client Assessment of the Shortlisted Candidates',
    description:
      "Before finalizing the candidates, HiringGo ensures participation of clients in the selection process. We present an organized list of shortlisted candidates, allowing clients to assess profiles, conduct interviews and provide valuable feedback for further refinement.",
    icon: '🔍',
  },
  {
    number: '5',
    title: 'Streamlines Documentation and Onboarding Process',
    description:
      "To speed up the hiring journey, HiringGo streamlines the documentation and onboarding processes. We handle paperwork carefully, facilitate seamless communication, and ensure fast turnaround from candidate selection to onboarding while minimizing administrative hassles.",
    icon: '📄',
  },
  {
    number: '6',
    title: 'Rolling out the Job Offer',
    description:
      "Once approved by the client, HiringGo makes job offers to successful candidates. Our team facilitates conversations, resolves questions, and ensures a smooth transition for candidates who accept an offer, marking the height of a successful IT staffing recruitment process.",
    icon: '🏆',
  },
];

export default function RecruitmentProcess() {
  return (
    <div className="Temp-recruitment-container">
      <h2>
        Our <span className="Temp-highlight">Recruitment</span> Process
      </h2>
      <div className="Temp-cards-grid">
        {steps.map((step) => (
          <div className="Temp-step-card" key={step.number}>
            <div className="Temp-step-number">{step.number}</div>
            <div className="Temp-step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}