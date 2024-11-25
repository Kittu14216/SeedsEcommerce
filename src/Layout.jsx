import React from "react";
import NavigationTop from "./Components/NavigationTop/NavigationTop";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

export default function Layout() {
  return (
    <div>
      <NavigationTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
