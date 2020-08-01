import React, { Fragment, useEffect, useContext } from "react";
import RMContext from "../context/RM/rmContext";
import Spinner from "./layout/Spinner";
import Characters from "./Characters";

const SingleLocation = ({ match }) => {
  const rmContext = useContext(RMContext);
  const {
    loader,
    loader2,
    error,
    locationResidents,
    location,
    singleLocation,
  } = rmContext;

  useEffect(() => {
    singleLocation(match.params.id);
  }, []);
  return (
    <Fragment>
      <div className="container">
        {!loader && location && (
          <div className="split" style={{ marginBottom: "20px" }}>
            <div className="split1">
              <div className="cover">
                <h1>{location.name}</h1>
                <ul>
                  <li>Type: {location.type}</li>
                  <li>Dimension: {location.dimension}</li>
                </ul>
              </div>
            </div>
            <div className="split2">
              <h2 style={{ marginBottom: "5px" }}>Residents</h2>
              {!loader2 && locationResidents && (
                <Fragment>
                  <div className="scroll">
                    <div className="grid-4">
                      <Characters characters={locationResidents} />
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

export default SingleLocation;
