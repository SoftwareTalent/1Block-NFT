import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./layouts/header";
import Home from "./components/home/Home";
import Buy1Block from "./components/buy-1block";
import Marketplace from "./components/marketplace";
import "./styles/Main.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/buy-1block" element={<Buy1Block />} />
        <Route path="/marketplace" element={<Marketplace />} />
      </Routes>
    </Router>
  );
}

export default App;
