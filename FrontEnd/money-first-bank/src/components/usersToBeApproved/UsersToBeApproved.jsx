import React from "react";

function UsersToBeApproved(props) {
  const handleApprove = (userId) => {
    props.approveUser(userId);
  };
  const handleDeny = (userId) => {
    props.denyUser(userId);
  };
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
