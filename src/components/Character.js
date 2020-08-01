import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

const Character = ({ character }) => {
  const { name, status, gender, image, id } = character;

  return (
    <Fragment>
      <div className="card">
        <Link to={`/SingleCharacter/${id}`}>
          <div className={"details"}>
            <ul>
              <li>
                {" "}
                <span className="text">STATUS: {status}</span>{" "}
              </li>
              <li>
                <span className="text">GENDER: {gender}</span>{" "}
              </li>
            </ul>
          </div>
          <img src={image} alt="" />

          <h2>{name}</h2>
        </Link>
      </div>
    </Fragment>
  );
};

export default Character;
