import React from "react";
import { Link } from "react-router-dom";

import useMetaMask from "../connect-wallet-btn/metamask/useMetaMask";
import { MetaMaskContext } from "../connect-wallet-btn/metamask/useMetaMask";
import {
  ConModal,
  DisConModal,
} from "../connect-wallet-btn/metamask/ConnectModals";
import Prompt from "../connect-wallet-btn/prompt";

const JoinWaitListBtn = ({ className }) => {
  const [isConModalVisible, setIsConModalVisible] = React.useState(false);
  const [isDisConModalVisible, setIsDisConModalVisible] = React.useState(false);
  const [isPromptVisible, setIsPromptVisible] = React.useState(false);

  const { isActive, account } = useMetaMask();

  // console.log(isActive, account);

  const onJoinWaitList = () => {
    setIsConModalVisible(true);
  };

  const onModalClose = () => {
    setIsConModalVisible(false);
    setIsDisConModalVisible(false);
  };

  const onClose = () => {
    setIsPromptVisible(false);
  };

  const onConWalletClick = () => {
    setIsPromptVisible(true);
    setIsConModalVisible(false);
  };

  return (
    <>
      <Prompt isPromptVisible={isPromptVisible} onCancel={onClose} />
      <ConModal
        isConModalVisible={isConModalVisible}
        onConModalClose={onModalClose}
        onConWalletClick={onConWalletClick}
      />
      <DisConModal
        isDisconModalVisible={isDisConModalVisible}
        onCloseDisConModal={onModalClose}
        onConWalletClick={onConWalletClick}
      />
      <button
        type="button"
        className={`buy-block-btn ${className || ""}`}
        onClick={onJoinWaitList}
      >
        Join Waitlist
      </button>
    </>
  );
};

export default JoinWaitListBtn;
