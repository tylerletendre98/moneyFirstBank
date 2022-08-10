import React from "react";
import DisplayTransactions from "../../components/displayTransactions/DisplayTransactions";
import { Link } from "react-router-dom";

function TransactionsPage(props) {
  return (
    <div>
      <h1>Transactions</h1>
      <div>
        <Link to="/profilePage">
          <button onClick={() => props.setUsersTransactions(undefined)}>
            Back to accounts
          </button>
        </Link>
      </div>
      <div>
        <DisplayTransactions usersTransactions={props.usersTransactions} />
      </div>
    </div>
  );
}

export default TransactionsPage;
