import React from 'react';
import './CoreValues.css';
import {
  FaServer,
  FaPuzzlePiece,
  FaUsers,
  FaLightbulb,
  FaCode,
  FaGem
} from 'react-icons/fa';

const CoreValues = () => {
  return (
    <section className="values-section">
      <div className="values-container">
        
        <div className="values-grid">
          
          {/* Row 1 - Column 1: Intro Heading */}
          <div className="value-heading-box">
            <h2 className="value-section-title">
              Driving Innovation and Success, the Nexlifly Way
            </h2>
          </div>

          {/* Row 1 - Column 2: Card 1 */}
          <div className="value-card">
            <div className="value-card-header">
              <h3 className="value-title">Engineering Excellence</h3>
              <FaServer className="value-icon" />
            </div>
            <p className="value-desc">
              We bring precision, performance, and pride to everything we build. Every solution is crafted to scale, adapt, and deliver measurable impact, core principles that define our company.
            </p>
          </div>

          {/* Row 1 - Column 3: Image 1 */}
          <div className="value-image-box">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Team working on laptop" 
              className="value-img"
            />
          </div>

          {/* Row 2 - Column 1: Card 2 */}
          <div className="value-card">
            <div className="value-card-header">
              <h3 className="value-title">Integrity First</h3>
              <FaPuzzlePiece className="value-icon" />
            </div>
            <p className="value-desc">
              We do what's right, not what's easy. Honesty, accountability, and ethical choices are non-negotiable in how we work and how we lead.
            </p>
          </div>

          {/* Row 2 - Column 2: Card 3 */}
          <div className="value-card">
            <div className="value-card-header">
              <h3 className="value-title">Customer Obsession</h3>
              <FaUsers className="value-icon" />
            </div>
            <p className="value-desc">
              Our clients' success is our north star. We listen deeply, move with purpose, and partner for the long term, solving problems that matter most.
            </p>
          </div>

          {/* Row 2 - Column 3: Card 4 */}
          <div className="value-card">
            <div className="value-card-header">
              <h3 className="value-title">Innovation with Intent</h3>
              <FaLightbulb className="value-icon" />
            </div>
            <p className="value-desc">
              We push boundaries, but always with purpose. Whether it's AI, cloud, or product strategy, we apply emerging tech to solve real-world challenges.
            </p>
          </div>

          {/* Row 3 - Column 1: Card 5 */}
          <div className="value-card">
            <div className="value-card-header">
              <h3 className="value-title">Purpose Beyond Code</h3>
              <FaCode className="value-icon" />
            </div>
            <p className="value-desc">
              We build with impact in mind for our communities, our planet, and the future we share. Progress means doing good, not just doing well.
            </p>
          </div>

          {/* Row 3 - Column 2: Card 6 */}
          <div className="value-card">
            <div className="value-card-header">
              <h3 className="value-title">People at the Core</h3>
              <FaGem className="value-icon" />
            </div>
            <p className="value-desc">
              At our company, we empower individuals to think boldly, lead confidently, and grow continuously. Great outcomes start with great people.
            </p>
          </div>

          {/* Row 3 - Column 3: Image 2 */}
          <div className="value-image-box">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Collaborative office environment" 
              className="value-img"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoreValues;
