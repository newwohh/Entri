import React from "react";
import { Link } from "react-router-dom";
import { Nav, Container, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="active" variant="light">
      <Container>
        <Navbar.Brand>Restaurants</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
