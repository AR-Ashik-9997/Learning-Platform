import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const SignUp = () => {
  return (
    <Container>
      <Row>
        <Col lg={6} md={6} sm={12}>
          <div className="mt-5 pt-5">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/social-media-signup-4489359-3723266.png"
              alt=""
              className="d-block img-fluid mx-auto"
            />
          </div>
        </Col>
        <Col lg={6} md={6} sm={12} className="d-flex align-items-center pt-5">
          <div className="bg-white w-75 rounded-4 mx-auto mt-5 mb-5">
            <h1 className="text-center mb-4 pt-5">Register</h1>
            <Form className="mx-auto w-75">
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  className="rounded-pill"
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Photo-URL"
                  className="rounded-pill"
                />
              </Form.Group>
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
                  Register
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
