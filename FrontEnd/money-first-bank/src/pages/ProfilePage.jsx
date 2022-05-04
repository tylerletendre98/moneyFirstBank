import React from "react";

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
          <h1>loading</h1>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
