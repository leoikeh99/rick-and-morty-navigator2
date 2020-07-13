import React, { Fragment } from "react";
import Location from "./Location";

const Locations = ({ locations }) => {
  const { results } = locations;
  return (
    <div className="grid">
      {results.map((location) => (
        <Location key={location.id} location={location} />
      ))}
    </div>
  );
};

export default Locations;
