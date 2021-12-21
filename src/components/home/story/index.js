import React from "react";
import { ReactSVG } from "react-svg";
import ReactPlayer from "react-player";

import gear from "../../../assets/images/gear.svg";
import bg_story from "../../../assets/images/bg_story.png";
import trailerVideo from "../../../assets/video/Trailer Final Audio.mp4";

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
        <h1 className="story__title">
          Meet 1Blocks—cube shaped meta-characters that go throughout the
          universe partying planets out of resources.
        </h1>
        <div className="story__picture">
          <img className="story__img" src={bg_story} alt="nearkats group" />
        </div>
        <div className="story__description">
          <div className="story__desc__item">
            <h1 className="story__text">10,000</h1>
            <p className="story__text1">
              1Blocks are coming out of cryo slumber as they arrive home!
            </p>
          </div>
          <div className="story__desc__item">
            <h1 className="story__open">OPEN</h1>
            <p className="story__text1">
              1Blocks sale is running. Claim your 1Block.
            </p>
          </div>
          <div className="story__desc__item">
            <div className="story__gear">
              <ReactSVG src={gear} style={{ marginBottom: "28px" }} />
              <h1 className="story__text">0.0001</h1>
            </div>
            <p className="story__text1">Price per 1Block.</p>
          </div>
        </div>
        <div className="story__trailer">
          {/* <video width="750" height="500" controls>
          <source src={trailerVideo} type="video/mp4" />
        </video> */}
          {/* <div
            class="video-thumbnail"
            onClick={changePlayerControl}
            datacustomattribute={attr}
          > */}
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
