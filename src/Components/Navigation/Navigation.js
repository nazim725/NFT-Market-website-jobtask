import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/" className="heading text-primary">
            NFTERS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Market Place</Nav.Link>
              <Nav.Link href="#action2">Resource</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <input className="inputBox text-center" placeholder="Search" />{" "}
              <i class="fa-solid fa-magnifying-glass"></i>
              <Button className="uploadButton">Upload</Button>
              <Button className="connectButton">Connect Wallet</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
