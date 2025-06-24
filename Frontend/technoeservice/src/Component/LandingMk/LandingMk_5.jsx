import React from "react";
import "../../Style/LandingMk-css/LandingMk_5.css";
import img1 from '../../image/digital-marketing-agency-popular-services-removebg-preview.png';
import { FaCode, FaPencilRuler, FaSearch, FaBullseye, FaUsers, FaFacebookF } from 'react-icons/fa';

const HeroSection = () => {
const services = [
  {
    icon: <FaCode />,
    title: 'Web Development',
    description: 'Build fast, scalable, and responsive web applications tailored to your business goals.',
    color: '#4B7BEC',
    link: '/services/website-development'
  },
  {
    icon: <FaPencilRuler />,
    title: 'Web Design',
    description: 'Create stunning, user-friendly designs that engage your audience and reflect your brand.',
    color: '#FF6B6B',
    link: '/services/website-design'
  },
  {
    icon: <FaSearch />,
    title: 'Search Engine Optimization (SEO)',
    description: 'Boost your visibility on search engines and attract organic traffic that converts.',
    color: '#2ED573',
    link: '/services/seo'
  },
  {
    icon: <FaBullseye />,
    title: 'Pay-Per-Click (PPC)',
    description: 'Run targeted ad campaigns that deliver measurable ROI and high-quality leads.',
    color: '#FF9F1A',
    link: '/services/ppc'
  },
  {
    icon: <FaUsers />,
    title: 'Lead Generation',
    description: 'Capture, nurture, and convert prospects into loyal customers with effective strategies.',
    color: '#1DD1A1',
    link: '/services/lead-gen'
  },
  {
    icon: <FaFacebookF />,
    title: 'Social Media Marketing (SMM)',
    description: 'Engage and grow your audience through impactful content on all major social platforms.',
    color: '#576CBC',
    link: '/services/social-media'
  }
];


  return (
    <div className="bottom-service-nd-card">
      {/* Hero Banner Section */}
     <div className="services-container-uk">
  <div className="services-content-uk">
    <h1>Digital Solutions Tailored for Growth<br />at Gwi Techno E Service</h1>
    <p>
      At Gwi Techno E Service, we empower businesses with cutting-edge web development, creative design, and result-driven digital marketing. 
      From SEO and PPC to lead generation and social media management, our tailored solutions ensure your brand stands out and grows online.
    </p>
  </div>
  <div className="services-illustration-uk">
    <img src={img1} alt="Digital Agency Illustration" />
  </div>
</div>


      {/* Services Cards Section */}
      <div className="tesguk-card-container">
        {services.map((service, index) => (
          <div
            className="tesguk-card"
            key={index}
            style={{ '--hover-color': service.color }}
          >
            <div className="tesguk-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href={service.link}>Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
