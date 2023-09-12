import React, { ReactElement } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import NavTop from "../NavTop";

function Layout({ children }: any) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <NavTop />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
