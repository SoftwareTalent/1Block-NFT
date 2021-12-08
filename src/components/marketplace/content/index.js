import React from "react";
import { ReactSVG } from "react-svg";

import token from "../../../assets/images/token.svg";
import userIcon from "../../../assets/images/user-icon.svg";
import tradeBtnIcon from "../../../assets/images/trade-btn-icon.svg";
import tickBox from "../../../assets/images/tick-box.svg";

function Content() {
  return (
    <div className="content">
      <img src={token} />
      <div className="desc">
        <div className="desc-title">
          <p>OWNER</p>
          <p>
            <ReactSVG src={userIcon} />
            0x5bc...b82
          </p>
          <p className="flex">
            <button className="trade-btn">
              Trade <ReactSVG src={tradeBtnIcon} />
            </button>
            <button className="history-btn">
              History{" "}
              <i
                class="fa fa-external-link"
                style={{ paddingLeft: "8px", paddingTop: "4px" }}
              ></i>
            </button>
          </p>
        </div>
        <div className="desc-body">
          <div className="body">
            <p>HAIR</p>
            <p className="flex">
              <ReactSVG src={tickBox} /> Wild
            </p>

            <p>NECKLACE</p>
            <p className="flex">
              <ReactSVG src={tickBox} /> Neck Tie
            </p>

            <p>EAR</p>
            <p className="flex">
              <ReactSVG src={tickBox} /> Gold Stud Left
            </p>

            <p>SHOES</p>
            <p className="flex">
              <ReactSVG src={tickBox} /> High Tops
            </p>
          </div>

          <div className="body">
            <p>PANTS</p>
            <p className="flex">
              <ReactSVG src={tickBox} /> Athletic Shorts
            </p>

            <p>UNDER SHIRT</p>
            <p className="flex">
              <ReactSVG src={tickBox} /> Cat Tee
            </p>

            <p>OVER SHIRT</p>
            <p className="flex">
              <ReactSVG src={tickBox} /> Suit
            </p>
          </div>

          <div className="body">
            <p>GLASSES</p>
            <p className="flex">
              <ReactSVG src={tickBox} /> Nerdyglasses
            </p>

            <p>HAT</p>
            <p className="flex">
              <ReactSVG src={tickBox} /> Spinner
            </p>

            <p>ONESIE</p>
            <p className="flex">
              <ReactSVG src={tickBox} /> Gold Stud Left
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
