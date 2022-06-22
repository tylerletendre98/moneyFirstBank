import React from "react";
import './landingPage.css'

function LandingPage() {
  return (
    <div className="landing-page-container">
      <div className="landing-page-titleHeader">
        <div >
          <h1>Money First Bank</h1>
        </div>
        <div>
          <h3>Banking online at the simplest form!</h3>
        </div>
      </div>
      <div className="account-into-container">
        <div>
          <h2>What we offer here at Money First</h2>
        </div>
        <div className="account-info-list">
          <ul>
            <li>Checking Accounts</li>
            <li>Savings Accounts</li>
            <li>No Fee Bank Transfers</li>
            <li>More To Come</li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}

export default LandingPage;
