import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import classnames from "classnames";
import { HashLink } from "react-router-hash-link";
import Faq from "../faq";

const Navigation = ({ className, signedIn }) => {
  const { pathname } = useLocation();
  console.log(pathname.split("/")[pathname.split("/").length - 1]);

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
          <HashLink
            to="/#faq"
            component={Faq}
            className={classnames("navigation__link", {
              "active-link": activeNav == "faqs",
            })}
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "end" })
            }
            onClick={() => setActiveNav("faqs")}
          >
            FAQs
          </HashLink>
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
