import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../../images/facebook.png";
import img2 from "../../images/twitter.png";
import img3 from "../../images/linkedin.png";

const Footer = () => {
  return (
    <div style={{ margin: "100px 0" }}>
      <Container>
        <Row>
          <Col sm={12} md={3}>
            <div className="mt-4">
              <h1 className="text-start fw-bold ">NFters </h1>
              <p className="text-start  ">
                The world’s first and largest digital marketplace for crypto
                collectibles and non-fungible tokens (NFTs). Buy, sell, and
                discover exclusive digital items.
              </p>

              <div className="text-start">
                <img src={img1} alt="" />
                <img src={img2} alt="" className="ms-3" />
                <img src={img3} alt="" className="ms-3" />
              </div>
            </div>
          </Col>
          <Col sm={12} md={3}>
            <div className="mt-4">
              <h5 className="text-center fw-bold ">Market Place </h5>
              <div className="list">
                <a href="">All NFTs</a>
                <a href="">New</a>
                <a href="">Art</a>
                <a href="">Sports</a>
                <a href="">Utility</a>
                <a href="">Music</a>
                <a href="">Domain Name</a>
              </div>
            </div>
          </Col>
          <Col sm={12} md={3}>
            <div className="mt-4">
              <h5 className="text-center fw-bold ">My Account </h5>
              <div className="list">
                <a href="">Profile</a>
                <a href="">Favorite</a>
                <a href="">My Collections</a>
                <a href="">Settings</a>
              </div>
            </div>
          </Col>
          <Col sm={12} md={3}>
            <div className="mt-4">
              <h5 className="text-start fw-bold ">Stay in the loop </h5>
              <p className="text-start">
                Join our mailing list to stay in the loop with our newest
                feature releases, NFT drops, and tips and tricks for navigating
                NFTs.
              </p>
              <div className="input-div">
                <input className="inputBox" placeholder="Email address" />
                <button className="subscribeButton text-white">
                  Subscribe Now
                </button>
              </div>
            </div>
          </Col>
        </Row>
        <p>Copyright © 2022 Avi Yansah</p>
      </Container>
    </div>
  );
};

export default Footer;
