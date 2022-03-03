import React from "react";
import "./Card1.css";

import img1 from "../../images/Ellipse 1.png";
import img2 from "../../images/Ellipse 2.png";
import img3 from "../../images/Ellipse 3.png";
import img4 from "../../images/Ellipse 4 (2).png";
import img5 from "../../images/ethereum 2.png";

const Card4 = () => {
  return (
    <div className="card1">
      <img src="https://i.ibb.co/L5yVwmf/image-1-4.png" alt="" width="230" />
      <div className="card1img">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
      </div>
      <div>
        <h5 className="d-flex justify-content-between my-4">KingCrypto</h5>
      </div>
      <div className="d-flex justify-content-between">
        <p>
          <img src={img5} alt="" /> 0.25 ETH
        </p>
        <p>1 of 321</p>
      </div>

      <div className="d-flex justify-content-between">
        <button className="timeButton">3h 50m 2s left</button>
        <p>Place a bid</p>
      </div>
    </div>
  );
};

export default Card4;
