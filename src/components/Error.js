import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <p>
        Opps {error.status} something went wrong. {error.data} Go here{" "}
        <Link to={"/"}>Home</Link>
      </p>
    </div>
  );
};

export default Error;
