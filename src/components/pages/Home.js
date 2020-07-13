import React, { useState, useContext, Fragment } from "react";
import SearchCharacters from "../SearchCharacters";
import SearchEpisodes from "../SearchEpisodes";
import SearchLocations from "../SearchLocations";
import RMContext from "../../context/RM/rmContext";

const SubNav = () => {
  const rmContext = useContext(RMContext);
  const { clearError } = rmContext;

  const [characters, setCharacters] = useState(true);
  const [episodes, setEpisodes] = useState(null);
  const [locations, setLocations] = useState(null);

  const activeCharacters = () => {
    clearError();
    setCharacters(true);
    setEpisodes(null);
    setLocations(null);
  };
  const activeEpisodes = () => {
    clearError();
    setCharacters(null);
    setEpisodes(true);
    setLocations(null);
  };
  const activeLocations = () => {
    clearError();
    setCharacters(null);
    setEpisodes(null);
    setLocations(true);
  };

  return (
    <Fragment>
      <div className="container">
        <div className="subNav">
          <ul>
            <li
              className={characters ? "active" : ""}
              onClick={activeCharacters}
            >
              CHARACTERS
            </li>
            <li className={episodes ? "active" : ""} onClick={activeEpisodes}>
              EPISODES
            </li>
            <li className={locations ? "active" : ""} onClick={activeLocations}>
              LOCATIONS
            </li>
          </ul>
        </div>
        {characters && <SearchCharacters />}
        {episodes && <SearchEpisodes />}
        {locations && <SearchLocations />}
      </div>
    </Fragment>
  );
};

export default SubNav;
