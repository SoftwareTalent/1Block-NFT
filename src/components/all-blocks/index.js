import React from "react";

import Banner from "./banner";
import BlockLists from "./block-list";

function AllBlocks() {
  return (
    <div className="all-blocks">
      <Banner />
      <BlockLists />
    </div>
  );
}

export default AllBlocks;
