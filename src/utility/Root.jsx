import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import './CustomStyle.css';
const Root = () => {
  return (
    <div className="bg-design">
      <Header />            
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
