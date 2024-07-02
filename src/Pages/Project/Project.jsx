import React from "react";
import "./Project.css";
import Footer from "../../components/Footer/Footer";

const Project = () => {
  return (
    <>
      <div className="FirstDiv">
        <div>
          <img src="/project.svg" alt="img" className="projectImg" />
        </div>
        <div className="projectTextPerentDiv">
          <div className="projectText">Projects</div>
          <div className="projectLineText">
            In my work, I use a bunch of new tech tools. The MERN stack, which
            stands for MongoDB, Express.js, React, and Node.js, is where I
            excel.
          </div>
        </div>
      </div>

      <div className="projectContainer">
        <div className="projectDiv">
          <div className="projectName">cartNow</div>
          <div className="projectDiscription">
            ⚡ It is E-commerce website with admin panel.
          </div>
          <div className="lenLogoDiv">
            <img src="/react.svg" alt="img" className="lenLogo" />
            <img src="/nodejs.svg" alt="img" className="lenLogo" />
            <img src="/mongodb.svg" alt="img" className="lenLogo" />
          </div>
        </div>

        <div className="projectDiv">
          <div className="projectName">SillyStorage</div>
          <div className="projectDiscription">
            ⚡ It is Image & video storage website.
          </div>
          <div className="lenLogoDiv">
            <img src="/react.svg" alt="img" className="lenLogo" />
            <img src="/nodejs.svg" alt="img" className="lenLogo" />
            <img src="/mongodb.svg" alt="img" className="lenLogo" />
            <img src="/firebase.svg" alt="img" className="lenLogo" />
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Project;
