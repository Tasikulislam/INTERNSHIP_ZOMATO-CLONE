import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import OrderOnline from "./Pages/OrderOnline";
import Dining from "./Pages/Dining";
import LiveEvents from "./Pages/LiveEvents";
import Navbar from "./components/Navbar";
import "./App.css"; // Import styles

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/live-events" element={<LiveEvents />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
