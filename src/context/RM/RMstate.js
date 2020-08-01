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
    characterEpisodes: null,
    episodeCharacters: null,
    locationResidents: null,
    error: null,
    loader: null,
    loader2: null,
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

  const singleCharacter = async (id) => {
    setLoader();
    try {
      const res = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      dispatch({ type: GET_CHARACTER, payload: res.data });
      setLoader2();
      try {
        const res2 = await axios.all(
          res.data.episode.map((episode) => axios.get(episode))
        );
        var data = [];
        res2.forEach((episode) => (data = [...data, episode.data]));
        dispatch({ type: GET_CHARACTER_EPISODES, payload: data });
      } catch (error) {
        dispatch({ type: SET_ERROR, payload: "Nothing found" });
      }
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: "Nothing found" });
    }
  };

  const singleEpisode = async (id) => {
    setLoader();
    try {
      const res = await axios.get(
        `https://rickandmortyapi.com/api/episode/${id}`
      );
      dispatch({ type: GET_EPISODE, payload: res.data });
      setLoader2();
      try {
        const res2 = await axios.all(
          res.data.characters.map((character) => axios.get(character))
        );
        var data = [];
        res2.forEach((character) => (data = [...data, character.data]));
        dispatch({ type: GET_EPISODE_CHARACTERS, payload: data });
      } catch (error) {
        dispatch({ type: SET_ERROR, payload: "Nothing found" });
      }
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: "Nothing found" });
    }
  };

  const singleLocation = async (id) => {
    setLoader();
    try {
      const res = await axios.get(
        `https://rickandmortyapi.com/api/location/${id}`
      );
      dispatch({ type: GET_LOCATION, payload: res.data });
      setLoader2();
      try {
        const res2 = await axios.all(
          res.data.residents.map((resident) => axios.get(resident))
        );
        var data = [];
        res2.forEach((resident) => (data = [...data, resident.data]));
        dispatch({ type: GET_LOCATION_RESIDENTS, payload: data });
      } catch (error) {
        dispatch({ type: SET_ERROR, payload: "Nothing found" });
      }
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: "Nothing found" });
    }
  };

  return (
    <rmContext.Provider
      value={{
        characters: state.characters,
        episodes: state.episodes,
        locations: state.locations,
        character: state.character,
        episode: state.episode,
        location: state.location,
        characterEpisodes: state.characterEpisodes,
        episodeCharacters: state.episodeCharacters,
        locationResidents: state.locationResidents,
        loader: state.loader,
        loader2: state.loader2,
        error: state.error,
        searchCharacters,
        clearCharacters,
        searchEpisodes,
        clearEpisodes,
        searchLocations,
        clearLocations,
        clearError,
        singleCharacter,
        singleEpisode,
        singleLocation,
      }}
    >
      {props.children}
    </rmContext.Provider>
  );
};

export default RMstate;
