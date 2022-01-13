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
import { WalletContext } from "./walletconnect/useWalletConnect";

import "./style.scss";

function ConnectWalletBtn({ handleClick, text, position, onAddressChanged }) {
  const [isPromptVisible, setIsPromptVisible] = React.useState(false);
  const [isConModalVisible, setIsConModalVisible] = React.useState(false);
  const { connect, disconnect, isActive, account } = useMetaMask();

  const [currentAccout, setCurrentAccount] = React.useState(null);
  const [isCurrentActive, setIsCurrentActive] = React.useState(false);

  const { address, setAddress } = React.useContext(WalletContext);
  console.log(address);

  React.useEffect(() => {
    if (account && isActive) {
      console.log(account, "ACCOUNT");
      setCurrentAccount(account);
      setIsCurrentActive(isActive);
    }
  }, [account, isActive]);

  React.useEffect(() => {
    if (address) {
      setIsCurrentActive(true);
      setCurrentAccount(address);
    }
  }, [address]);

  function onConnectWalletClicked() {
    if (!isCurrentActive && !currentAccout) setIsConModalVisible(true);
    else {
      disconnect();
      setAddress(null);
      console.log(address);
      setCurrentAccount(null);
      setIsCurrentActive(false);
    }
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
