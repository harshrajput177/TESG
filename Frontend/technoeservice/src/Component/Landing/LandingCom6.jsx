import '../../Style/Landing-css/LandingCom6.css';
import { ServiceCard } from './LandingCom7';
import {FaCloud,FaFacebook, FaLaptopCode, FaMobileAlt, FaMoneyBillWave, FaSearch, FaPaintBrush, FaChartLine, FaTools, FaShoppingCart } from 'react-icons/fa';


const ServiceSection = () => {
  return (
    <div className="LandingCom6-services-section">
      <div className="LandingCom6-services-header">
        <p className="LandingCom6-services-subtitle">[ OUR SERVICES ]</p>
        <h1 className="LandingCom6-services-title">Our Marketing Services</h1>
        <p className="LandingCom6-services-quote">
          Get the oars in the water and start rowing. Execution is the single biggest factor in achievement,
          the quicker you will get to the goals!
        </p>
      </div>
      <div className="LandingCom6-services-cards">
 <ServiceCard
  title="Web Development"
  description="We build fast, scalable, and responsive websites tailored to your business goals."
  icon={<FaLaptopCode />}
  link="/services/website-development"
  highlight
/>

<ServiceCard
  title="Web Design"
  description="Creative, user-friendly web designs that leave a lasting impression."
  icon={<FaPaintBrush />}
  link="/services/website-design"
/>

<ServiceCard
  title="App Development"
  description="From design to deployment, we craft mobile apps that deliver seamless user experiences."
  icon={<FaMobileAlt />}
  link="/services/android-app"
/>

<ServiceCard
  title="Website Hosting"
  description="Secure and scalable hosting solutions for your website."
  icon={<FaCloud />}
  link="/services/hosting"
/>

<ServiceCard
  title="Ecommerce Application"
  description="End-to-end ecommerce platforms that drive sales and deliver great shopping experiences."
  icon={<FaShoppingCart />}
  link="/services/ecommerce"
/>

<ServiceCard
  title="CRM Development"
  description="Custom CRM solutions that streamline your sales, support, and customer relationships."
  icon={<FaTools />}
  link="/services/crm"
/>

<ServiceCard
  title="SEO Optimization"
  description="Enhance your online presence and organic traffic with our expert SEO strategies."
  icon={<FaSearch />}
  link="/services/seo"
/>

<ServiceCard
  title="Social Media Marketing"
  description="Grow your brand on social media with targeted content and campaigns."
  icon={<FaFacebook />}
  link="/services/social-media"
/>

<ServiceCard
  title="Lead Generation"
  description="Generate quality leads to grow your business with proven strategies."
  icon={<FaChartLine />}
  link="/services/lead-gen"
/>

<ServiceCard
  title="PPC (Pay-Per-Click)"
  description="Boost your brand's visibility with targeted ad campaigns that drive results."
  icon={<FaMoneyBillWave />}
  link="/services/ppc"
/>


      </div>
    </div>
  );
};

export default ServiceSection;


