import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
const Login = () => {
  return (
    <Container>
      <Row>
        <Col lg={6} md={6} sm={12}>
          <div className="mt-5 pt-5">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png"
              alt=""
              className="d-block img-fluid mx-auto"
            />
          </div>
        </Col>
        <Col lg={6} md={6} sm={12} className="d-flex align-items-center pt-5">
          <div className="bg-white w-75 rounded-4 mx-auto mt-5 mb-5">
            <h1 className="text-center mb-4 pt-5">Sign-In</h1>
            <Form className="mx-auto w-75">
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="rounded-pill"
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="rounded-pill"
                />
              </Form.Group>
              <div className="d-flex justify-content-center">
                <Button
                  variant="outline-primary"
                  type="submit"
                  className="w-75 mb-4 rounded-pill"
                >
                  Sign-In
                </Button>
              </div>
            </Form>
            <p className="text-center mb-4">
              Dont have an account?
              <NavLink to="/create-account" className="text-decoration-none text-danger"> SignUp Now</NavLink>
            </p>
            <div className="d-flex justify-content-center mb-5">
              <FcGoogle className="fs-1" />
              <BsGithub className="fs-1 ms-4" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
