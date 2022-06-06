import React from "react";
import DisplayTransactions from "../components/displayTransactions/DisplayTransactions";
import {Link} from 'react-router-dom'

function TransactionsPage(props) {
  return (
    <div>
      <h3>Transactions</h3>
      <div>
        <DisplayTransactions usersTransactions={props.usersTransactions}/>
      </div>
      <div>
        <Link to='/profilePage'>
          <button onClick={()=> props.setUsersTransactions(undefined)}>Back to accounts</button>
        </Link>
      </div>
    </div>
  )
}

export default TransactionsPage;
