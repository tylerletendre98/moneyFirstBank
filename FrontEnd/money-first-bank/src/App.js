import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [loggedInUser, setLoggedInUser] = useState();
  const [responseMessage, setResponseMessage] = useState();
  const [creatingAccount, setCreatingAccount] = useState(false);
  const [creatingNewUser, setCreatingNewUser] = useState(false)

  console.log(creatingNewUser)

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
    console.log(loggedInUser)
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

  return (
    <div className="App">
      <div>
        <Header setLoggedInUser={setLoggedInUser} />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/loginPage" element={<LoginPage loginUser={loginUser} setCreatingNewUser={setCreatingNewUser} creatingNewUser={creatingNewUser} createNewUser={createNewUser}/>} />
          <Route path="/profilePage" element={<ProfilePage loggedInUser={loggedInUser} responseMessage={responseMessage} creatingAccount={creatingAccount}
          setCreatingAccount={setCreatingAccount} addAccount={addAccount}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
