import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"; // Import styles

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img 
            src="https://img.freepik.com/premium-vector/food-abstract-elements-healsy-composition-modern-trendy-matisse-minimal-style-restaurant-poster_295889-8069.jpg?w=40"
            alt="Zomato"
          />
        </Link>

        <div className="nav-links">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/order-online" className="nav-item">Order Online</Link>
          <Link to="/dining" className="nav-item">Dining</Link>
          <Link to="/live-events" className="nav-item">Live Events</Link>
          <Link to="/investor" className="nav-item">Investor Relations</Link>
          <Link to="/add-restaurant" className="nav-item">Add Restaurant</Link>
          
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="nav-item">Log in</Link>
              <Link to="/register" className="nav-item nav-btn">Sign up</Link>
            </>
          ) : (
            <button onClick={handleLogout} className="nav-btn">Logout</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
