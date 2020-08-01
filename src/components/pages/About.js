import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <div className="container">
        <div style={{ maxWidth: "500px", padding: "30px 0px" }}>
          <h2 style={{ marginBottom: "10px" }}>About this app</h2>
          <ul>
            <li>
              {" "}
              <strong>Name</strong>: Rick n Morty Navigator.
            </li>
            <li>
              <strong>Version</strong>: 2.0{" "}
            </li>
            <li>
              <strong>VersionDescription</strong>: An aplication created with
              react.js using the
              <a
                href="https://rickandmortyapi.com/"
                target="_blank"
                style={{ textDecoration: "underline" }}
              >
                {" "}
                Rick and Morty API
              </a>{" "}
              , use this application to search on hundreds of characters getting
              fully all information.
            </li>
          </ul>
          <div
            className="btn"
            style={{ marginTop: "10px", display: "inline-block" }}
          >
            <a
              href="https://github.com/leoikeh99/Rick-and-Morty-React.js-App"
              target="_blank"
            >
              <i className="fab fa-github"></i> VIEW CODE IN GITHUB
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
