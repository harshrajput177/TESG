import React from 'react';
import '../../../Style/Services-css/SMM-CSS/SmmCom4.css';
import { FaMobileAlt, FaCode, FaCogs, FaPalette, FaCloudUploadAlt, FaBug } from 'react-icons/fa';

const services = [
  {
    icon: <FaMobileAlt className="icon" />,
    title: 'Mobile App Development',
    content: `We design and build high-quality mobile applications for iOS, Android, and cross-platform environments. Our team focuses on performance, scalability, and creating seamless user experiences that keep users engaged and coming back.`
  },
  {
    icon: <FaCode className="icon" />,
    title: 'Backend & API Development',
    content: `A strong backend is the backbone of any great app. We build secure, robust server-side systems and craft custom APIs to ensure smooth data flow, third-party integrations, and optimized app functionality.`
  },
  {
    icon: <FaPalette className="icon" />,
    title: 'UI/UX Design',
    content: `Our designers create intuitive and visually stunning interfaces that delight users and improve usability. From wireframes to polished prototypes, we ensure the app looks great and functions smoothly on all devices.`
  },
  {
    icon: <FaBug className="icon" />,
    title: 'Quality Assurance & Testing',
    content: `We perform rigorous testing at every development stage — functional, performance, security, and usability — to ensure your app launches bug-free and delivers a flawless user experience.`
  },
  {
    icon: <FaCloudUploadAlt className="icon" />,
    title: 'App Deployment & Launch',
    content: `From app store submissions to server setups, we manage the complete deployment process, ensuring your app goes live smoothly and meets all platform guidelines and requirements.`
  },
  {
    icon: <FaCogs className="icon" />,
    title: 'Maintenance & Support',
    content: `Post-launch, we offer ongoing maintenance, updates, and optimization services to keep your app competitive, secure, and aligned with evolving user needs and market trends.`
  }
];

const Services = () => {
  return (
    <div className="services-section">
      <h1 className="main-title">Our App Development Services</h1>
      <p className="subtitle">End-to-End Mobile Solutions That Drive Innovation and Business Growth</p>
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

export default Services;
