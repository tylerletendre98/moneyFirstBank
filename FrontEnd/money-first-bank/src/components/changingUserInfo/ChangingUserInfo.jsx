import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'

function ChangingUserInfo(props) {
    console.log(props.loggedInUser)
  const [fullName, setFullname] = useState(props.loggedInUser.fullName);
  const [password, setPassword] = useState(props.loggedInUser.password);
  const [email, setEmail] = useState(props.loggedInUser.email);
  const [pin, setPin] = useState(props.loggedInUser.pin);
  const [homeAddress, setHomeAddress] = useState(props.loggedInUser.homeAddress);
  const [employed, setEmployed] = useState(props.loggedInUser.employed);
  const [income, setIncome] = useState(props.loggedInUser.income);

  const handleSubmit = (e) => {
    const newInfo = {
      fullName: fullName,
      email: email,
      password: password,
      pin: pin,
      homeAddress: homeAddress,
      employed: employed,
      income: income
    };
    props.updateUser(newInfo)
  };
  return (
    <div className='create-account-container'>
        <div className='inputs-container'>
            <div className="form-input">
                <div>
                    <label htmlFor="">Change Name:</label>

                </div>
                <input
                type="text"
                value={fullName}
                placeholder={fullName}
                onChange={(e) => {
                    setFullname(e.target.value);
                }}
                />
            </div>
            <div className="form-input">
                <div>
                <label htmlFor="">Change Password:</label>
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

                <label htmlFor="">Change Email:</label>
                </div>
                <input
                type="text"
                value={email}
                placeholder={email}
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

                    <label htmlFor="">Change yearly income:</label>
                </div>
                <input
                type="number"
                value={income}
                placeholder={income}
                onChange={(e) => {
                    setIncome(e.target.value);
                }}
                />
            </div>
            <div className="form-input">
                <div>
                    <label htmlFor="">Change home address:</label>

                </div>
                <input
                type="text"
                value={homeAddress}
                placeholder={homeAddress}
                onChange={(e) => {
                    setHomeAddress(e.target.value);
                }}
                />
            </div>
            <div className="form-input">
                <div>

                <label htmlFor="">Change employment status:</label>
                </div>
                <select
                name=""
                id=""
                value={employed}
                onChange={(e) => {
                    setEmployed(e.target.value);
                }}
                >
                <option value="">Select One</option>
                <option value="true">Employed</option>
                <option value="false">Unemployed</option>
                </select>
            </div>
        </div>
            <div className="form-input">
                <Link to="/profilePage">
                <button
                    onClick={() => {
                    handleSubmit();
                    
                    }}
                >Change Info
                </button>
                <button onClick={()=> props.setChangingUserInfo(!props.changingUserInfo)}>Cancel</button>
                </Link>
            </div>
    </div>
  )
}

export default ChangingUserInfo