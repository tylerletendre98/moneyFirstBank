import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './login.css'

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = {
      email: email,
      password: password,
    };
    props.loginUser(user);
  };
  return (
    <div className="login-container" >
        <div className="login-input">
          <label htmlFor="">Email:</label>
          <input
            type="text"
            name=""
            id=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login-input">
          <label htmlFor="">Password:</label>
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
