import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/profilePage" element={<ProfilePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
