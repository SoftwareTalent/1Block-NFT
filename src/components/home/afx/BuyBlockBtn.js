import React from "react";
import { Link } from "react-router-dom";

const BuyBlockBtn = ({ className, text, onClick }) => (
  <button
    type="button"
    className={`buy-block-btn ${className || ""}`}
    onClick={onClick}
  >
    <Link to="/buy-1block">{text}</Link>
  </button>
);

export default BuyBlockBtn;
