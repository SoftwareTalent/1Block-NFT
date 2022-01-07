import React, { useContext } from "react";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

import logoPc from "../../assets/images/updated-design/home-page/logo-pc.svg";
import logoMobile from "../../assets/images/updated-design/home-page/logo-mobile.svg";
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
        <Link className="logo-link" to="/">
          <ReactSVG className="header__logo-pc" src={logoPc} />
          <ReactSVG className="header__logo-mobile" src={logoMobile} />
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
