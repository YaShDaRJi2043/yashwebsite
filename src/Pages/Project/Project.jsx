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
        <a
          href="https://cart-now-frontrnd.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="projectDiv"
        >
          <div className="projectName">cartNow</div>
          <div className="projectDiscription">
            ⚡ It is E-commerce web application with admin panel.
          </div>
          <div className="lenLogoDiv">
            <img src="/react.svg" alt="img" className="lenLogo" />
            <img src="/nodejs.svg" alt="img" className="lenLogo" />
            <img src="/mongodb.svg" alt="img" className="lenLogo" />
          </div>
        </a>

        <a
          href="https://drive-front-end.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="projectDiv"
        >
          <div className="projectName">SillyStorage</div>
          <div className="projectDiscription">
            ⚡ It is Image & video storage web application.
          </div>
          <div className="lenLogoDiv">
            <img src="/react.svg" alt="img" className="lenLogo" />
            <img src="/nodejs.svg" alt="img" className="lenLogo" />
            <img src="/mongodb.svg" alt="img" className="lenLogo" />
            <img src="/firebase.svg" alt="img" className="lenLogo" />
          </div>
        </a>

        <a
          href="https://mern-estate-main-beta.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="projectDiv"
        >
          <div className="projectName">Prime Estate</div>
          <div className="projectDiscription">
            ⚡ It is real estate web application.
          </div>
          <div className="lenLogoDiv">
            <img src="/react.svg" alt="img" className="lenLogo" />
            <img src="/vite.png" alt="img" className="lenLogo" />
            <img src="/nodejs.svg" alt="img" className="lenLogo" />
            <img src="/mongodb.svg" alt="img" className="lenLogo" />
            <img src="/firebase.svg" alt="img" className="lenLogo" />
          </div>
        </a>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Project;
