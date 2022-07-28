import React, { useState } from "react";

function TransferUserToUserForm(props) {
    const [recievingUsersFullname, setRecievingUsersFullname] = useState()
    const [givingAccount, setGivingAccount] = useState();
    const [recievingAccount, setRecievingAccount] = useState();
    const [transferingAmount, setTransferingAmount] = useState();

    const handleTransfer = () => {
        const transferAmount = {
          transferingAmount: transferingAmount,
        };
        const usersFullname={
            recievingUsersFullname:recievingUsersFullname
        }
        props.transferFundsUserToUser(givingAccount, recievingAccount, transferAmount, usersFullname);
        props.setTransferingFundsUserToUser(false);
      };

  return (
    <div>
      <div>
        <h3>Transfer Funds To User</h3>
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
            <label htmlFor="">Name of person receiving transfer:</label>
            <input type="text" value={recievingUsersFullname} onChange={(e) => setRecievingUsersFullname(e.target.value)}/>
        </div>
        <div>
          <div>
            <label htmlFor="">To account:</label>
            <input type="text" value={recievingAccount} onChange={(e) => setRecievingAccount(e.target.value)}/>
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
          <button
            onClick={() => props.setTransferingFundsUserToUser(false)}
          >
            Cancel Funds Transfer
          </button>
        </div>
      </div>
    </div>
  )
}

export default TransferUserToUserForm