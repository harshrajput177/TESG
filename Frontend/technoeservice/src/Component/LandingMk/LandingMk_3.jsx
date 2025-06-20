import React from "react";
import { FaComments, FaSearch, FaChartLine } from "react-icons/fa";
import "../../Style/LandingMk-css/LandingMk_3.css";
import img_1 from '../../image/whychoose.png';

const MarketingServices = () => {
  return (
    <div className="marketing-container-uk">
      <div className="marketing-left-uk">
        <h4 className="service-subtitle-uk">Why Choose GWI</h4>
        <h1>
          Empowering Your Brand With <br />
          <span className="title-bold-uk">Result-Driven Digital Marketing</span>
        </h1>
        <p className="desc-uk">
          At GWI Digital Marketing, we combine creativity, strategy, and data to deliver marketing solutions that drive real growth. Whether you're a startup or an established business, we tailor our strategies to meet your unique goals.
        </p>

        <div className="service-item-uk">
          <FaComments className="why-icon-uk" />
          <div>
            <h3>Dedicated Client Communication</h3>
            <p>
              We believe in transparent, responsive, and personalized communication. Our team stays closely connected with you to ensure your vision is reflected in every campaign.
            </p>
          </div>
        </div>

        <div className="service-item-uk">
          <FaSearch className="why-icon-uk" />
          <div>
            <h3>Strategic SEO & Online Visibility</h3>
            <p>
              Our SEO experts boost your online presence through cutting-edge keyword strategies, content optimization, and technical enhancements to rank you higher and attract organic traffic.
            </p>
          </div>
        </div>

        <div className="service-item-uk">
          <FaChartLine className="why-icon-uk" />
          <div>
            <h3>Maximized ROI & Business Growth</h3>
            <p>
              From lead generation to conversion tracking, our marketing approach focuses on maximizing your return on investment and helping your brand grow consistently and sustainably.
            </p>
          </div>
        </div>
      </div>

      <div className="marketing-right-uk">
        <img src={img_1} alt="Why Choose GWI" />
      </div>
    </div>
  );
};

export default MarketingServices;

