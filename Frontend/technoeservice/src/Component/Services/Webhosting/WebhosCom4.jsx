import React from 'react';
import '../../../Style/Services-css/SMM-CSS/SmmCom4.css';
import { FaCode, FaMobileAlt, FaPaintBrush, FaCloud, FaLock, FaChartLine } from 'react-icons/fa';

const services = [
  {
    icon: <FaCloud className="icon" />,
    title: 'Reliable Cloud Hosting',
    content: `Experience lightning-fast and secure hosting powered by top-tier cloud infrastructure. We ensure 99.9% uptime, smooth scalability, and uninterrupted performance for your websites and apps.`
  },
  {
    icon: <FaLock className="icon" />,
    title: 'Advanced Security',
    content: `Our hosting services come with built-in SSL, DDoS protection, firewalls, and regular security patches to safeguard your data and maintain user trust.`
  },
  {
    icon: <FaChartLine className="icon" />,
    title: 'High-Speed Performance',
    content: `We use optimized server configurations, SSD storage, and caching to deliver ultra-fast load times. Perfect for SEO, user experience, and reducing bounce rates.`
  },
  {
    icon: <FaMobileAlt className="icon" />,
    title: '24/7 Technical Support',
    content: `Our expert support team is available round-the-clock to assist you with server issues, migrations, or performance tweaks – ensuring your site runs smoothly at all times.`
  },
  {
    icon: <FaCode className="icon" />,
    title: 'Developer-Friendly Environment',
    content: `From FTP and SSH access to one-click installs and staging environments, our hosting supports developers with full control and flexibility.`
  },
  {
    icon: <FaPaintBrush className="icon" />,
    title: 'Easy Management Dashboard',
    content: `Manage your domains, databases, emails, and backups effortlessly with our intuitive hosting control panel – perfect for beginners and pros alike.`
  }
];

const WebCom4 = () => {
  return (
    <div className="services-section">
      <h1 className="main-title">GWI Web Hosting Services</h1>
      <p className="subtitle">Secure, Scalable & Superfast Hosting Solutions Tailored for Your Business</p>
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
