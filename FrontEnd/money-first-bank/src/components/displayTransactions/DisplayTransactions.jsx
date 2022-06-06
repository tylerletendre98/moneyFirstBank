import React from 'react'

function DisplayTransactions(props) {
  return (
    <div>
        <div>
            {props.usersTransactions.map((transaction)=>{
                return(
                    <div key={transaction._id}>
                        <div>
                            <p>Transaction Type: {transaction.transactionType}</p>
                        </div>
                        <div>
                            <p>Transaction Amount: {transaction.transactionAmount}</p>
                        </div>
                        <div>
                            <p>Transaction Date: {transaction.transactionDate}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default DisplayTransactions