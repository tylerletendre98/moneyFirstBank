import React from "react";
import "./displayLoans.css";
import { Link } from "react-router-dom";
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
          if (loan.loanStatus === "pending approval") {
            return (
              <div className="display-loans-container">
                <div>
                  <p>Loan number: {loan._id}</p>
                </div>
                <div>
                  <p>Loan status: Pending approval</p>
                </div>
              </div>
            );
          } else if (loan.loanStatus === "approved") {
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
                    <Link to="/transactionsPage">
                      <button
                        onClick={() =>
                          props.setUsersTransactions(loan.transactions)
                        }
                      >
                        View Payments
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          } else if (loan.loanStatus === "denied") {
            return (
              <div className="display-loans-container">
                <div>
                  <p>Loan number: {loan._id}</p>
                </div>
                <div>
                  <p>Loan status: Loan denied</p>
                </div>
              </div>
            );
          }else if (loan.loanStatus === "closed") {
            return (
              <div className="display-loans-container">
                <div>
                  <p>Loan number: {loan._id}</p>
                </div>
                <div>
                  <p>Loan status: Loan closed: Paid off</p>
                </div>
                <div>
                <Link to="/transactionsPage">
                      <button
                        onClick={() =>
                          props.setUsersTransactions(loan.transactions)
                        }
                      >
                        View Payments
                      </button>
                    </Link>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default DisplayLoans;
