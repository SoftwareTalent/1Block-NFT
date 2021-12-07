import React from "react";
import { ReactSVG } from "react-svg";
import BuyBlockBtn from "./BuyBlockBtn";

import sale from "../../assets/images/sale.svg";

const Aft = () => (
  <div className="hero">
    <div className="hero__container">
      <div className="hero__background"></div>
      <div className="hero__information">
        <h1 className="hero__title">Enter the Mobileverse!</h1>
        <h3 className="hero__text">Party, Collect, Earn </h3>
        <BuyBlockBtn text="Buy 1Block" />
        <ReactSVG className="hero__img" src={sale} />
      </div>
    </div>
  </div>
);

export default Aft;
