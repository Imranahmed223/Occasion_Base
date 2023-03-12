import React from "react";
import "./Navbar.scss";
import { logo, profile } from "../../../assests";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div className="navbar-container-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="navbar-container-profile ">
            <img src={profile} alt="profile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
