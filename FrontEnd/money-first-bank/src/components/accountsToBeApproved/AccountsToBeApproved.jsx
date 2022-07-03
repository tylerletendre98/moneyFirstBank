import React from "react";
import "./accountsToBeApproved.css";

function AccountsToBeApproved(props) {
  const handleApprove = (accountId) => {
    props.approveAccount(accountId);
  };

  const handleDeny = (accountId) => {
    props.denyAccount(accountId);
  };
  if (props.accountsToBeApproved.length === 0) {
    return (
      <div>
        <h3>There are no accounts to be approved</h3>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          {props.accountsToBeApproved.map((account) => {
            return (
              <div className="unapproved-accounts-container">
                <div>
                  <p>Account owner: {account.primaryAccountHolder}</p>
                </div>
                <div>
                  <p>Account type: {account.type}</p>
                </div>
                <div>
                  <button onClick={() => handleApprove(account._id)}>
                    Approve Account
                  </button>
                  <button onClick={() => handleDeny(account._id)}>
                    Deny Account
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AccountsToBeApproved;
