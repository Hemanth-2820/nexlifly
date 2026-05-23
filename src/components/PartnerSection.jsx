import React from 'react';
import './PartnerSection.css';
import { FaLinkedinIn } from 'react-icons/fa';

const partners = [
  {
    id: 1,
    name: "Saivinod Kotipalli",
    designation: "AWS DevOps Engineer — Cloud & DevSecOps",
    subheading: "From the desk of our AWS DevOps Engineer",
    bio: "An AWS DevOps Engineer with 2+ years at Tata Consultancy Services, Saivinod architects robust CI/CD pipelines, containerized deployments with Docker & Kubernetes, and cloud infrastructure with Terraform. Driven by a passion for DevSecOps, he builds secure, scalable, and high-performing systems that keep businesses ahead in the cloud era.",
    image: "/saivinod_photo.jpg",
    linkedin: "https://www.linkedin.com/in/saivinod-kotipalli-960aa61a0/",
  }
];

const PartnerSection = () => {
  return (
    <section className="partner-section-wrapper">
      <div className="partner-container">

        {/* Section Header */}
        <div className="partner-header">
          <h2 className="partner-main-title">
            Trusted Experts Who<br />Extend Our Reach
          </h2>
        </div>

        {/* Partner Rows — same layout as TeamSection */}
        <div className="partner-list">
          {partners.map((partner) => (
            <div className="partner-row" key={partner.id}>

              {/* Left — Photo Column */}
              <div className="partner-image-col">
                <div className="partner-image-box">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="partner-photo"
                  />
                  <div className="partner-abstract-corner">
                    <span className="p-corner-line p-line-h-1"></span>
                    <span className="p-corner-line p-line-h-2"></span>
                    <span className="p-corner-line p-line-h-3"></span>
                    <span className="p-corner-line p-line-v-1"></span>
                    <span className="p-corner-line p-line-v-2"></span>
                    <span className="p-corner-line p-line-v-3"></span>
                  </div>
                </div>
              </div>

              {/* Right — Info Column */}
              <div className="partner-info-col">
                <div className="partner-quote-box">
                  <span className="partner-quote-symbol">&#x201D;</span>
                </div>

                <h4 className="partner-desk-label">{partner.subheading}</h4>

                <p className="partner-bio-text">{partner.bio}</p>

                <div className="partner-footer-profile">
                  <h3 className="partner-member-name">{partner.name}</h3>
                  <span className="partner-member-designation">{partner.designation}</span>

                  <a
                    href={partner.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="partner-linkedin-btn"
                    aria-label={`${partner.name} LinkedIn`}
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PartnerSection;
