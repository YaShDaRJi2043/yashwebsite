import React from "react";
import "./ContactIcon.css";

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
          <i className="fa fa-fab fa-github commonCss GitIcon"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/yash-darji-53221324a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noreferrer"
          className="AppsIcons"
        >
          <i className="fa fa-fab fa-linkedin commonCss LinkedIn"></i>
        </a>

        <a
          href="mailto:yashdarji1955@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="AppsIcons"
        >
          <i className="fa fa-far fa-envelope commonCss Google"></i>
        </a>
      </div>
    </>
  );
};

export default ContactIcon;
