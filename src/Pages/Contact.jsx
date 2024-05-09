import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  library.add(faPhone, faEnvelope, faLocationDot);
  return (
    <>
      <div className="col-9 m-auto">
        <div className="d-inline-block d-md-flex justify-content-around mt-5">
          <div className="box">
            <div className="m-auto">
              <FontAwesomeIcon
                icon="fa-solid fa-phone"
                style={{ color: "blue", fontSize: "25px" }}
              />
            </div>
            <div className="m-auto">
              <div style={{ fontSize: "18px" }}>Phone:</div>
              <div style={{ fontSize: "18px" }}>+919313446390</div>
            </div>
          </div>

          <div className="box">
            <div className="m-auto">
              <FontAwesomeIcon
                icon="fa-solid fa-envelope"
                style={{ color: "red", fontSize: "25px" }}
              />
            </div>
            <div className="m-auto">
              <div style={{ fontSize: "18px" }}>Email:</div>
              <div style={{ fontSize: "16px" }}>yashdarji1955@gmail.com</div>
            </div>
          </div>

          <div className="box">
            <div className="m-auto">
              <FontAwesomeIcon
                icon="fa-solid fa-location-dot"
                style={{ color: "green", fontSize: "25px" }}
              />
            </div>
            <div className="m-auto">
              <div style={{ fontSize: "18px" }}>Address:</div>
              <div style={{ fontSize: "18px" }}>New Ranip, Ahmedabad</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
