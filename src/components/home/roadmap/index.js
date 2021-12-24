import React from "react";

import RoadmapElement from "./RoadmapElement";
import RoadMapImg from "./RoadMapImg";

const Roadmap = () => (
  <section id="roadmap" className="roadmap">
    <div className="roadmap__information">
      <div className="roadmap__content">
        <RoadMapImg />
        <div className="roadmap__right">
          <RoadmapElement title="Q4 2021" content="Genisis Sale" />
          <RoadmapElement title="Q1 2022" content="Token Launch" />
          <RoadmapElement title="Q2 2022" content="Tournament" />
          <RoadmapElement title="Q3 2022" content="Breeding & Cloning" />
          <RoadmapElement title="Q4 2022" content="VIP Parties" last={true} />
        </div>
      </div>
    </div>
  </section>
);

export default Roadmap;
