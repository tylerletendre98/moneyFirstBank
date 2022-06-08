import React, { useState } from "react";

function TransferFundsForm(props) {
  const [givingAccount, setGivingAccount] = useState();
  const [recievingAccount, setRecievingAccount] = useState();
  const [transferingAmount, setTransferingAmount] = useState();

  const handleTransfer = (e) => {
    const transferAmount = {
      transferingAmount: transferingAmount,
    };
    props.transferFunds(givingAccount, recievingAccount, transferAmount);
    props.setTransferingFunds(!props.transferingFunds);
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <h3>Transfer Funds</h3>
      </div>
      <div>
        <div>
          <label htmlFor="">From account:</label>
          <select
            name=""
            id=""
            value={givingAccount}
            onChange={(e) => setGivingAccount(e.target.value)}
          >
            <option value=""></option>
            {props.loggedInUser.accounts.map((account) => {
              return <option value={account._id}>{account._id}</option>;
            })}
          </select>
        </div>
        <div>
          <div>
            <label htmlFor="">To account:</label>
            <select
              name=""
              id=""
              value={recievingAccount}
              onChange={(e) => setRecievingAccount(e.target.value)}
            >
              <option value=""></option>
              {props.loggedInUser.accounts.map((account) => {
                return <option value={account._id}>{account._id}</option>;
              })}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="">Amount to transfer:</label>
          <input
            type="number"
            value={transferingAmount}
            onChange={(e) => setTransferingAmount(e.target.value)}
          />
        </div>
        <div>
          <button onClick={() => handleTransfer()}>Transfer Funds</button>
        </div>
      </div>
    </div>
  );
}

export default TransferFundsForm;
