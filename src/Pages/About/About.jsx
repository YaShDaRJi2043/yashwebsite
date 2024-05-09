import React from "react";
import "./About.css";
import Accordion from "react-bootstrap/Accordion";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <>
      <div className="FirstDiv">
        <div>
          <img src="/mirror.svg" alt="img" className="mirrorImg" />
        </div>

        <div className="AboutMeTextPerentDiv">
          <div className="AboutMeText">About Me</div>
          <div className="AboutMeLineText">
            I'm a MERN stack developer who loves building websites that look
            great and work even better. I enjoy getting creative with design and
            making sure everything runs smoothly.
          </div>
        </div>
      </div>

      <div className="AccordionDiv">
        <Accordion>
          <Accordion.Item eventKey="0" className="Accordion">
            <Accordion.Header>Education</Accordion.Header>
            <Accordion.Body>
              <div className="EducationDetailMainDiv">
                <div className="clgLogoDiv">
                  <img src="/GUNI.jpeg" alt="img" className="clgLogo" />
                </div>

                <div className="bubble">
                  <div className="bubble1">
                    <div className="clgName">Ganpat University (GUNI)</div>
                    <div className="clgYear">2023 - Present</div>

                    <div className="courceName">
                      Master of Computer Applications
                    </div>
                  </div>
                </div>
              </div>

              <div className="EducationDetailMainDiv mt-3">
                <div className="clgLogoDiv">
                  <img src="/PRESIDENT.png" alt="img" className="clgLogo" />
                </div>

                <div className="bubble">
                  <div className="bubble1">
                    <div className="clgName">
                      President Institute of Computer Application (PICA)
                    </div>
                    <div className="clgYear">2020 - 2023</div>

                    <div className="courceName">
                      Bachelor of Computer Applications
                    </div>
                    <div className="clgYear">7.55 CGPA</div>
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="Accordion">
            <Accordion.Header>Experience</Accordion.Header>
            <Accordion.Body>
              <div className="ExperienceDiv">
                <div className="work">MERN Stack Project Training</div>
                <div className="compantName">VmapCode</div>
                <div className="mt-4">
                  <div className="whatIDO">
                    ⚡ Learned to build interactive and responsive user
                    interfaces using React.js.
                  </div>
                  <div className="whatIDO">
                    ⚡ Developed strong server-side skills by working with
                    Node.js and Express.js to create robust backend
                    applications.
                  </div>
                  <div className="whatIDO">
                    ⚡ Acquired knowledge in database design and management,
                    with a focus on MongoDB, for storing and retrieving data in
                    web applications.
                  </div>
                </div>
              </div>

              <div className="ExperienceDiv mt-4">
                <div className="work">ReactJS Developer</div>
                <div className="compantName">
                  WebEarl Technologies Private Limited
                </div>
                <div className="mt-4">
                  <div className="whatIDO">
                    ⚡ Experienced in developing engaging website frontends,
                    utilizing React.js to create dynamic and user friendly
                    interfaces.
                  </div>
                  <div className="whatIDO">
                    ⚡ Proficient in API calls and integrating data from backend
                    services to enhance website functionality and user
                    experience.
                  </div>
                  <div className="whatIDO">
                    ⚡ Proficient in designing and implementing backend APIs for
                    websites using Node.js and Express.
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default About;
