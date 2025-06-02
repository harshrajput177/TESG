import React from 'react';
import '../../../Style/Services-css/SMM-CSS/SmmCom4.css';
import { FaCode, FaMobileAlt, FaPaintBrush, FaCloud, FaLock, FaChartLine } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode className="icon" />,
    title: 'Custom Web Development',
    content: `We build tailor-made websites that meet your business needs, using clean, scalable code. From e-commerce platforms to complex web applications, our team ensures your site is fast, reliable, and built for long-term success.`
  },
  {
    icon: <FaMobileAlt className="icon" />,
    title: 'Responsive Design',
    content: `Our mobile-first approach guarantees that your website looks and works beautifully across all devices. We design interfaces that provide seamless experiences, whether on desktop, tablet, or smartphone.`
  },
  {
    icon: <FaPaintBrush className="icon" />,
    title: 'UI/UX Design',
    content: `We craft visually stunning and user-friendly designs that engage visitors and guide them toward action. From wireframes to prototypes, we prioritize user experience at every stage of the design process.`
  },
  {
    icon: <FaCloud className="icon" />,
    title: 'Cloud Integration',
    content: `We help integrate cloud services into your web application, ensuring better scalability, security, and performance. Our solutions include cloud hosting, storage, and backup to keep your operations running smoothly.`
  },
  {
    icon: <FaLock className="icon" />,
    title: 'Website Security',
    content: `Protect your site and user data with our robust security solutions. We implement SSL, firewall protection, secure authentication, and regular vulnerability checks to keep your website safe.`
  },
  {
    icon: <FaChartLine className="icon" />,
    title: 'SEO & Performance Optimization',
    content: `We optimize your website for speed, search engine rankings, and conversion. From on-page SEO to performance tweaks, we ensure your site attracts traffic and delivers measurable results.`
  }
];

const WebCom4 = () => {
  return (
    <div className="services-section">
      <h1 className="main-title">GWI Web Development Services</h1>
      <p className="subtitle">Innovative Solutions to Build, Secure, and Grow Your Online Presence</p>
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

export default WebCom4;
