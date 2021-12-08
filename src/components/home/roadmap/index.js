import React from "react";
import RoadmapElement from "./RoadmapElement";

const Roadmap = () => (
  <section id="roadmap" className="roadmap">
    <div className="roadmap__information">
      <h1 className="roadmap__title">Roadmap</h1>
      <div className="roadmap__content">
        <div className="roadmap__left"></div>
        <div className="roadmap__right">
          <RoadmapElement title="Q4 2021" content="Origin 1Blocks Sale" />
          <RoadmapElement title="Q1 2022" content="Token Launch" />
          <RoadmapElement title="Q2 2022" content="Beta Tournament" />
          <RoadmapElement title="Q3 2022" content="Breeding & Cloning" />
          <RoadmapElement title="Q4 2022" content="VIP Parties" last={true} />
        </div>
      </div>
    </div>
  </section>
);

export default Roadmap;
