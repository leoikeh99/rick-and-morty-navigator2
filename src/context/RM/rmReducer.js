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

export default (state, action) => {
  switch (action.type) {
    case SET_LOADER:
      return {
        ...state,
        loader: true,
      };

    case SET_LOADER2:
      return {
        ...state,
        loader2: true,
      };

    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        characters: null,
        episodes: null,
        locations: null,
        loader: null,
      };

    case SEARCH_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        loader: null,
        error: null,
      };

    case GET_CHARACTER_EPISODES:
      return {
        ...state,
        characterEpisodes: action.payload,
        loader2: null,
        error: null,
      };

    case GET_EPISODE_CHARACTERS:
      return {
        ...state,
        episodeCharacters: action.payload,
        loader2: null,
        error: null,
      };

    case GET_LOCATION_RESIDENTS:
      return {
        ...state,
        locationResidents: action.payload,
        loader2: null,
        error: null,
      };

    case SEARCH_EPISODES:
      return {
        ...state,
        episodes: action.payload,
        loader: null,
        error: null,
      };

    case SEARCH_LOCATIONS:
      return {
        ...state,
        locations: action.payload,
        loader: null,
        error: null,
      };

    case GET_CHARACTER:
      return {
        ...state,
        character: action.payload,
        loader: null,
        error: null,
      };

    case GET_EPISODE:
      return {
        ...state,
        episode: action.payload,
        loader: null,
        error: null,
      };

    case GET_LOCATION:
      return {
        ...state,
        location: action.payload,
        loader: null,
        error: null,
      };

    case CLEAR_CHARACTERS:
      return {
        ...state,
        characters: null,
        loader: null,
        error: null,
      };

    case CLEAR_EPISODES:
      return {
        ...state,
        episodes: null,
        loader: null,
        error: null,
      };

    case CLEAR_LOCATIONS:
      return {
        ...state,
        locations: null,
        loader: null,
        error: null,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
  }
};
