import React, { useContext, useEffect, useState } from "react";
import { Menu, Dropdown, Button } from "antd";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import { ReactSVG } from "react-svg";

import buttonIcon from "../../../assets/images/updated-design/wallet-connect/con-wallet-btn-icon.svg";

import Prompt from "./prompt";
import MetaMask from "./metamask";
import { MetaMaskContext } from "./metamask/useMetaMask";
import useMetaMask from "./metamask/useMetaMask";
import { ConModal } from "./metamask/ConnectModals";

import "./style.scss";

function ConnectWalletBtn({ handleClick, text, position, onAddressChanged }) {
  const [isPromptVisible, setIsPromptVisible] = React.useState(false);
  const [isConModalVisible, setIsConModalVisible] = React.useState(false);
  const { connect, disconnect, isActive, account } = useMetaMask();

  const [currentAccout, setCurrentAccount] = React.useState(null);
  const [isCurrentActive, setIsCurrentActive] = React.useState(false);

  if (isActive && account) {
    setCurrentAccount(account);
    setIsCurrentActive(isActive);
  }

  const address = localStorage.getItem("address");

  React.useEffect(() => {
    if (address) {
      setIsCurrentActive(true);
      setCurrentAccount(address);
    }
  }, [address]);

  function onConnectWalletClicked() {
    if (!isActive && !account && !address) setIsConModalVisible(true);
    else disconnect();
  }

  function onModalConClicked() {
    setIsConModalVisible(false);
    setIsPromptVisible(true);
  }

  return (
    <>
      {/* <MetaMask conModalVisible={isConModalVisible} /> */}
      <Prompt
        isPromptVisible={isPromptVisible}
        onCancel={() => setIsPromptVisible(false)}
      />
      <ConModal
        isConModalVisible={isConModalVisible}
        onConModalClose={() => setIsConModalVisible(false)}
        onConWalletClick={onModalConClicked}
      />
      <button
        className="connect-wallet"
        type="button"
        onClick={onConnectWalletClicked}
      >
        {isCurrentActive && currentAccout ? (
          <p className="connect-wallet__text connect-wallet__text-name">
            {currentAccout.substring(0, 5) +
              "..." +
              currentAccout.substring(currentAccout.length - 4)}
          </p>
        ) : (
          <p className="connect-wallet__text connect-wallet__text-name">
            CONNECT WALLET
          </p>
        )}
      </button>
    </>
  );
}

export default ConnectWalletBtn;
