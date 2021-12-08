import React from "react";
import barIcon from "../../../assets/images/bar-icon.svg";

function Info() {
  return (
    <div className="info">
      <p className="title">#23,450</p>
      <div className="price-info">
        <div className="price-info-item">
          <p className="info-title">
            <p>CHARACTER</p>
            <p>TYPE</p>
          </p>
          <p className="info-value">Alien</p>
        </div>

        <div className="price-info-item">
          <p className="info-title">
            <p>VALU</p>
            <p>E</p>
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "16px",
            }}
          >
            <img src={barIcon} />
            <p className="info-value">5.5311</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
