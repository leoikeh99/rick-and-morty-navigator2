import React, { useReducer } from "react";
import axios from "axios";
import rmReducer from "./rmReducer";
import rmContext from "./rmContext";

import {
  SEARCH_CHARACTERS,
  SEARCH_EPISODES,
  SEARCH_LOCATIONS,
  GET_CHARACTER,
  GET_EPISODE,
  GET_LOCATION,
  GET_CHARACTER_EPISODES,
  GET_EPISODE_CHARACTERS,
  GET_LOCATION_RESIDENTS,
  SET_LOADER,
  SET_LOADER2,
  SET_ERROR,
  CLEAR_CHARACTERS,
  CLEAR_EPISODES,
  CLEAR_LOCATIONS,
  CLEAR_ERROR,
} from "../types";

const RMstate = (props) => {
  const initialState = {
    characters: null,
    episodes: null,
    locations: null,
    character: null,
    episode: null,
    location: null,
    CharacterEpisodes: null,
    EpisodeCharacters: null,
    LocationResidents: null,
    error: null,
    loader: null,
    loader2: true,
  };

  const [state, dispatch] = useReducer(rmReducer, initialState);

  const setLoader = () => dispatch({ type: SET_LOADER });
  const setLoader2 = () => dispatch({ type: SET_LOADER2 });
  const clearCharacters = () => dispatch({ type: CLEAR_CHARACTERS });
  const clearEpisodes = () => dispatch({ type: CLEAR_EPISODES });
  const clearLocations = () => dispatch({ type: CLEAR_LOCATIONS });
  const clearError = () => dispatch({ type: CLEAR_ERROR });

  const searchCharacters = async (text) => {
    setLoader();
    try {
      const res = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${text}`
      );

      dispatch({ type: SEARCH_CHARACTERS, payload: res.data });
    } catch (err) {
      dispatch({ type: SET_ERROR, payload: "Nothing found" });
    }
  };

  const searchEpisodes = async (text) => {
    setLoader();
    try {
      const res = await axios.get(
        `https://rickandmortyapi.com/api/episode/?episode=${text}`
      );

      dispatch({ type: SEARCH_EPISODES, payload: res.data });
    } catch (err) {
      dispatch({ type: SET_ERROR, payload: "Nothing found" });
    }
  };

  const searchLocations = async (text) => {
    setLoader();
    try {
      const res = await axios.get(
        `https://rickandmortyapi.com/api/location/?name=${text}`
      );

      dispatch({ type: SEARCH_LOCATIONS, payload: res.data });
    } catch (err) {
      dispatch({ type: SET_ERROR, payload: "Nothing found" });
    }
  };

  return (
    <rmContext.Provider
      value={{
        characters: state.characters,
        episodes: state.episodes,
        locations: state.locations,
        loader: state.loader,
        error: state.error,
        searchCharacters,
        clearCharacters,
        searchEpisodes,
        clearEpisodes,
        searchLocations,
        clearLocations,
        clearError,
      }}
    >
      {props.children}
    </rmContext.Provider>
  );
};

export default RMstate;
