import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="py-4">
      <Container>
        <Row>
          <Col className="text-center">
            <div
              className="fw-bold fs-5"
              style={{ color: "rgba(131, 107, 226, 0.749)" }}
            >
              Made with ❤️ by Yash Darji
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
