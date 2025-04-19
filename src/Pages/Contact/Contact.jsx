import React from "react";
import "./Contact.css";
import ContactIcon from "../../components/contactIcon/ContactIcon";

const Contact = () => {
  return (
    <>
      <div className="contactMainDiv">
        <div className="ContactFirstDiv">
          <div>
            <img src="./contact.svg" alt="" className="contactImg" />
          </div>

          <div className="contactTextPerentDiv">
            <div className="contactText">Contact Me</div>
            <div className="contactLineText">
              I am active on various social media platforms. Feel free to reach
              out. I can assist you with React, Node.js, and web development.
            </div>

            <div>
              <ContactIcon />
            </div>

            <div className="ResumeBtnDiv">
              <a
                href="https://drive.google.com/file/d/1LCTifumazfq_VeC07YAxIbhJs60xGoBi/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="ResumeBtn"
              >
                View My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
