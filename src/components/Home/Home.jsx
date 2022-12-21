import React, { useContext, useRef, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import * as EmailValidator from "email-validator";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { Autoplay, EffectFade } from "swiper";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../utility/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  const notify = () => toast.success("Email sent successfully.");
  const notify2 = () => toast.error("Please Login First.");
  const data = useLoaderData();
  const { image } = data;
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
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (user?.email) {
      emailjs
        .sendForm(
          "service_7fz98dw",
          "template_008ym0p",
          form.current,
          "gOFaU8Dkgb5g-0h8Z"
        )
        .then(
          (result) => {
            notify();
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      notify2();
    }
  };
  return (
    <>
      <section className="mt-5 home-bottom ">
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="d-flex align-items-center mt-5 pt-5">
                <div>
                  <h1 className="text-white fw-lighter mt-5 display-4">
                    Boost up your skills with a new way of learning.
                  </h1>
                  <p className="text-white mt-4 fs-5 text-justify">
                    Education is not just about going to school and getting a
                    degree.It's about widening your knowledge and absorbing the
                    truth about life. Knowledge is power.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Swiper
                spaceBetween={30}
                effect={"fade"}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade]}
                className="mySwiper mt-5"
                breakpoints={{
                  0: {
                    spaceBetween: 30,
                  },
                  480: {
                    spaceBetween: 30,
                  },
                  768: {
                    spaceBetween: 30,
                  },
                  1024: {
                    spaceBetween: 30,
                  },
                  1280: {
                    spaceBetween: 30,
                  },
                }}
              >
                {image.map((data) => (
                  <SwiperSlide key={data.id}>
                    <img
                      src={data.image}
                      alt=""
                      className="d-block home-image rounded"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mt-5 home-bottom">
        <Container>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <Card className="border-none mt-5 card-border">
                <Row>
                  <Col
                    lg={6}
                    md={12}
                    sm={12}
                    className="d-flex flex-column align-items-center justify-content-center"
                  >
                    <Card.Img
                      variant="top"
                      src="https://i.ibb.co/2kT5hP9/student-experience.png"
                      className="img-fluid mx-auto d-block h-100 card-bg"
                    />
                  </Col>
                  <Col
                    lg={6}
                    md={12}
                    sm={12}
                    className="d-flex flex-column align-items-center justify-content-center"
                  >
                    <Card.Body className="mt-5">
                      <Card.Title className="fs-1 px-4">
                        Build Personalized student experiences
                      </Card.Title>
                      <Card.Text className="text-justify mt-3 fs-5 p-4">
                        Meet the needs of the modern student and drive outcomes
                        with a sudent engagement platform that creates personal,
                        mobile experiences that resonate throughout the students
                        academic journey.
                      </Card.Text>
                      <div className="d-flex justify-content-center mb-5">
                        <Button variant="outline-primary btn-md">
                          Learn More
                        </Button>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mt-5 pb-3">
        <Container>
          <Row className="flex-column-reverse flex-lg-row">
            <Col
              lg={6}
              md={6}
              sm={12}
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <div className="text-white">
                <h1>Learn how Skill-Platform can help your institution</h1>
                <p className="w-75 mt-4">
                  Signup to be the first to here about exclusive deals.
                </p>
                <Form
                  ref={form}
                  onSubmit={sendEmail}
                  className="d-flex w-75 mt-4"
                >
                  <Form.Group
                    className="mb-3 d-none w-25"
                    controlId="formBasicName"
                  >
                    <Form.Control
                      type="text"
                      placeholder="name"
                      name="user_name"
                      value={user?.displayName}
                      autoComplete="off"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 w-100 me-2"
                    controlId="formBasicemail"
                  >
                    <Form.Control
                      type="email"
                      placeholder="Enter your email address"
                      name="user_email"
                      onChange={handleEmailChange}
                      required
                      autoComplete="off"
                    />
                    <Form.Text className="text-danger ">
                      {errors.email}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group
                    className="d-none w-25"
                    controlId="formBasicDescription"
                  >
                    <textarea
                      name="message"
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      placeholder="Your Description here...."
                      rows="3"
                      value="I want to join the sonic revolution service. You are requested to please accept my joining and allow me to work under your supervision. Please advise as necessary."
                    />
                  </Form.Group>
                  <div>
                    <Button
                      variant="btn-md text-white"
                      className="btn-border"
                      type="submit"
                      value="Send"
                    >
                      Join<span className="ms-2"></span>Now
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
            <Col
              lg={6}
              md={6}
              sm={12}
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <img
                src="https://i.ibb.co/zQh7yxQ/student-learn.png"
                alt=""
                className="img-fluid mx-auto d-block"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <Toaster />
    </>
  );
};

export default Home;
