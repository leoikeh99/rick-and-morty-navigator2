import React, { Fragment } from "react";
import Location from "./Location";

const Locations = ({ locations }) => {
  return (
    <Fragment>
      {locations.map((location) => (
        <Location key={location.id} location={location} />
      ))}{" "}
    </Fragment>
  );
};

export default Locations;
