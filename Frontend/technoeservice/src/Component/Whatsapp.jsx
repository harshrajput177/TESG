import React from 'react';
import '../Style/Whatsapp.css';
import whatsapp  from  "../image/Untitled design.svg"

const WhatsappFloat = () => {
  return (
    <a
      href="https://wa.me/9958926555"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={whatsapp}
        alt="WhatsApp"
      />
    </a>
  );
};

export default WhatsappFloat;
