import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router";
import web3 from "web3";
import { Web3ReactProvider } from "@web3-react/core";
import { MetaMaskProvider } from "./components/home/connect-wallet-btn/metamask/useMetaMask";
import useMetaMask from "./components/home/connect-wallet-btn/metamask/useMetaMask";

import Header from "./layouts/header";
import Home from "./components/home/Home";
import Buy1Block from "./components/buy-1block";
import Marketplace from "./components/marketplace";
import AllBlocks from "./components/all-blocks";
import Blocks from "./components/blocks";
import "./styles/Main.scss";

import Market from "./components/marketplace/Market";
import Web3 from "web3";
import React from "react";

function getLibrary(provider, connector) {
  return new Web3(provider);
}

function App() {
  return (
    <React.StrictMode>
      <Web3ReactProvider getLibrary={getLibrary}>
        <MetaMaskProvider>
          <Router>
            <Header />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/buy-1block" element={<Buy1Block />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/all-blocks" element={<AllBlocks />} />
              <Route path="/blocks" element={<Blocks />} />
              <Route path="/market" element={<Market />} />
            </Routes>
          </Router>
        </MetaMaskProvider>
      </Web3ReactProvider>
    </React.StrictMode>
  );
}

export default App;
