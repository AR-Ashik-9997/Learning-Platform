import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { v4 } from "uuid";
import { FiDownload } from "react-icons/fi";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const CouresDetails = () => {
  const details = useLoaderData();
  const { name, img, ratings, video, access, certificate, learn } = details;
  return (
    <Container className="mb-5">
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
                  <Card.Body ref={ref}>
                    <Card.Title className="fs-2 mt-5">
                      {name}
                      <Pdf targetRef={ref} filename={name}>
                        {({ toPdf }) => (
                          <Button variant="outline-primary" onClick={toPdf} className="ms-4">
                            <FiDownload />
                          </Button>
                        )}
                      </Pdf>
                    </Card.Title>
                    <ul className="fs-5 mt-3">
                      <li>Ratings: {ratings}</li>
                      <li>Videos: {video}</li>
                      <li>Access: {access}</li>
                      <li>Certificate{certificate}</li>
                    </ul>
                    <h4>What you'll learn</h4>
                    <ul>
                      {learn.map((learning) => (
                        <li key={v4()} className="text-justify">{learning}</li>
                      ))}
                    </ul>
                  </Card.Body>
                  <div className="d-flex justify-content-center pt-2 pb-4">
                    <Button variant="outline-primary">Get premium access</Button>
                  </div>
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