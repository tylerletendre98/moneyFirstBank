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
        <form action="">
            <div>
            <div className="form-input">
                <label htmlFor="">Enter your Fullname:</label>
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
            <label htmlFor="">Enter a valid Email:</label>
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
            <label htmlFor="">Enter an Account Pin:</label>
            <input
            type="password"
            value={pin}
            onChange={(e) => {
                setPin(e.target.value);
            }}
            />
        </div>
        <div className="form-input">
            <label htmlFor="">Enter yearly income:</label>
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
            <label htmlFor="">Enter your home address:</label>
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
            <label htmlFor="">Please select unemployed or employed:</label>
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
        </form>
    </div>
  )
}

export default ChangingUserInfo