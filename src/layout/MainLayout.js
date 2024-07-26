import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="flex-1 flex flex-col">
      <Navbar />
      <Footer />
    </div>
  );
};

export default MainLayout;