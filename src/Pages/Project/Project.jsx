import React from "react";
import "./Project.css";

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
            <div className="projectLineText">
              I develop modern web applications using the MERN stack: MongoDB,
              Express.js, React, and Node.js, with a focus on building
              efficient, scalable, and user-friendly solutions.
            </div>
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
            ⚡ A comprehensive e-commerce platform with an integrated admin
            panel, designed to manage product listings, customer interactions,
            and order processing efficiently.
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
            ⚡ A cloud-based platform for secure image and video storage,
            offering seamless file uploads, management, and sharing features.
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
            ⚡ A feature-rich real estate platform that allows users to browse,
            buy, and sell properties with ease, offering advanced search and
            filtering options for a seamless experience.
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
    </>
  );
};

export default Project;
