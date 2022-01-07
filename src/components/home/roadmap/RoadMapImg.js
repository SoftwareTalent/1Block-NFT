import { ReactSVG } from "react-svg";

import RoadMapImgVertical from "./RoadMapImgVertical";

import roadMapRightBg from "../../../assets/images/updated-design/home-page/road-map-right-bg.svg";
import bg from "../../../assets/images/updated-design/home-page/road-map-bg.svg";
import lines from "../../../assets/images/updated-design/home-page/road-map-lines.svg";
import lineVertical from "../../../assets/images/updated-design/home-page/road-map-line-vertical.svg";
import planet1 from "../../../assets/images/updated-design/home-page/road-map-planet-1.svg";
import planet2 from "../../../assets/images/updated-design/home-page/road-map-planet-2.svg";
import planet3 from "../../../assets/images/updated-design/home-page/road-map-planet-3.svg";
import planet4 from "../../../assets/images/updated-design/home-page/road-map-planet-4.svg";
import planet5 from "../../../assets/images/updated-design/home-page/road-map-planet-5.svg";
import rocket from "../../../assets/images/updated-design/home-page/road-map-rocket.svg";
import satellite from "../../../assets/images/updated-design/home-page/road-map-satellite.svg";
import solar from "../../../assets/images/updated-design/home-page/road-map-solar.svg";

function RoadMapImg() {
  return (
    <div className="road-map-img">
      <h1 style={{ marginTop: "100px" }}>ROADMAP</h1>
      <div className="road-map-right-bg">
        <ReactSVG src={roadMapRightBg} />
      </div>

      <div className="bg">
        <ReactSVG src={bg} />
      </div>
      <div className="road-map-main">
        <div className="lines">{/* <ReactSVG src={lines} /> */}</div>

        <RoadMapImgVertical />
        <div style={{ marginTop: "178px" }}>
          <div className="planet-1">
            <p>Q4 2021</p>
            <ReactSVG src={planet1} />
          </div>

          <div className="rocket">
            <ReactSVG src={rocket} />
          </div>

          <div className="planet-2">
            <ReactSVG src={planet2} />
            <p>Q1 2022</p>
          </div>

          <div className="planet-3">
            <p>Q2 2022</p>

            <ReactSVG src={planet3} />
          </div>

          <div className="planet-4">
            <ReactSVG src={planet4} />
            <p>Q3 2022</p>
          </div>

          <div className="planet-5">
            <p>Q4 2022</p>
            <ReactSVG src={planet5} />
          </div>

          <div className="satellite">
            <ReactSVG src={satellite} />
          </div>

          <div className="solar">
            <ReactSVG src={solar} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadMapImg;
