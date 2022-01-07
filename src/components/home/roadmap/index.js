import React from "react";

import RoadmapElement from "./RoadmapElement";
import RoadMapImg from "./RoadMapImg";

const content1 = ["Genisis Sale", "Marketplace"];

const content2 = ["Launch Tokens ", "PVE Mining Games", "Closed Dev Program"];

const content3 = ["Closed Beta Tournaments", "1Block NFT Staking"];

const content4 = ["Open Developer Program", "Open Tournaments"];

const content5 = ["Custom Matchmaking"];

const Roadmap = () => (
  <section id="roadmap" className="roadmap">
    <div className="roadmap__information">
      <div className="roadmap__content">
        <RoadMapImg />
        <div className="roadmap__right">
          <h1 style={{ color: "white", textAlign: "left" }}>ROADMAP</h1>
          <RoadmapElement title="Q1 2022" content={content1} />
          <RoadmapElement title="Q2 2022" content={content2} />
          <RoadmapElement title="Q3 2022" content={content3} />
          <RoadmapElement title="Q4 2022" content={content4} />
          <RoadmapElement title="Q1 2023" content={content5} last={true} />
        </div>
      </div>
    </div>
  </section>
);

export default Roadmap;
