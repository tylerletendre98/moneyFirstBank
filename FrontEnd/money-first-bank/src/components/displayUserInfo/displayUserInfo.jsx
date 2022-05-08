import React from "react";

function DisplayUserInfo(props) {
  return (
    <div>
      <div>
        <h2>{props.userInfo}</h2>
      </div>
    </div>
  );
}

export default DisplayUserInfo;
