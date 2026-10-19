
import { useState } from "react";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">Little Steps</div>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="login-btn"
          onClick={() => setShowLogin(!showLogin)}
        >
          {showLogin ? "Close" : "Login"}
        </button>
      </nav>

      {showLogin && (
        <div className="login-panel">
          <h2>Welcome to CareNest</h2>
          <p>Login functionality coming soon!</p>

          <button
            className="view-btn"
            onClick={() => setShowLogin(false)}
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}

export default Navbar;
