import React, { useContext } from "react";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";

import logo from "../../assets/images/nav-logo.svg";
import Navigation from "../../components/home/navigation";
import DropDown from "./Dropdown";
import ConnectWalletBtn from "../../components/home/connect-wallet-btn";

const Header = () => {
  return (
    <header className="header">
      <div style={{ display: "flex" }}>
        <DropDown />
        <Link to="/">
          <ReactSVG className="header__logo" src={logo} />
        </Link>
      </div>
      <Navigation className="header__navigation" />
      {/* <SocialLinks className="header__social" /> */}

      <li className="navigation__list__item" style={{ marginRight: "28px" }}>
        <Link to="/whitepaper" id="white" className="navigation__link">
          Whitepaper <i className="fa fa-external-link"></i>
        </Link>
      </li>
      <ConnectWalletBtn />
    </header>
  );
};

export default Header;
