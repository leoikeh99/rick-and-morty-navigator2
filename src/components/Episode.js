import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Episode = ({ value }) => {
  const { name, air_date, episode, id } = value;
  return (
    <Fragment>
      <div className="card2">
        <Link to={`/SingleEpisode/${id}`}>
          <div className="space" style={{ height: "100%" }}>
            <div className="info">
              <h4>{name}</h4>
              <p>Air date: {air_date}</p>
              <p>
                <span className="pill">{episode}</span>{" "}
              </p>
            </div>
            <i className="fa fa-angle-right"></i>
          </div>
        </Link>
      </div>
    </Fragment>
  );
};

export default Episode;
