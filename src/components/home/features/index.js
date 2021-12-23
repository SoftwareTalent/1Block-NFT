import React from "react";

import featureIcon1 from "../../../assets/images/updated-design/home-page/feature-icon-1.svg";
import featureIcon2 from "../../../assets/images/updated-design/home-page/feature-icon-2.svg";
import featureIcon3 from "../../../assets/images/updated-design/home-page/feature-icon-3.svg";

const Features = () => (
  <section id="features" className="features">
    <div className="features__information">
      <h1 className="features__title">OWNED BY THE PLAYERS</h1>

      <h1 className="features__subtext">
        Play with others in an endless collection of Ad Free mobile games!
      </h1>
      <div className="features__description">
        <div className="features__desc__item">
          <div className="arrival__picture">
            <img
              className="arrival__img"
              src={featureIcon1}
              alt="nearkats group"
            />
          </div>
          <h1 className="features__text">Free Play</h1>
          <p className="features__text1">
            1Block holders will be able tokens and use them to decide the future
            of the game!
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
            Wager your tokens against others in realtime ranked battles,
            tourneys, and more!
          </p>
        </div>
        <div className="features__desc__item">
          <div className="arrival__picture">
            <img
              className="arrival__img"
              src={featureIcon3}
              alt="nearkats group"
            />
          </div>
          <h1 className="features__text">Gaming Marketplace</h1>
          <p className="features__text1">
            1Block tournaments will act as a launch pad for game developers to
            instantly reach an audience.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
