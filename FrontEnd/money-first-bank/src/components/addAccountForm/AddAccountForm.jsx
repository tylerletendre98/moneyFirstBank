import React from "react";
import { useState } from "react";

function AddAccountForm(props) {
  const [accountType, setAccountType] = useState();

  console.log(accountType);

  const handleAddAccount = () => {
    const newAccount = {
      type: accountType,
    };
    props.addAccount(newAccount);
  };

  return (
    <div>
      <div>
        <select
          name=""
          id=""
          value={accountType}
          onChange={(e) => setAccountType(e.target.value)}
        >
          <option value=""></option>
          <option value="checking">Checking</option>
          <option value="saving">Saving</option>
        </select>
      </div>
      <div>
        <button
          onClick={() => {
            handleAddAccount();
            props.setCreatingAccount(!props.creatingAccount);
          }}
        >
          Add Account
        </button>
      </div>
    </div>
  );
}

export default AddAccountForm;
