import React from 'react'

function DisplayAccounts(props) {
  return (
    <div>
        <div>
            <h3>Members accounts</h3>
        </div>
        <div>
        {props.accounts.map((account)=>{
            return(
                <div>
                    <div>
                        <p>Account Type: {account.type}</p>
                    </div>
                    <div>
                        <p>Account balance: {account.balance}</p>
                    </div>
                    <div>
                        <div>
                            <p>Number of transactions on account: {account.transactions.length}</p>
                        </div>
                        <div>
                            <button>View Transactions</button>
                        </div>
                    </div>
                </div>
            )
        })}
        </div>
        <div>
            <button>Click here to make new account</button>
        </div>
    </div>
  )
}

export default DisplayAccounts