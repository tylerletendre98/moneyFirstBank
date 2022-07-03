import React from "react";

function AdminSideBar(props) {
  return (
    <div>
      <div>
        <h3>Number of Users</h3>
        <p>{props.numberOfUsers}</p>
      </div>
      <div>
        <h3>Bank Balance</h3>
        <p>${props.bankBalance}</p>
      </div>
    </div>
  );
}

export default AdminSideBar;
