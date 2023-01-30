import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LayOut from "./commonComponents/LayOut/LayOut";
import CreateEvent from "./module/Vender/CreateEvent/CreateEvent";
import DashBoard from "./module/Vender/DashBoard/DashBoard";
import Settings from "./module/Vender/Settings/Settings";

const Routess = () => {
  return (
    <>
      {/* <Layout>
        <Home />
      </Layout> */}

      <Router>
        <Routes>
          <Route path="" element={<LayOut />}>
            {/* <VenderDashboard /> */}
            <Route path="/dashboard" element={<DashBoard />}></Route>
            <Route path="/create_event" element={<CreateEvent />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default Routess;