import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "./components/About";
import { Booking } from "./components/Booking";
import { Contact } from "./components/Contact";
import { Service } from "./components/Service";
import "./App.css";

function App() {
  return (
    <div className="appContainer" id="appContainer">
      <Service />
      <Booking />
      <About />
      <Contact />
      <div className="footer">
        <p className="footer-text footer-top">Website designed by Casper the Friendly Ghost</p>
        <p className="footer-text footer-bottom">Medical content found from </p>
      </div>
    </div>
  );
}

export default App;
