import React from "react";
import "./displayLoanRequest.css";

function DisplayLoanRequests(props) {
  if(props.loansToBeApproved.length === 0){
    return(
      <div>
        <h3>There are no loans to be approved</h3>
      </div>
    )
  }else{
    
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
                <button onClick={()=>props.approveLoan(loan._id)}>Approve Loan</button>
                <button onClick={()=>props.denyLoan(loan._id)}>Deny Loan</button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default DisplayLoanRequests;
