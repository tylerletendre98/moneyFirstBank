import React from "react";
import AddAccountForm from "../addAccountForm/AddAccountForm";

function DisplayAccounts(props) {
  if (props.creatingAccount === false) {
    return (
      <div>
        <div>
          <h3>Members accounts</h3>
        </div>
        <div>
          {props.accounts.map((account) => {
            return (
              <div key={account._id}>
                <div>
                  <p>Account Number: {account._id}</p>
                </div>
                <div>
                  <p>Account Type: {account.type}</p>
                </div>
                <div>
                  <p>Account balance: {account.balance}</p>
                </div>
                <div>
                  <div>
                    <p>
                      Number of transactions on account:{" "}
                      {account.transactions.length}
                    </p>
                  </div>
                  <div>
                    <button>View Transactions</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <button onClick={() => props.setCreatingAccount(true)}>
            Click here to make new account
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <h3>Members accounts</h3>
        </div>
        <div>
          {props.accounts.map((account) => {
            return (
              <div key={account._id}>
                <div>
                  <p>Account Type: {account.type}</p>
                </div>
                <div>
                  <p>Account balance: {account.balance}</p>
                </div>
                <div>
                  <div>
                    <p>
                      Number of transactions on account:{" "}
                      {account.transactions.length}
                    </p>
                  </div>
                  <div>
                    <button>View Transactions</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <AddAccountForm
            creatingAccount={props.creatingAccount}
            setCreatingAccount={props.setCreatingAccount}
            addAccount={props.addAccount}
          />
        </div>
      </div>
    );
  }
}

export default DisplayAccounts;
