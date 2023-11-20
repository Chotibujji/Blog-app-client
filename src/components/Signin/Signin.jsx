import React from "react";
import "./sigin.css";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <>
      <div class="container">
        <form class="form" action="">
          <p class="title">Login Form</p>
          <input placeholder="E-mail" class="username input" type="email" />
          <input
            placeholder="Password"
            class="password input"
            type="password"
          />
          <button class="btn" type="submit">
            Login
          </button>
          <p className="p_tag">
            Don't have an account ?{" "}
            <Link to="/register" className="link">
              Register
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signin;
