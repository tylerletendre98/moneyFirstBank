import React, { useState } from "react";

function DepositForm(props) {
  const [depositAmount, setDepositAmount] = useState();
  const [depositingAccount, setDepositingAccount] = useState();

  const handleDeposit = () => {
    const depositMoney = {
      depositMoney: depositAmount,
    };
    props.depositMoney(depositingAccount, depositMoney);
    props.setDepositingMoney(!props.depositingMoney);
  };

  return (
    <div>
      <div>
        <div>
          <label htmlFor="">Deposit into account:</label>
          <select
            name=""
            id=""
            value={depositingAccount}
            onChange={(e) => setDepositingAccount(e.target.value)}
          >
            <option value=""></option>
            {props.loggedInUser.accounts.map((account) => {
              return <option value={account._id}>{account._id}</option>;
            })}
          </select>
        </div>
        <label htmlFor="">Deposit Amount:</label>
        <input
          type="number"
          name=""
          id=""
          value={depositAmount}
          onChange={(e) => setDepositAmount(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => handleDeposit()}>Send Money</button>
        <button
          onClick={() => props.setDepositingMoney(!props.depositingMoney)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DepositForm;
