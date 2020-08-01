import React, { Fragment } from "react";
import Character from "./Character";

const Characters = ({ characters }) => {
  return (
    <Fragment>
      {characters.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </Fragment>
  );
};

export default Characters;
