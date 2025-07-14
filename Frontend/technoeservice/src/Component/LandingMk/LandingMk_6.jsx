import React from "react";
import "../../Style/LandingMk-css/LandingMk_6.css";
import  img1 from  '../../assets/ab163dc75af2b66f1448ae379d93552a.png'
import  img2 from  '../../assets/1577fe2e5d37cf2cdf40dca40c5b6f04.png'
import  img3 from  '../../assets/071a5900dda96a629903ed7035ff41f0-removebg-preview.png'
import  img4 from  '../../assets/d5ed166d3084cdeeeb0f0a06edca260c.png'
import  img5 from  '../../assets/997fe30ade1fb6710b63da7f29c9c51b-removebg-preview.png'
import  img6 from  '../../image/4.png';
import  img7 from  '../../image/5.png';
import  img8 from  '../../image/13.png';
import  img9 from  '../../image/7.png';
import  img10 from  '../../image/8.png';
import  img11 from  '../../image/9.png';
import  img12 from  '../../image/10.png';
import  img13 from  '../../image/11.png';
import  img14 from  '../../image/12.png';
import  img15 from  '../../image/6.png';
import  img16 from  '../../image/Screenshot 2025-06-03 160648.png';
import  img17 from  '../../image/Screenshot 2025-06-03 160726.png';
import  img18 from  '../../image/Screenshot 2025-06-03 163125.png';

const logos = [
  img1,
  img2,
  img3,

 
 img10,
  img11,

  img7,
    img9,
 
  img12,
   
      img13,
          img8,
        img4,
    
  
       img5,
  img15,

    img6,
 
 img14,

 img16,
 img17,
 img18

];

const BrandLogos = () => {
  return (
    <div className="uk-brand-logos-container">

   <div className="line-with-text">
  <div className="line"></div>
  <h1><span>Trusted - </span> By Leading Brands and Companies</h1>
  <div className="line"></div>
</div>


  <div  className="Clients-Content">
      <div className="logos-strip">
  {logos.map((logo, idx) => (
    <div key={idx} className="black-logo-box">
      <img src={logo} alt={`brand-${idx}`} className="Companies-logo-img" />
    </div>
  ))}
</div>

  </div>
    </div>
  );
};

export default BrandLogos;
