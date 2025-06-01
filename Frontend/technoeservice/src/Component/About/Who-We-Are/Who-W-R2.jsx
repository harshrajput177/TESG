import React from 'react';
import '../../../Style/About-css/Who-We-are-css/Who-w2.css';

const data = [
  {
    icon: '➡️',
    title: 'Strategy-First Approach',
    text: 'Unstructured digital marketing campaigns turn successful brands into an also-ran. That is why we develop a robust digital marketing strategy for your unique business needs and goals. Tell us your vision, and we will create an online marketing plan that helps you achieve long-term success.',
  },
  {
    icon: '👤',
    title: 'Dedicated Experts and Account Managers',
    text: 'When you partner with us, you will be working with seasoned professionals committed to exceeding your expectations. We assign a dedicated digital marketing team and account manager to every client to facilitate clear and direct communication at your convenience.',
  },
  {
    icon: '⚙️',
    title: 'Multi-Industry Expertise',
    text: 'Our varied industry experience allows us to offer diverse skills and expertise in every project we handle. We have worked with thousands of businesses just like yours, in size and niche, so you can expect us to have an in-depth understanding of your specific needs, industry regulations and requirements.',
  },
  {
    icon: '🍪',
    title: 'No Cookie-Cutter Templates',
    text: 'To strengthen your brand reputation and ensure you stand out, we create superior logos, web designs, and marketing materials tailored to your business, avoiding one-size-fits-all templates.',
  },
  {
    icon: '📣',
    title: 'Full-Service Digital Marketing Solutions',
    text: 'Whether you need specific services or integrated digital marketing solutions, our web marketing team is equipped to help you meet your goals and grow your brand.',
  },
  {
    icon: '📊',
    title: 'Transparent Reporting',
    text: 'As your digital marketing partner, we ensure you stay on top of your campaign progress. Your success is our priority, and we provide detailed reporting and insights.',
  },
];

export default function ExpertiseSection() {
  return (
    <section className="expertise-section">
      <div className="container">
        <h1 className="headline">We Bring Years of Expertise and Industry Experience to Every Project</h1>
        <p className="description">With more businesses embracing digital transformation, you need a trusted web marketing firm that can help you navigate this changing landscape. We keep a close eye on everything to catapult your business ahead of the competition.</p>
        <div className="card-grid">
          {data.map((item, index) => (
            <div className="card" key={index}>
              <div className="icon">{item.icon}</div>
              <h2 className="card-title">{item.title}</h2>
              <p className="card-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
