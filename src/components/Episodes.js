import React, { Fragment } from "react";
import Episode from "./Episode";

const Episodes = ({ episodes }) => {
  return (
    <Fragment>
      {episodes.map((episode) => (
        <Episode key={episode.id} value={episode} />
      ))}
    </Fragment>
  );
};

export default Episodes;
