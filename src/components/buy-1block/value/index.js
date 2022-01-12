import React from "react";
import gear from "../../../assets/images/gear.svg";

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
          <p className="big-value" style={{ color: "#4EAE12" }}>
            OPEN
          </p>
        </div>

        <div className="pre-sale" style={{ border: "none" }}>
          <p className="sub-title">PRICE</p>
          <div>
            <img src={gear} />
            <p className="big-value" style={{ paddingRight: "0" }}>
              0.0777
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Value;
