import React, { Fragment, useContext } from "react";
import Spinner from "./layout/Spinner";
import RMContext from "../context/RM/rmContext";
import Characters from "./Characters";

const SearchCharacters = () => {
  const rmContext = useContext(RMContext);
  const {
    loader,
    error,
    characters,
    searchCharacters,
    clearCharacters,
  } = rmContext;

  const onKeyUp = (e) => {
    if (e.target.value.trim() === "") {
      clearCharacters();
    } else {
      searchCharacters(e.target.value.trim());
    }
  };

  return (
    <Fragment>
      <form action="">
        <input
          type="text"
          placeholder="Enter character name"
          onKeyUp={onKeyUp}
        />
      </form>

      <div>
        {!loader && characters && <Characters characters={characters} />}
        {!loader && error && <div>{error}</div>}
        {loader && <Spinner />}
      </div>
    </Fragment>
  );
};

export default SearchCharacters;
