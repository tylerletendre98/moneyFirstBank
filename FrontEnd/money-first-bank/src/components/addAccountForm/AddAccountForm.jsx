import React from "react";
import { useState } from "react";

function AddAccountForm(props) {
  const [accountType, setAccountType] = useState();

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
          <option value="">Select an account</option>
          <option value="Checking">Checking</option>
          <option value="Saving">Saving</option>
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
        <button
          onClick={() => props.setCreatingAccount(!props.creatingAccount)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AddAccountForm;
