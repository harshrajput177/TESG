import React from "react";
import "../../Style/Landing-css/LandingCom3.css";
import InsightsIcon from "@mui/icons-material/Insights";
import BuildIcon from "@mui/icons-material/Build";
import BarChartIcon from "@mui/icons-material/BarChart";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

const features = [
  {
    icon: <InsightsIcon style={{ fontSize: 40, color: "black", }} />,
    title: "Lead and Pipeline Management",
    desc: "Effortlessly track, prioritize, and nurture your leads for maximum impact",
  },
  {
    icon: <BuildIcon style={{ fontSize: 40 , color: "black",}} />,
    title: "Customizable Workflows",
    desc: "Tailor workflows to suit specific industries or business needs.",
  },
  {
    icon: <BarChartIcon style={{ fontSize: 40, color: "black", }} />,
    title: "Real-Time Analytics and Reporting",
    desc: "Get actionable insights on team performance and sales trends.",
  },
  {
    icon: <PeopleAltIcon style={{ fontSize: 40,  color: "black", }} />,
    title: "Customer Database Management",
    desc: "Centralize customer information for easy access and management.",
  },
  {
    icon: <NotificationsActiveIcon style={{ fontSize: 40,  color: "black", }} />,
    title: "Smart Automation",
    desc: "Automate follow-ups, reminders, and notifications.",
  },
  {
    icon: <PhoneIphoneIcon style={{ fontSize: 40,  color: "black", }} />,
    title: "Mobile Accessibility",
    desc: "Access your CRM on the go with a fully responsive mobile app.",
  },
];

const FeatureSection = () => {
  return (
    <section className="feature-section">
      <h2>
        <span className="highlight">Essential Features</span> Designed to Boost Productivity, Drive Sales, and Streamline Business Processes.
      </h2>
      <p className="description">
        Transform the way you work with tools that simplify lead management, enhance team collaboration, and accelerate sales.
        Our CRM equips you with everything you need to stay organized, productive, and ahead of the competition.
      </p>
      <button className="cta-button">Get Started Free</button>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            {feature.icon}
            <h4>{feature.title}</h4>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
