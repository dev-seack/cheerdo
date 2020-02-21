import React from "react";
import { Link } from "react-router-dom";
import "./PrimaryButton.css";

const PrimaryButton = props => {
  const to = "/" + props.to;
  return props.submit ? (
    <button type="submit" className="PrimaryButton" data-text={props.text}>
      {" "}
    </button>
  ) : (
    <Link to={to} className="PrimaryButton" data-text={props.text}>
      {" "}
    </Link>
  );
};

export { PrimaryButton };
