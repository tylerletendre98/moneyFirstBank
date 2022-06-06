import React, { useState } from "react";

function DepositForm(props) {
  const [depositAmount, setDepositAmount] = useState();

  const handleDeposit = () => {
    const depositMoney = {
      depositMoney: depositAmount,
    };
    props.depositMoney(props.account._id, depositMoney);
    props.setDepositingMoney(!props.depositingMoney);
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
        <button onClick={()=> props.setDepositingMoney(!props.depositingMoney)}>Cancel</button>
      </div>
    </div>
  );
}

export default DepositForm;
