import React, { useState } from "react";

function WithdrawlForm(props) {
  const [withdrawlAmount, setWithdrawlAmount] = useState();
  const [withdrawingAccount, setWithdrawingAccount] = useState();

  const handleWithdrawl = () => {
    const withdrawlMoney = {
      withdrawlMoney: withdrawlAmount,
    };
    props.withdrawlMoney(withdrawingAccount, withdrawlMoney);
    props.setWithdrawingMoney(!props.withdrawingMoney);
  };

  return (
    <div>
      <div>
        <div>
          <label htmlFor="">Withdraw From account:</label>
        </div>
        <div>
          <select
            name=""
            id=""
            value={withdrawingAccount}
            onChange={(e) => setWithdrawingAccount(e.target.value)}
          >
            <option value=""></option>
            {props.loggedInUser.accounts.map((account) => {
              return (
                <option value={account._id} key={account._id}>
                  {account._id}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div>
        <input
          type="number"
          name=""
          id=""
          value={withdrawlAmount}
          onChange={(e) => setWithdrawlAmount(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => handleWithdrawl()}>Withdraw Money</button>
        <button
          onClick={() => props.setWithdrawingMoney(!props.withdrawingMoney)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default WithdrawlForm;
