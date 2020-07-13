import React, { Fragment } from "react";
import Character from "./Character";

const Characters = ({ characters }) => {
  const { results } = characters;
  return (
    <div className="grid" style={{ marginBottom: "20px" }}>
      {results.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  );
};

export default Characters;
