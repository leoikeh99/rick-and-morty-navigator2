import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/main.css";
import NavBar from "./components/layout/NavBar";
import Home from "./components/pages/Home";
import RMstate from "./context/RM/RMstate";

function App() {
  return (
    <RMstate>
      <Router>
        <NavBar />
        <Home />
      </Router>
    </RMstate>
  );
}

export default App;
