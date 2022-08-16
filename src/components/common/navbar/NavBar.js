import React from "react";
import './navbar.css'
import touristLogo from '../../../img/tourism_logo.png'
const NavBar = () => {
  return (
    <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <img src={touristLogo} alt="" width="100px"/>
        <a className="navbar-brand" href="#">Tourists Galore</a>
      </div>
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </div>
  </nav>
  );
};

export default NavBar;
