import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router";

import Header from "./layouts/header";
import Home from "./components/home/Home";
import Buy1Block from "./components/buy-1block";
import Marketplace from "./components/marketplace";
import AllBlocks from "./components/all-blocks";
import Blocks from "./components/blocks";
import "./styles/Main.scss";

import Market from "./components/marketplace/Market";

function App() {
  return (
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
  );
}

export default App;
