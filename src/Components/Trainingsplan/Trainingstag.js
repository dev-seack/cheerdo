import React from "react";
import { Enc } from "../hoc/enc";

const Trainingstag = (props) => {
  return (
    <div className="Trainingstag">
      <h4>{props.name}</h4>
      {props.information.map((unit, key) => {
        return (
          <Enc key={key}>
            <p className="team">
              {unit.team} - {unit.time}
            </p>
            <p className="location">{unit.location}</p>
          </Enc>
        );
      })}
    </div>
  );
};

export { Trainingstag };
