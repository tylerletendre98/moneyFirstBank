import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

function AdminLogin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const admin = {
      email: email,
      password: password,
    };
    props.loginAdmin(admin);
  };
  return (
    <div className="login-container">
      <div>
        <h2>Enter your login information</h2>
      </div>
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
        <Link to="/adminPage">
          <button onClick={() => handleLogin()}>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default AdminLogin;
