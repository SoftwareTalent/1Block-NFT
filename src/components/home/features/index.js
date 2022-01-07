import React from "react";

import featureIcon1 from "../../../assets/images/updated-design/home-page/feature-icon-1.svg";
import featureIcon2 from "../../../assets/images/updated-design/home-page/feature-icon-2.svg";
import featureIcon3 from "../../../assets/images/updated-design/home-page/feature-icon-3.svg";

const Features = () => (
  <section id="features" className="features">
    <div className="features__information">
      <h1 className="features__title">ABOUT THE PARTY</h1>

      <h1 className="features__subtext">
        Compete against other players in skill based mobile games to win tokens
        and other prizes!
      </h1>
      <div className="features__description">
        <div className="features__desc__item">
          <div className="arrival__picture">
            <img
              className="arrival__img"
              src={featureIcon3}
              alt="nearkats group"
              style={{ height: "216px" }}
            />
          </div>
          <h1 className="features__text">Launchpad</h1>
          <p className="features__text1">
            1Block Party is a fast paced elemination style tournament anyone can
            submit a game to. Holders will vote and determine the direction of
            the game
          </p>
        </div>
        <div className="features__desc__item">
          <div className="arrival__picture">
            <img
              className="arrival__img"
              src={featureIcon2}
              alt="nearkats group"
            />
          </div>
          <h1 className="features__text">VIP Parties</h1>
          <p className="features__text1">
            Level up your character & earn daily tokens to wager against others
            in realtime battles
          </p>
        </div>
        <div className="features__desc__item">
          <div className="arrival__picture">
            <img
              className="arrival__img"
              src={featureIcon1}
              alt="nearkats group"
            />
          </div>
          <h1 className="features__text">Holder Rewards</h1>
          <p className="features__text1">
            A % of all revenue will go into a pool that the top 1Block players
            can unlock based on their scores
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
