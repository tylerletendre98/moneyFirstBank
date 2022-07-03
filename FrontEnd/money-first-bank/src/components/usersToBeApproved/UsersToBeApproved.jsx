import React from "react";
import "./usersToBeApproved.css";

function UsersToBeApproved(props) {
  const handleApprove = (userId) => {
    props.approveUser(userId);
  };
  const handleDeny = (userId) => {
    props.denyUser(userId);
  };
  if (props.usersToBeApproved.length === 0) {
    return (
      <div>
        <h3>There are no users to be approved</h3>
      </div>
    );
  }
  return (
    <div>
      <div>
        {props.usersToBeApproved.map((user) => {
          return (
            <div>
              <div>
                <h3>{user.fullName}</h3>
              </div>
              <div>
                <p>{user.email}</p>
              </div>
              <div>
                <button onClick={() => handleApprove(user._id)}>
                  Approve User
                </button>
                <button onClick={() => handleDeny(user._id)}>Deny User</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UsersToBeApproved;
