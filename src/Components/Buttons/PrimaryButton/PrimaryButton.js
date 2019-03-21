import React from "react";
import "./PrimaryButton.css";

const PrimaryButton = (props) => {
  const to = "/" + props.to;
  return (
    <a
      href={to}
      className="PrimaryButton"
      rel="noopener noreferrer"
      data-text={props.text}
    >
      {" "}
    </a>
  );
};

export { PrimaryButton };
