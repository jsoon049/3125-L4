import React from "react";
import { About } from "./components/About";
import { Booking } from "./components/Booking";
import { Contact } from "./components/Contact";
import { Service } from "./components/Service";
import { Header } from "./components/Header"
import { Brand } from "./components/Brand"
import "./App.css";

function App() {
  return (
    <div className="appContainer" id="appContainer">
      <Brand />
      <Header />
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
