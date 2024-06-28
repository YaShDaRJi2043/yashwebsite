import React from "react";
import "./ContactIcon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const ContactIcon = () => {
  return (
    <>
      <div style={{ marginTop: "30px" }}>
        <a
          href="https://github.com/YaShDaRJi2043"
          target="_blank"
          rel="noreferrer"
          className="AppsIcons"
        >
          <FontAwesomeIcon icon={faGithub} className="commonCss GitIcon" />
        </a>

        <a
          href="https://www.linkedin.com/in/yash-darji-53221324a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noreferrer"
          className="AppsIcons"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="commonCss LinkedIn" />
        </a>

        <a
          href="mailto:yashdarji1955@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="AppsIcons"
        >
          <FontAwesomeIcon icon={faGoogle} className="commonCss Google" />
        </a>

        <a
          href="https://www.instagram.com/_yash_darji__?igsh=MTZwOHhwajRieTIxeQ=="
          target="_blank"
          rel="noreferrer"
          className="AppsIcons"
        >
          <FontAwesomeIcon icon={faInstagram} className="commonCss Instagram" />
        </a>
      </div>
    </>
  );
};

export default ContactIcon;
