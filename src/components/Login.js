import React from "react";
import Button from "react-bootstrap/Button";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="d-md-flex justify-content-center">
        <div
          className="d-md-flex p-md-5 p-5"
          style={{
            boxShadow: "0 5px 15px -5px rgb(0 0 0 / 30%)",
            marginTop: "100px",
            borderRadius: "10px",
          }}
        >
          <div>
            <img src="/pink-1.svg" style={{ height: "200px" }} className="mx-5"/>

            <div className="text-center">
              <NavLink
                to="/register"
                style={{ textDecoration: "none", color: "black" }}
              >
                Create Accout
              </NavLink>
            </div>
          </div>
          <div className="mx-5">
            <div style={{ fontSize: "40px", fontWeight: "400" }}>Sign In</div>
            <div
              style={{ borderBottom: "1px solid black" }}
              className="mt-4 d-flex"
            >
              <EmailIcon style={{ fontSize: "20px" }} />
              <input
                type="text"
                placeholder="Your Email"
                style={{
                  border: "none",
                  outlineStyle: "none",
                }}
              />
            </div>
            <div
              style={{ borderBottom: "1px solid black" }}
              className="mt-4 d-flex"
            >
              <LockIcon style={{ fontSize: "20px" }} />
              <input
                type="password"
                placeholder="Your Password"
                style={{
                  border: "none",
                  outlineStyle: "none",
                }}
              />
            </div>
            <div>
              <Button
                variant="primary"
                style={{ fontSize: "18px" }}
                className="mt-4"
              >
                Sign in
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
