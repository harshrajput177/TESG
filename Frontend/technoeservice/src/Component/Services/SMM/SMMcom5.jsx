import React from 'react';
import '../../../Style/Services-css/SMM-CSS/SmmCom5.css';
import { FaChartLine, FaStar, FaUserTie, FaBullseye, FaAward, FaFileAlt } from 'react-icons/fa';

const ThriveSocialMedia = () => {
  return (
    <div className="thrive-wrapper">
      <h1 className="heading">Why Choose GWI for Your Social Media Management</h1>
      <h2 className="subheading">Invest in Flexible Social Packages Customized To Meet Your Growth Goals</h2>
      <p className="description">
        More and more small-business owners are choosing to collaborate with experts, as social media management is no easy feat. It requires meticulous attention and time to master. Here at Thrive, we cater to your specifications, no matter your industry, size of business or budget.
      </p>
      <p className="description">
        We aim to pass on to clients the benefits of knowing the ins and outs of each process through our almost two decades’ worth of social media marketing background. Your search for "social media management near me" is over. Let our data-driven professionals manage and steer your social media accounts toward your desired results.
      </p>
      <p className="description">Below are some of the benefits you’ll enjoy:</p>

      <div className="benefits-grid">
        <div className="benefit-card">
          <FaChartLine className="icon" />
          <h3>Deliverable-Based Packages</h3>
          <p>
            From content and engagement to strategy and analytics, GWI manages small- and large-scale deliverables for clients each month. Our social media management agency does not skimp on the best tools and tactics to exceed your expectations.
          </p>
        </div>

        <div className="benefit-card">
          <FaStar className="icon" />
          <h3>Extensive Subject Matter Expertise</h3>
          <p>
            Get matched with the best strategists based on your needs. Both paid and organic teams offer expert skills across platforms like LinkedIn, Pinterest and more.
          </p>
        </div>

        <div className="benefit-card">
          <FaUserTie className="icon" />
          <h3>Dedicated Account Managers</h3>
          <p>
            Consider us your extended marketing team. Your AM provides detailed progress updates and is your go-to for anything related to your campaigns.
          </p>
        </div>

        <div className="benefit-card">
          <FaBullseye className="icon" />
          <h3>Sharp Trendspotting</h3>
          <p>
            We monitor trends and apply the most effective strategies to ensure your brand remains relevant and visible on all platforms.
          </p>
        </div>

        <div className="benefit-card">
          <FaAward className="icon" />
          <h3>“Quality Over Quantity” Focus</h3>
          <p>
            Our social media content teams use agile strategies to adapt to market changes and drive long-term growth by focusing on what truly matters.
          </p>
        </div>

        <div className="benefit-card">
          <FaFileAlt className="icon" />
          <h3>Semi-Monthly Reports</h3>
          <p>
            Stay informed with detailed mid-month and monthly reports. We offer insights, data access, and AM support to guide your campaigns effectively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThriveSocialMedia;
