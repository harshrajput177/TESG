import React from 'react';
import '../../../Style/Services-css/SMM-CSS/SmmCom4.css';
import { FaUserFriends, FaHandshake, FaChartPie, FaCogs, FaEnvelopeOpenText, FaDatabase } from 'react-icons/fa';

const services = [
  {
    icon: <FaUserFriends className="icon" />,
    title: 'Customer Management',
    content: `Centralize all customer information in one place. Our CRM system helps you track interactions, manage contacts, and build stronger, more personalized customer relationships.`
  },
  {
    icon: <FaHandshake className="icon" />,
    title: 'Sales Pipeline Management',
    content: `Monitor deals at every stage. We help you streamline your sales pipeline, automate follow-ups, and increase conversion rates by keeping your sales team organized and focused.`
  },
  {
    icon: <FaChartPie className="icon" />,
    title: 'Analytics & Reporting',
    content: `Gain valuable insights with real-time analytics. Track sales performance, customer behavior, and marketing effectiveness to make data-driven decisions that boost growth.`
  },
  {
    icon: <FaCogs className="icon" />,
    title: 'Workflow Automation',
    content: `Automate repetitive tasks like lead assignment, email responses, and reminders, ensuring no opportunities slip through the cracks and your team stays productive.`
  },
  {
    icon: <FaEnvelopeOpenText className="icon" />,
    title: 'Email & Communication Tools',
    content: `Enhance customer communication with built-in email campaigns, templates, and tracking. Stay connected and nurture leads with personalized, automated outreach.`
  },
  {
    icon: <FaDatabase className="icon" />,
    title: 'Data Integration & Management',
    content: `Seamlessly integrate data from various platforms (like marketing, sales, and support) into your CRM system, ensuring a unified view of every customer interaction.`
  }
];

const CRMCom4 = () => {
  return (
    <div className="services-section">
      <h1 className="main-title">GWI CRM Solutions</h1>
      <p className="subtitle">Optimize Customer Relationships, Streamline Sales, and Drive Business Growth</p>
      <div className="cards-container">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <div className="icon-wrapper">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CRMCom4;
