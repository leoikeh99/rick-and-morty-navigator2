import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Location = ({ location }) => {
  const { name, type, dimension, id } = location;
  return (
    <Fragment>
      <div className="card2">
        <Link to={`SingleLocation/${id}`}>
          <div className="space" style={{ height: "100%" }}>
            <div className="info">
              <h4>{name}</h4>
              <p>Type: {type}</p>
              <p>
                {dimension === "unknown" ? "Dimension: unknown" : dimension}
              </p>
            </div>
            <i className="fa fa-angle-right"></i>
          </div>
        </Link>
      </div>
    </Fragment>
  );
};

export default Location;
