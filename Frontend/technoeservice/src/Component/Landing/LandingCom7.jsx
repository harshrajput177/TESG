// ServiceCard.js
import React from 'react';
import '../../Style/Landing-css/LandingCom6.css';

import { Link } from 'react-router-dom';

export const ServiceCard = ({ title, description, icon, highlight, link }) => {
  return (
    <Link to={link} className={`LandingCom6-service-card ${highlight ? 'highlight' : ''}`}>
      <div className="LandingCom6-service-icon">{icon}</div>
      <h3 className="LandingCom6-service-title">{title}</h3>
      <p className="LandingCom6-service-description">{description}</p>
      <div className="LandingCom6-service-arrow">→</div>
    </Link>
  );
};


