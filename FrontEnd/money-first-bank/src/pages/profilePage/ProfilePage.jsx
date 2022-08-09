import React from "react";
import { Link } from "react-router-dom";
import { ReactSpinner } from "react-spinning-wheel";
import "react-spinning-wheel/dist/style.css";
import Accounts from "../../components/accounts/Accounts";
import Loans from "../../components/loans/Loans";
import SideBar from "../../components/sideBar/SideBar";
import "./profilePage.css";

function ProfilePage(props) {
  console.log(props);
  if (props.loggedInUser === undefined) {
    return (
      <div>
        <div className="invalid-login">
          <div>
            <ReactSpinner />
          </div>
          <div>
            <h4>{props.responseMessage}</h4>
          </div>
          <div className="login-button-container">
            <Link to="/loginPage">
              <button>Try again</button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else if (props.loggedInUser !== undefined) {
    return (
      <div className="page-container">
        <div className="accounts-loans-container">
          <div className="name-container">
            <h2>{props.loggedInUser.fullName}</h2>
          </div>
          <div>
            <Accounts
              accounts={props.loggedInUser.accounts}
              creatingAccount={props.creatingAccount}
              setCreatingAccount={props.setCreatingAccount}
              addAccount={props.addAccount}
              depositMoney={props.depositMoney}
              setUsersTransactions={props.setUsersTransactions}
              depositingMoney={props.depositingMoney}
              setDepositingMoney={props.setDepositingMoney}
              loggedInUser={props.loggedInUser}
              withdrawlMoney={props.withdrawlMoney}
              withdrawingMoney={props.withdrawingMoney}
              setWithdrawingMoney={props.setWithdrawingMoney}
              transferFunds={props.transferFunds}
              transferingFunds={props.transferingFunds}
              transferingFundsUserToUser={props.transferingFundsUserToUser}
              setTransferingFunds={props.setTransferingFunds}
              setTransferingFundsUserToUser={
                props.setTransferingFundsUserToUser
              }
              transferFundsUserToUser={props.transferFundsUserToUser}
            />
            <Loans activeLoans={props.loggedInUser.activeLoans} />
          </div>
        </div>
        <div className="sidebar-container">
          <SideBar
            setTransferingFunds={props.setTransferingFunds}
            transferingFundsUserToUser={props.transferingFundsUserToUser}
            setTransferingFundsUserToUser={props.setTransferingFundsUserToUser}
            setDepositingMoney={props.setDepositingMoney}
            setWithdrawingMoney={props.setWithdrawingMoney}
            depositingMoney={props.depositingMoney}
            withdrawingMoney={props.depositingMoney}
            transferingFunds={props.transferingFunds}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <ReactSpinner />
        </div>
      </div>
    );
  }
}

export default ProfilePage;
