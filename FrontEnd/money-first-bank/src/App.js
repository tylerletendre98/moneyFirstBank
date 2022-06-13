import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/loginPage/LoginPage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import "./App.css";
import axios from "axios";
import { useState } from "react";
import TransactionsPage from "./pages/TransactionsPage";

function App() {
  const [loggedInUser, setLoggedInUser] = useState();
  const [responseMessage, setResponseMessage] = useState();
  const [creatingAccount, setCreatingAccount] = useState(false);
  const [creatingNewUser, setCreatingNewUser] = useState(false);
  const [usersTransactions, setUsersTransactions] = useState();
  const [transferingFunds, setTransferingFunds] = useState(false);
  const [depositngMoney, setDepositingMoney] = useState(false);
  const [withdrawingMoney, setWithdrawingMoney] = useState(false)
  
  const loginUser = (loggingInUser)=>{
    axios.post('http://localhost:5000/api/users/loginUser', loggingInUser)
    .then((res)=>{
      if(res.status === 200){
        setLoggedInUser(res.data)
      }
    })
    .catch((error)=>{
      setResponseMessage(error)
      setLoggedInUser(undefined)
      
    })
  }

  const addAccount =(newAccountInfo)=>{
    axios.post(`http://localhost:5000/api/accounts/newAccount/${loggedInUser._id}`, newAccountInfo)
    .then((res)=>{
      setLoggedInUser(res.data)
    })
    .catch((error)=>{
      alert(error.response.data)
    })
  } 

  const createNewUser=(newUserInfo)=>{
    axios.post('http://localhost:5000/api/users/newUser',newUserInfo)
    .then((res)=>{
      setLoggedInUser(res.data)
    })
  }

  const depositMoney = (accountId,depositMoney)=>{
    axios.put(`http://localhost:5000/api/accounts/depositMoney/${loggedInUser._id}/${accountId}`,depositMoney)
    .then((res)=>{
      setLoggedInUser(res.data)
    })
  }

  const withdrawlMoney = (accountId,withdrawlMoney)=>{
    axios.put(`http://localhost:5000/api/accounts/withdrawMoney/${loggedInUser._id}/${accountId}`,withdrawlMoney)
    .then((res)=>{
      setLoggedInUser(res.data)
    })
    .catch((res)=>{
      alert(res.response.data)
    }
    )
  }

  const transferFunds = (givingAccountId, recievingAccountId, transferingAmount)=>{
    axios.put(`http://localhost:5000/api/accounts/transferFunds/${loggedInUser._id}/${givingAccountId}/${recievingAccountId}`, transferingAmount)
    .then((res)=>{
      setLoggedInUser(res.data)
    })
    .catch((res)=>{
      alert(res.response.data)
    })
  }

  return (
    <div className="App">
      <div>
        <Header setLoggedInUser={setLoggedInUser} setCreatingNewUser={setCreatingNewUser} creatingNewUser={creatingNewUser} />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/loginPage" element={<LoginPage loginUser={loginUser} setCreatingNewUser={setCreatingNewUser} creatingNewUser={creatingNewUser} createNewUser={createNewUser}/>} />
          <Route path="/profilePage" element={<ProfilePage loggedInUser={loggedInUser} responseMessage={responseMessage} creatingAccount={creatingAccount}
          setCreatingAccount={setCreatingAccount} addAccount={addAccount} depositMoney={depositMoney} withdrawlMoney={withdrawlMoney} setUsersTransactions={setUsersTransactions}
          transferingFunds={transferingFunds} setTransferingFunds={setTransferingFunds} transferFunds={transferFunds} depositingMoney={depositngMoney} setDepositingMoney={setDepositingMoney}
          withdrawingMoney={withdrawingMoney} setWithdrawingMoney={setWithdrawingMoney}/>}/>
          <Route path="/transactionsPage" element={<TransactionsPage usersTransactions={usersTransactions} setUsersTransactions={setUsersTransactions}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
