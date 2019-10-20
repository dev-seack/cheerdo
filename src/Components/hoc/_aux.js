import React from "react";

const Aux = (props) => {
  if (props.maxContainer) {
    return <div className="maxContainer">{props.children}</div>;
  } else {
    return props.children;
  }
};

export { Aux };