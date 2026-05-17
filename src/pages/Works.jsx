import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Works.css';
import { FaArrowRight } from 'react-icons/fa';

// Import images from assets
import arkaImg from '../assets/projects/arka.png';
import prakritiImg from '../assets/projects/prakriti.png';

const projects = [
  {
    id: 1,
    title: 'ARKA - Space & Defense',
    category: 'Web Development',
    image: arkaImg,
    description: 'A high-fidelity corporate platform for ARKA, focusing on space and defense technology with a modern, dark aesthetic.',
    link: 'https://arka.org/'
  },
  {
    id: 2,
    title: 'The Prakriti Group',
    category: 'Web Development',
    image: prakritiImg,
    description: 'A professional enterprise website for The Prakriti Group, highlighting their diverse business portfolio and sustainability values.',
    link: 'https://theprakritigroup.com/'
  }
];


const Works = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="works-page">
      <section className="works-hero">
        <div className="works-container">
          <h1 className="works-title">Selected Works</h1>
        </div>
      </section>

      <section className="works-grid-section">
        <div className="works-container">
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image-wrap">
                  <img src={project.image} alt={project.title} className="project-img" />
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <h3 className="project-card-title">{project.title}</h3>
                      <p className="project-card-desc">{project.description}</p>
                      <a href={project.link || "#"} target="_blank" rel="noreferrer" className="view-project-btn">
                        View Project <FaArrowRight className="btn-icon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="works-cta">
        <div className="works-container">
          <div className="cta-box">
            <h2>Have a project in mind?</h2>
            <p>Let's build something extraordinary together.</p>
            <Link to="/contact-us" className="cta-btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Works;
