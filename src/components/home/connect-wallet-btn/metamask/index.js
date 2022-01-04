import React from "react";

import { DisConModal, ConModal, SpinModal } from "./ConnectModals";
import useMetaMask from "./useMetaMask";

import "../style.scss";

function MetaMask({ conModalVisible }) {
  const [isDisconModalVisible, setIsDisconModalVisible] = React.useState(false);
  const [isConModalVisible, setIsConModalVisible] = React.useState(false);
  const [isSpinModalVisible, setIsSpinModalVisible] = React.useState(false);
  const [isMetamask, setIsMetamask] = React.useState(false);

  const { connect, disconnect, isActive, account } = useMetaMask();

  const onCloseDisConModal = () => {
    setIsDisconModalVisible(false);
  };

  const onConModalClose = () => {
    setIsConModalVisible(false);
  };

  const onConWalletClick = () => {
    if (isActive) {
      setIsDisconModalVisible(true);
      disconnect();
    } else {
      setIsConModalVisible(false);
      setIsSpinModalVisible(true);
      connect().then((val) => {
        setIsSpinModalVisible(false);
      });
    }
  };

  React.useEffect(
    () => setIsConModalVisible(conModalVisible),
    [conModalVisible]
  );

  return (
    <>
      <DisConModal
        isDisconModalVisible={isDisconModalVisible}
        onCloseDisConModal={onCloseDisConModal}
      />
      <ConModal
        isConModalVisible={isConModalVisible}
        onConModalClose={onConModalClose}
        onConWalletClick={onConWalletClick}
      />
      <SpinModal isSpinModalVisible={isSpinModalVisible} />
    </>
  );
}

export default MetaMask;
