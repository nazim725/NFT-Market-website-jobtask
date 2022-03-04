import React from "react";
import "./Card1.css";
import { Card } from "react-bootstrap";
import img1 from "../../images/Ellipse 1.png";
import img2 from "../../images/Ellipse 2.png";
import img3 from "../../images/Ellipse 3.png";
import img4 from "../../images/Ellipse 4 (2).png";
import img5 from "../../images/ethereum 2.png";

const Card1 = () => {
  return (
    <div className="card1">
      <img src="https://i.ibb.co/KWRvSPD/image-1.png" alt="" width="230" />
      <div className="card1img">
        <div className="circleimg">
          <img src={img1} alt="" className="circleimg-1" />
          <img src={img2} alt="" className="circleimg-2" />
          <img src={img3} alt="" className="circleimg-3" />
          <img src={img4} alt="" className="circleimg-4" />
        </div>
      </div>
      <div>
        <h5 className="d-flex justify-content-between my-4">ArtCrypto</h5>
      </div>
      <div className="d-flex justify-content-between">
        <p>
          <img src={img5} alt="" /> 0.25 ETH
        </p>
        <p>1 of 321</p>
      </div>

      <div className="d-flex justify-content-between">
        <button className="timeButton text-primary">3h 50m 2s left</button>
        <p className="text-primary mt-3">Place a bid</p>
      </div>
    </div>
  );
};

export default Card1;
