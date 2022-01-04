import React from "react";
import { ReactSVG } from "react-svg";
import JoinWaitListBtn from "./JoinWaitListBtn";

import sale from "../../../assets/images/sale.svg";
import headerBG1 from "../../../assets/images/updated-design/home-page/header-bg-1.svg";
import headerBG2 from "../../../assets/images/updated-design/home-page/header-bg-2.svg";
import star1 from "../../../assets/images/updated-design/home-page/star-1.svg";
import star2 from "../../../assets/images/updated-design/home-page/star-2.svg";
import star3 from "../../../assets/images/updated-design/home-page/star-3.svg";
import star4 from "../../../assets/images/updated-design/home-page/star-4.svg";

const Aft = () => (
  <div className="hero">
    <div className="hero__container">
      <div className="hero__background"></div>
      <div className="hero__information">
        <h1 className="hero__title">
          ENTER
          <br />
          THE MOBILEVERSE!
        </h1>
        <h3 className="hero__text">Party, Collect, Earn </h3>

        <h1 className="hero_description">
          Meet 1Blocks—cube shaped meta-characters that go throughout the
          universe partying planets out of resources.
        </h1>
        <JoinWaitListBtn text="Join Waitlist" />
        <ReactSVG className="hero__img" src={sale} />
      </div>
    </div>
    <ReactSVG className="hero-bg-1" src={headerBG1} />
    <ReactSVG className="hero-bg-2" src={headerBG2} />

    <ReactSVG className="star-1" src={star1} />
    <ReactSVG className="star-2" src={star2} />
    <ReactSVG className="star-3" src={star3} />
    <ReactSVG className="star-4" src={star4} />
  </div>
);

export default Aft;
