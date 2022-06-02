import React, { useState } from "react";
import AddAccountForm from "../addAccountForm/AddAccountForm";
import DepositForm from "../depositFrom/DepositForm";
import WithdrawlForm from "../withdrawlForm/WithdrawlForm";

function DisplayAccounts(props) {
  const [depositingMoney, setDepositingMoney] = useState(false);
  const [withdrawingMoney, setWithdrawingMoney] = useState(false);

  if (props.creatingAccount === false && props.accounts.length === 0) {
    return (
      <div>
        <div>
          <h3>Members accounts</h3>
        </div>
        <div>
          <p>You have no current accounts</p>
        </div>
        <div>
          <button onClick={() => props.setCreatingAccount(true)}>
            Click here to make new account
          </button>
        </div>
      </div>
    );
  } else if (props.creatingAccount === false && depositingMoney === true) {
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
                    <DepositForm
                      setDepositingMoney={setDepositingMoney}
                      depositingMoney={depositingMoney}
                      account={account}
                      depositMoney={props.depositMoney}
                    />
                  </div>
                  <div>
                    <button>View Transactions</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (props.creatingAccount === false && withdrawingMoney === true) {
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
                    <WithdrawlForm
                      withdrawlMoney={props.withdrawlMoney}
                      account={account}
                      withdrawingMoney={withdrawingMoney}
                      setWithdrawingMoney={setWithdrawingMoney}
                    />
                  </div>
                  <div>
                    <button>View Transactions</button>
                  </div>
                </div>
              </div>
            );
          })}
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
                    <button
                      onClick={() => setDepositingMoney(!depositingMoney)}
                    >
                      Deposit Money
                    </button>
                    <button
                      onClick={() => setWithdrawingMoney(!withdrawingMoney)}
                    >
                      Withdrawl Money
                    </button>
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
