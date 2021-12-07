import React from "react";

import Aft from "../afx";
import Story from "../story";
import Arrival from "../arrival";
import Features from "../features";
import Roadmap from "../roadmap";
import FAQ from "../faq";

function Home() {
  return (
    <div className="home">
      <Aft />
      <Story />
      <Arrival />
      <Features />
      <Roadmap />
      <FAQ />
    </div>
  );
}

export default Home;
