import React, { Fragment, useEffect, useContext } from "react";
import RMContext from "../context/RM/rmContext";
import Spinner from "./layout/Spinner";
import Characters from "./Characters";

const SingleEpisode = ({ match }) => {
  const rmContext = useContext(RMContext);
  const {
    loader,
    loader2,
    error,
    episodeCharacters,
    episode,
    singleEpisode,
  } = rmContext;

  useEffect(() => {
    singleEpisode(match.params.id);
  }, []);
  return (
    <Fragment>
      <div className="container">
        {!loader && episode && (
          <div className="split" style={{ marginBottom: "20px" }}>
            <div className="split1">
              <div className="cover">
                <h1>{episode.name}</h1>
                <ul>
                  <li>Air date: {episode.air_date}</li>
                  <li>Episode: {episode.episode}</li>
                </ul>
              </div>
            </div>
            <div className="split2">
              <h2 style={{ marginBottom: "5px" }}>Episode's Characters</h2>
              {!loader2 && episodeCharacters && (
                <Fragment>
                  <div className="scroll">
                    <div className="grid-4">
                      <Characters characters={episodeCharacters} />
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

export default SingleEpisode;
