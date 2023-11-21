import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/blog_logo.png";
import "./header.css";

const Header = () => {
  return (
    // <Navbar bg="light" expand="lg" className=" fixed-top ">
    <Navbar bg="light" expand="lg" >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="logo" className="w-25 h-25" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {" "}
            {/* Use ms-auto to align items to the right */}
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contactus">
              Contact us
            </Nav.Link>
            <Nav.Link as={Link} to="/createNewBlog">
              Create blog
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>
            <Nav.Link as={Link} to="/signin">
              Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
