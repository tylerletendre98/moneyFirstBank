import React from "react";
import Login from "../components/login/Login";
import { Link } from "react-router-dom";

function LoginPage(props) {
  return (
    <div>
      <div>
        <Login loginUser={props.loginUser} />
      </div>
      <div>
        <Link to="/createNewAccount">
          <p>Click here to create a new account</p>
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
