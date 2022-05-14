import React, { useState } from "react";

function CreateNewAccount() {
  const [fullname, setFullname] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  return (
    <div>
      <div>
        <label htmlFor="">Enter your Fullname:</label>
        <input
          type="text"
          value={fullname}
          onChange={(e) => {
            setFullname(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="">Enter a password:</label>
        <input
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="">Enter a valid email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default CreateNewAccount;
