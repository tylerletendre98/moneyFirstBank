import React from "react";

function ProfilePage(props) {
  if (props.responseStatus === 200) {
    return (
      <div>
        <h1>thankyou for logging in</h1>
      </div>
    );
  } else if (props.responseStatus === 500) {
    return (
      <div>
        <h1>username or password was wrong</h1>
      </div>
    );
  }
}

export default ProfilePage;
