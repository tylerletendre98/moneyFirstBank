import React from "react";
import DisplayLoans from "../displayLoans/DisplayLoans";
import LoanPaymentForm from "../loanPaymentForm/LoanPaymentForm";
import './loans.css'

function Loans(props) {
  if(props.makingLoanPayment === true){
    return(
      <div>
        <div className="accounts-container-active">
          <div className="loans-payment-container">
            <DisplayLoans activeLoans={props.activeLoans} setUsersTransactions={props.setUsersTransactions}/>
            <LoanPaymentForm 
              accounts ={props.loggedInUser.accounts}
              activeLoans= {props.loggedInUser.activeLoans}
              makeLoanPayment = {props.makeLoanPayment}
              makingLoanPayment={props.makeLoanPayment}
              setMakingLoanPayment= {props.setMakingLoanPayment}
            />
          </div>
        </div>
      </div>
    )
  }else{
      return (
        <div className="loans-container">
          <DisplayLoans activeLoans={props.activeLoans} setUsersTransactions={props.setUsersTransactions}/>
        </div>
      );
  }
}

export default Loans;
