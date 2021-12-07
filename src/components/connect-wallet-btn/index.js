import React from "react";
import PropTypes from "prop-types";

import buttonIcon from "../../assets/images/side-nav-wallet-btn.svg";

const ConnectWalletBtn = ({ handleClick, text, position }) => (
  <button className="connect-wallet" type="button" onClick={handleClick}>
    {text ? (
      <p className="connect-wallet__text connect-wallet__text-name">{text}</p>
    ) : (
      <p className="connect-wallet__text">
        {position ? (
          <>
            {" "}
            <img
              src={buttonIcon}
              style={{ marginRight: "12px" }}
            /> Connect{" "}
          </>
        ) : (
          "Connect Wallet"
        )}
      </p>
    )}
  </button>
);

export default ConnectWalletBtn;
