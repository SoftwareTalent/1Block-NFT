import React from "react";

const BuyBlockBtn = ({ className, text, onClick }) => (
  <button
    type="button"
    className={`buy-block-btn ${className || ""}`}
    onClick={onClick}
  >
    {text}
  </button>
);

export default BuyBlockBtn;
