import React from 'react';
import '../../../Style/Services-css/SMM-CSS/SmmCom3.css';
import { FaClipboardList, FaComments, FaChartLine } from 'react-icons/fa';

const WebDesignProcesses = () => {
  return (
    <div className="smp-container">
      <h1>Core Processes for Exceptional Web Design</h1>
      <p>
        Web design is more than just creating a visually appealing website — it’s about combining aesthetics, usability, and strategy to deliver a seamless experience for your visitors. A strong design process ensures your site not only looks good but also achieves your business goals.
      </p>
      <p>
        Understanding the key steps in web design helps you build a site that attracts users, keeps them engaged, and converts visitors into loyal customers.
      </p>
      <p>Here’s what an effective web design process should include:</p>

      <div className="smp-feature">
        <FaClipboardList className="smp-icon" />
        <div>
          <h3>Planning & Strategy</h3>
          <p>
            Defining project goals, understanding user needs, creating site architecture, and outlining the content structure.
          </p>
          <p>
            This phase includes wireframing layouts, mapping user journeys, and ensuring the design aligns with your brand identity and target audience, setting the foundation for a purposeful website.
          </p>
        </div>
      </div>

      <div className="smp-feature">
        <FaComments className="smp-icon" />
        <div>
          <h3>Design & Development</h3>
          <p>
            Crafting responsive designs, selecting color schemes, typography, and visual elements, followed by coding and implementation.
          </p>
          <p>
            Here, creative design meets technical execution — bringing layouts to life with HTML, CSS, JavaScript, and modern frameworks to ensure the site functions smoothly across devices.
          </p>
        </div>
      </div>

      <div className="smp-feature">
        <FaChartLine className="smp-icon" />
        <div>
          <h3>Testing & Optimization</h3>
          <p>
            Checking website performance, usability, and compatibility across browsers, then making improvements based on feedback.
          </p>
          <p>
            Continuous testing ensures your site loads fast, works well on all devices, and delivers a positive user experience, helping boost engagement and drive better results over time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebDesignProcesses;
