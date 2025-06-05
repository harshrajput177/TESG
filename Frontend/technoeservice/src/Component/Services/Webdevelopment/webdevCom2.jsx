import React from 'react';
import '../../../Style/Services-css/SMM-CSS/SmmCom2.css';
import { FaCogs, FaLaptopCode, FaDatabase, FaMobileAlt } from 'react-icons/fa';
import { default as Card } from "@mui/material/Card";
import { default as CardContent } from "@mui/material/CardContent";
import { motion } from 'framer-motion';
import img1 from '../../../image/images.png';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    id: 1,
    icon: <FaLaptopCode size={40} color="#f57c00" />,
    title: 'Custom Website Design & Development',
    description:
      'Get a website built exactly how you envision — with custom layouts, features, and functionalities that perfectly match your brand and business goals.',
  },
  {
    id: 2,
    icon: <FaMobileAlt size={40} color="#f57c00" />,
    title: 'Responsive & Mobile-Friendly',
    description:
      'With most users browsing on mobile devices, we ensure your website looks and works flawlessly across all screen sizes and devices.',
  },
  {
    id: 3,
    icon: <FaDatabase size={40} color="#f57c00" />,
    title: 'Robust Backend & Database Integration',
    description:
      'From content management systems to e-commerce platforms, our web development services include secure backend solutions and seamless database management.',
  },
  {
    id: 4,
    icon: <FaCogs size={40} color="#f57c00" />,
    title: 'Optimized Performance & SEO',
    description:
      'We build fast-loading, SEO-optimized websites to improve user experience and help your business rank higher on search engines.',
  },
];

const WebDevelopment = () => {
  const navigate = useNavigate();

  const handleclick = ()=>{
    navigate('/ContactUs')
  }
  return (
    <div className="benefits-section">
      <motion.h1 
        className="benefits-title"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
      >
        Why Your Business Needs Professional Web Development
      </motion.h1>
      <p className="benefits-subtitle">
        Build a Powerful Online Presence with Custom Web Solutions
      </p>
      <p className="benefits-subtitle">
        In today’s digital age, a professional website is your business’s most valuable asset. It’s more than just an online presence — it’s a platform to engage customers, showcase your brand, and drive sales.
      </p>
      <p className="benefits-subtitle">
        Expert web development combines cutting-edge technology with creative design to deliver fast, responsive, and scalable websites tailored to your unique needs.
      </p>
      <p className="benefits-subtitle">
        Here’s why investing in professional web development will benefit your business:
      </p>

      <div className="benefits-grid">
        {features.map((item) => (
          <motion.div 
            key={item.id} 
            className="benefit-card"
            whileHover={{ scale: 1.05 }}
          >
            <Card className="benefit-card-inner">
              <CardContent>
                <div className="benefit-number">{item.icon}</div>
                <h3 className="benefit-title">{item.title}</h3>
                <p className="benefit-description">{item.description}</p>
                <button className="benefit-button" onClick={handleclick}>Enquire Now</button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WebDevelopment;
