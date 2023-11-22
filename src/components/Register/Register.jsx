import React, { useContext, useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";

const Register = () => {
  const [credentials, setCredentials] = useState({
    name: undefined,
    email: undefined,
    phone: undefined,
    password: undefined,
  });
  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  // console.log('credentials :>> ', credentials);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/auth/registerUser`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const result = await res.json();
      if (!result.ok) {
        alert(result.message);
        // console.log('result.message :>> ', result.message);
      }

      dispatch({ type: "REGISTER_SUCCESS" });
      navigate("/signin");
    } catch (e) {
      // alert(e.message);
      console.log('e :>> ', e);
    }
  };

  return (
    <div>
      <div className="container">
        <form className="form" onSubmit={handleClick}>
          <p className="title">Registration Form</p>
          <input placeholder="name" className="name input" type="text" id="name" onChange={handleChange}/>
          <input placeholder="E-mail" className="name input" type="email" id="email" onChange={handleChange}/>
          <input
            placeholder="Phone number"
            className="name input"
            type="text"
            pattern="[0-9]*"
            id="phone"
            onChange={handleChange}
          />
          <input
            placeholder="Password"
            className="password input"
            type="password"
            id="password"
            onChange={handleChange}
          />
          <button className="btn" type="submit">
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
