import React from 'react';
import '../../Style/Landing-css/LandingCom4.css';
import  img1 from  '../../image/WhatsApp Image 2025-04-14 at 17.52.17_30852e87.jpg'
import  img2 from  '../../image/WhatsApp Image 2025-04-14 at 18.10.47_dc82cd7a.jpg'
import  img3 from  '../../image/Rectangle 23856-Vh6sWHkX.png'
import  img4 from  '../../image/2.jpg'
import  img5 from  '../../image/WhatsApp Image 2025-04-14 at 18.29.47_a21af3bf.jpg'
import  img6 from  '../../image/WhatsApp Image 2025-04-14 at 18.29.47_a21af3bf.jpg'


const teamMembers = [
  {
    name: "Anit Ankur",
    title: "Founder & CEO GWM-TESG\nChairman - Mount Litera Zee School Hazaribagh",
    image: img1,
  },
  {
    name: "Mukesh Kumar",
    title: "Co-Founder GWM-TESG\nFounder of MKWISE FINANCIAL LTD.",
    image: img2,
  },
  {
    name: "Navin Kumar",
    title: "Co-Founder GWM-TESG\nDirector - Mount Litera Zee School Bihta",
    image:img3,
  },
  {
    name: "Vineet Mahajan",
    title: "Director Operations",
    image: img4,
  },
  {
    name: "Jayant Kumar Thakur",
    title: "Digital Marketing Manager\n4+ Years of Experience",
    image: img5,
  },
  {
    name: "Kasturi Roy",
    title: "HR",
    image: img6,
  },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="team-heading">
        <h2>Our <span>Team Member</span></h2>
      </div>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="team-image" />
            <h3>{member.name}</h3>
            <p className="team-role">{member.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
