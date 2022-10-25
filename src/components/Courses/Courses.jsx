import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import CourseTitle from "./CourseTitle";

const Courses = () => {
  const courseData = useLoaderData();
  const { courses } = courseData;
  return (
    <Container>
      <Row>
        <Col lg={4} md={4} sm={12}>
          <div className="mt-5">
            {courses.map((data) => (
              <CourseTitle courses={data} key={data.id} />
            ))}
          </div>
        </Col>
        <Col lg={8} md={8} sm={12}>
          <div className="mt-5">
            <Row className="g-4">
              {courses.map((data) => (
                <Col lg={4} md={4} sm={12} key={data.id}>
                  <Link
                    to={`/course/${data.id}`}
                    className="text-decoration-none text-black"
                  >
                    <Card>
                      <Card.Img
                        variant="top"
                        src={data.img}
                        className="d-block card-image"
                      />
                      <Card.Body>
                        <h4>{data.name}</h4>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
