import React from "react";

import Aft from "./afx";
import Story from "./story";
import Arrival from "./arrival";
import Features from "./features";
import Roadmap from "./roadmap";
import FAQ from "./faq";
import Footer from "./footer";
import Discord from "./Discord";

function Home() {
  return (
    <div className="home">
      <Aft />
      <Story />
      <Arrival />
      <Features />
      <Roadmap />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Home;
