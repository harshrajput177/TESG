import React from 'react';
import '../../../Style/Services-css/SMM-CSS/SmmCom4.css';
import { FaGoogle, FaBullseye, FaChartBar, FaRocket, FaClipboardCheck, FaRegMoneyBillAlt } from 'react-icons/fa';

const services = [
  {
    icon: <FaGoogle className="icon" />,
    title: 'Google Ads Management',
    content: `Boost your brand’s visibility on the world’s largest search engine. We create and manage Google Ads campaigns that drive targeted traffic, increase leads, and maximize your return on ad spend (ROAS).`
  },
  {
    icon: <FaBullseye className="icon" />,
    title: 'Targeted Ad Campaigns',
    content: `We design hyper-focused PPC campaigns to reach the right audience at the right time. From keyword selection to audience targeting, our strategy ensures every click brings value to your business.`
  },
  {
    icon: <FaChartBar className="icon" />,
    title: 'Campaign Tracking & Analytics',
    content: `Understand where every dollar goes. Our team sets up detailed tracking and reporting dashboards, giving you full visibility into your PPC performance and helping you make data-driven decisions.`
  },
  {
    icon: <FaRocket className="icon" />,
    title: 'Landing Page Optimization',
    content: `Drive conversions, not just clicks. We optimize your landing pages to ensure visitors turn into customers, using A/B testing, persuasive copy, and clear CTAs for better ROI.`
  },
  {
    icon: <FaClipboardCheck className="icon" />,
    title: 'Ad Copy & Creative Design',
    content: `We craft compelling ad copy and eye-catching creatives that grab attention and drive engagement. Our ads are designed to stand out across search, display, and social channels.`
  },
  {
    icon: <FaRegMoneyBillAlt className="icon" />,
    title: 'Budget & Bid Management',
    content: `We carefully manage your PPC budget, optimizing bids to ensure maximum results at the lowest possible cost. Our goal is to deliver high-quality traffic while staying within your budget.`
  }
];

const PPCCOM4 = () => {
  return (
    <div className="services-section">
      <h1 className="main-title">GWI PPC Management Services</h1>
      <p className="subtitle">Drive Targeted Traffic, Maximize ROI, and Grow Your Business with Expert PPC Campaigns</p>
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

export default PPCCOM4;
