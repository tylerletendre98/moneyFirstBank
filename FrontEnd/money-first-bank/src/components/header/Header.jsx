import React from "react";
import { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header(props) {
  const [loggingIn, setLoggingIn] = useState(false);
  const [loggingInAdmin, setLoggingInAdmin] = useState(false);

  if (
    loggingIn === false &&
    loggingInAdmin === false &&
    props.loggedInUser === undefined
  ) {
    return (
      <div className="header-container">
        <div className="header-title">
          <h1>Money First Bank</h1>
        </div>
        <div className="header-buttons-container">
          <div>
            <div className="header-button">
              <Link to={"/adminLogin"}>
                <button onClick={() => setLoggingInAdmin(true)}>
                  Admin Login
                </button>
              </Link>
            </div>
          </div>
          <div className="header-button">
            <Link to={"/loginPage"}>
              <button onClick={() => setLoggingIn(true)}>Customer Login</button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else if (loggingInAdmin === true && props.admin === undefined) {
    return (
      <div className="header-container">
        <div className="header-title">
          <h1>Money First Bank</h1>
        </div>
        <div className="header-buttons-container">
          <div className="header-button">
            <Link to={"/"}>
              <button
                onClick={() => {
                  setLoggingInAdmin(!loggingInAdmin);
                }}
              >
                Home Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else if (loggingIn === true && props.loggedInUser === undefined) {
    return (
      <div className="header-container">
        <div className="header-title">
          <h1>Money First Bank</h1>
        </div>
        <div className="header-buttons-container">
          <div className="header-button">
            <Link to={"/"}>
              <button
                onClick={() => {
                  props.setCreatingNewUser(!props.setCreatingNewUser);
                  setLoggingIn(!loggingIn);
                }}
              >
                Home Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="header-container">
        <div className="header-title">
          <h1>Money First Bank</h1>
        </div>
        <div className="header-buttons-container">
          <div className="header-button">
            <Link to={"/"}>
              <button
                onClick={() => {
                  setLoggingIn(false);
                  props.setLoggedInUser(undefined);
                  props.setCreatingNewUser(false);
                }}
              >
                Logout
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
