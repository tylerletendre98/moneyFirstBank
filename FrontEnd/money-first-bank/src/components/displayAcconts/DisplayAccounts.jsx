import React from "react";
import AddAccountForm from "../addAccountForm/AddAccountForm";
import { Link } from "react-router-dom";
import "./displayAccounts.css";

function DisplayAccounts(props) {
  if (props.creatingAccount === false && props.accounts.length === 0) {
    return (
      <div>
        <div>
          <h3>Members accounts</h3>
        </div>
        <div>
          <p>You have no current accounts</p>
        </div>
        <div className="new-account-button">
          <button onClick={() => props.setCreatingAccount(true)}>
            Click here to make new account
          </button>
        </div>
      </div>
    );
  } else if (props.creatingAccount === false) {
    return (
      <div>
        <div>
          <h3>Members accounts</h3>
        </div>
        <div>
          {props.accounts.map((account) => {
            if (account.isApproved === false) {
              return (
                <div>
                  <div>
                    <p>Account number: {account._id}</p>
                  </div>
                  <div>
                    <p>Account status: Pending approval</p>
                  </div>
                </div>
              );
            } else {
              return (
                <div key={account._id} className="account-container">
                  <div>
                    <p>Account Number: {account._id}</p>
                  </div>
                  <div>
                    <p>Account Type: {account.type}</p>
                  </div>
                  <div>
                    <p>Account balance: ${account.balance}</p>
                  </div>
                  <div>
                    <div>
                      <p>
                        Number of transactions on account:{" "}
                        {account.transactions.length}
                      </p>
                    </div>
                    <div>
                      <Link to="/transactionsPage">
                        <button
                          onClick={() =>
                            props.setUsersTransactions(account.transactions)
                          }
                        >
                          View Transactions
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="new-account-button">
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
              <div key={account._id} className="account-container">
                <div>
                  <p>Account Type: {account.type}</p>
                </div>
                <div>
                  <p>Account balance: ${account.balance}</p>
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
