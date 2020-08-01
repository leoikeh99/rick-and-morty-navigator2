import React, { useContext, useEffect, Fragment } from "react";
import RMContext from "../context/RM/rmContext";
import Spinner from "./layout/Spinner";
import Episodes from "./Episodes";

const SingleCharacter = ({ match }) => {
  const rmContext = useContext(RMContext);
  const {
    loader,
    loader2,
    error,
    characterEpisodes,
    character,
    singleCharacter,
  } = rmContext;

  useEffect(() => {
    singleCharacter(match.params.id);
  }, []);

  return (
    <Fragment>
      <div className="container">
        {!loader && character && (
          <div className="split">
            <div className="split1">
              <div className="cover">
                <img src={character.image} alt="" />
                <h2>{character.name}</h2>
                <ul>
                  <li>Species: {character.species}</li>
                  <li>Status {character.status}</li>
                  {character.type === "" ? (
                    <li style={{ display: "none" }}></li>
                  ) : (
                    <li>Type: {character.type}</li>
                  )}
                  <li>Gender: {character.gender}</li>
                  <li>Origin: {character.origin.name}</li>
                </ul>
              </div>
            </div>
            <div className="split2">
              <h2 style={{ marginBottom: "5px" }}>Character's Episodes</h2>
              {!loader2 && characterEpisodes && (
                <Fragment>
                  <div className="scroll">
                    <div
                      className={
                        characterEpisodes.length === 1 ? "inline-2" : "grid-2"
                      }
                    >
                      <Episodes episodes={characterEpisodes} />
                    </div>
                  </div>
                </Fragment>
              )}
              {!loader2 && error && <div>{error}</div>}
              {loader2 && <Spinner />}
            </div>
          </div>
        )}
        {!loader && error && <div>{error}</div>}
        {loader && <Spinner />}
      </div>
    </Fragment>
  );
};

export default SingleCharacter;
