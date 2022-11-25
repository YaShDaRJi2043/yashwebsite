import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Project = () => {
  const [count, setCount] = useState(3);

  const sm = () => {
    setCount(count + count);
  };
  return (
    <>
      <div
        className="justify-content-center d-flex"
        style={{ color: "#f14675", fontSize: "34px", fontWeight: "600" }}
      >
        Project
      </div>
      <div className="container">
        <div className="row d-flex justify-content-around">
          <Card style={{ width: "22rem", marginBottom: "50px" }}>
            <Card.Img
              variant="top"
              src="/personal_pro.png"
              style={{ padding: "10px", height: "300px" }}
            />
            <Card.Body>
              <Card.Title
                style={{
                  fontSize: "26px",
                  fontWeight: "300",
                  textAlign: "center",
                }}
              >
                Personal Project
              </Card.Title>
              <a
                href="https://cute-semolina-30d25d.netlify.app"
                target="_blank"
              >
                <Button
                  variant="primary"
                  className="mx-auto mt-3 d-block w-100"
                >
                  Live Demo
                </Button>
              </a>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div>
        <Button variant="primary" className="m-auto d-flex" onClick={sm}>
          Show more
        </Button>
      </div>
    </>
  );
};

export default Project;
