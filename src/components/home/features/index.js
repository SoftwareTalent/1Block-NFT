import React from "react";

const Features = () => (
  <section id="features" className="features">
    <div className="features__information">
      <h1 className="features__title">Owned by the players</h1>

      <h1 className="features__subtext">
        Play with others in an endless collection of Ad Free mobile games!
      </h1>
      <div className="features__description">
        <div className="features__desc__item">
          <div className="arrival__picture">
            <img
              className="arrival__img"
              src="./images/icon_trophy.png"
              alt="nearkats group"
            />
          </div>
          <h1 className="features__text">Free Play</h1>
          <p className="features__text1">
            The 1Blocks are 10,000 unique 3D voxel characters, created by a
            custom generative algorithm and registered on the Ethereum
            blockchain.
          </p>
        </div>
        <div className="features__desc__item">
          <div className="arrival__picture">
            <img
              className="arrival__img"
              src="./images/icon_mail.png"
              alt="nearkats group"
            />
          </div>
          <h1 className="features__text">VIP Parties</h1>
          <p className="features__text1">
            The NFT contract the governs ownership is a standard ERC-721 that
            works with any compatible service or exchange.
          </p>
        </div>
        <div className="features__desc__item">
          <div className="arrival__picture">
            <img
              className="arrival__img"
              src="./images/icon_axe.png"
              alt="nearkats group"
            />
          </div>
          <h1 className="features__text">Gaming Marketplace</h1>
          <p className="features__text1">
            1Blocks will also support a lowfee marketplace that supports
            standard buy, bid and ask transactions with out high ETH gas fees.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
