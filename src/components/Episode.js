import React, { Fragment } from "react";

const Episode = ({ value }) => {
  const { name, air_date, episode } = value;
  return (
    <Fragment>
      <div className="card2">
        <div className="space" style={{ height: "100%" }}>
          <div className="info">
            <h4>{name}</h4>
            <p>Air date: {air_date}</p>
            <p>
              <span className="pill">{episode}</span>{" "}
            </p>
          </div>
          <i class="fa fa-angle-right"></i>
        </div>
      </div>
    </Fragment>
  );
};

export default Episode;
