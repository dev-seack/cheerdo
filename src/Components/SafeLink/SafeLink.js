import React from "react";

const SafeLink = (props) => {
  return (
    <a
      href={props.to}
      target={props.blank}
      rel="noopener noreferrer"
      {...props}
    >
      {props.children}
    </a>
  );
};

export { SafeLink };
