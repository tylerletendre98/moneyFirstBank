import React from "react";
import { Link } from "react-router-dom";
import "./sideBar.css";

function SideBar(props) {
  console.log(props.transferingFundsUserToUser);
  return (
    <div>
      <div className="sideBar-title">
        <h3>Account options</h3>
      </div>
      <div className="buttons-container">
        <div>
          <button
            onClick={() => props.setTransferingFunds(!props.transferingFunds)}
            style={{ cursor: "pointer" }}
          >
            Transfer Money
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              console.log("clicked");
              props.setTransferingFundsUserToUser(
                !props.transferingFundsUserToUser
              );
            }}
            style={{ cursor: "pointer" }}
          >
            Transfer Money User to User
          </button>
        </div>
        <div>
          <button
            onClick={() => props.setWithdrawingMoney(!props.withdrawingMoney)}
          >
            Withdraw Money
          </button>
        </div>
        <div onClick={() => props.setDepositingMoney(!props.depositingMoney)}>
          <button>Deposit Money</button>
        </div>
        <div>
          <button onClick={()=> props.setMakingLoanPayment(!props.makingLoanPayment)}>Make a loan payment</button>
        </div>
        <div>
          <Link to="/applyLoanPage">
            <button>Apply for a loan</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
