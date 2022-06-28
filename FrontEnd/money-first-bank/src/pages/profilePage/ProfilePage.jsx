import React from "react";
import { Link } from "react-router-dom";
import { ReactSpinner } from "react-spinning-wheel";
import "react-spinning-wheel/dist/style.css";
import DisplayUserInfo from "../../components/displayUserInfo/DisplayUserInfo";
import DisplayAccounts from "../../components/displayAcconts/DisplayAccounts";
import TransferFundsForm from "../../components/transferFundsForm/TransferFundsForm";
import DepositForm from "../../components/depositFrom/DepositForm";
import WithdrawlForm from "../../components/withdrawlForm/WithdrawlForm";
import SideBar from "../../components/sideBar/SideBar";
import "./profilePage.css";

function ProfilePage(props) {
  if (props.loggedInUser === undefined) {
    return (
      <div>
        <div>
          <ReactSpinner />
        </div>
        <div>
          <Link to="/loginPage">
            <button>Try again</button>
          </Link>
        </div>
      </div>
    );
  } else if (props.loggedInUser.isApproved === false) {
    return (
      <div>
        <h3>Your account has not been approved yet</h3>
      </div>
    );
  } else if (
    props.loggedInUser !== undefined &&
    props.depositingMoney === true
  ) {
    return (
      <div>
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
                setUsersTransactions={props.setUsersTransactions}
              />
            </div>
            <div className="transfering-funds-form">
              <DepositForm
                depositMoney={props.depositMoney}
                depositingMoney={props.depositingMoney}
                setDepositingMoney={props.setDepositingMoney}
                loggedInUser={props.loggedInUser}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else if (
    props.loggedInUser !== undefined &&
    props.withdrawingMoney === true
  ) {
    return (
      <div>
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
                setUsersTransactions={props.setUsersTransactions}
              />
            </div>
            <div className="transfering-funds-form">
              <WithdrawlForm
                withdrawlMoney={props.withdrawlMoney}
                withdrawingMoney={props.withdrawingMoney}
                setWithdrawingMoney={props.setWithdrawingMoney}
                loggedInUser={props.loggedInUser}
              />
            </div>
          </div>
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
        <div>
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
        </div>
        <div className="sideBar-container">
          <SideBar
            transferingFunds={props.transferingFunds}
            setTransferingFunds={props.setTransferingFunds}
            depositingMoney={props.depositingMoney}
            setDepositingMoney={props.setDepositingMoney}
            withdrawingMoney={props.withdrawingMoney}
            setWithdrawingMoney={props.setWithdrawingMoney}
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
