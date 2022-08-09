import React from "react";
import DisplayAccounts from "../displayAcconts/DisplayAccounts";
import WithdrawlForm from "../withdrawlForm/WithdrawlForm";
import DepositForm from "../depositFrom/DepositForm";
import TransferFundsForm from "../transferFundsForm/TransferFundsForm";
import TransferUserToUserForm from "../transferUserToUserForm/TransferUserToUserForm";

function Accounts(props) {
  if (props.loggedInUser.isApproved === false) {
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
      <div className="profile-container">
        <div className="accounts-container-active">
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
      <div className="profile-container">
        <div className="accounts-container-active">
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
        <div className="accounts-container-active">
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
  } else if (
    props.loggedInUser !== undefined &&
    props.transferingFundsUserToUser === true
  ) {
    return (
      <div className="profile-container">
        <div className="accounts-container-active">
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
              <TransferUserToUserForm
                loggedInUser={props.loggedInUser}
                transferingFundsUserToUser={props.transferingFundsUserToUser}
                setTransferingFundsUserToUser={
                  props.setTransferingFundsUserToUser
                }
                transferFundsUserToUser={props.transferFundsUserToUser}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else if (props.loggedInUser !== undefined) {
    return (
      <div className="profile-container">
        <div className="page-container">
          <div>
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
        </div>
      </div>
    );
  }
}

export default Accounts;
