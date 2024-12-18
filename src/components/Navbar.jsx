import React from "react";
import { useAuth } from "../context/AuthContext";
import './Navbar.css'; // For styling

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">Pet Adoption</a>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/adopt">Adopt a Pet</a></li>
        <li><a href="/adopt-pet-form">ApplicationForm</a></li>
        <li><a href="/pet-details">PetDetailsPage</a></li>
        <li><a href="/about">About</a></li>
        {/* Render these links conditionally */}
        {isAuthenticated ? (
          <>
            <li><button className="logout-btn" onClick={logout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><a href="/register">Register</a></li>
            <li><a href="/login">Login</a></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
