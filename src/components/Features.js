// src/components/Features.js
// import React from "react";
// import "./Features.css"; // Import the custom CSS

// const features = [
//   {
//     title: "AI-Driven Early Warning System",
//     description:
//       "Our AI-powered solution tracks attendance, grades, and behavior to predict dropout risks and provides insights to prevent student disengagement.",
//     color: "#FF6F61", // Soft Coral
//   },
//   {
//     title: "Personalized Learning Paths",
//     description:
//       "Each student’s learning journey is tailored based on their progress and interests, ensuring a personalized and motivating learning experience.",
//     color: "#FFD700", // Gold
//   },
//   {
//     title: "Scholarship and Financial Aid Management",
//     description:
//       "Simplified financial aid discovery and application process with AI-driven assistance to ensure students get the support they need.",
//     color: "#32CD32", // Lime Green
//   },
//   {
//     title: "Virtual Mentoring and Counseling",
//     description:
//       "On-demand access to virtual mentors and emotional counselors to support students’ academic and personal development.",
//     color: "#6A5ACD", // Slate Blue
//   },
//   {
//     title: "Mobile Accessibility",
//     description:
//       "The platform is fully mobile-friendly, enabling students to access educational resources, mentors, and tools on any device, anywhere.",
//     color: "#1E90FF", // Dodger Blue
//   },
//   {
//     title: "Parental Engagement",
//     description:
//       "A dedicated portal allows parents to stay informed about their child’s academic progress and access resources to support learning.",
//     color: "#FFA07A", // Light Salmon
//   },
// ];

// const Features = () => {
//   return (
//     <section className="features" id="features">
//       <div className="features-section">
//         <h2 className="features-heading">Our Features</h2>
//         <div className="features-grid">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="feature-box"
//               style={{ backgroundColor: feature.color }}
//             >
//               <h3 className="feature-title">{feature.title}</h3>
//               <p className="feature-description">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;
import React from "react";
import "./Features.css"; // Import custom styles

const features = [
  {
    title: "AI-Driven Early Warning System",
    description:
      "Our AI-powered solution tracks attendance, grades, and behavior to predict dropout risks and provides insights to prevent disengagement.",
  },
  {
    title: "Personalized Learning Paths",
    description:
      "Tailors each student’s learning journey based on progress and interests for a personalized experience.",
  },
  {
    title: "Scholarship and Financial Aid Management",
    description:
      "Simplified financial aid application process to ensure students get the support they need.",
  },
  {
    title: "Virtual Mentoring and Counseling",
    description:
      "On-demand access to virtual mentors and counselors to support academic and personal development.",
  },
  {
    title: "Mobile Accessibility",
    description:
      "Fully mobile-friendly platform, enabling students to access resources on any device, anywhere.",
  },
  {
    title: "Parental Engagement",
    description:
      "A dedicated portal allows parents to stay informed about their child’s progress and support learning.",
  },
];

const Features = () => {
  return (
    <section className="features" id="features">
      <h2 className="features-heading">Our Key Features</h2>{" "}
      {/* Added Heading */}
      <div className="features-container">
        {features.map((feature, index) => (
          <div className="card" key={index}>
            <div className="card-inner">
              <div className="card-front">
                <h2>{feature.title}</h2>
              </div>
              <div className="card-back">
                <p>{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
