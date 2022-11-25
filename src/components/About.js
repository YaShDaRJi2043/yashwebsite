import React from "react";
import Accordion from "react-bootstrap/Accordion";

const About = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ fontSize: "30px", marginTop: "5px" }}
      >
        About me
      </div>
      <div
        className="d-flex justify-content-center"
        style={{ fontSize: "24px", marginTop: "5px", marginBottom: "15px" }}
      >
        Yash
      </div>
      <div>
        <img src="/man.png" height="80px" className="d-flex m-auto" />
      </div>
      <div className="mt-4 mx-auto col-lg-3 col-5">
        <Accordion defaultActiveKey="">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Skills</Accordion.Header>
            <Accordion.Body style={{ backgroundColor: "#f3dcbe" }}>
              HTML5, CSS3, JavaScript, Bootstrap, ReactJS, NodeJS, ExpressJS,
              MongoDB
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className="mt-3 border-top">
            <Accordion.Header>Experience</Accordion.Header>
            <Accordion.Body style={{ backgroundColor: "#f3dcbe" }}>
              3 Mounth Internship of MERN Stack
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2" className="mt-3 border-top">
            <Accordion.Header>Contact</Accordion.Header>
            <Accordion.Body style={{ backgroundColor: "#f3dcbe" }}>
              Phone No. 9313446930
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default About;
