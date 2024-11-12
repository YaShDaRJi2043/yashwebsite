import React from "react";
import "./Contact.css";
import ContactIcon from "../../components/contactIcon/ContactIcon";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  return (
    <>
      <div className="mainDiv">
        <div className="FirstDiv">
          <div>
            <img src="./contact.svg" alt="" className="contactImg" />
          </div>

          <div className="contactTextPerentDiv">
            <div className="contactText">Contact Me</div>
            <div className="contactLineText">
              I am available on almost every social media. You can Contact me, I
              can help you with React and Node.
            </div>

            <div>
              <ContactIcon />
            </div>

            <div className="ResumeBtnDiv">
              <a
                href="https://drive.google.com/file/d/1O60GRvCpBmOjAQfpj3tHD1NdB0cCUTmZ/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="ResumeBtn"
              >
                See My Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
