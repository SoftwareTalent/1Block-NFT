import React from "react";

import { ReactSVG } from "react-svg";
import { Modal, Button } from "antd";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

import { SpinModal } from "../metamask/ConnectModals";
import useMetaMask from "../metamask/useMetaMask";
import WalBtn from "./WalletButton";

import PromptPlanet from "../../../../assets/images/updated-design/wallet-connect/prompt-planet.svg";
import PromptConWallet from "../../../../assets/images/updated-design/wallet-connect/prompt-connectwallet.svg";
import PromptMetaMask from "../../../../assets/images/updated-design/wallet-connect/prompt-metamask.svg";
import RightBG from "../../../../assets/images/updated-design/home-page/road-map-right-bg.svg";

import "./style.scss";

function Prompt({ isPromptVisible, onCancel }) {
  const { connect, disconnect, isActive, account } = useMetaMask();
  const [isSpinModalVisible, SetIsSpinModalVisible] = React.useState(false);
  const [walConnector, setWalConnector] = React.useState(null);

  React.useEffect(() => {
    console.log("here");
    if (account) {
      SetIsSpinModalVisible(false);
    }
  }, [account]);

  function onMetaMaskClicked() {
    SetIsSpinModalVisible(true);
    connect();
    onCancel();
  }

  return (
    <>
      <SpinModal isSpinModalVisible={isSpinModalVisible} />
      <Modal
        className="prompt-modal"
        title=""
        visible={isPromptVisible}
        onCancel={onCancel}
      >
        <ReactSVG className="prompt-planet" src={PromptPlanet} />
        {/* <ReactSVG src={RightBG} /> */}
        <div className="prompt-title">
          <h1>WELCOME!</h1>
          <h1>LET'S BEGIN WITH YOUR WALLET</h1>
          <p>Please connect your wallet to continue</p>
        </div>
        <div className="button-group">
          <button
            className="prompt-btn"
            style={{ paddingRight: "70px" }}
            onClick={onMetaMaskClicked}
          >
            <ReactSVG src={PromptMetaMask} />
            MetaMask
          </button>
          <WalBtn onCancel={onCancel} />
          {/* <button className="prompt-btn">
            <ReactSVG src={PromptConWallet} />
            WalletConnect
          </button> */}
        </div>
        <a>What is a wallet?</a>
      </Modal>
    </>
  );
}

export default Prompt;
