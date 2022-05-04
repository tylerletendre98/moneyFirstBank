import React from "react";
import DisplayUserInfo from "../components/displayUserInfo/DisplayUserInfo";
import DisplayAccounts from "../components/displayAcconts/DisplayAccounts";

function ProfilePage(props) {
  console.log(props);
  if (props.loggedInUser !== undefined) {
    return (
      <div>
        <div>
          <DisplayUserInfo userInfo = {props.loggedInUser.fullName}/>
        </div>
        <div>
          <DisplayAccounts accounts = {props.loggedInUser.accounts}/>
        </div>
      </div>
    );
  } else if (props.loggedInUser === undefined) {
    return (
      <div>
        <div>
          <h1>loading</h1>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
