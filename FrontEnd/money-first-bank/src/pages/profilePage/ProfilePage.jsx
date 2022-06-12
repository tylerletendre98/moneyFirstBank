import React from "react";
import { Link } from "react-router-dom";
import { ReactSpinner } from "react-spinning-wheel";
import "react-spinning-wheel/dist/style.css";
import DisplayUserInfo from "../../components/displayUserInfo/DisplayUserInfo";
import DisplayAccounts from "../../components/displayAcconts/DisplayAccounts";
import TransferFundsForm from "../../components/transferFundsForm/TransferFundsForm";
import "./profilePage.css";

function ProfilePage(props) {
  if (props.loggedInUser === undefined && props.responseMessage !== undefined) {
    return (
      <div>
        <div>
          <ReactSpinner />
        </div>
        <div>
          <h3>{props.responseMessage.response.data}</h3>
          <Link to="/loginPage">
            <button>Try again</button>
          </Link>
        </div>
      </div>
    );
  } else if (
    props.loggedInUser !== undefined &&
    props.transferingFunds === true
  ) {
    return (
      <div className="profile-container">
        <div className="profile-name">
          <DisplayUserInfo userInfo={props.loggedInUser.fullName} />
        </div>
        <div className="accounts-container">
          <div className="transferingFunds-container">
            <div>
              <DisplayAccounts
                accounts={props.loggedInUser.accounts}
                creatingAccount={props.creatingAccount}
                setCreatingAccount={props.setCreatingAccount}
                addAccount={props.addAccount}
                depositMoney={props.depositMoney}
                withdrawlMoney={props.withdrawlMoney}
                setUsersTransactions={props.setUsersTransactions}
              />
            </div>
            <div className="transfering-funds-form">
              <TransferFundsForm
                loggedInUser={props.loggedInUser}
                transferingFunds={props.transferingFunds}
                setTransferingFunds={props.setTransferingFunds}
                transferFunds={props.transferFunds}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else if (props.loggedInUser !== undefined) {
    return (
      <div className="profile-container">
        <div className="profile-name">
          <DisplayUserInfo userInfo={props.loggedInUser.fullName} />
        </div>
        <div className="accounts-container">
          <DisplayAccounts
            accounts={props.loggedInUser.accounts}
            creatingAccount={props.creatingAccount}
            setCreatingAccount={props.setCreatingAccount}
            addAccount={props.addAccount}
            depositMoney={props.depositMoney}
            withdrawlMoney={props.withdrawlMoney}
            setUsersTransactions={props.setUsersTransactions}
          />
        </div>
        <div>
          <h3
            onClick={() => props.setTransferingFunds(!props.transferingFunds)}
            style={{ cursor: "pointer" }}
          >
            click here to transfer account funds
          </h3>
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