import React from "react";

function AccountsToBeApproved(props) {
  const handleApprove = (accountId) => {
    props.approveAccount(accountId);
  };

  const handleDeny = (accountId) => {
    props.denyAccount(accountId);
  };
  return (
    <div>
      <div>
        {props.accountsToBeApproved.map((account) => {
          return (
            <div>
              <div>
                <h3>Account owner:{account.primaryAccountHolder}</h3>
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

export default AccountsToBeApproved;
