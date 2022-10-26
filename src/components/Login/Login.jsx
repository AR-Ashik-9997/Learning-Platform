import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import * as EmailValidator from "email-validator";
import { AuthContext } from "../../utility/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => { 
  const navigate=useNavigate();
  const { signInGoogle, SignInForm } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const [userInfo, setUserInfo] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({
    email: "",
  });
  const handleEmailChange = (e) => {
    const email = e.target.value;
    if (!EmailValidator.validate(email)) {
      setErrors({ ...errors, email: "Please provide a valid email" });
      setUserInfo({ ...userInfo, email: "" });
    }
    if (EmailValidator.validate(email)) {
      setErrors({ ...errors, email: "" });
      setUserInfo({ ...userInfo, email: e.target.value });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const password = form.password.value;
    const email=userInfo.email;    
      SignInForm(email, password)
        .then((res) => {
          const user = res.user;
          console.log(user);
          form.reset();
          navigate('/')          
        })
        .catch((error) => console.log(error));
    
  };

  const signinGoogle = () => {
    signInGoogle(googleProvider)
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
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
            <Form className="mx-auto w-75" onSubmit={handleSubmit}>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  className="rounded-pill"
                  required
                  autoComplete="off"
                  onChange={handleEmailChange}
                />
                <Form.Text className="text-danger">{errors.email}</Form.Text>
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="rounded-pill"
                  required
                  autoComplete="off"
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
              <NavLink
                to="/create-account"
                className="text-decoration-none text-danger"
              >
                {" "}
                SignUp Now
              </NavLink>
            </p>
            <div className="d-flex justify-content-center mb-5">
              <Button variant="outline-dark" onClick={signinGoogle}>
                <FcGoogle className="fs-1" />
              </Button>
              <Button variant="outline-dark" className="ms-4">
                <BsGithub className="fs-1" />
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
