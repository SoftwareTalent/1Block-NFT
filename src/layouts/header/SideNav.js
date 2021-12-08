import React from "react";
import { ReactSVG } from "react-svg";

import ConnectWalletBtn from "../../components/home/connect-wallet-btn";
import logo from "../../assets/images/side-logo.svg";
import closeButton from "../../assets/images/side-close.svg";

export function SideNav({ style, setStyle }) {
  return (
    <div id="mySidenav" className="sidenav" style={style}>
      <div
        style={{
          display: "flex",
          paddingBottom: "24px",
          borderBottom: "1px solid #818181",
          paddingLeft: "20px",
        }}
      >
        <p
          className="closebtn"
          onClick={() => setStyle({ width: "0px", border: "none" })}
        >
          <ReactSVG src={closeButton} />
        </p>
        <ReactSVG src={logo} />
      </div>
      <div className="side__navigation" style={{ paddingLeft: "20px" }}>
        <li href="#">Home</li>
        <li href="#">All 1Blocks</li>
        <li href="#">Marketplace</li>
        <li href="#">FAQ</li>
        <li href="#">
          Blog{" "}
          <i className="fa fa-external-link" style={{ paddingLeft: "5px" }}></i>
        </li>
        <li href="#">
          Whitepaper{" "}
          <i className="fa fa-external-link" style={{ paddingLeft: "5px" }}></i>
        </li>
        <ConnectWalletBtn
          style={{ padding: "4px 12px 4px 12px !important" }}
          position="sidenav"
        />
      </div>
    </div>
  );
}
