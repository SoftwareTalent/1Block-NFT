import React, { useContext, useEffect, useState } from "react";
import { Menu, Dropdown, Button } from "antd";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

import Prompt from "./prompt";
import MetaMask from "./metamask";
import { MetaMaskContext } from "./metamask/useMetaMask";
import useMetaMask from "./metamask/useMetaMask";

import "./style.scss";

function ConnectWalletBtn({ handleClick, text, position, onAddressChanged }) {
  const [isPromptVisible, setIsPromptVisible] = React.useState(false);
  const [isConModalVisible, setIsConModalVisible] = React.useState(false);
  const { connect, disconnect, isActive, account } = useMetaMask();

  const menu =
    isActive && account ? (
      <Menu>
        <Menu.Item>
          <button className="con-dropdown-btn" onClick={onJoinWaitList}>
            Join Waitlist
          </button>
        </Menu.Item>
        <Menu.Item>
          <button className="con-dropdown-btn" onClick={onDisconnect}>
            Disconnect
          </button>
        </Menu.Item>
      </Menu>
    ) : (
      ""
    );

  // function onMetaMaskClicked() {
  //   setIsPromptVisible(false);

  //   connect();
  // }

  function onClose() {
    setIsPromptVisible(false);
  }

  function onDisconnect() {
    disconnect();
  }

  function onJoinWaitList() {
    setIsConModalVisible(true);
  }

  function onConnectWalletClicked() {
    if (!isActive && !account) setIsPromptVisible(true);
  }

  const context = React.useContext(MetaMaskContext);
  // const { isActive, account } = context;

  return (
    <>
      <MetaMask conModalVisible={isConModalVisible} />
      <Prompt isPromptVisible={isPromptVisible} onCancel={onClose} />
      <Dropdown overlay={menu} placement="bottomLeft">
        <button
          className="connect-wallet"
          type="button"
          onClick={onConnectWalletClicked}
        >
          {isActive && account ? (
            <p className="connect-wallet__text connect-wallet__text-name">
              {account.substring(0, 5) +
                "..." +
                account.substring(account.length - 4)}
            </p>
          ) : (
            <p className="connect-wallet__text connect-wallet__text-name">
              Connect Wallet
            </p>
          )}
        </button>
      </Dropdown>
    </>
  );
}

export default ConnectWalletBtn;
