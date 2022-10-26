import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const CheackOut = () => {
  const checkoutData = useLoaderData();
  const { name, img, ratings, video, access, certificate } = checkoutData;
  return (
    <Container className="mb-5 w-50">
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
                    <Card.Title className="fs-1 mt-3 mb-4">{name}</Card.Title>
                    <ul className="fs-5 mt-3">
                      <li>
                        <span className="semi-bold">Ratings:</span> {ratings}
                      </li>
                      <li>
                        <span className="semi-bold">Videos:</span> {video}
                      </li>
                      <li>
                        <span className="semi-bold">Access:</span> {access}
                      </li>
                      <li>
                        <span className="semi-bold">Certificate:</span>{" "}
                        {certificate}
                      </li>
                    </ul>
                  </Card.Body>
                  <div className="d-flex justify-content-center pt-3 pb-4 ">
                    <Button
                      variant="outline-primary"
                      className="w-25 rounded-pill">
                      Check Out
                    </Button>
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

export default CheackOut;
