import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to='/' className="fs-1">Skill Platform</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="fs-5"  as={Link} to='/courses'>Courses</Nav.Link>
              <Nav.Link className="fs-5" as={Link} to='/following-question-answer'>FAQ</Nav.Link>
              <Nav.Link className="fs-5" as={Link} to='/blog'>Blog</Nav.Link>
              <div className="d-flex align-items-center">
              <Link to='/sign-in'><Button variant="outline-primary btn-md">Sign-In</Button></Link>
              </div>                            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
