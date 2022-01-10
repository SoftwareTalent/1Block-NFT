import React from "react";

export const WalletContext = React.createContext({
  address: null,
  setAddress: (address) => {},
});
