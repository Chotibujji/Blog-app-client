import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div class="container">
        <form class="form" action="">
          <p class="title">Registration Form</p>
          <input placeholder="Username" class="username input" type="text" />
          <input placeholder="E-mail" class="username input" type="email" />
          <input
            placeholder="Phone number"
            class="username input"
            type="text"
            pattern="[0-9]*"
          />
          <input
            placeholder="Password"
            class="password input"
            type="password"
          />
          <button class="btn" type="submit">
            Register
          </button>
          <p className="p_tag">
            Already have an account ?{" "}
            <Link to="/signin" className="link">
              Signin
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
