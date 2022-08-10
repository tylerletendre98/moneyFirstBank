import React from "react";
import "./displayLoanRequest.css";

function DisplayLoanRequests(props) {
  return (
    <div>
      {props.loansToBeApproved.map((loan) => {
        return (
          <div className="loansToApprove-container">
            <div>
              <p>Requesters Name: {loan.loanOwner}</p>
            </div>
            <div>
              <p>Loan Type: {loan.type}</p>
            </div>
            <div>
              <p>Requesting Amount: ${loan.requestedAmount}</p>
            </div>
            <div>
              <p>
                Requester's Monthly Income: $
                {Math.round(loan.requestersMonthlyIncome)}
              </p>
            </div>
            <div>
              <p>Loan monthly payment: ${loan.monthlyPayment}</p>
            </div>
            <div>
              <button>Approve Loan</button>
              <button>Deny Loan</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayLoanRequests;
