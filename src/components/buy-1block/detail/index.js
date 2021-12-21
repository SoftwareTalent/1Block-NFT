import React from "react";
import ReactPlayer from "react-player";

import token from "../../../assets/images/token.svg";
import icon1 from "../../../assets/images/included-icon1.svg";
import icon2 from "../../../assets/images/included-icon2.svg";
import icon3 from "../../../assets/images/included-icon3.svg";
import characterVideo from "../../../assets/video/Character Types.mp4";

import { ReactSVG } from "react-svg";

function Detail() {
  const [playerControl, setPlayerControl] = React.useState(false);
  const playTitle = "fa-play";
  const pauseTitle = "fa-pause";
  const replayTitle = " fa-repeat";
  const [isPlayed, setIsPlayed] = React.useState(false);

  const [buttonTitle, setButtonTitle] = React.useState(playTitle);

  const changePlayerControl = () => {
    if (buttonTitle == playTitle || buttonTitle == replayTitle)
      setButtonTitle(pauseTitle);
    if (buttonTitle == pauseTitle) setButtonTitle(playTitle);
    setPlayerControl((prevState) => {
      return !prevState;
    });
  };
  return (
    <div className="detail">
      <div className="character-video">
        <ReactPlayer
          url={characterVideo}
          playing={playerControl}
          onEnded={() => {
            setButtonTitle(replayTitle);
            setPlayerControl(false);
          }}
        />
        <button onClick={changePlayerControl}>
          <span className={buttonTitle}></span>
        </button>
      </div>
      <div className="desc">
        <div className="included">
          <p className="included-title">What's included</p>

          <p style={{ marginTop: "18px" }} className="detail-icon">
            <ReactSVG src={icon1} />
            1x 1Block NFT
          </p>
          <p className="detail-icon">
            <ReactSVG src={icon3} /> 1x 3D asset (.obj)
          </p>
          <p className="detail-icon">
            <ReactSVG src={icon2} /> 3x 2D images (.png)
          </p>
        </div>
        <div className="description">
          <p className="desc-title">Description</p>
          <div className="desc-body">
            Each 1Block starts with the selection of a species 1Block head. From
            there, the 1Block body, arms, and legs are added along with 1-10
            traits. Every block is then compared to all other existing 1Blocks
            to ensure it is 100% unique.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
