import React from "react";
import { Link } from "react-router-dom";
import { ReactSpinner } from "react-spinning-wheel";
import "react-spinning-wheel/dist/style.css";

function ProfilePage(props) {
  console.log(props);
  if (props.loggedInUser !== undefined) {
    return (
      <div>
        <h1>thankyou for logging in</h1>
      </div>
    );
  } else if (props.loggedInUser === undefined) {
    return (
      <div>
        <div>
          <ReactSpinner />
        </div>
        <div>
          <h3>{props.responseMessage.response.data}</h3>
          <Link to="/loginPage">
            <button>Try again</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
