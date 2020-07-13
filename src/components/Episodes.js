import React, { Fragment } from "react";
import Episode from "./Episode";

const Episodes = ({ episodes }) => {
  const { results } = episodes;
  return (
    <div className="grid">
      {results.map((episode) => (
        <Episode key={episode.id} value={episode} />
      ))}
    </div>
  );
};

export default Episodes;
