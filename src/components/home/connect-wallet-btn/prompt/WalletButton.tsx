import React from 'react'

import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

const Button = () => {
  const [walConnector, setWalConnector] = React.useState(null)

  const connect = () => {
    const bridge = "https://bridge.walletconnect.org";

    // create new connector
    const connector = new WalletConnect({ bridge, qrcodeModal: QRCodeModal });

    console.log(connector);

    await setWalConnector({ connector });

    // check if already connected
    if (!connector.connected) {
      alert(connector.connected);
      // create new session
      await connector.createSession();
  }

  return (
    <button onClick={connect}>Wallet</button>
  )
}

export default Button