import React, { useContext } from "react";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

import logo from "../../assets/images/nav-logo.svg";
import Navigation from "../../components/home/navigation";
import DropDown from "./Dropdown";
import ConnectWalletBtn from "../../components/home/connect-wallet-btn";

const Header = () => {
  const [headerStyle, setHeaderStyle] = React.useState();
  let color = "";
  const location = useLocation();
  if (location.pathname.indexOf("all-blocks") > -1) color = "RGB(30, 30, 54)";

  return (
    <header className="header" style={{ backgroundColor: color }}>
      <div style={{ display: "flex" }}>
        <DropDown />
        <Link to="/">
          <ReactSVG className="header__logo" src={logo} />
        </Link>
      </div>
      <Navigation className="header__navigation" />
      {/* <SocialLinks className="header__social" /> */}

      <li className="navigation__list__item" style={{ marginRight: "28px" }}>
        <a
          href="https://1block.gitbook.io/1block-party/"
          target="blank"
          id="white"
          className="navigation__link"
        >
          Whitepaper <i className="fa fa-external-link"></i>
        </a>
      </li>
      <ConnectWalletBtn />
    </header>
  );
};

export default Header;
