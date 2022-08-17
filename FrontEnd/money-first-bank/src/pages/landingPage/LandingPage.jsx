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
      <div className="body-container">
        <div className="offer-container">
          <div>
            <h2>What we offer!</h2>
          </div>
          <div className="account-info-container">
            <div className="account-info-list">
              <ul>
                <li>Checking Accounts</li>
                <li>Savings Accounts</li>
                <li>No Fee Bank Transfers</li>
                <li>Member to Member transfers</li>
                <li>Loans</li>
                <li>More To Come...</li>
              </ul>
            </div>
            </div>
        </div>
        <div className="interest-rate-containers">
            <div>
              <h2>Current loan rates</h2>
            </div>
            <div className="loan-container">
              <div className="loan-title">
                <h3>Auto</h3>
              </div>
              <div className="loan-info">
                <div className="interest-rate-container">
                    <h4>Interest Rate: </h4>
                    <h3>4.9%</h3>
                </div>
                <div>
                  <h3>Term lengths:</h3>
                  <ul>
                    <li>48 months</li>
                    <li>60 months</li>
                    <li>72 months</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="loan-container">
              <div className="loan-title">
                <h3>Mortgage</h3>
              </div>
              <div className="loan-info">
                <div className="interest-rate-container">
                    <h4>Interest Rate: </h4>
                    <h3>3.5%</h3>
                </div>
                <div className="loan-term-container">
                  <h3>Term lengths:</h3>
                  <ul>
                    <li>15 years</li>
                    <li>30 years</li>
                  </ul>
                </div>
              </div>
              </div>
            <div className="loan-container">
              <div className="loan-title">
                <h3>Personal</h3>
              </div>
              <div className="loan-info">
              <div className="interest-rate-container">
                    <h4>Interest Rate: </h4>
                    <h3>12.5%</h3>
                </div>
              <div className="loan-term-container">
                <h3>Term lengths:</h3>
                  <ul>
                    <li>6 months</li>
                    <li>12 months</li>
                    <li>18 months</li>
                  </ul>
              </div>
              </div>
            </div>
        </div>
      </div>
      
    </div>
  );
}

export default LandingPage;
