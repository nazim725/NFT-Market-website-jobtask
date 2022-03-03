import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Components4.css";
import img1 from "../../images/unsplash_E8Ufcyxz514.png";
import img2 from "../../images/unsplash_tZCrFpSNiIQ.png";
import imgProfile from "../../images/Ellipse 97.png";
import imgProfile2 from "../../images/Ellipse 96.png";
import img3 from "../../images/col2 pic.png";

const Components4 = () => {
  return (
    <div style={{ margin: "100px 0" }}>
      <Container>
        <Row>
          <Col sm={12} md={4} xs={12}>
            <div className="components-4-1st-column">
              <img src={img1} alt="" width="300" height="300" />
              <img src={imgProfile} className="profileimg" alt="" />
              <img
                src={img2}
                alt=""
                width="195"
                height="215"
                style={{ marginLeft: "100px", marginTop: "20px" }}
              />
              <img src={imgProfile2} className="profileimg2" alt="" />
            </div>
          </Col>
          <Col sm={12} md={4} xs={12}>
            <div className="components-4-2nd-column">
              <img src={img3} alt="" className="col-3-img" />
              <img src={imgProfile2} className="profile2" alt="" />
            </div>
          </Col>
          <Col sm={12} md={4} xs={12}>
            <div
              className="d-flex  align-self-center flex-column"
              style={{ marginTop: "120px" }}
            >
              <h3 className="fw-bold text-start ">
                Create and <br /> sell your NFTs
              </h3>
              <p className="text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisi ac phasellus placerat a pellentesque tellus sed
                egestas. Et tristique dictum sit tristique sed non. Lacinia
                lorem id consectetur pretium diam ut. Pellentesque eu sit
                blandit fringilla risus faucibus.
              </p>
              <button className="signupButton text-white">Sign Up Now</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Components4;
