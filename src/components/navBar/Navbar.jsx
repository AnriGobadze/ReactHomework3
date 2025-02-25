import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaSignInAlt } from "react-icons/fa"; 
import "./Navbar.css";

export default function Navbar({info}) {
  return (
    <div className="navbar">
      
      <div className="navbar-left">
        <img 
          src="https://i.pinimg.com/736x/2f/82/81/2f8281c6553ec7ff44a142fabde2ce88.jpg" 
          alt="Profile" 
        />
        <div className="profile-text">
          <h4>{info.name}</h4>
          <p>{info.founderOf}</p>
        </div>
      </div>

      <div className="navbar-right">
        <ul className="nav-links">
          <li>{info.list1}</li>
          <li>{info.list2}</li>
          <li>{info.list3}</li>
        </ul>

        <div className="login-btn">
          <FaSignInAlt /> 
          <h3>Log in</h3>
        </div>

        <div className="social-icons">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
      
    </div>
  );
}
