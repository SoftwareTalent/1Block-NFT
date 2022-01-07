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

  // const menu =
  //   isActive && account ? (
  //     <Menu>
  //       <Menu.Item>
  //         <button className="con-dropdown-btn">Join Waitlist</button>
  //       </Menu.Item>
  //       <Menu.Item>
  //         <button className="con-dropdown-btn" onClick={onDisconnect}>
  //           Disconnect
  //         </button>
  //       </Menu.Item>
  //     </Menu>
  //   ) : (
  //     ""
  //   );

  // function onMetaMaskClicked() {
  //   setIsPromptVisible(false);

  //   connect();
  // }

  function onConnectWalletClicked() {
    if (!isActive && !account) setIsConModalVisible(true);
    else disconnect();
  }

  function onModalConClicked() {
    setIsConModalVisible(false);
    setIsPromptVisible(true);
  }

  // console.log(isActive, account);

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
        {isActive && account ? (
          <p className="connect-wallet__text connect-wallet__text-name">
            {account.substring(0, 5) +
              "..." +
              account.substring(account.length - 4)}
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
