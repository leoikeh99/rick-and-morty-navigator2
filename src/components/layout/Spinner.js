import React, { Fragment } from "react";
import spinner from "./img/spinner2.gif";

const Spinner = () => {
  return (
    <Fragment>
      <div className="text-center">
        <img src={spinner} alt="" style={{ maxWidth: "200px" }} />
      </div>
    </Fragment>
  );
};

export default Spinner;
