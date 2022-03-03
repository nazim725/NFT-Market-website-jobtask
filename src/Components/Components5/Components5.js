import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppBar from "../Navigation/AppBar";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import "./Components5.css";

const Components5 = () => {
  return (
    <div className="my-5" style={{ background: "rgba(217, 224, 236, 0.2)" }}>
      <Container>
        <h1 className="text-start fw-bold">Discover more NFTs</h1>
        <AppBar></AppBar>
        <Row>
          <Row>
            <Col sm={12} md={3}>
              <Card1></Card1>
            </Col>
            <Col sm={12} md={3}>
              <Card2></Card2>
            </Col>
            <Col sm={12} md={3}>
              <Card3></Card3>
            </Col>
            <Col sm={12} md={3}>
              <Card4></Card4>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col sm={12} md={3}>
              <Card4></Card4>
            </Col>
            <Col sm={12} md={3}>
              <Card3></Card3>
            </Col>
            <Col sm={12} md={3}>
              <Card1></Card1>
            </Col>
            <Col sm={12} md={3}>
              <Card2></Card2>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col sm={12} md={3}>
              <Card1></Card1>
            </Col>
            <Col sm={12} md={3}>
              <Card4></Card4>
            </Col>
            <Col sm={12} md={3}>
              <Card2></Card2>
            </Col>
            <Col sm={12} md={3}>
              <Card3></Card3>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col sm={12} md={3}>
              <Card3></Card3>
            </Col>
            <Col sm={12} md={3}>
              <Card2></Card2>
            </Col>
            <Col sm={12} md={3}>
              <Card1></Card1>
            </Col>
            <Col sm={12} md={3}>
              <Card4></Card4>
            </Col>
          </Row>
        </Row>
        <button className="nft-button my-4">More NFTs</button>
      </Container>
    </div>
  );
};

export default Components5;
