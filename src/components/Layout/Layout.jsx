import React from "react";
import Routing from "../../routes/Routing";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Routing />
      <Footer />
    </>
  );
};

export default Layout;
