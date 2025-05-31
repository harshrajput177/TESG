import '../../Style/Landing-css/LandingCom6.css';
import { ServiceCard } from './LandingCom7';

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
          title="Digital Marketing Strategies"
          description="We specialize in creating custom, responsive websites tailored to your business objectives."
          icon="📊"
          highlight
        />
        <ServiceCard
          title="Digital Content Management"
          description="We specialize in creating custom, responsive websites tailored to your business objectives."
          icon="⚙️"
        />
        <ServiceCard
          title="Digital Data Synchronization"
          description="We specialize in creating custom, responsive websites tailored to your business objectives."
          icon="☁️"
        />
           <ServiceCard
          title="Digital Data Synchronization"
          description="We specialize in creating custom, responsive websites tailored to your business objectives."
          icon="☁️"
        />
           <ServiceCard
          title="Digital Data Synchronization"
          description="We specialize in creating custom, responsive websites tailored to your business objectives."
          icon="☁️"
        />
           <ServiceCard
          title="Digital Data Synchronization"
          description="We specialize in creating custom, responsive websites tailored to your business objectives."
          icon="☁️"
        />
      </div>
    </div>
  );
};

export default ServiceSection;
