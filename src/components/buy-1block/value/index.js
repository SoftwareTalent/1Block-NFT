import React from "react";
import gear from "../../../assets/images/gear.svg";

import { Row, Col } from "antd";

function Value() {
  return (
    <div className="value-note">
      <p className="title">Buy 1Block</p>
      <div className="info">
        <div className="pre-sale">
          <p className="sub-title">FOR SALE</p>
          <p className="big-value">10,000</p>
        </div>

        <div className="pre-sale">
          <p className="sub-title">STATUS</p>
          <p className="big-value">OPEN</p>
        </div>

        <div
          className="pre-sale"
          style={{ borderRight: "none", borderBottom: "none !important" }}
        >
          <p className="sub-title">PRICE</p>
          <div>
            <img src={gear} />
            <p className="big-value" style={{ paddingRight: "0" }}>
              0.0001
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Value;
