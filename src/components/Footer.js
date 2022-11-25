import { textAlign } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          bottom: "-100px",
          textAlign: "center",
          backgroundColor: "#EEEEEE",
          padding: "15px",
        }}
        className="w-100"
      >
        <b>
          © 2022 YASH Devloper. All Rights Reserved | Terms And Condition
          Applied.
        </b>
      </div>
    </>
  );
};

export default Footer;
