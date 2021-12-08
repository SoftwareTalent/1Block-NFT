import React from "react";

import Value from "./value";
import Detail from "./detail";
import BuyFooter from "./buy-footer";

function Buy1Block() {
  return (
    <>
      <div className="buy-1block">
        <Value />
        <Detail />
      </div>
      <BuyFooter />
    </>
  );
}

export default Buy1Block;
