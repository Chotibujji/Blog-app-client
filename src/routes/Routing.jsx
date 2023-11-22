import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "../components/Signin/Signin";
import Register from "../components/Register/Register";
import Home from "../components/Home/Home";
import SingleBlog from "../components/SingleBlog/SingleBlog";
import AboutUs from "../components/AboutUS/AboutUs";
import ContactUs from "../components/ContactUS/ContactUs";
import CreateBlog from "../components/CreateBlog/CreateBlog";
import EditUserInfo from "../components/EditUserInfo/EditUserInfo";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:id" element={<SingleBlog />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Contactus" element={<ContactUs />} />
        <Route path="/createNewBlog" element={<CreateBlog />} />
        <Route path="/user/:id" element={<EditUserInfo />} />
      </Routes>
    </div>
  );
};

export default Routing;
