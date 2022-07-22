import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header(props) {
  console.log(props.loggingInAdmin)
  console.log(props.loggingIn)
  console.log(props.loggedInUser)

  if((props.loggingIn ||
    props.loggingInAdmin === false) &&
    (props.loggedInUser || props.admin !== undefined)){
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
                  props.setLoggingIn(false);
                  props.setLoggedInUser(undefined);
                  props.setCreatingNewUser(false);
                  props.setLoggingInAdmin(false);
                  props.setAdmin(undefined)
                }}
              >
                Log Out
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }else if (
    props.loggingIn === false &&
    props.loggingInAdmin === false &&
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
                <button onClick={() => props.setLoggingInAdmin(true)}>
                  Admin Login
                </button>
              </Link>
            </div>
          </div>
          <div className="header-button">
            <Link to={"/loginPage"}>
              <button onClick={() => props.setLoggingIn(true)}>
                Customer Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else if (
    props.loggingIn ||
    (props.loggingInAdmin === true && props.loggedInUser === undefined)
  ) {
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
                  props.setLoggingIn(false);
                  props.setLoggingInAdmin(false);
                }}
              >
                Home Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
              }
}

export default Header;
