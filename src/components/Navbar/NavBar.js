import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "./Navbar.css";
import logo from "../../assets/svg/logo.svg";

function NavBar() {
  return (
    <Navbar
      id="navbar"
      className="nav_bar_position"
      collapseOnSelect
      expand="lg"
      variant="light"
      style={{
        position: "absolute",
        backgroundColor: "transparent",
      }}
    >
      <Container fluid className="py-sm-3 col-xl-10 col-lg-11 col-md-12">
        <Container>
          <Navbar.Brand href="#home" className="nav-brand-color">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Converter
          </Navbar.Brand>
        </Container>
      </Container>
    </Navbar>
  );
}

export default NavBar;
