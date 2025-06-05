import React from 'react';
import imgtalk from '../../assets/tdesign_chat-bubble-smile-filled.svg';
import '../../Style/Landing-css/LandingCom1.css';
import  {useNavigate} from 'react-router-dom';
import brandHype from '../../assets/WhatsApp_Image_2025-05-21_at_15.15.29_1c9d830d-removebg-preview.png';
import imgbackground from '../../assets/v915-techi-025-l.jpg';

const HeroSection = () => {
   const navigate = useNavigate();

    const handleTalkClick = () => {
    navigate('/ContactUs');
  };

  return (
    <div className="hero-container">
    
       <img src={imgbackground} alt="" className='bg-video' />
      <div className="tesg-landing-1-hero-content">
        <div className="hero-left">
          <h1>
            Elevate your business with <br />
            our tailored <span  className='highlightsection'>marketing &<br /> recruitment solutions</span>
          </h1>
          <p>
            Elevate your brand’s online presence with our expert SEO solutions.
            We help you attract the right audience, improve search rankings.
          </p>
          <button className="talk-btn" onClick={handleTalkClick} >Talk to an Expert <img src={imgtalk} alt="" /></button>
        </div>
        <div className="hero-right">
          <img src={brandHype} alt="Brand Hype Chart" className="chart-img" />
 
        </div>
      </div>

    </div>
  );
};

export default HeroSection;
