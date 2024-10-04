import React from "react";
import "./InnovativeSolutions.css"; // Import the updated CSS for the styling

const InnovativeSolutions = () => {
  return (
    <section className="innovative-solutions" id="innovative-solutions">
      <div className="innovative-solutions-section">
        <h3 className="innovative-heading">
          Our Innovative Solutions to <span>Reduce Dropout Rates</span>
        </h3>

        <div className="solution-boxes">
          {/* AI-Driven Early Warning System */}
          <div className="solution-box purple-box">
            <h5>AI-Driven Early Warning System</h5>
            <p>
              Our AI-Driven Warning System uses machine learning to monitor
              student data in real-time, tracking attendance, grades, and
              emotional well-being. It identifies students who may be at risk
              and generates detailed reports each quarter. These reports are
              shared with educators and district authorities, allowing for
              proactive support and timely interventions.
            </p>
          </div>

          {/* Centralized System */}
          <div className="solution-box yellow-box">
            <h5>Centralized System</h5>
            <p>
              The Centralized System connects all educational modules to ensure
              smooth communication among students, teachers, and authorities. It
              uses AI to generate a monthly list of at-risk students, which is
              shared with government bodies for action. This list is then sent
              back to schools for immediate intervention, making sure students
              receive the support they need, preventing dropouts.
            </p>
          </div>

          {/* Edu-Lance & Freelance Platforms */}
          <div className="solution-box red-box">
            <h5>Edu-Lance & Freelance Platforms</h5>
            <p>
              Our Freelancing Platform offers students the chance to gain
              real-world experience while still in school. EduLance connects
              younger students with educational projects, helping them earn
              credits and build their portfolios, while older students benefit
              from local job opportunities, preparing for future careers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovativeSolutions;
