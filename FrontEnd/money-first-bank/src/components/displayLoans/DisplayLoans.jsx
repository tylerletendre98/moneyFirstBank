import React from "react";
import "./displayLoans.css";
function DisplayLoans(props) {
  if (props.activeLoans.length === 0) {
    return (
      <div>
        <div>
          <h3>Active Loans</h3>
        </div>
        <div>
          <p>You do not have any loans with us</p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <div>
            <h3>Active Loans</h3>
          </div>
        </div>
        {props.activeLoans.map((loan) => {
          return (
            <div className="display-loans-container" key={loan._id}>
              <div>
                <div className="loan-detail">
                  <p>Loan Number: {loan._id}</p>
                </div>
                <div className="loan-detail">
                  <p>Loan type: {loan.type}</p>
                </div>
                <div className="loan-detail">
                  <p>Remaining Balance: ${loan.remainingBalance}</p>
                </div>
                <div className="loan-detail">
                  <p>Monthly Payment: ${loan.monthlyPayment}</p>
                </div>
                <div className="payments-button">
                  <button>View Payments</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default DisplayLoans;
