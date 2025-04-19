import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Container, Row, Col, Image, Card } from "react-bootstrap";

const About = () => {
  return (
    <Container className="py-5">
      {/* About Section */}
      <Row className="justify-content-center align-items-center mb-5">
        <Col xs={12} md={6} className="text-center mb-4 mb-md-0">
          <Image
            src="/mirror.svg"
            alt="img"
            fluid
            className="mb-4 p-5 p-md-0"
          />
        </Col>
        <Col xs={12} md={6} className="text-center p-md-5">
          <h2 className="mb-3" style={{ color: "#836be2", fontSize: "36px" }}>
            About Me
          </h2>
          <p
            style={{
              color: "#5a4f82c5",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "30px",
            }}
          >
            I'm a FULL stack developer who loves building websites that look
            great and work even better. I enjoy getting creative with design and
            making sure everything runs smoothly.
          </p>
        </Col>
      </Row>

      {/* Accordion Section */}
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Education</Accordion.Header>
          <Accordion.Body>
            {/* Education 1 */}
            <Row className="mb-4 align-items-center">
              <Col xs={12} md={2} className="text-center mb-3">
                <Image src="/GUNI.jpeg" alt="GUNI" roundedCircle width="150" />
              </Col>
              <Col>
                <Card className="bg-light p-3">
                  <Card.Body>
                    <Card.Title>Ganpat University (GUNI)</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      2023 - 2025
                    </Card.Subtitle>
                    <Card.Text>
                      <span style={{ color: "#836be2", fontWeight: "600" }}>
                        Master of Computer Applications
                      </span>
                      <br />
                      <span className="text-muted">7.84 CGPA</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Education 2 */}
            <Row className="align-items-center">
              <Col xs={12} md={2} className="text-center mb-3">
                <Image
                  src="/PRESIDENT.png"
                  alt="PICA"
                  roundedCircle
                  width="150"
                />
              </Col>
              <Col>
                <Card className="bg-light p-3">
                  <Card.Body>
                    <Card.Title>
                      President Institute of Computer Application (PICA)
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      2020 - 2023
                    </Card.Subtitle>
                    <Card.Text>
                      <span style={{ color: "#836be2", fontWeight: "600" }}>
                        Bachelor of Computer Applications
                      </span>
                      <br />
                      <span className="text-muted">7.55 CGPA</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>

        {/* Experience Section */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>Experience</Accordion.Header>
          <Accordion.Body>
            {/* Experience 1 */}
            <Card className="bg-light mb-4 p-3">
              <Card.Body>
                <Card.Title>MERN Stack Project Training</Card.Title>
                <Card.Subtitle
                  className="mb-2"
                  style={{
                    color: "#836be2",
                    fontWeight: "700",
                    fontSize: "18px",
                  }}
                >
                  Technource Pvt. Ltd.
                </Card.Subtitle>
                <div
                  style={{
                    color: "#5a4f82c5",
                    fontWeight: 600,
                    lineHeight: "26px",
                  }}
                >
                  <div>
                    ⚡ Developed scalable web applications using React.js and
                    Node.js, ensuring a seamless user experience.
                  </div>
                  <div>
                    ⚡ Integrated RESTful APIs and optimized performance with
                    MySQL for efficient database management.
                  </div>
                  <div>
                    ⚡ Proactively debugged and resolved issues, improving
                    system stability and performance.
                  </div>
                  <div>
                    ⚡ Collaborated with teams to enhance code quality,
                    scalability, and maintainability.
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* Experience 2 */}
            <Card className="bg-light p-3">
              <Card.Body>
                <Card.Title>ReactJS Developer</Card.Title>
                <Card.Subtitle
                  className="mb-2"
                  style={{
                    color: "#836be2",
                    fontWeight: "700",
                    fontSize: "18px",
                  }}
                >
                  WebEarl Technologies Pvt. Ltd.
                </Card.Subtitle>
                <div
                  style={{
                    color: "#5a4f82c5",
                    fontWeight: 600,
                    lineHeight: "26px",
                  }}
                >
                  <div>
                    ⚡ Participated in daily scrums, providing updates and
                    aligning with project goals in an agile environment.
                  </div>
                  <div>
                    ⚡ Enhanced application functionality to meet client needs,
                    ensuring smooth system integration and improved UX.
                  </div>
                  <div>
                    ⚡ Refactored React.js components, improving code structure,
                    maintainability, and performance.
                  </div>
                  <div>
                    ⚡ Integrated RESTful APIs with React.js and developed
                    scalable backend APIs using Node.js and Express.js.
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default About;
