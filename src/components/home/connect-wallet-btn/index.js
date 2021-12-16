import React from "react";
import { Modal, Button } from "antd";

import buttonIcon from "../../../assets/images/side-nav-wallet-btn.svg";
import connectIcon from "../../../assets/images/connect-icon.svg";
import conWalletIcon from "../../../assets/images/modal-con-wallet.svg";
import startBuyingIcon from "../../../assets/images/start-buying.svg";
import spinner from "../../../assets/images/spinner.gif";
import { ReactSVG } from "react-svg";

const Context = React.createContext({ name: "Default" });

const ConnectWalletBtn = ({ handleClick, text, position }) => {
  const [isDisconModalVisible, setIsDisconModalVisible] = React.useState(false);
  const [isConModalVisible, setIsConModalVisible] = React.useState(false);
  const [isSpinModalVisible, setIsSpinModalVisible] = React.useState(false);

  const onConWalletClick = () => {
    setIsConModalVisible(false);
    setIsSpinModalVisible(true);
    setTimeout(() => {
      setIsSpinModalVisible(false);
      setIsDisconModalVisible(true);
    }, 3000);
  };

  const onClose = () => {
    setIsDisconModalVisible(false);
  };

  return (
    <>
      <Modal
        className="discon-modal"
        title="Basic Modal"
        visible={isDisconModalVisible}
        onCancel={onClose}
      >
        <ReactSVG src={connectIcon} />
        <p>Wallet disconnected</p>
        <p className="wallet-connect-discription">
          You should connect your Wallet to buy 1Blocks, view your 1Blocks
          Collection and manage subscription Settings.
        </p>
      </Modal>

      <Modal
        className="con-modal"
        title="Basic Modal"
        visible={isConModalVisible}
      >
        <h1>Buy 1Block</h1>
        <div className="con-modal-body">
          <div className="con-modal-body-item" style={{ marginRight: "10px" }}>
            <ReactSVG src={conWalletIcon} />
            <p>Connect your wallet with a client of your choice.</p>
          </div>
          <div className="con-modal-body-item">
            <ReactSVG src={startBuyingIcon} />
            <p>Mint your 1Block or buy one on the Marketplace.</p>
          </div>
        </div>
        <button onClick={onConWalletClick} className="con-wallet-btn">
          <span>Connect Wallet</span>
        </button>
      </Modal>

      <Modal
        className="spin-modal"
        title="Basic Modal"
        visible={isSpinModalVisible}
      >
        <img src={spinner} />
        <p>Waiting for you to connect your wallet</p>
      </Modal>

      <button
        className="connect-wallet"
        type="button"
        onClick={() => setIsConModalVisible(true)}
      >
        {text ? (
          <p className="connect-wallet__text connect-wallet__text-name">
            {text}
          </p>
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
    </>
  );
};

export default ConnectWalletBtn;
