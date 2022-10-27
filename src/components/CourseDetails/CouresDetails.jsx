import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { v4 } from "uuid";
import { FiDownload } from "react-icons/fi";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const CouresDetails = () => {
  const details = useLoaderData();
  const {id, name, img, ratings, video, access, certificate, learn } = details;
  return (
    <Container className="home-container">
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
                      <li><span className="semi-bold">Ratings:</span> {ratings}</li>
                      <li><span className="semi-bold">Videos:</span> {video}</li>
                      <li><span className="semi-bold">Access:</span> {access}</li>
                      <li><span className="semi-bold">Certificate:</span> {certificate}</li>
                    </ul>
                    <h4>What you'll learn</h4>
                    <ul>
                      {learn.map((learning) => (
                        <li key={v4()} className="text-justify w-75">{learning}</li>
                      ))}
                    </ul>
                  </Card.Body>
                  <div className="d-flex justify-content-center pt-2 pb-4">
                    <Link to={`/checkout/${id}`}><Button variant="outline-primary">Get premium access</Button></Link>
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
