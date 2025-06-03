import React from 'react';
import '../../../Style/RecurimentService-css/PermanentService-css/PermanentCom2.css';
import { default as Card } from "@mui/material/Card";
import { default as CardContent } from "@mui/material/CardContent";
import { motion } from 'framer-motion';

const benefits = [
  {
    id: 1,
    title: 'Access to a Quality Candidate Pool',
    description:
      'We have extensive networks, databases, and resources to source candidates from various channels, including passive candidates who might not be actively looking for jobs.',
  },
  {
    id: 2,
    title: 'Time and Resource Savings',
    description:
      'The hiring process involves multiple stages; we handle these tasks tactfully, saving you valuable time and resources, so you can focus on core activities.',
  },
  {
    id: 3,
    title: 'Expertise in Candidate Selection',
    description:
      'Our expert team evaluates candidates based on their skills, qualifications, experience, and cultural fit, ensuring the best match for your job requirements.',
  },
  {
    id: 4,
    title: 'Reduced Time-to-Hire',
    description:
      'We identify candidates quickly, significantly reducing the time it takes to fill a vacancy.',
  },
  {
    id: 5,
    title: 'Market Insights and Advice',
    description:
      'We offer valuable insights on job descriptions, candidate attraction, and compensation packages, using our deep understanding of market trends and benchmarks.',
  },
  {
    id: 6,
    title: 'Confidentiality',
    description:
      'We act as an intermediary to maintain the confidentiality of sensitive or confidential hiring processes.',
  },
  {
    id: 7,
    title: 'Candidate Screening and Assessment',
    description:
      'We conduct thorough screenings, interviews, and assessments to ensure only well-qualified candidates are considered.',
  },
  {
    id: 8,
    title: 'Negotiation and Onboarding Support',
    description:
      'We help negotiate job offers and provide onboarding support, ensuring smooth transitions into new roles.',
  },
  {
    id: 9,
    title: 'Flexibility in Staffing',
    description:
      'We offer temporary or contract staffing solutions, allowing you to scale your workforce up or down as needed.',
  },
];

const RecruitmentBenefits = () => {
  return (
    <div className="benefits-section">
      <motion.h1 
        className="benefits-title"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
      >
        Benefits of Hiring Us as your Recruitment Partner
      </motion.h1>
      <p className="benefits-subtitle">
        Our unique offerings can help you stand out in a competitive market. Our expertise, focus, and commitment help clients build an exceptional workforce.
      </p>
      <div className="benefits-grid">
        {benefits.map((item) => (
          <motion.div 
            key={item.id} 
            className="benefit-card"
            whileHover={{ scale: 1.05 }}
          >
            <Card className="benefit-card-inner">
              <CardContent>
                <div className="benefit-number">{item.id}</div>
                <h3 className="benefit-title">{item.title}</h3>
                <p className="benefit-description">{item.description}</p>
                <button className="benefit-button">Enquire Now</button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecruitmentBenefits;
