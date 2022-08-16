import React from "react";
import DisplayTransactions from "../../components/displayTransactions/DisplayTransactions";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import './transactionsPage.css'


function TransactionsPage(props) {

  const [reversedUserTransactions, setReversedUserTransactions] = useState()

  useEffect(()=>{
    setReversedUserTransactions(props.usersTransactions.reverse())

  },[props.usersTransactions])

  return (
    <div className="transaction-page-container">
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
        <DisplayTransactions usersTransactions={reversedUserTransactions} />
      </div>

      </div>
    </div>
  );
}

export default TransactionsPage;
