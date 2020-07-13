import React, { Fragment, useContext } from "react";
import Spinner from "./layout/Spinner";
import RMContext from "../context/RM/rmContext";
import Locations from "./Locations";

const SearchLocations = () => {
  const rmContext = useContext(RMContext);
  const {
    loader,
    error,
    locations,
    searchLocations,
    clearLocations,
  } = rmContext;

  const onKeyUp = (e) => {
    if (e.target.value.trim() === "") {
      clearLocations();
    } else {
      searchLocations(e.target.value.trim());
    }
  };

  return (
    <Fragment>
      <form action="">
        <input
          type="text"
          placeholder="Enter location name"
          onKeyUp={onKeyUp}
        />
      </form>

      <div>
        {!loader && locations && <Locations locations={locations} />}
        {!loader && error && <div>{error}</div>}
        {loader && <Spinner />}
      </div>
    </Fragment>
  );
};

export default SearchLocations;
