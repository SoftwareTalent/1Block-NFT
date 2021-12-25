import React, { useEffect, useState } from "react";
import { Modal, Button } from "antd";
import { ReactSVG } from "react-svg";

import buttonIcon from "../../../assets/images/side-nav-wallet-btn.svg";
import connectIcon from "../../../assets/images/connect-icon.svg";
import conWalletIcon from "../../../assets/images/modal-con-wallet.svg";
import startBuyingIcon from "../../../assets/images/start-buying.svg";
import spinner from "../../../assets/images/spinner.gif";

// Modal Icons
import conModalPlus from "../../../assets/images/updated-design/wallet-connect/con-modal-plus.svg";
import conModalMail from "../../../assets/images/updated-design/wallet-connect/con-modal-mail.svg";
import CustomMailchimpSubscribe from "../footer/CustomMailChimpSubscribe";
import "./style.scss";

const Context = React.createContext({ name: "Default" });

async function checkIfWalletIsConnected(onConnected) {
  if (window.ethereum) {
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });

    if (accounts.length > 0) {
      const account = accounts[0];
      onConnected(account);
      return;
    }
  }
}

const ConnectWalletBtn = ({
  handleClick,
  text,
  position,
  onAddressChanged,
}) => {
  const [isDisconModalVisible, setIsDisconModalVisible] = React.useState(false);
  const [isConModalVisible, setIsConModalVisible] = React.useState(false);
  const [isSpinModalVisible, setIsSpinModalVisible] = React.useState(false);
  const [isMetamask, setIsMetamask] = React.useState(false);

  const [userAddress, setUserAddress] = useState("");

  const connectWallet = () => {
    if (!window.ethereum) {
      setIsMetamask(true);
      return;
    }

    if (userAddress) {
      setUserAddress("");
      setIsDisconModalVisible(true);
    } else setIsConModalVisible(true);
  };

  useEffect(() => {
    checkIfWalletIsConnected(setUserAddress);
  }, []);

  // useEffect(() => {
  //   onAddressChanged(userAddress);
  // }, [userAddress]);

  const onConWalletClick = async (onConnected) => {
    setIsConModalVisible(false);
    setIsSpinModalVisible(true);

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    onConnected(accounts[0]);

    setIsSpinModalVisible(false);

    // setTimeout(() => {
    //   setIsSpinModalVisible(false);
    //   setIsDisconModalVisible(true);
    // }, 3000);
  };

  const onClose = () => {
    setIsDisconModalVisible(false);
  };

  const onConModalClose = () => {
    setIsConModalVisible(false);
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
        onCancel={onConModalClose}
      >
        <h1>Buy 1Block</h1>
        <div className="con-modal-body">
          <div className="con-modal-body-item" style={{ marginRight: "10px" }}>
            <ReactSVG src={conWalletIcon} />
            <h3>CONNECT WALLET</h3>
            <p>Connect your wallet with a client of your choice.</p>
          </div>
          <div className="con-modal-body-item">
            <ReactSVG src={conModalMail} />
            <h3>SIGN MESSAGE TO PROVE ACCOUNT OWNERSHIP</h3>
            <p>Mint your 1Block or buy one on the Marketplace.</p>
          </div>
          <div className="con-modal-body-item">
            <ReactSVG src={conModalPlus} />
            <h3>GET ADDED TO WAITLIST</h3>
            <p>Mint your 1Block or buy one on the Marketplace.</p>
          </div>
        </div>
        <button
          onClick={() => onConWalletClick(setUserAddress)}
          className="con-wallet-btn"
        >
          <span>Connect Wallet</span>
        </button>
        <p style={{ textAlign: "center", marginTop: "40px" }}>
          To get more info on the Waitlist process please enter your email
        </p>
        <div className="inputwrapper">
          <CustomMailchimpSubscribe />
        </div>
      </Modal>

      <Modal
        className="spin-modal"
        title="Basic Modal"
        visible={isSpinModalVisible}
      >
        <img src={spinner} />
        <p>Waiting for you to connect your wallet</p>
      </Modal>

      <Modal
        className="discon-modal"
        title="Basic Modal"
        visible={isMetamask}
        onCancel={() => setIsMetamask(false)}
      >
        <p>Get Metamask!</p>
      </Modal>

      <button className="connect-wallet" type="button" onClick={connectWallet}>
        {userAddress ? (
          <p className="connect-wallet__text connect-wallet__text-name">
            {userAddress.substring(0, 5) +
              "..." +
              userAddress.substring(userAddress.length - 4)}
          </p>
        ) : (
          <p className="connect-wallet__text connect-wallet__text-name">
            Connect Wallet
          </p>
        )}
      </button>
    </>
  );
};

export default ConnectWalletBtn;
