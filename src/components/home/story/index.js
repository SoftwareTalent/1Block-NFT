import React from "react";
import { ReactSVG } from "react-svg";
import ReactPlayer from "react-player";

import gear from "../../../assets/images/gear.svg";
import bg_story from "../../../assets/images/bg_story.png";
import trailerVideo from "../../../assets/video/Trailer Final Audio.mp4";
import trailerBG from "../../../assets/images/updated-design/home-page/trailer-bg.svg";
import regularStar from "../../../assets/images/updated-design/home-page/star-1.svg";
import irregularStar from "../../../assets/images/updated-design/home-page/star-2.svg";

const Story = () => {
  const [playerControl, setPlayerControl] = React.useState(false);
  const playTitle = "fa-play";
  const pauseTitle = "fa-pause";
  const replayTitle = " fa-repeat";

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
    <section id="story" className="story">
      <div className="story__information">
        {/* <div className="story__picture">
          <img className="story__img" src={bg_story} alt="nearkats group" />
        </div> */}
        <div className="story__description">
          <div className="story__desc__item">
            <h1 className="story__text">10,000</h1>
            <p className="story__text1">
              There will only ever be 10,000 Gen 0, minted for 0.0777 ETH each.
            </p>
          </div>
          <div className="story__desc__item">
            <h1 className="story__open">OPEN</h1>
            <p className="story__text1">
              The Party Guestlist is open, Join the Discord to learn how to on
              it!
            </p>
          </div>
          <div className="story__desc__item">
            <div className="story__gear">
              <ReactSVG src={gear} style={{ marginTop: "13px" }} />
              <h1 className="story__text">0.0777</h1>
            </div>
            <p className="story__text1">
              Price per Origin 1Block. Do you have what it takes to win?
            </p>
          </div>
        </div>

        {/* Trailer Background  */}
        <ReactSVG src={trailerBG} className="trailer-bg trailer-bg-mobile" />

        {/* stars */}
        <ReactSVG src={regularStar} className="star-1" />
        <ReactSVG src={regularStar} className="star-2" />
        <ReactSVG src={regularStar} className="star-3" />

        <ReactSVG src={irregularStar} className="i-star-1" />
        <ReactSVG src={irregularStar} className="i-star-2" />
        <ReactSVG src={irregularStar} className="i-star-3" />
        <ReactSVG src={irregularStar} className="i-star-4" />

        <div className="story__trailer">
          <ReactPlayer
            className="react-player fixed-bottom"
            url={trailerVideo}
            width="750"
            height="500"
            playing={playerControl}
            onEnded={() => {
              setButtonTitle(replayTitle);
              setPlayerControl(false);
            }}
          />
          <button onClick={changePlayerControl}>
            <span className={buttonTitle}></span>
          </button>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Story;
