import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = {
      email: email,
      password: password,
    };
    props.loginUser(user);
    props.setLoggingIn(false);
  };
  return (
    <div className="login-container">
      <div>
        <h2>Enter your login information</h2>
      </div>
      <div className="login-input">
        <div>
          <label htmlFor="">Email:</label>
        </div>
        <input
          type="text"
          name=""
          id=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="login-input">
        <div>
          <label htmlFor="">Password:</label>
        </div>
        <input
          type="password"
          name=""
          id=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="login-button">
        <Link to="/profilePage">
          <button onClick={() => handleLogin()}>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
