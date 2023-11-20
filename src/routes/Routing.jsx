import React from 'react'
import { Routes, Route } from "react-router-dom";
import Signin from '../components/Signin/Signin';
import Register from '../components/Register/Register';
import Home from '../components/Home/Home';

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default Routing
