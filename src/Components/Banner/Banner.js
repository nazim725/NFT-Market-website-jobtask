import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import img from "../../images/unsplash_E8Ufcyxz514.png";
import img1 from "../../images/unsplash_pVoEPpLw818.png";
import img2 from "../../images/unsplash_tZCrFpSNiIQ.png";
import img4 from "../../images/Ellipse 95.png";
import img5 from "../../images/ethereum 2.png";

const Banner = () => {
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col sm={12} md={6} xs={12} className="bannerInfoPart mt-5">
            <h className="bannerHeading text-uppercase fw-bold">
              Discover, and collect <br /> Digital Art NFTs{" "}
            </h>
            <p className="text-start">
              Digital marketplace for crypto collectibles and <br />{" "}
              non-fungible tokens (NFTs). Buy, Sell, and discover <br />{" "}
              exclusive digital assets.
            </p>
            <Button className=" exploreButton my-3 ">Explore Now</Button>
            <div className="d-flex mt-3">
              <div>
                <h1>98K+</h1>
                <p className="text-start">Artwork</p>
              </div>
              <div className="ms-4">
                <h1>12K+</h1>
                <p className="text-start">Auction</p>
              </div>
              <div className="ms-4">
                <h1>15K+</h1>
                <p className="text-start">Artist</p>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} xs={12}>
            <div className="bannerpicPart">
              <img className="img1" src={img2} alt="" />
              <img className="img2" src={img1} alt="" />
              <img className="img3" src={img} alt="" />
              <div className="img-heading">
                <h className="mt-5 text-white">Abstr Gradient NFT</h>
                <div className="d-flex ">
                  <img src={img4} alt="" />
                  <p className="ms-4 text-white">Arkhan17</p>
                </div>
              </div>
              <div className="img-bottom d-flex">
                <div className="py-2 px-3">
                  <p className="text-start text-white">Current Bid</p>
                  <div className="d-flex">
                    <img src={img5} alt="" height={20} />
                    <p className="ms-3 text-white">0.25 ETH</p>
                  </div>
                </div>
                <div className="py-2 px-3 ms-4">
                  <p className="text-start text-white">Ends in</p>
                  <div className="">
                    <p className="text-white">0.25 ETH</p>
                  </div>
                </div>
              </div>

              <div className="circular-img"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
