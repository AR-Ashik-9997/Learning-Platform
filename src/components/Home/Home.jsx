import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade } from "swiper";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();
  const { image } = data;
  return (
    <Container className="home-container">
      <Row>
        <Col lg={6} md={6} sm={12}>
          <div className="d-flex align-items-center mt-5 pt-5">
            <div>
              <h1 className="text-white fw-lighter mt-5 display-4">
                Boost up your skills with a new way of learning.
              </h1>
              <p className="text-white mt-4 h5 text-justify">
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
                <img src={data.image} alt="" className="d-block home-image" />
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
