import React from "react";
import "./sideBar.css";

function SideBar(props) {
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
            onClick={() =>
              props.setTransferingFundsUserToUser(
                !props.transferingFundsUserToUser
              )
            }
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
          <button>Make a loan payment</button>
        </div>
        <div>
          <button>Apply for a loan</button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
