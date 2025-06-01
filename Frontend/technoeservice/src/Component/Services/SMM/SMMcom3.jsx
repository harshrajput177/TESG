import React from 'react';
import '../../../Style/Services-css/SMM-CSS/SmmCom3.css';
import { FaClipboardList, FaComments, FaChartLine } from 'react-icons/fa';

const SocialMediaProcesses = () => {
  return (
    <div className="smp-container">
      <h1>Integrated Processes for Maximum Impact</h1>
      <p>
        Social media marketing entails more integrated processes to ensure an interconnectedness between your customer, your content and your company. Simply sharing links to your content or web pages on your social channels is not enough if you hope to achieve results for your social media activities.
      </p>
      <p>
        Aside from fully understanding and learning the social media management definition by heart, you should master its major processes, too. This will assist you in better understanding how to leverage social media marketing to gain a competitive advantage and effectively bolster your entire marketing strategy.
      </p>
      <p>Here’s what your social media management game plan must include:</p>

      <div className="smp-feature">
        <FaClipboardList className="smp-icon" />
        <div>
          <h3>Strategy Creation</h3>
          <p>
            The map or plan containing your social media goals, steps to achieve them, a corresponding timeline and metrics to track progress.
          </p>
          <p>
            The social media management definition isn't complete without a mention of strategy. It's the master plan, and it helps you visualize what business social media management looks like for you. Some major factors to consider are which platforms to capitalize on, who your audience is, what types of content to produce, what key performance indicators (KPIs) to measure and which social media management software to use.
          </p>
        </div>
      </div>

      <div className="smp-feature">
        <FaComments className="smp-icon" />
        <div>
          <h3>Inbound Engagement Monitoring</h3>
          <p>
            The process of responding to comments, questions and interactions with all social media content and profiles and continuing conversation initiated by fans.
          </p>
          <p>
            Studies show that an average of <strong>two-thirds of consumers desire a connection with brands.</strong> It makes sense, then, to strive to facilitate two-way communication every chance you get. This is true for all of your social platforms, even when you’re deploying Instagram management services or exploring TikTok management solutions using mostly video content.
          </p>
        </div>
      </div>

      <div className="smp-feature">
        <FaChartLine className="smp-icon" />
        <div>
          <h3>Analytics Monitoring</h3>
          <p>
            The gathering and checking of data against metrics to ensure the accomplishment of results.
          </p>
          <p>
            Let data drive your corporate, multi-location business or franchise social media management campaigns. You can track performance, identify areas of improvement and make informed decisions that maximize your marketing efforts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaProcesses;
