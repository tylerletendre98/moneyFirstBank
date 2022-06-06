import React from "react";
import Login from "../components/login/Login";
import CreateNewAccountForm from "../components/createNewAccountFrom/CreateNewAccountForm";

function LoginPage(props) {
  console.log(props.creatingNewUser);
  if (props.creatingNewUser === true) {
    return (
      <div>
        <CreateNewAccountForm createNewUser={props.createNewUser} setCreatingNewUser={props.setCreatingNewUser}/>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <Login loginUser={props.loginUser} />
        </div>
        <div onClick={() => props.setCreatingNewUser(!props.creatingNewUser)}>
          <p style={{ cursor: "pointer" }}>
            Click here to create a new account
          </p>
        </div>
      </div>
    );
  }
}

export default LoginPage;
