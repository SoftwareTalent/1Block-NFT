import React from "react";
import { ReactSVG } from "react-svg";

import mintingIcon from "../../../assets/images/minting-icon.svg";
import barIcon from "../../../assets/images/bar-icon.svg";
import Footer from "../../home/footer";

function Minting() {
  return (
    <>
      <div className="minting" style={{ marginTop: "40px" }}>
        <div className="trade-item">
          <div className="trade-header">
            <ReactSVG src={mintingIcon} />
            <div className="trade-info">
              <span>Trade Offered </span>
              <span style={{ color: "#787888" }}>| 0x419...99a</span>
              <p>11/01/2021 @ 13:39</p>
            </div>
          </div>
          <div className="trade-body">
            <div className="trade-body-list"></div>
            <div className="trade-body-list" style={{ marginRight: "40px" }}>
              <ReactSVG src={barIcon} />
              0.15
            </div>
            <div className="trade-body-list"></div>
          </div>
        </div>
      </div>

      <div className="bar"></div>

      <div className="minting">
        <div className="trade-item">
          <div className="trade-header">
            <ReactSVG src={mintingIcon} />
            <div className="trade-info">
              <span>New Deal </span>
              <span style={{ color: "#787888" }}>| 0x419...99a</span>
              <p>11/01/2021 @ 13:39</p>
            </div>
          </div>
          <div className="trade-body">
            <div className="trade-body-list" style={{ marginRight: "40px" }}>
              <ReactSVG src={barIcon} />
              0.89
            </div>
            <div className="trade-body-list"></div>
          </div>
        </div>
      </div>

      <div className="bar"></div>

      <div className="minting">
        <div className="trade-item" style={{ height: "68px" }}>
          <div className="trade-header">
            <ReactSVG src={mintingIcon} />
            <div className="trade-info">
              <span>Minted </span>
              <span style={{ color: "#787888" }}>| 0x419...99a</span>
              <p>11/01/2021 @ 13:39</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Minting;
