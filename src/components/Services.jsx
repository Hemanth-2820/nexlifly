import React from 'react';
import './Services.css';
import { 
  FaCode, 
  FaMobileAlt, 
  FaLaptopCode, 
  FaCloud, 
  FaServer, 
  FaBullhorn, 
  FaRobot, 
  FaPhoneAlt, 
  FaLink, 
  FaShoppingCart, 
  FaCogs, 
  FaShieldAlt, 
  FaArrowRight 
} from 'react-icons/fa';

const servicesList = [
  {
    icon: <FaCode />,
    title: "Web Development",
    desc: "We build high-performance, custom websites that are responsive, secure, and fully optimized to drive your digital presence and core business operations."
  },
  {
    icon: <FaMobileAlt />,
    title: "App Development",
    desc: "Building intuitive, powerful mobile applications tailored for both iOS and Android. We deliver native-level speed with seamless end-user experiences."
  },
  {
    icon: <FaLaptopCode />,
    title: "Software Development",
    desc: "Robust, enterprise-grade custom software engineering architectures designed explicitly to scale alongside your operations and eliminate legacy bottlenecks."
  },
  {
    icon: <FaCloud />,
    title: "AWS & DevOps",
    desc: "Streamlined cloud infrastructures powered by CI/CD deployment strategies, maximizing deployment speeds while prioritizing top-level server health."
  },
  {
    icon: <FaServer />,
    title: "Hosting & Server Management",
    desc: "Proactive hosting optimization coupled with 24/7 server health monitoring systems, keeping your software stack operating at peak efficiency without downtime."
  },
  {
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    desc: "Results-focused search engine visibility architectures, targeted paid acquisitions, and brand expansion models that demonstrably elevate marketing ROI."
  },
  {
    icon: <FaRobot />,
    title: "AI & RAG Chatbots",
    desc: "Sophisticated automated AI companions featuring Retrieval-Augmented Generation to deliver hyper-contextual responses for enterprise automation."
  },
  {
    icon: <FaPhoneAlt />,
    title: "IVR Solutions",
    desc: "Intelligent Interactive Voice Response pathways that organize inbound traffic, dramatically improving speed to resolution and communications efficiency."
  },
  {
    icon: <FaLink />,
    title: "API Integrations",
    desc: "Engineered to bridge disparate enterprise data ecosystems into unified functional stacks with top-tier security validation and speed optimization."
  },
  {
    icon: <FaShoppingCart />,
    title: "E-Commerce Solutions",
    desc: "Architecture tailored for transactional scalability, providing highly secure, high-converting virtual storefronts loaded with analytics tools."
  },
  {
    icon: <FaCogs />,
    title: "AI & Automation",
    desc: "Custom-engineered workflows configured to automate repeated data manipulations, resulting in accelerated task execution and operations cost reduction."
  },
  {
    icon: <FaShieldAlt />,
    title: "Security & Maintenance",
    desc: "Dynamic digital security frameworks featuring continuous vulnerability screening, routine upgrades, and robust protection for critical digital capital."
  }
];

const Services = () => {
  return (
    <section className="services-wrapper">
      {/* Left Section: Grid of Services */}
      <div className="services-left">
        <h2 className="services-section-heading">Core IT Services We Offer</h2>
        
        <div className="services-grid">
          {servicesList.map((service, idx) => (
            <div key={idx} className="service-card">
              <div className="service-icon-box">
                {service.icon}
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.desc}</p>
              <a href="#" className="service-explore-link">
                Explore {service.title} <FaArrowRight className="link-arrow" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section: Stationary Content */}
      <div className="services-right">
        <div className="services-sticky-content">
          <span className="services-subtitle">SERVICES</span>
          <h2 className="services-main-heading">
            Delivering Strategic Capabilities as a Trusted IT Services Company
          </h2>
          <p className="services-right-desc">
            We deliver end-to-end digital solutions that drive operational excellence, business agility, and sustained innovation. As a trusted provider of enterprise IT services, our capabilities span across critical transformation domains including Cloud, Cybersecurity, custom development, and Emerging Technologies—empowering organizations to stay ahead in a rapidly evolving digital ecosystem.
          </p>
          <p className="services-right-desc">
            Our integrated approach combines deep domain knowledge, engineering excellence, and scalable delivery models to solve complex business challenges and enable future-ready enterprises.
          </p>
          
          <div className="consultation-image-container">
            <img src="/consultation_img.png" alt="Consultation Service" />
          </div>

          <button className="btn-consultation" onClick={() => window.open('https://calendly.com/nexlifly2/30min', '_blank')}>
            Schedule a Consultation <FaArrowRight className="btn-consultation-arrow" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
