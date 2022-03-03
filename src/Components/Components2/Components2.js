import React from "react";
import "./Components2.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import img1 from "../../images/unsplash_F56Y7dgrAkc.png";
import img2 from "../../images/Ellipse 95.png";
import img3 from "../../images/ethereum 2.png";
import img4 from "../../images/Group 88.png";
import img5 from "../../images/Group 88 (1).png";
import img6 from "../../images/Group 88 (2).png";
import imgb from "../../images/unsplash_k0rVudBoB4c.png";
import imgc from "../../images/unsplash_fT49QnFucQ8.png";
import imgd from "../../images/unsplash_5MTf9XyVVgM.png";
import imge from "../../images/unsplash_WjIB-6UxA5Q.png";
import imgf from "../../images/unsplash_zkNT5mikUuo.png";

// import imga from "../../images/unsplash_5MTf9XyVVgM";

const Components2 = () => {
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col className="col-3" sm={12} md={3} xs={12}>
            <img src={img1} alt="" width={250} height={360} />
            <div className="d-flex  justify-content-between mt-2">
              <div className="d-flex">
                <div className="mt-2">
                  <img src={img2} alt="" />
                </div>
                <div className="ms-2">
                  <h6>The Futr Abstr</h6>
                  <p>10 in the stock</p>
                </div>
              </div>
              <div>
                <p>Highest Bid</p>
                <div className="d-flex justify-content-center">
                  <img src={img3} alt="" height={16} />
                  <h6 className="ms-2">0.25 ETH</h6>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={4} xs={12} className="">
            <Row>
              <Col className="col-5">
                <img src={img4} alt="" width="130" />
              </Col>
              <Col className="col-7">
                <h5>The Futr Abstr</h5>
                <div>
                  <img src={img2} alt="" />
                  <Button variant="outline-success">
                    <img src={img3} alt="" height="16" />
                    0.25 ETH
                  </Button>
                  <span>1 of 8</span>
                </div>
                <button className="bidButton mt-2">Place a bid</button>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col className="col-5">
                <img src={img5} alt="" width="130" />
              </Col>
              <Col className="col-7">
                <h5>The Futr Abstr</h5>
                <div>
                  <img src={img2} alt="" />
                  <Button variant="outline-success">
                    <img src={img3} alt="" height="16" />
                    0.25 ETH
                  </Button>
                  <span>1 of 8</span>
                </div>
                <button className="bidButton mt-2">Place a bid</button>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col className="col-5">
                <img src={img6} alt="" width="130" />
              </Col>
              <Col className="col-7">
                <h5>The Futr Abstr</h5>
                <div>
                  <img src={img2} alt="" />
                  <Button variant="outline-success">
                    <img src={img3} alt="" height="16" />
                    0.25 ETH
                  </Button>
                  <span>1 of 8</span>
                </div>
                <button className="bidButton mt-2">Place a bid</button>
              </Col>
            </Row>
          </Col>
          {/* <Col sm={12} md={4} xs={12}>
            sn=7
          </Col> */}
          <Col className="col-5" sm={12} md={5} xs={12}>
            <h5 className="fw-bold text-start ms-4">Top Collections over </h5>
            <p className="fw-bold text-primary text-start  ms-4">Last 7 days</p>
            <Row>
              <Col>
                <span className="fw-bold me-2"> 1</span>{" "}
                <img src={imgb} alt="" />
              </Col>
              <Col>
                <h5 className="text-start">CryptoFunks</h5>
                <div className="d-flex">
                  <img src={img3} alt="" height={20} />
                  <p className="ms-2">19,769.39</p>
                </div>
              </Col>
              <Col className="d-flex align-items-center">
                <h5>+26.52%</h5>
              </Col>
            </Row>
            <Row>
              <Col>
                <span className="fw-bold me-2"> 2</span>{" "}
                <img src={imgc} alt="" />
              </Col>
              <Col>
                <h5 className="text-start">Cryptix</h5>
                <div className="d-flex">
                  <img src={img3} alt="" height={20} />
                  <p className="ms-2">19,769.39</p>
                </div>
              </Col>
              <Col className="d-flex align-items-center">
                <h5>+26.52%</h5>
              </Col>
            </Row>
            <Row>
              <Col>
                <span className="fw-bold me-2"> 3</span>{" "}
                <img src={imgd} alt="" />
              </Col>
              <Col>
                <h5 className="text-start">Frensware</h5>
                <div className="d-flex">
                  <img src={img3} alt="" height={20} />
                  <p className="ms-2">19,769.39</p>
                </div>
              </Col>
              <Col className="d-flex align-items-center">
                <h5>+26.52%</h5>
              </Col>
            </Row>
            <Row>
              <Col>
                <span className="fw-bold me-2"> 4</span>{" "}
                <img src={imge} alt="" />
              </Col>
              <Col>
                <h5 className="text-start">PunkArt</h5>
                <div className="d-flex">
                  <img src={img3} alt="" height={20} />
                  <p className="ms-2">19,769.39</p>
                </div>
              </Col>
              <Col className="d-flex align-items-center">
                <h5>+26.52%</h5>
              </Col>
            </Row>
            <Row>
              <Col>
                <span className="fw-bold me-2"> 5</span>{" "}
                <img src={imgf} alt="" />
              </Col>
              <Col>
                <h5 className="text-start">Art Crypto</h5>
                <div className="d-flex">
                  <img src={img3} alt="" height={20} />
                  <p className="ms-2">19,769.39</p>
                </div>
              </Col>
              <Col className="d-flex align-items-center">
                <h5>+26.52%</h5>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Components2;
