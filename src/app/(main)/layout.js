import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;
