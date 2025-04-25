import React from 'react';
import imgtalk from '../../assets/tdesign_chat-bubble-smile-filled.svg';
import '../../Style/Landing-css/LandingCom1.css';
import brandHype from '../../assets/Graph 11.png';
import marchChart from '../../assets/Landingp2.svg';
import Videobackground from '../../assets/0563da3d8ee3152212af73bce324a0839b90c8bb.mp4';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video autoPlay muted loop className="bg-video">
        <source src={Videobackground} type="video/mp4" />
        {/* If using gif instead */}
        {/* <img src="/assets/bg-animation.gif" alt="background" className="bg-video" /> */}
      </video>

      <div className="hero-content">
        <div className="hero-left">
          <h1>
            Elevate your business with <br />
            our tailored <span  className='highlightsection'>marketing &<br /> recruitment solutions</span>
          </h1>
          <p>
            Elevate your brand’s online presence with our expert SEO solutions.
            We help you attract the right audience, improve search rankings.
          </p>
          <button className="talk-btn">Talk to an Expert <img src={imgtalk} alt="" /></button>
        </div>
        <div className="hero-right">
          <img src={brandHype} alt="Brand Hype Chart" className="chart-img" />
          <img src={marchChart} alt="March 2023 Chart" className="chart-img" />
        </div>
      </div>

      <div className="trusted-text">Trusted By Leading Brands and Companies</div>
    </div>
  );
};

export default HeroSection;
