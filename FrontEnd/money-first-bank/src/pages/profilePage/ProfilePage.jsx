import React from "react";
import { Link } from "react-router-dom";
import { ReactSpinner } from "react-spinning-wheel";
import "react-spinning-wheel/dist/style.css";
import Accounts from "../../components/accounts/Accounts";
import ChangingUserInfo from "../../components/changingUserInfo/ChangingUserInfo";
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
  }else if(props.changingUserInfo === true){
    return(
      <div>
        <ChangingUserInfo loggedInUser={props.loggedInUser} updateUser={props.updateUser} changingUserInfo={props.changingUserInfo} setChangingUserInfo={props.setChangingUserInfo}/>
      </div>
    )
  }else if (props.loggedInUser.isApproved === false) {
    return (
      <div>
        <div>
          <h3>Sorry for the trouble!</h3>
        </div>
        <div>
          <p>
            Your account still has not been approved by our admin please check
            back again soon!
          </p>
        </div>
        <div className="login-button-container">
          <Link to="/loginPage">
            <button>Click here to go back to login page</button>
          </Link>
        </div>
      </div>
    );
  } else if (props.loggedInUser !== undefined) {
    return (
      <div className="page-container">
        <div className="accounts-loans-container">
          <div className="name-container">
            <div>
              <h2>{props.loggedInUser.fullName}</h2>
            </div>
            <div onClick={()=> props.setChangingUserInfo(!props.changingUserInfo)}>
              <p style={{cursor:"pointer"}}>Change my info</p>
            </div>
          </div>
          <div className="accounts-container">
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

          </div>
            <div className="loans">
              <Loans 
                activeLoans={props.loggedInUser.activeLoans} 
                makeLoanPayment={props.makeLoanPayment} 
                makingLoanPayment={props.makingLoanPayment} 
                setMakingLoanPayment={props.setMakingLoanPayment}
                loggedInUser={props.loggedInUser}
                setUsersTransactions={props.setUsersTransactions}
              />
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
            makingLoanPayment={props.makingLoanPayment}
            setMakingLoanPayment={props.setMakingLoanPayment}
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
