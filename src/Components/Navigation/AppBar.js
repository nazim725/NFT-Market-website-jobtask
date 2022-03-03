import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import img from "../../images/Vector.png";
import "./AppBar.css";

const AppBar = () => {
  return (
    <div className="appBar">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">
                <button>All Categories</button>
              </Nav.Link>
              <Nav.Link href="#action1">
                <button>Art</button>
              </Nav.Link>
              <Nav.Link href="#action1">
                <button>Celebrities</button>
              </Nav.Link>
              <Nav.Link href="#action1">
                <button>Gaming</button>
              </Nav.Link>
              <Nav.Link href="#action1">
                <button>Sport</button>
              </Nav.Link>
              <Nav.Link href="#action1">
                <button>Music</button>
              </Nav.Link>
              <Nav.Link href="#action1">
                <button>Crypto</button>
              </Nav.Link>
            </Nav>
            <Nav.Link href="#action1">
              <button>
                <img src={img} alt="" /> All Filters
              </button>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppBar;
