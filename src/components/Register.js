import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [inputvalue, setInputvalue] = useState({
    Yname: "",
    email: "",
    Epass: "",
    Cpass: "",
  });
  const [data, setData] = useState([]);
  const detail = (e) => {
    const { value, name } = e.target;
    setInputvalue({ ...inputvalue, [name]: value });
  };

  const btn1 = () => {
    const { Yname, email, Epass, Cpass } = inputvalue;

    if (Yname == "") {
      toast("please enter your name!", {
        position: "top-center",
      });
    } else if (email == "") {
      toast("please enter your email!", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast("please enter your email!", {
        position: "top-center",
      });
    } else if (Epass == "") {
      toast("please enter your password!", {
        position: "top-center",
      });
    } else if (Cpass == "") {
      toast("please enter confirm password!", {
        position: "top-center",
      });
    } else if (Epass != Cpass) {
      toast("please enter same password!", {
        position: "top-center",
      });
    } else {
      setData([...data, inputvalue]);
    }
  };
  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "50px" }}
      >
        <div
          className="d-md-flex p-5"
          style={{
            boxShadow: "0 5px 15px -5px rgb(0 0 0 / 30%)",
            borderRadius: "10px",
          }}
        >
          <div className="col-md-5 col-10 me-5">
            <div>
              <div style={{ fontSize: "40px", fontWeight: "400" }}>Sign In</div>
            </div>
            <div style={{ borderBottom: "1px solid black" }} className="mt-4">
              <PersonIcon style={{ fontSize: "20px" }} />
              <input
                type="text"
                placeholder="Your Name"
                name="Yname"
                onChange={detail}
                style={{
                  border: "none",
                  outlineStyle: "none",
                }}
              />
            </div>
            <div style={{ borderBottom: "1px solid black" }} className="mt-4">
              <EmailIcon style={{ fontSize: "20px" }} />
              <input
                type="text"
                placeholder="Your Email"
                name="email"
                onChange={detail}
                style={{
                  border: "none",
                  outlineStyle: "none",
                }}
              />
            </div>
            <div style={{ borderBottom: "1px solid black" }} className="mt-4">
              <LockIcon style={{ fontSize: "20px" }} />
              <input
                type="password"
                placeholder="Your Password"
                name="Epass"
                onChange={detail}
                style={{
                  border: "none",
                  outlineStyle: "none",
                }}
              />
            </div>
            <div style={{ borderBottom: "1px solid black" }} className="mt-4">
              <LockIcon style={{ fontSize: "20px" }} />
              <input
                type="password"
                placeholder="Confirm Password"
                name="Cpass"
                onChange={detail}
                style={{
                  border: "none",
                  outlineStyle: "none",
                }}
              />
            </div>
            <div>
              <Button
                variant="primary"
                onClick={btn1}
                style={{ marginTop: "20px" }}
              >
                Register
              </Button>
            </div>
          </div>

          <div>
            <img
              src="/pink-2.svg"
              style={{ marginTop: "100px", height: "120px" }}
              className="img-fluid"
            />
            <br />
            <NavLink
              to="/login"
              style={{
                textDecoration: "none",
                color: "black",
              }}
              className="d-block text-center mt-2"
            >
              I am already register
            </NavLink>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Register;
