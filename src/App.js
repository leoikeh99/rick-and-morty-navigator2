import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/main.css";
import NavBar from "./components/layout/NavBar";
import Home from "./components/pages/Home";
import SingleCharacter from "./components/SingleCharacter";
import SingleEpisode from "./components/SingleEpisode";
import SingleLocation from "./components/SingleLocation";
import RMstate from "./context/RM/RMstate";
import About from "./components/pages/About";

function App() {
  return (
    <RMstate>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/SingleCharacter/:id"
            component={SingleCharacter}
          />
          <Route exact path="/SingleEpisode/:id" component={SingleEpisode} />
          <Route exact path="/SingleLocation/:id" component={SingleLocation} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </RMstate>
  );
}

export default App;
