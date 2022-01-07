import React from "react";
import { ReactSVG } from "react-svg";
import JoinWaitListBtn from "../afx/JoinWaitListBtn";

import arrIcon1 from "../../../assets/images/updated-design/home-page/arr-icon-1.svg";
import arrIcon2 from "../../../assets/images/updated-design/home-page/arr-icon-2.svg";
import arrIcon3 from "../../../assets/images/updated-design/home-page/soon.png";
import erc from "../../../assets/images/icon_erc.svg";
import marketplace from "../../../assets/images/icon_market.svg";

const Arrival = () => (
  <section id="arrival" className="arrival">
    <div className="arrival__information">
      <div className="arrival__picture">
        <img
          className="arrival__img"
          src="./images/bg_arrival.png"
          alt="nearkats group"
          style={{ width: "100%" }}
        />
      </div>
      <h1 className="arrival__title">What are 1Blocks?</h1>
      <div className="arrival__description">
        <div className="arrival__desc__item">
          <div className="arrival-item-bg">
            <ReactSVG src={arrIcon1} />
          </div>
          <h1 className="arrival__text">Characters</h1>
          <p className="arrival__text1">
            The 1Blocks are 10,000 unique 3D voxel characters, created by a
            custom generative algorithm and registered on the Ethereum
            blockchain.
          </p>
        </div>
        <div className="arrival__desc__item">
          <div className="arrival-item-bg">
            <ReactSVG src={arrIcon2} />
          </div>
          <h1 className="arrival__text">ERC-721</h1>
          <p className="arrival__text1">
            The NFT contract the governs ownership is a standard ERC-721 that
            works with any compatible service or exchange.
          </p>
        </div>
        <div className="arrival__desc__item">
          <div className="arrival-item-bg" style={{ backgroundImage: "none" }}>
            <img style={{ width: "97px", marginTop: "-14px" }} src={arrIcon3} />
          </div>
          <h1 className="arrival__text">Marketplace</h1>
          <p className="arrival__text1">
            1Blocks will also support a lowfee marketplace that supports
            standard buy, bid and ask transactions with out high ETH gas fees.
          </p>
        </div>
      </div>
      <button className="buy-block-btn ">Buy 1Blocks</button>
      <p className="arrival__link">See all</p>
    </div>
  </section>
);

export default Arrival;
