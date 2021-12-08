import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classnames from "classnames";

import NavLink from "./NavLink";

const Navigation = ({ className, signedIn }) => {
  const [activeNav, setActiveNav] = React.useState("home");

  return (
    <nav className={`navigation ${className || ""}`}>
      <ul className="navigation__list">
        <li className="navigation__list-item">
          {/* <NavLink
            to="/"
            className="navigation__link"
            title="Home"
            onClick={() => setActive(!active)}
            active={active}
          /> */}
          <Link
            to="/"
            className={classnames("navigation__link", {
              "active-link": activeNav == "home",
            })}
            onClick={() => setActiveNav("home")}
          >
            Home
          </Link>
        </li>
        <li className="navigation__list-item">
          <Link
            to="/buy-1block"
            className={classnames("navigation__link", {
              "active-link": activeNav == "buy1block",
            })}
            onClick={() => setActiveNav("buy1block")}
          >
            Buy 1Block
          </Link>
        </li>
        <li className="navigation__list-item">
          <Link
            to="/marketplace"
            className={classnames("navigation__link", {
              "active-link": activeNav == "marketplace",
            })}
            onClick={() => setActiveNav("marketplace")}
          >
            Marketplace
          </Link>
        </li>
        <li className="navigation__list-item">
          <Link
            to="/faq"
            className={classnames("navigation__link", {
              "active-link": activeNav == "faqs",
            })}
            onClick={() => setActiveNav("faqs")}
          >
            FAQs
          </Link>
        </li>
        <li className="navigation__list-item">
          <Link
            to="/blog"
            className={classnames("navigation__link", {
              "active-link": activeNav == "blog",
            })}
            onClick={() => setActiveNav("blog")}
          >
            Blog{" "}
            <i
              className="fa fa-external-link"
              style={{ paddingLeft: "5px" }}
            ></i>
          </Link>
        </li>
        {signedIn && (
          <>
            <li className="navigation__list-item">
              <Link to="/my-nfts" className="navigation__link">
                My NFTs
              </Link>
            </li>
            <li className="navigation__list-item">
              <Link to="/link-drop" className="navigation__link">
                LinkDrop
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  className: PropTypes.string,
  signedIn: PropTypes.bool,
};

Navigation.defaultProps = {
  className: "",
  signedIn: false,
};

export default Navigation;
