// src/components/AboutUs.js
import React, { useState } from "react";
import "./AboutUs.css"; // Custom CSS for styles

const AboutUs = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section className="about-us" id="about-us">
      <div className="about-us-section">
        <h2 className="about-us-heading">About InnovVidya</h2>

        {/* Our Mission */}
        <div className="accordion">
          <div
            className="accordion-header"
            onClick={() => toggleSection("mission")}
          >
            <h3 className="about-us-subheading">
              Our Mission <span className="icon-sign">🔽</span>{" "}
              {/* Down arrow sign */}
            </h3>
          </div>
          {openSection === "mission" && (
            <div className="accordion-body">
              <p className="about-us-description">
                At InnovVidya, we aim to transform education by leveraging
                advanced technologies like AI, machine learning, and predictive
                analytics to significantly reduce dropout rates. Our platform
                ensures that every student, regardless of socio-economic
                background, has access to quality, personalized education.
              </p>
            </div>
          )}
        </div>

        {/* Our Vision */}
        <div className="accordion">
          <div
            className="accordion-header"
            onClick={() => toggleSection("vision")}
          >
            <h3 className="about-us-subheading">
              Our Vision <span className="icon-sign">🔽</span>{" "}
              {/* Down arrow sign */}
            </h3>
          </div>
          {openSection === "vision" && (
            <div className="accordion-body">
              <p className="about-us-description">
                We envision a future where dropout rates are dramatically
                minimized, with students excelling academically and personally.
                Through innovative learning pathways, early interventions, and
                practical skill development via our unique freelance platforms,
                InnovVidya strives to create a supportive educational ecosystem
                that empowers students to succeed.
              </p>
            </div>
          )}
        </div>

        {/* What We Do */}
        <div className="accordion">
          <div
            className="accordion-header"
            onClick={() => toggleSection("what-we-do")}
          >
            <h3 className="about-us-subheading">
              What We Do <span className="icon-sign">🔽</span>{" "}
              {/* Down arrow sign */}
            </h3>
          </div>
          {openSection === "what-we-do" && (
            <div className="accordion-body">
              <p className="about-us-description">
                InnovVidya combines cutting-edge technology with a deep
                understanding of education to tackle the most pressing
                challenges. Our AI-Driven Early Warning System, personalized
                learning modules, and financial aid management tools help
                students stay engaged and complete their education.
              </p>
            </div>
          )}
        </div>

        {/* YouTube Video Section */}
        <div className="video-container">
          <h3 className="about-us-subheading">Our Solutions Video</h3>
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/tuMrPEjZRF0" // Replace with your video link
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="InnovVidya Solutions"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
