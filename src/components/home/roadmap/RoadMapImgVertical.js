import { ReactSVG } from "react-svg";

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

function RoadMapImgVertical() {
  return (
    <>
      <h1>ROADMAP</h1>
      <div className="vertical-img">
        {/* <div className="v-line">
        <ReactSVG src={lineVertical} />
      </div> */}

        <div className="v-planet-1">
          <div className="v-planet-title">
            <p className="big-title">Q4 2021</p>
            <p className="small-title">Genisis Sale</p>
          </div>
          <ReactSVG src={planet1} />
        </div>

        <div className="v-planet-2">
          <ReactSVG src={planet2} />

          <div className="v-planet-title">
            <p className="big-title">Q1 2022</p>
            <p className="small-title">Token Launch</p>
          </div>
        </div>

        <div className="v-planet-3">
          <div className="v-planet-title">
            <p className="big-title">Q2 2022</p>
            <p className="small-title">Tournaments</p>
          </div>
          <ReactSVG src={planet3} />
        </div>

        <div className="v-planet-4">
          <ReactSVG src={planet4} />
          <div className="v-planet-title">
            <p className="big-title">Q3 2022</p>
            <p className="small-title">Breeding & Cloning</p>
          </div>
        </div>

        <ReactSVG src={rocket} className="v-rocket" />

        <div className="v-planet-5">
          <div className="v-planet-title">
            <p className="big-title">Q4 2022</p>
            <p className="small-title">VIP Parties</p>
          </div>
          <ReactSVG src={planet5} />
        </div>
      </div>
    </>
  );
}

export default RoadMapImgVertical;
