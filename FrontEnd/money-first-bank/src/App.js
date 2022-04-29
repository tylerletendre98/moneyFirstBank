import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {

  const [loggedInUser, setLoggedInUser] = useState()

  console.log(loggedInUser)

  const loginUser = (loggingInUser)=>{
    axios.post('http://localhost:5000/api/users/loginUser', loggingInUser)
    .then((res)=>{
      setLoggedInUser(res.data)
    })
  }

  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/loginPage" element={<LoginPage loginUser={loginUser}/>} />
          <Route path="/profilePage" element={<ProfilePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
