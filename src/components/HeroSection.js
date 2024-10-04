import React from "react";
import "./HeroSection.css"; // Importing CSS for styles and animations

const HeroSection = () => {
  return (
    <section className="hero-section" id="hero-section">
      <div className="hero-content">
        <h1 className="fade-in">
          {/* Revolutionizing <br /> Education to Reduce <br /> Dropout Rates */}
          <span className="indented">Revolutionizing</span> <br />
          Education to Reduce <br />
          <span className="indented">Dropout Rates</span>
        </h1>
        <p className="slide-in">
          Delivering quality education through AI-driven insights that identify
          and resolve dropout challenges, while fostering student engagement
          with innovative platforms like Edu-Lance and skill-based freelancing.
        </p>

        <div className="cta-buttons slide-in">
          <a
            href="#innovative-solutions"
            className="btn btn-secondary animated-cta"
          >
            Explore Innovative Solutions
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src="/images/hero-image.png" alt="Empowering Education" />
      </div>
    </section>
  );
};

export default HeroSection;
