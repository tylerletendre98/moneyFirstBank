import React from "react";
import Login from "../../components/login/Login";
import CreateNewAccountForm from "../../components/createNewAccountFrom/CreateNewAccountForm";
import "./loginPage.css";
function LoginPage(props) {
  console.log(props.creatingNewUser);
  if (props.creatingNewUser === true) {
    return (
      <div className="creating-new-account-container">
        <div className="creating-account-title">
          <h2>Enter your information to create account</h2>
        </div>
        <div>
          <CreateNewAccountForm
            createNewUser={props.createNewUser}
            setCreatingNewUser={props.setCreatingNewUser}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="loginForm-container">
          <div>
            <Login loginUser={props.loginUser} />
          </div>
          <div
            onClick={() => props.setCreatingNewUser(!props.creatingNewUser)}
            className="createUser-container"
          >
            <p style={{ cursor: "pointer", textAlign: "center" }}>
              Click here to create a new account
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
