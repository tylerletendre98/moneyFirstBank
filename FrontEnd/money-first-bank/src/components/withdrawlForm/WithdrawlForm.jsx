import React, { useState } from "react";

function WithdrawlForm(props) {
  const [depositAmount, setDepositAmount] = useState();

  const handleDeposit = () => {
    const depositMoney = depositAmount;
    props.setWithdrawingMoney(!props.withdrawingMoney);
  };

  return (
    <div>
      <div>
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
      </div>
    </div>
  );
}

export default WithdrawlForm;
