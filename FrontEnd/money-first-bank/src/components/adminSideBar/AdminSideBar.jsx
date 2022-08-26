import React from "react";

function AdminSideBar(props) {
  console.log(props.numberOfUsers)
  return (
    <div>
      <div>
        <h3>Bank Balance</h3>
        <p>${props.bankBalance}</p>
      </div>
    </div>
  );
}

export default AdminSideBar;
