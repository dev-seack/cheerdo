import React from "react";
import { Link } from "react-router-dom";
import "./SecondaryButton.css";

const SecondaryButton = (props) => {
  const to = "/" + props.to;
  return (
    <Link
      to={to}
      className="SecondaryButton"
      data-text={props.text}
    >
      {" "}
    </Link>
  );
};

export { SecondaryButton };
