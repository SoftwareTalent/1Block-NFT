import React from "react";
import { ReactSVG } from "react-svg";
import BuyBlockBtn from "../afx/BuyBlockBtn";

import character from "../../../assets/images/icon_characters.svg";
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
        />
      </div>
      <h1 className="arrival__title">What are 1Blocks?</h1>
      <div className="arrival__description">
        <div className="arrival__desc__item">
          <ReactSVG src={character} />
          <h1 className="arrival__text">Characters</h1>
          <p className="arrival__text1">
            The 1Blocks are 10,000 unique 3D voxel characters, created by a
            custom generative algorithm and registered on the Ethereum
            blockchain.
          </p>
        </div>
        <div className="arrival__desc__item">
          <ReactSVG src={erc} />
          <h1 className="arrival__text">ERC-721</h1>
          <p className="arrival__text1">
            The NFT contract the governs ownership is a standard ERC-721 that
            works with any compatible service or exchange.
          </p>
        </div>
        <div className="arrival__desc__item">
          <ReactSVG src={marketplace} />
          <h1 className="arrival__text">Marketplace</h1>
          <p className="arrival__text1">
            1Blocks will also support a lowfee marketplace that supports
            standard buy, bid and ask transactions with out high ETH gas fees.
          </p>
        </div>
      </div>
      <BuyBlockBtn text="Buy 1Blocks" />
      <p className="arrival__link">See all 1Blocks</p>
    </div>
  </section>
);

export default Arrival;
