import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Footer from "../../components/Footer/Footer";
import ContactIcon from "../../components/contactIcon/ContactIcon";

const Home = () => {
  return (
    <>
      <div className="main_home">
        <div className="d-flex justify-content-center">
          <div className="left_main">
            <div className="fs-1">Hello, Welcome To</div>
            <div
              style={{ fontSize: "30px", color: "#836be2" }}
              className="fs-3"
            >
              YASH Developer
            </div>
            <div style={{ marginTop: "10px" }} className="fs-4">
              I am
              <span style={{ color: "#f14675" }} className="mx-1 d-inline-flex">
                <Typewriter
                  options={{
                    strings: ["FullStack Developer."],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>

            <div style={{ marginTop: "30px" }}>
              <ContactIcon />
              <div>
                <NavLink
                  to="/project"
                  className="explore d-inline-flex justify-content-center"
                >
                  Explore Now
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="imgDiv">
          <img src="/onlychange.svg" className="imgg" alt="img" />
        </div>
      </div>

      <div className="secondMianDiv">
        <div>
          <img src="/Development.svg" alt="img" className="DevelopmentImg" />
        </div>
        <div>
          <div className="fullStackText">Full Stack Development</div>

          <div className="iconDiv">
            <img src="/html.svg" alt="" className="lenIcon" />
            <img src="/css.svg" alt="" className="lenIcon" />
            <img src="/javascript.svg" alt="" className="lenIcon" />
            <img src="/react.svg" alt="" className="lenIcon" />
            <img src="/nodejs.svg" alt="" className="lenIcon" />
            <img src="/mongodb.svg" alt="" className="lenIcon" />
          </div>

          <div className="introLenTextDiv">
            <div className="introLenText">
              ⚡ Building responsive website frontEnd using React
            </div>
            <div className="introLenText">
              ⚡ Creating application backend in NodeJs & ExpressJs
            </div>
          </div>
        </div>

        <div className="footer1">
          <Footer />
        </div>
      </div>

      <div className="footer2">
        <Footer />
      </div>
    </>
  );
};

export default Home;
