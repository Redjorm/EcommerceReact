import React from "react";
import { Link } from "react-router-dom";
import "./styles/header.css";
const Header = () => {
  
  function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  return (
    <div className="topnav" id="myTopnav">
      <Link to="/">E-commerce</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">register</Link>
      <Link to="/">Purchases</Link>
      <Link to="/">Cart</Link>
      <a  className="icon" onClick={myFunction}>
        <i className="bx bx-menu"></i>
      </a>
    </div>
  );
};
export default Header;
