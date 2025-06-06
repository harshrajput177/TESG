import React from 'react';
import '../../../Style/Services-css/SMM-CSS/SmmCom4.css';
import { FaCode, FaMobileAlt, FaPaintBrush, FaCloud, FaLock, FaChartLine } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode className="icon" />,
    title: 'Custom E-commerce Development',
    content: `We build powerful and scalable e-commerce platforms tailored to your business goals. Whether it’s a single brand store or a multi-vendor marketplace, we develop secure, fast, and feature-rich online shopping experiences.`
  },
  {
    icon: <FaMobileAlt className="icon" />,
    title: 'Mobile-Friendly Shopping',
    content: `Our responsive e-commerce designs ensure a seamless shopping experience across all devices. From product browsing to checkout, your customers enjoy smooth navigation on mobiles and tablets.`
  },
  {
    icon: <FaPaintBrush className="icon" />,
    title: 'UI/UX for Online Stores',
    content: `We create visually appealing and user-friendly e-commerce interfaces that drive engagement and boost conversions. Our designs are optimized for product discovery, trust, and easy navigation.`
  },
  {
    icon: <FaCloud className="icon" />,
    title: 'Cloud-Based Infrastructure',
    content: `Enhance your store’s performance with our cloud integration solutions. We offer cloud hosting, real-time inventory sync, and automated backups to ensure uptime and scalability.`
  },
  {
    icon: <FaLock className="icon" />,
    title: 'Secure Payments & Data',
    content: `We implement top-tier security practices including SSL, secure payment gateways, data encryption, and user authentication to ensure safe transactions and customer data protection.`
  },
  {
    icon: <FaChartLine className="icon" />,
    title: 'E-commerce SEO & Conversion Optimization',
    content: `Our team boosts your online visibility with e-commerce-focused SEO and CRO strategies. We fine-tune your product pages, metadata, speed, and funnel flow to maximize traffic and sales.`
  }
];

const WebCom4 = () => {
  return (
    <div className="services-section">
      <h1 className="main-title">GWI E-commerce Development Services</h1>
      <p className="subtitle">Build, Launch, and Scale Your Online Store with Confidence</p>
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
