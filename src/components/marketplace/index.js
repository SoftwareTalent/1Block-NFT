import React from "react";

import Info from "./info";
import Content from "./content";
import Minting from "./minting";

function Marketplace() {
  return (
    <div className="marketplace">
      <Info />
      <Content />
      <Minting />
    </div>
  );
}

export default Marketplace;
