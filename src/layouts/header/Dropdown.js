import React from "react";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";

import ConnectWalletBtn from "../../components/connect-wallet-btn";
import { SideNav } from "./SideNav";

function DropDown() {
  const [style, setStyle] = React.useState({
    width: "0px",
    border: "none",
  });

  return (
    <div className="dropdown" style={{ float: "left" }}>
      <SideNav style={style} setStyle={setStyle} />
      <button
        type="button"
        className="dropbtn"
        onClick={() => setStyle({ width: "200px", border: "1px solid white" })}
      >
        <i className="fa fa-bars"></i>
      </button>
      <div id="id" className="dropdown-content" style={{ left: "0" }}>
        <Link to="/" className="navigation__link">
          dropdown
        </Link>
        <Link to="/" className="navigation__link">
          dropdown
        </Link>
      </div>
    </div>
  );
}

export default DropDown;
