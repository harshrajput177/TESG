// HRServices.jsx
import React from 'react';
import '../../../Style/RecurimentService-css/HR-Services-css/HR-SR-Com2.css';
import { FaDollarSign, FaUserTie, FaProjectDiagram, FaSeedling } from 'react-icons/fa';

const services = [
  {
    icon: <FaDollarSign className="hr-services-Com2-icon" />,
    title: 'COMPENSATION CONSULTING',
  },
  {
    icon: <FaUserTie className="hr-services-Com2-icon" />,
    title: 'CORPORATE ETHICS PROGRAM',
  },
  {
    icon: <FaProjectDiagram className="hr-services-Com2-icon" />,
    title: 'LEADERSHIP TRAINING',
  },
  {
    icon: <FaSeedling className="hr-services-Com2-icon" />,
    title: 'TALENT ACQUISITION',
  },
];

const HRServices = () => {
  return (
    <section className="hr-services-Com2-section">
      <div className="hr-services-Com2-header">
        <h4 className="hr-services-Com2-subheading">CORE SERVICES</h4>
        <h1 className="hr-services-Com2-heading">
          We deliver HR outsourcing  services through an <br /> integrated technology
        </h1>
        <p className="hr-services-Com2-description">
          We offer comprehensive employment services such as payroll and benefits administration,
          HR management, and assistance with employer compliance.
        </p>
        <p className="hr-services-Com2-description">
          With Our Company as your strategic HR partner, you can focus on developing your products,
          services and employees, instead of HR.
        </p>
      </div>

      <div className="hr-services-Com2-grid">
        {services.map((service, index) => (
          <div className="hr-services-Com2-service-card" key={index}>
            {service.icon}
            <h3 className="hr-services-Com2-service-title">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HRServices;