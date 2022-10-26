import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";

const Blogs = () => {
  return (
    <Container className="mt-5 pt-5">
      <Row>
        <Col lg={12} md={12} sm={12}>
          <Accordion defaultActiveKey={["0", "1", "2", "3"]} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h4 className="text-black text-justify">1. what is cors?</h4>
              </Accordion.Header>
              <Accordion.Body>
                <p className="text-justify fs-5">
                  CORS (Cross-Origin Resource Sharing) is a system, consisting
                  of transmitting HTTP headers, that determines whether browsers
                  block frontend JavaScript code from accessing responses for
                  cross-origin requests. The same-origin security policy
                  prohibits cross-origin access to resources.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h4 className="text-black text-justify">
                  2. Why are you using firebase? What other options do you have
                  to implement authentication?
                </h4>
              </Accordion.Header>
              <Accordion.Body>
                <p className="text-justify fs-5">
                  <span className="semi-bold">Firebase Authentication</span>{" "}
                  provides backend services, easy-to-use SDKs, and ready-made UI
                  libraries to authenticate users to your app. It supports
                  authentication using passwords, phone numbers, popular
                  federated identity providers like Google, Facebook and
                  Twitter, and more.
                </p>
                <p className="text-justify semi-bold fs-5">
                  Get Started with Firebase Authentication on Websites
                </p>
                <ul className="fs-5">
                  <li>On this page.</li>
                  <li>Add and initialize the Authentication SDK.</li>
                  <li>
                    (Optional) Prototype and test with Firebase Local Emulator
                    Suite.
                  </li>
                  <li>Sign in existing users.</li>
                  <li>
                    Set an authentication state observer and get user data.
                  </li>
                  <li>Next steps.</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <h4 className="text-black text-justify">
                  3. How does the private route work?
                </h4>
              </Accordion.Header>
              <Accordion.Body>
                <p className="text-justify fs-5">
                  The private route component is similar to the public route,
                  the only change is that redirect URL and authenticate
                  condition. If the user is not authenticated he will be
                  redirected to the login page and the user can only access the
                  authenticated routes If he is authenticated (Logged in).
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <h4 className="text-black">4. What is Node? How does Node work?</h4>
              </Accordion.Header>
              <Accordion.Body>
                <p className="text-justify fs-5"><span className="semi-bold">
                  Node. js</span> is a JavaScript runtime environment that achieves low
                  latency and high throughput by taking a “non-blocking”
                  approach to serving requests. In other words, Node. js wastes
                  no time or resources on waiting for I/O requests to return.
                </p>
                <p className="text-justify fs-5">It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. Working of Node.</p>
                <img src="https://csharpcorner-mindcrackerinc.netdna-ssl.com/article/node-js-event-loop/Images/1.png" alt="" className="mx-auto d-block" />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Blogs;
