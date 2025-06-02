import React from 'react';
import '../../../Style/Services-css/SMM-CSS/SmmCom4.css';
import { FaSearch, FaSitemap, FaFileAlt, FaExternalLinkAlt, FaChartLine, FaMobileAlt } from 'react-icons/fa';

const services = [
  {
    icon: <FaSearch className="icon" />,
    title: 'Keyword Research & Strategy',
    content: `We identify the most valuable keywords for your business to target, ensuring your site ranks for searches that drive qualified traffic and boost your visibility on search engines.`
  },
  {
    icon: <FaSitemap className="icon" />,
    title: 'Technical SEO',
    content: `From site speed optimization to crawlability and indexation, we ensure your website’s technical foundation supports strong search engine performance and delivers a smooth user experience.`
  },
  {
    icon: <FaFileAlt className="icon" />,
    title: 'On-Page SEO',
    content: `We optimize your website’s content, meta tags, headings, and internal linking to align with search engine best practices and improve your rankings for target keywords.`
  },
  {
    icon: <FaExternalLinkAlt className="icon" />,
    title: 'Off-Page SEO & Link Building',
    content: `Our team builds high-quality backlinks and boosts your website’s authority through ethical link-building strategies, helping you climb the rankings and stay ahead of competitors.`
  },
  {
    icon: <FaChartLine className="icon" />,
    title: 'SEO Analytics & Reporting',
    content: `Stay informed with detailed SEO performance reports. We track rankings, organic traffic, and conversions, using data to refine strategies and deliver continuous growth.`
  },
  {
    icon: <FaMobileAlt className="icon" />,
    title: 'Mobile SEO',
    content: `With mobile searches dominating, we ensure your website is fully optimized for mobile users, from responsive design to fast load times and mobile-friendly content.`
  }
];

const SeoCom4 = () => {
  return (
    <div className="services-section">
      <h1 className="main-title">GWI SEO Services</h1>
      <p className="subtitle">Boost Your Search Rankings, Drive Organic Traffic, and Grow Your Online Presence</p>
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

export default SeoCom4;
