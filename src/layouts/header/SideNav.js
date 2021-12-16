import React from "react";
import { ReactSVG } from "react-svg";

import ConnectWalletBtn from "../../components/home/connect-wallet-btn";
import logo from "../../assets/images/side-logo.svg";
import closeButton from "../../assets/images/side-close.svg";
import { Link } from "react-router-dom";

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
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/buy-1block">All 1Blocks</Link>
        </li>
        <li>
          <Link to="/marketplace">Marketplace</Link>
        </li>
        <li>
          <Link to="/faq">Faq</Link>
        </li>
        <li>
          <Link to="/blog">
            Blog{" "}
            <i
              className="fa fa-external-link"
              style={{ paddingLeft: "5px" }}
            ></i>
          </Link>
        </li>
        <li>
          <a href="https://1block.gitbook.io/1block-party/" target="blank">
            Whitepaper{" "}
            <i
              className="fa fa-external-link"
              style={{ paddingLeft: "5px" }}
            ></i>
          </a>
        </li>
        <ConnectWalletBtn
          style={{ padding: "4px 12px 4px 12px !important" }}
          position="sidenav"
        />
      </div>
    </div>
  );
}
