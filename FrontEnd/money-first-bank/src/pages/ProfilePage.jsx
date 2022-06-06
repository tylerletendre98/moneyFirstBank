import React from "react";
import { Link } from "react-router-dom";
import { ReactSpinner } from "react-spinning-wheel";
import "react-spinning-wheel/dist/style.css";
import DisplayUserInfo from "../components/displayUserInfo/DisplayUserInfo";
import DisplayAccounts from "../components/displayAcconts/DisplayAccounts";

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
  } else if (props.loggedInUser !== undefined) {
    return (
      <div>
        <div>
          <DisplayUserInfo userInfo={props.loggedInUser.fullName} />
        </div>
        <div>
          <DisplayAccounts
            accounts={props.loggedInUser.accounts}
            creatingAccount={props.creatingAccount}
            setCreatingAccount={props.setCreatingAccount}
            addAccount={props.addAccount}
            depositMoney={props.depositMoney}
            withdrawlMoney={props.withdrawlMoney}
            setUsersTransactions={props.setUsersTransactions}/>
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
