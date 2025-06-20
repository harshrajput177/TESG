import React from "react";
import "../../Style/LandingMk-css/LandingMk_2.css";
import teamImage from "../../image/transparent_1750245801_1106.svg";
import { FaBullseye, FaLightbulb, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { GiProgression } from "react-icons/gi";

const ServiceSection = () => {
  return (
    <div className="service-section-uk">
      <div className="service-header-uk">
        <div>
          <p className="service-subtitle-uk">ABOUT GWI DIGITAL</p>
          <h1>
            We Are Committed to Delivering <br /> Exceptional Digital Solutions
          </h1>
        </div>
        <div>
          <p className="service-description-uk">
            GWI is a full-service digital marketing agency with a passion for growth. 
            Backed by a skilled team and data-driven strategies, we help businesses of all sizes scale their online presence and generate real results.
          </p>
        </div>
      </div>

      <div className="service-content-uk">
        <div className="service-image-uk">
          <img src={teamImage} alt="Team Collaboration" />
        </div>

        <div className="service-features-uk">
          <div className="feature-box-uk">
            <div className="icon-uk purple-bg"><FaBullseye /></div>
            <div>
              <h3>Targeted Marketing</h3>
              <p>
                We use data insights to create personalized strategies that attract and convert your ideal customers efficiently.
              </p>
            </div>
          </div>

          <div className="feature-box-uk">
            <div className="icon-uk purple-bg"><FaLightbulb /></div>
            <div>
              <h3>Creative Campaigns</h3>
              <p>
                From unique content to eye-catching visuals, our creative team builds campaigns that leave a lasting impact.
              </p>
            </div>
          </div>

          <div className="feature-box-uk">
            <div className="icon-uk purple-bg"><GiProgression /></div>
            <div>
              <h3>Performance Tracking</h3>
              <p>
                Real-time analytics, measurable KPIs, and ongoing optimization to ensure consistent growth and ROI.
              </p>
            </div>
          </div>

          <div className="feature-box-uk">
            <div className="icon-uk purple-bg"><MdOutlineSecurity /></div>
            <div>
              <h3>Trusted & Transparent</h3>
              <p>
                With GWI, you get honest reporting, clear communication, and a partner you can rely on.
              </p>
            </div>
          </div>

          <div className="cta-section-uk">
            <button className="learn-more-btn-uk">LEARN MORE →</button>
            <div className="phone-contact-uk">
              <div className="icon-uk phone-icon"><FaPhoneAlt /></div>
              <div>
                <p>Call Us Now</p>
                <strong>+91-93840-12345</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
