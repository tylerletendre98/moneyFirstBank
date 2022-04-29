import React from "react";
import Login from "../components/login/Login";

function LoginPage(props) {
  return (
    <div>
      <Login loginUser={props.loginUser} />
    </div>
  );
}

export default LoginPage;
