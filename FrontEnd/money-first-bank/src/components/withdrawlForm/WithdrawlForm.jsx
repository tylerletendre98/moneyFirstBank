import React, { useState } from "react";

function WithdrawlForm(props) {
  const [withdrawlAmount, setWithdrawlAmount] = useState();

  const handleWithdrawl = () => {
    const withdrawlMoney = {
      withdrawlMoney: withdrawlAmount,
    };
    props.withdrawlMoney(props.account._id, withdrawlMoney);
    props.setWithdrawingMoney(!props.withdrawingMoney);
  };

  return (
    <div>
      <div>
        <label htmlFor="">Withdrawl Amount:</label>
        <input
          type="number"
          name=""
          id=""
          value={withdrawlAmount}
          onChange={(e) => setWithdrawlAmount(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => handleWithdrawl()}>Take Money</button>
      </div>
    </div>
  );
}

export default WithdrawlForm;
