import React from "react";
import "./App.css";
import CTA from "./containers/cta/Cta";
import Navbar from "./containers/navbar/Navbar";
import Footer from "./containers/footer/Footer";
import Possibility from "./containers/possibility/Possibility";
import Header from "./containers/header/Header";
import WhatGPT from "./containers/whatGPT3/WhatGPT";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <WhatGPT />
        <CTA />
        <Possibility />
        <div className="top">INFOTREK '24</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
