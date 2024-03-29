import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./createNewAccount.css";

function CreateNewAccountForm(props) {
  const [fullName, setFullname] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [pin, setPin] = useState();
  const [homeAddress, setHomeAddress] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [employed, setEmployed] = useState();
  const [income, setIncome] = useState();

  const handleSubmit = () => {
    const newAccount = {
      fullName: fullName,
      email: email,
      password: password,
      pin: pin,
      homeAddress: homeAddress,
      dateOfBirth: dateOfBirth,
      employed: employed,
      income: income,
    };
    props.createNewUser(newAccount);
  };

  return (
    <div className="create-account-container">
      <div className="form-input">
        <div>
          <label htmlFor="">Enter your Fullname:</label>
        </div>
        <input
          type="text"
          value={fullName}
          onChange={(e) => {
            setFullname(e.target.value);
          }}
        />
      </div>
      <div className="form-input">
        <div>
          <label htmlFor="">Enter a Password:</label>
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="form-input">
        <div>
          <label htmlFor="">Enter a valid Email:</label>
        </div>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="form-input">
        <div>
          <label htmlFor="">Enter an Account Pin:</label>
        </div>
        <input
          type="password"
          value={pin}
          onChange={(e) => {
            setPin(e.target.value);
          }}
        />
      </div>
      <div className="form-input">
        <div>
          <label htmlFor="">Enter yearly income:</label>
        </div>
        <input
          type="number"
          value={income}
          onChange={(e) => {
            setIncome(e.target.value);
          }}
        />
      </div>
      <div className="form-input">
        <div>
          <label htmlFor="">Enter your home address:</label>
        </div>
        <input
          type="textbox"
          value={homeAddress}
          onChange={(e) => {
            setHomeAddress(e.target.value);
          }}
        />
      </div>
      <div className="form-input">
        <div>
          <label htmlFor="">Please select unemployed or employed:</label>
        </div>
        <select
          name=""
          id=""
          onChange={(e) => {
            setEmployed(e.target.value);
          }}
        >
          <option value="">Select One</option>
          <option value="true">Employed</option>
          <option value="false">Unemployed</option>
        </select>
      </div>
      <div>
        <div>
          <label htmlFor="">Enter your date of birth:</label>
        </div>
        <input
          type="date"
          value={dateOfBirth}
          onChange={(e) => {
            setDateOfBirth(e.target.value);
          }}
        />
      </div>
      <div className="form-input">
        <Link to="/profilePage">
          <button
            onClick={() => {
              handleSubmit();
              props.setCreatingNewUser(false);
            }}
          >
            Create New Account
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CreateNewAccountForm;
