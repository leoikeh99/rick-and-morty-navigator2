import React, { Fragment, useContext } from "react";
import Spinner from "./layout/Spinner";
import RMContext from "../context/RM/rmContext";
import Episodes from "./Episodes";

const SearchEpisodes = () => {
  const rmContext = useContext(RMContext);
  const { loader, error, episodes, searchEpisodes, clearEpisodes } = rmContext;

  const onKeyUp = (e) => {
    if (e.target.value.trim() === "") {
      clearEpisodes();
    } else {
      searchEpisodes(e.target.value.trim());
    }
  };

  return (
    <Fragment>
      <form action="">
        <input
          type="text"
          placeholder="Enter episode code e.g. S01E09"
          onKeyUp={onKeyUp}
        />
      </form>

      <div>
        {!loader && episodes && <Episodes episodes={episodes} />}
        {!loader && error && <div>{error}</div>}
        {loader && <Spinner />}
      </div>
    </Fragment>
  );
};

export default SearchEpisodes;
