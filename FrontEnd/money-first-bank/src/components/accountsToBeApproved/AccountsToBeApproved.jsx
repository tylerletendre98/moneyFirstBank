import React from "react";

function AccountsToBeApproved(props) {
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
                <p>Account type:{account.accountType}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AccountsToBeApproved;
