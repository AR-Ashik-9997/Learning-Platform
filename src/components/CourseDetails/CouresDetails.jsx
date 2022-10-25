import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { FiDownload } from "react-icons/fi";

const CouresDetails = () => {
  const details = useLoaderData();
  const { name, img, ratings, video, access, certificate, pdf } = details;
  console.log(name);
  return (
    <Container>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="d-flex justify-content-center mt-5 pt-5 mb-5 align-items-end">
            <Card>
              <Row>
                <Col md={5}>
                  <Card.Img
                    variant="top"
                    src={img}
                    className="rounded-start details-card-image"
                  />
                </Col>
                <Col md={7}>
                  <Card.Body>
                    <Card.Title className="fs-2 mt-5">{name} <FiDownload className="ms-4"/></Card.Title>
                    <ul className="fs-4 mt-5">
                    <li>Ratings: {ratings}</li>
                    <li>Videos: {video}</li>
                    <li>Access: {access}</li>
                    <li>Certificate{certificate}</li>
                    </ul>                   
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CouresDetails;
