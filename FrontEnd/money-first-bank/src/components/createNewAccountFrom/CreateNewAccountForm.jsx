import React, { useState } from "react";
import { Link } from "react-router-dom";

function CreateNewAccountForm(props) {
  const [fullName, setFullname] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = () => {
    const newAccount = {
      fullName: fullName,
      email: email,
      password: password,
    };
    props.createNewUser(newAccount);
  };

  return (
    <div>
      <div>
        <label htmlFor="">Enter your Fullname:</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => {
            setFullname(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="">Enter a password:</label>
        <input
          type="password"
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
      <div>
        <Link to="/profilePage">
          <button onClick={() => {
            handleSubmit()
            props.setCreatingNewUser(false)
          }}>Create New Account</button>
        </Link>
      </div>
    </div>
  );
}

export default CreateNewAccountForm;
