import React from "react";
import Navbar from "../components/Pages/Home/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Pages/Home/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Layout;
