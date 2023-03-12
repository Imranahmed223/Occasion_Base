import React from "react";
import "./UserLayout.scss";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../../../components/common";
const UserLayout = () => {
  return (
    <>
      <div className="userside">
        <div className="userside-navbar">
          <Navbar />
        </div>
        <div className="userside-outlet">
          <Outlet />
        </div>
        <div className="userside-footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default UserLayout;
