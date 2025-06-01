import React from 'react';
import '../../../Style/Services-css/SMM-CSS/SmmCom4.css';
import { FaBullhorn, FaUsers, FaSearch, FaLaptop, FaRegCommentDots, FaTags } from 'react-icons/fa';

const services = [
  {
    icon: <FaBullhorn className="icon" />,
    title: 'Social Media Marketing',
    content: `Social platforms let you touch base with your target audience and promote your offerings at digital speed. But there’s a right way to boost your brand visibility and achieve your business goals, and it’s called social media marketing. Our social media management services include this process, which combines market research, strategy-building, consumer engagement and campaign-based social media marketing management.`
  },
  {
    icon: <FaTags className="icon" />,
    title: 'Social Media Advertising',
    content: `Choose the ad strategy that keeps 63 percent of consumers clicking: paid social advertising! Leverage this lucrative trend and devise the best social media management game plan with Thrive experts. We select the most relevant platforms where your target audience is found and create custom-built ads that appeal to them.`
  },
  {
    icon: <FaRegCommentDots className="icon" />,
    title: 'Social Media Brand Management',
    content: `What is social media management without brand management? From Facebook management to TikTok management, Thrive plans, executes and monitors organic and paid brand campaigns. Custom solutions enable you to establish a positive brand image and amplify reach.`
  },
  {
    icon: <FaUsers className="icon" />,
    title: 'Social Media Follower Growth',
    content: `Forrester data shows that 80 percent of customers want to interact with brands on social media. If you want to expand your market and grow social followers, our sustainable growth strategy helps. Our Facebook, Twitter and Instagram services include social invites and growth buttons.`
  },
  {
    icon: <FaSearch className="icon" />,
    title: 'Social Media SEO',
    content: `Point visitors to your site or secure visibility for your links in social search results. Proper social media SEO involves managing content, linking profiles and optimizing descriptions. Social media integration improves indexing in search engines.`
  },
  {
    icon: <FaLaptop className="icon" />,
    title: 'Website Design and Development',
    content: `When you send people from social pages to your site, ensure they find it easy to use. We ensure your website complies with ADA standards, is functional, responsive, mobile-first and conversion-focused.`
  }
];

const Services = () => {
  return (
    <div className="services-section">
      <h1 className="main-title">Thrive’s Social Media Management Services</h1>
      <p className="subtitle">Trends and Tactics You Can Trust to Deliver Qualified Leads</p>
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
