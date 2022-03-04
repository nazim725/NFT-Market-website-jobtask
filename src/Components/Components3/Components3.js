import React from "react";
import "./Components3.css";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../images/unsplash_F56Y7dgrAkc (1).png";

import img2 from "../../images/unsplash_pVoEPpLw818 (1).png";
import img3 from "../../images/unsplash_LpbyDENbQQg.png";
import img4 from "../../images/unsplash_9anj7QWy-2g.png";
import img5 from "../../images/unsplash_E8Ufcyxz514.png";
import img6 from "../../images/unsplash_9anj7QWy-2g (1).png";
import img7 from "../../images/Group 88 (1).png";
import img8 from "../../images/unsplash_pVoEPpLw818 (2).png";
import img9 from "../../images/unsplash_LpbyDENbQQg (1).png";
import imgprofile from "../../images/Ellipse 95.png";

const Components3 = () => {
  return (
    <div className="">
      <Container>
        <Row>
          <h3 className="fw-bold text-start my-5 ">Collection Featured NFTs</h3>
          <Col sm={12} md={4} xs={12} className="mt-4">
            <Row>
              <Col className="col-6">
                <img src={img1} alt="" width={200} height="270" />
              </Col>
              <Col className="col-6">
                <img src={img2} alt="" />
                <img src={img3} alt="" className="mt-2" />
                <img src={img4} alt="" className="mt-2" />
              </Col>
            </Row>
            <Row>
              <Col>
                <h5 className="text-start">Amazing Collection</h5>
                <div className="d-flex justify-content-between">
                  <div>
                    <img src={imgprofile} alt="" />{" "}
                    <span className="ms-3">by Arkhan</span>
                  </div>
                  <div className="me-2">
                    <button className="itemsButton">Total 54 Items</button>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={4} xs={12} className="mt-4">
            <Row>
              <Col className="col-6">
                <img src={img5} alt="" width={200} height="270" />
              </Col>
              <Col className="col-6">
                <img src={img3} alt="" />
                <img src={img2} alt="" className="mt-2" />
                <img src={img6} alt="" className="mt-2" />
              </Col>
            </Row>
            <Row>
              <Col>
                <h5 className="text-start">Amazing Collection</h5>
                <div className="d-flex justify-content-between">
                  <div>
                    <img src={imgprofile} alt="" />{" "}
                    <span className="ms-3">by Arkhan</span>
                  </div>
                  <div className="me-2">
                    <button className="itemsButton">Total 54 Items</button>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={4} xs={12} className="mt-4">
            <Row>
              <Col className="col-6">
                <img src={img7} alt="" width={200} height="270" />
              </Col>
              <Col className="col-6">
                <img src={img8} alt="" />
                <img src={img9} alt="" className="mt-2" />
                <img src={img2} alt="" className="mt-2" />
              </Col>
            </Row>
            <Row>
              <Col>
                <h5 className="text-start">Amazing Collection</h5>
                <div className="d-flex justify-content-between">
                  <div>
                    <img src={imgprofile} alt="" />{" "}
                    <span className="ms-3">by Arkhan</span>
                  </div>
                  <div className="me-2">
                    <button className="itemsButton">Total 54 Items</button>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Components3;
