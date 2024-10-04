// import React from "react";
// import "./Header.css";

// const Header = () => {
//   return (
//     <header className="site-header">
//       <div className="logo-container">
//         <a href="/" className="logo-link">
//           <img src="/images/logo.png" alt="InnovVidya Logo" className="logo" />
//         </a>
//         <span className="logo-text">InnovVidya</span>
//       </div>
//       <nav className="main-navigation">
//         <ul>
//           <li>
//             <a href="#hero-section" className="nav-link">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="#innovative-solutions" className="nav-link">
//               Solutions
//             </a>
//           </li>
//           <li>
//             <a href="#features" className="nav-link">
//               Features
//             </a>
//           </li>
//           <li>
//             <a href="#about-us" className="nav-link">
//               About Us
//             </a>
//           </li>
//           <li>
//             <a href="#footer" className="nav-link">
//               Contact Us
//             </a>
//           </li>
//         </ul>
//       </nav>
//       <div className="login-btn">
//         <a href="/login" className="btn btn-primary">
//           Login
//         </a>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from "react";
import "./Header.css";

const Header = ({ isLoginPage, onLoginClick }) => {
  return (
    <header className="site-header">
      <div className="logo-container">
        <a href="/" className="logo-link">
          <img src="/images/logo.png" alt="InnovVidya Logo" className="logo" />
        </a>
        <span className="logo-text">InnovVidya</span>
      </div>

      {!isLoginPage && (
        <nav className="main-navigation">
          <ul>
            <li>
              <a href="#hero-section" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#innovative-solutions" className="nav-link">
                Solutions
              </a>
            </li>
            <li>
              <a href="#features" className="nav-link">
                Features
              </a>
            </li>
            <li>
              <a href="#about-us" className="nav-link">
                About Us
              </a>
            </li>
            <li>
              <a href="#footer" className="nav-link">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      )}

      <div className="login-btn">
        {!isLoginPage ? (
          <button className="btn btn-primary" onClick={onLoginClick}>
            Login
          </button>
        ) : (
          <a href="/" className="btn btn-primary">
            Home
          </a>
        )}
      </div>
    </header>
  );
};

export default Header;
