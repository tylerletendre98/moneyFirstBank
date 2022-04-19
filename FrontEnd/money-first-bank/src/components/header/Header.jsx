import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="header-title">
        <h1>Money First Bank</h1>
      </div>
      <div className="header-buttons-container">
        <div className="header-button">
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
