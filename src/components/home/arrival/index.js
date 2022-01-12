import React from "react";
import { ReactSVG } from "react-svg";
import JoinWaitListBtn from "../afx/JoinWaitListBtn";

import arrIcon1 from "../../../assets/images/updated-design/home-page/arr-icon-1.svg";
import arrIcon2 from "../../../assets/images/updated-design/home-page/arr-icon-2.svg";
import arrIcon3 from "../../../assets/images/updated-design/home-page/arr-icon-3.svg";
import erc from "../../../assets/images/icon_erc.svg";
import marketplace from "../../../assets/images/icon_market.svg";

const Arrival = () => (
  <section id="arrival" className="arrival">
    <div className="arrival__information">
      <div className="arrival__picture">
        <img
          className="arrival__img"
          src="./images/bg_arrivalnew.png"
          alt="nearkats group"
        />
      </div>
      <h1 className="arrival__title">ABOUT 1BLOCKS</h1>
      <div className="arrival__description">
        <div className="arrival__desc__item">
          <div className="arrival-item-bg">
            <ReactSVG src={arrIcon1} />
          </div>
          <h1 className="arrival__text">Characters</h1>
          <p className="arrival__text1">
            10,000 provably unique characters deployed as an ERC-721 token on
            the Ethereum blockchain.
          </p>
        </div>
        <div className="arrival__desc__item">
          <div className="arrival-item-bg">
            <ReactSVG src={arrIcon2} />
          </div>
          <h1 className="arrival__text">Access</h1>
          <p className="arrival__text1">
            When you buy a 1Block, you’re not just buying a piece of art. You
            gain membership access to the hottest party in the metaverse.{" "}
          </p>
        </div>
        <div className="arrival__desc__item">
          <div className="arrival-item-bg">
            <ReactSVG src={arrIcon3} />
          </div>
          <h1 className="arrival__text">Staking</h1>
          <p className="arrival__text1">
            Rent out your 1Block to earn a % of other players earnings or
            generate new 1Blocks in the cloning lab!
          </p>
        </div>
      </div>
      <button className="buy-block-btn " style={{ marginTop: "113px" }}>
        BUY 1BLOCKS
      </button>
      {/* <p className="arrival__link">See all</p> */}
    </div>
  </section>
);

export default Arrival;
