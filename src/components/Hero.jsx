import React, { useState, useEffect } from 'react';
import './Hero.css';
import { FaPlay, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const capabilities = [
  {
    tag: "Web Development",
    title: "Build High-Performance\nCustom Websites",
    desc: "End-to-end web development services from scalable architectures to responsive frontends. We build fast, secure, and modern web applications that drive engagement.",
    bgImage: "/web_dev_bg.png"
  },
  {
    tag: "App Development",
    title: "Next-Gen Mobile\nApp Experiences",
    desc: "Crafting intuitive and powerful mobile experiences for iOS and Android. From native to cross-platform applications, we bring your vision to users' fingertips.",
    bgImage: "/app_dev_bg.png"
  },
  {
    tag: "Software Development",
    title: "Custom Software Solutions\nBuilt to Scale",
    desc: "Robust, secure, and scalable custom software engineering tailored to your unique business operations and goals.",
    bgImage: "/software_dev_bg.png"
  },
  {
    tag: "AWS & DevOps",
    title: "Streamline Operations with\nAWS & DevOps",
    desc: "Accelerate deployment and enhance security with expert cloud infrastructure, CI/CD pipelines, and AWS management.",
    bgImage: "/aws_devops_bg.png"
  },
  {
    tag: "Hosting & Server Management",
    title: "Reliable Hosting &\nServer Infrastructure",
    desc: "Ensure 99.9% uptime with our secure, optimized hosting and proactive server management solutions designed for scale.",
    bgImage: "/hosting_bg.png"
  },
  {
    tag: "Digital Marketing",
    title: "Data-Driven Digital\nMarketing Strategies",
    desc: "Maximize your ROI and brand visibility through targeted SEO, content creation, and highly optimized paid advertising campaigns.",
    bgImage: "/marketing_bg.png"
  },
  {
    tag: "AI & RAG Chatbots",
    title: "Intelligent AI & RAG\nChatbot Integration",
    desc: "Revolutionize customer support and operations with state-of-the-art conversational AI and retrieval-augmented generation.",
    bgImage: "/ai_rag_bg.png"
  },
  {
    tag: "IVR Solutions",
    title: "Automate Communication\nwith Custom IVR",
    desc: "Seamlessly route calls and improve customer experience with smart, scalable Interactive Voice Response systems.",
    bgImage: "/ivr_bg.png"
  },
  {
    tag: "API Integrations",
    title: "Seamless Connectivity\nvia Smart APIs",
    desc: "Connect disparate systems and unlock new capabilities with secure, robust, and highly scalable API integrations.",
    bgImage: "/api_bg.png"
  },
  {
    tag: "E-Commerce Solutions",
    title: "Scalable & Secure\nE-Commerce Platforms",
    desc: "Drive sales with customized, high-converting online storefronts optimized for speed and seamless checkout experiences.",
    bgImage: "/ecommerce_bg.png"
  },
  {
    tag: "AI & Automation",
    title: "Transform Business with\nAI & Automation",
    desc: "Automate repetitive tasks, reduce costs, and enhance decision-making with powerful AI-driven enterprise workflows.",
    bgImage: "/automation_bg.png"
  },
  {
    tag: "Security & Maintenance",
    title: "Proactive Security &\nOngoing Maintenance",
    desc: "Protect your digital assets with comprehensive vulnerability monitoring, regular updates, and 24/7 technical support.",
    bgImage: "/security_bg.png"
  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % capabilities.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % capabilities.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? capabilities.length - 1 : prev - 1));
  };

  return (
    <section className="hero-section">
      <div 
        className="hero-background-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {capabilities.map((item, index) => (
          <div key={`bg-${index}`} className="hero-background">
            <img src={item.bgImage} alt={`${item.tag} Background`} />
            <div className="hero-overlay"></div>
          </div>
        ))}
      </div>
      
      <div className="hero-content-viewport">
        <div 
          className="hero-slides-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {capabilities.map((item, index) => (
            <div key={`content-${index}`} className="hero-slide">
              <div className="hero-content">
                <div className="hero-badge">{item.tag}</div>
                
                <h1 className="hero-title">
                  {item.title.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}<br />
                    </React.Fragment>
                  ))}
                </h1>
                
                <p className="hero-description">{item.desc}</p>
                
                <a href="#" className="hero-cta">
                  Explore Our {item.tag} Capabilities
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
