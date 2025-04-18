import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { ListItem } from "@mui/material";

const Header = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <NavLink to="/" className="sidebar">
            Home
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/about" className="sidebar">
            About
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/project" className="sidebar">
            Project
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/contact" className="sidebar">
            Contact
          </NavLink>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Navbar bg="light" style={{ boxShadow: "0px 0px 15px -7px #000" }}>
        <Container fluid>
          <div className="slider">
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <i
                  className="fa fa-fas fa-bars menu"
                  onClick={toggleDrawer(anchor, true)}
                ></i>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>

          <NavLink to="/" className="right_nav">
            <h1>YASH</h1>
          </NavLink>

          <Nav className="left_nav">
            <NavLink to="/" className="pagesName">
              Home
            </NavLink>
            <NavLink to="/about" className="pagesName">
              About
            </NavLink>
            <NavLink to="/project" className="pagesName">
              Projects
            </NavLink>
            <NavLink to="/contact" className="pagesName">
              Contact
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
