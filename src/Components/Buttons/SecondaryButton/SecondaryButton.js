import React from "react";
import "./SecondaryButton.css";

const SecondaryButton = (props) => {
  const to = "/" + props.to;
  return (
    <a
      href={to}
      className="SecondaryButton"
      rel="noopener noreferrer"
      data-text={props.text}
    >
      {" "}
    </a>
  );
};

export { SecondaryButton };
