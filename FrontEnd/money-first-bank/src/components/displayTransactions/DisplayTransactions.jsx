import React from 'react'
import './displayTransactions.css'
import { ReactSpinner } from "react-spinning-wheel";
function DisplayTransactions(props) {
    if(props.usersTransactions=== undefined){
        return(
            <ReactSpinner/>
        )
    }else if(props.usersTransactions.length === 0){
        return(
            <div className='transaction-container'>
                <p>You dont have any transactions on this account</p>
            </div>
        )
    }else{
        return (
        <div>
            <div>
                {props.usersTransactions.map((transaction)=>{
                    return(
                        <div key={transaction._id} className='transaction-container'>
                            <div>
                                <p>Transaction Type: {transaction.transactionType}</p>
                            </div>
                            <div>
                                <p>Transaction Amount: ${transaction.transactionAmount}</p>
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
}

export default DisplayTransactions