import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../images/card-tick-1 1.png";
import img2 from "../../images/chart-square 2.png";
import "./Components1.css";

const Components1 = () => {
  return (
    <div
      style={{
        padding: "120px 0",
        background: "rgba(217, 224, 236, 0.2)",
        // backdropFilter: "blur(50px)",
      }}
      className="components-1"
    >
      <Container className="my-5">
        <Row>
          <Col sm={12} md={4} xs={12}>
            <h2>
              The amazing NFT art <br /> of the world here
            </h2>
          </Col>
          <Col sm={12} md={4} xs={12}>
            <Row>
              <Col class="col-2">
                <img src={img1} alt="" />
              </Col>
              <Col class="col-10">
                <h4 className="text-start">Fast Transaction</h4>
                <p className="text-start">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam etiam viverra tellus imperdiet.
                </p>
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={4} xs={12}>
            <Row>
              <Col class="col-2">
                <img src={img2} alt="" />
              </Col>
              <Col class="col-10">
                <h4 className="text-start">Growth Transaction</h4>
                <p className="text-start">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam etiam viverra tellus imperdiet.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Components1;
