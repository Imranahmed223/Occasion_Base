import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./commonComponents";
import { Setting, Service, DashBoard } from "./module/Vender";

const Routess = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route path="/dashboard" element={<DashBoard />}></Route>
            <Route path="/settings" element={<Setting />}></Route>
            <Route path="/service" element={<Service />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default Routess;
