import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserLayout } from "./layout";
import {
  AboutUsPage,
  Faq,
  HomePage,
  SearchPage,
  SupportPage,
} from "./module/customer";

const Routess = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<UserLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default Routess;
