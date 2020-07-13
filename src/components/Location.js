import React, { Fragment } from "react";

const Location = ({ location }) => {
  const { name, type, dimension } = location;
  return (
    <Fragment>
      <div className="card2">
        <div className="space" style={{ height: "100%" }}>
          <div className="info">
            <h4>{name}</h4>
            <p>Type: {type}</p>
            <p>{dimension === "unknown" ? "Dimension: unknown" : dimension}</p>
          </div>
          <i class="fa fa-angle-right"></i>
        </div>
      </div>
    </Fragment>
  );
};

export default Location;
