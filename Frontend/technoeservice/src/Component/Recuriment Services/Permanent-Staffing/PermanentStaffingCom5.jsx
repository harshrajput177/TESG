import React from "react";
import "../../../Style/RecurimentService-css/PermanentService-css/PermanentCom5.css";

const features = [
  {
    icon: "👥",
    title: "Access to a larger talent pool",
    description:
      "HiringGo has access to a vast pool of candidates from various sources such as job portals, social media, and referrals from past hired candidates.",
  },
  {
    icon: "💻",
    title: "Save time and effort",
    description:
      "By outsourcing your technical recruitment, you can save time, effort, and resources by letting us handle the recruitment process from screening to interviewing.",
  },
  {
    icon: "📊",
    title: "Flexibility and scalability",
    description:
      "With the help of our customized services, we can ensure that your business is provided with the best candidates to tackle the changing technical environment.",
  },
  {
    icon: "🌟",
    title: "Quality of hire",
    description:
      "We use comprehensive screening and assessment methods, including background checks, to ensure the candidate is best suited for the job.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="why-us-section">
      <h2>
        Why Use GWI <span className="highlight">Recruitment Agency</span>
        <span className="question">?</span>
      </h2>
      <div className="features-container">
        {features.map((item, index) => (
          <div key={index} className="feature-box">
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <div className="get-in-touch">Get in touch &rarr;</div>
    </section>
  );
};

export default WhyUsSection;