import React from "react";

import Banner from "./banner";
import BlockLists from "./block-list";
import Footer from "../home/footer";

function AllBlocks() {
  return (
    <div className="all-blocks">
      <Banner />
      <BlockLists />
      <Footer />
    </div>
  );
}

export default AllBlocks;
