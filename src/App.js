// src/App.js
// import React from "react";
// import Header from "./components/Header"; // Import the Header component
// import HeroSection from "./components/HeroSection"; // Import the HeroSection component
// import InnovativeSolutions from "./components/InnovativeSolutions"; // Import the InnovativeSolutions component
// import Features from "./components/Features"; // Import the Features component
// import AboutUs from "./components/AboutUs"; // Import the AboutUs component

// function App() {
//   return (
//     <div className="App">
//       <Header /> {/* Render the Header component */}
//       <HeroSection /> {/* Render the HeroSection component */}
//       <InnovativeSolutions /> {/* Render the InnovativeSolutions component */}
//       <Features /> {/* Render the Features component */}
//       <AboutUs /> {/* Render the AboutUs component */}
//     </div>
//   );
// }

// export default App;
// src/App.js
// src/App.js
// import React from "react";
// import Header from "./components/Header"; // Import the Header component
// import HeroSection from "./components/HeroSection"; // Import the HeroSection component
// import InnovativeSolutions from "./components/InnovativeSolutions"; // Import the InnovativeSolutions component
// import Features from "./components/Features"; // Import the Features component
// import AboutUs from "./components/AboutUs"; // Import the AboutUs component
// import Footer from "./components/Footer"; // Import the Footer component

// function App() {
//   return (
//     <div className="App">
//       <Header /> {/* Render the Header component */}
//       <HeroSection /> {/* Render the HeroSection component */}
//       <InnovativeSolutions /> {/* Render the InnovativeSolutions component */}
//       <Features /> {/* Render the Features component */}
//       <AboutUs /> {/* Render the AboutUs component */}
//       <Footer /> {/* Render the Footer component */}
//     </div>
//   );
// }

// export default App;

// src/App.js
// import React from "react";
// import Header from "./components/Header"; // Import the Header component
// import HeroSection from "./components/HeroSection"; // Import the HeroSection component
// import InnovativeSolutions from "./components/InnovativeSolutions"; // Import the InnovativeSolutions component
// import Features from "./components/Features"; // Import the Features component
// import AboutUs from "./components/AboutUs"; // Import the AboutUs component
// import Footer from "./components/Footer"; // Import the Footer component

// function App() {
//   return (
//     <div className="App">
//       <Header /> {/* Render the Header component */}
//       <HeroSection /> {/* Render the HeroSection component */}
//       <InnovativeSolutions /> {/* Render the InnovativeSolutions component */}
//       <Features /> {/* Render the Features component */}
//       <AboutUs /> {/* Render the AboutUs component */}
//       <Footer /> {/* Render the Footer component */}
//     </div>
//   );
// }

// export default App;

// src/App.js
// import React, { useState } from "react";
// import Header from "./components/Header"; // Import the Header component
// import HeroSection from "./components/HeroSection"; // Import the HeroSection component
// import InnovativeSolutions from "./components/InnovativeSolutions"; // Import the InnovativeSolutions component
// import Features from "./components/Features"; // Import the Features component
// import AboutUs from "./components/AboutUs"; // Import the AboutUs component
// import Footer from "./components/Footer"; // Import the Footer component
// import LoginPage from "./pages/LoginPage"; // Import the LoginPage component

// function App() {
//   const [currentPage, setCurrentPage] = useState("landing"); // State to track current page

//   const renderPage = () => {
//     switch (currentPage) {
//       case "landing":
//         return (
//           <>
//             <HeroSection /> {/* Render the HeroSection component */}
//             <InnovativeSolutions />{" "}
//             {/* Render the InnovativeSolutions component */}
//             <Features /> {/* Render the Features component */}
//             <AboutUs /> {/* Render the AboutUs component */}
//           </>
//         );
//       case "login":
//         return <LoginPage />; // Render LoginPage when login button is clicked
//       default:
//         return <HeroSection />; // Default to landing page
//     }
//   };

//   return (
//     <div className="App">
//       <Header isLoginPage={currentPage === "login"} />{" "}
//       {/* Pass prop to Header to conditionally render elements */}
//       {renderPage()} {/* Conditionally render the page based on state */}
//       {currentPage !== "login" && <Footer />}{" "}
//       {/* Footer only visible on non-login pages */}
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import Header from "./components/Header"; // Import the Header component
import HeroSection from "./components/HeroSection"; // Import the HeroSection component
import InnovativeSolutions from "./components/InnovativeSolutions"; // Import the InnovativeSolutions component
import Features from "./components/Features"; // Import the Features component
import AboutUs from "./components/AboutUs"; // Import the AboutUs component
import Footer from "./components/Footer"; // Import the Footer component
import LoginPage from "./pages/LoginPage"; // Import the LoginPage component

function App() {
  const [currentPage, setCurrentPage] = useState("landing"); // State to track current page

  // Function to handle the login button click
  const handleLoginClick = () => {
    setCurrentPage("login"); // Set the current page to login when login button is clicked
  };

  // Function to render the appropriate page based on currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case "landing":
        return (
          <>
            <HeroSection /> {/* Render the HeroSection component */}
            <InnovativeSolutions />{" "}
            {/* Render the InnovativeSolutions component */}
            <Features /> {/* Render the Features component */}
            <AboutUs /> {/* Render the AboutUs component */}
          </>
        );
      case "login":
        return <LoginPage />; // Render LoginPage when login button is clicked
      default:
        return <HeroSection />; // Default to landing page
    }
  };

  return (
    <div className="App">
      <Header
        isLoginPage={currentPage === "login"}
        onLoginClick={handleLoginClick}
      />{" "}
      {/* Pass prop to Header to conditionally render elements and handle login button */}
      {renderPage()} {/* Conditionally render the page based on state */}
      {currentPage !== "login" && <Footer />}{" "}
      {/* Footer only visible on non-login pages */}
    </div>
  );
}

export default App;
