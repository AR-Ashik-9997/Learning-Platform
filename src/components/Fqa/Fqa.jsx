import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Fqa = () => {
  return (
    <Container className="home-container">
      <Row>
        <div className="pt-5 mb-2 mt-5">
          <h1 className="text-white text-center">
            Freequently Ask Question
          </h1>
        </div>
        <Col lg={5} md={5} sm={12}>
          <Accordion defaultActiveKey={[""]} alwaysOpen>
            <Accordion.Item eventKey="0" className="mt-5 ">
              <Accordion.Header>
                <h5>What is eLearning?</h5>
              </Accordion.Header>
              <Accordion.Body>
                <p className="text-justify">
                  To put it simply, eLearning is electronic learning, and it
                  typically includes a combination of electronic media and
                  educational technology. E-learning is computer-based and makes
                  use of multimedia sources such as text, audio, animations,
                  images, and so on.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="mt-2">
              <Accordion.Header>
                <h5>Why should I consider eLearning-based training?</h5>
              </Accordion.Header>
              <Accordion.Body>
                <p className="text-justify">
                  E-learning is anywhere learning! Classroom training sessions
                  require face-to-face interaction, which usually takes place
                  during working hours, hindering working schedules. With
                  eLearning, you have the freedom to take the course at the
                  place and time of your choice, without affecting your work
                  schedule.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="mt-2">
              <Accordion.Header>
                <h5>
                  Are eLearning courses available in languages other than
                  English?
                </h5>
              </Accordion.Header>
              <Accordion.Body>
                <p className="text-justify">
                  Yes, of course! E-learning courses can be made available in
                  various languages such as Bangla, Hindi, Spanish and many
                  more. You can easily translate your eLearning course into
                  multiple languages, if you need cross culture training in your
                  organization.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className="mt-2">
              <Accordion.Header>
                <h5>Can I customize eLearning courses?</h5>
              </Accordion.Header>
              <Accordion.Body>
                <p className="text-justify">
                  While there are many off-the-shelf ready-made courses
                  available in the market,eLearning courses can be customized to
                  your specifications. Many corporate bigwigs utilize this
                  feature of eLearning to train their staff on specific
                  subjects. customization helps in providing a better
                  understanding of the processes and principles in an
                  organization. You can opt for a customized eLearning course
                  when your training needs are unique and confidential.{" "}
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" className="mt-2">
              <Accordion.Header>
                <h5>
                  What are the hardware and software requirements for online
                  training?
                </h5>
              </Accordion.Header>
              <Accordion.Body>
                <p className="text-justify">
                  Well, to begin online training in your organization, you need
                  have a platform that hosts your eLearning courses. This
                  platform is called a Learning Management System (LMS). You
                  also need eLearning course authoring tools, which are used to
                  create and publish digital courses. Tools such as Articulate
                  Storyline and Adobe Captivate are SCORM compliant and can be
                  used to develop courses that are easy to upload on LMSs.{" "}
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6" className="mt-2">
              <Accordion.Header>
                <h5>How much does an eLearning course cost?</h5>
              </Accordion.Header>
              <Accordion.Body>
                <p className="text-justify">
                  WE-learning is a one-time investment, and once you have your
                  course you can use it as many times as you want. You can save
                  precious taka amounts by eliminating the need for the repeated
                  presence of the trainer.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col lg={7} md={7} sm={12}>
          <img
            src="https://img.freepik.com/free-vector/flat-people-asking-questions-illustration_23-2148910626.jpg?w=826&t=st=1666864376~exp=1666864976~hmac=e42b91fd889c0469a945b520d16b681c587a667cce75561edef70464be064368"
            alt=""
            className="img-fluid d-block mt-5"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Fqa;
