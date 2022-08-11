import React from 'react'
import { useState } from 'react'

function LoanPaymentForm(props) {

    const [loanId, setLoanId] = useState()
    const [accountId, setAccountId] = useState()
    const [loanPayment, setLoanPayment] = useState()

    const handleSubmit = ()=>{
        const newLoanPayment={
            loanPayment: loanPayment
        }
        props.makeLoanPayment(loanId, accountId, newLoanPayment)
        props.setMakingLoanPayment(!props.makingLoanPayment)
    }

  return (
    <div>
        <div>
            <h3>Loan payment</h3>
        </div>
        <div>
            <div>
                <label htmlFor="">Loan to make payment for: </label>
            </div>
            <div>
                <select name="" id="" value={loanId} onChange={(e)=>setLoanId(e.target.value)}>
                <option value="">please select one</option>
                    {props.activeLoans.map((loan)=>{
                        return(<option value={loan._id}>{loan._id}</option>
                        )
                    })}
                </select>
            </div>
            <div>
                <label htmlFor="">What account do you want to use to make the payment: </label>
            </div>
            <div>
                <select name="" id="" value={accountId} onChange={(e)=>setAccountId(e.target.value)}>
                <option value="">please select one</option>
                    {props.accounts.map((account)=>{
                        return(<option value={account._id}>{account._id}</option>
                        )
                    })}
                </select>
            </div>
            <div>
                <label htmlFor="">Payment amount: </label>
            </div>
            <div>
                <input type="number" value={loanPayment} onChange={(e)=>setLoanPayment(e.target.value)} />
            </div>
            <div>
                <button onClick={()=>handleSubmit()}>Make Payment</button>
            </div>
        </div>
    </div>
  )
}

export default LoanPaymentForm