import React from "react";
import "./aux.css";

const Aux = (props) => {
  return props.isContentContainer ? (
    <div className="ContentContainer" {...props}>
      {props.children}
    </div>
  ) : (
    props.children
  );
};

export { Aux };
