import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import {Modal} from '@react-ui-org/react-ui'
import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {

  const [modalOpen, setModalOpen] = useState()
  const [loggedInUser, setLoggedInUser] = useState();
  const [responseMessage, setResponseMessage] = useState()

  console.log(loggedInUser)

  const loginUser = (loggingInUser)=>{
    axios.post('http://localhost:5000/api/users/loginUser', loggingInUser)
    .then((res)=>{
      if(res.status === 200){
        setLoggedInUser(res.data)
        
      }
    })
    .catch((error)=>{
      window.location.assign('/loginPage')
    })
    console.log(loggedInUser)
  }

  return (
    <div className="App">
      <div>
        <Header setLoggedInUser={setLoggedInUser} />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/loginPage" element={<LoginPage loginUser={loginUser} />} />
          <Route path="/profilePage" element={<ProfilePage loggedInUser={loggedInUser} responseMessage={responseMessage}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
