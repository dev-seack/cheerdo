import React from "react";
import "./SectionHeadline.css";
import { Aux } from "../../hoc/_aux";

const SectionHeadline = (props) => {
  return (
    <Aux isContentContainer>
      <h2 className="SectionHeadline">{props.headline}</h2>
      <p className="SectionSubline">{props.children}</p>
    </Aux>
  );
};

export { SectionHeadline };
