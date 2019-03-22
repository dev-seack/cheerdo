import React from "react";
import "./Member.css";

import cheerleaderImage from "../../../assets/cheerleader.png";
// import { SecondaryButton } from "../../Buttons/SecondaryButton";

const Member = (props) => {
  return (
    <div className="MemberContainer">
      <img src={cheerleaderImage} alt="" className="MemberImage" />
      <h3 className="MemberName">{props.name}</h3>
      <p className="MemberInformation">{props.category}</p>
      <p className="MemberInformation"> {props.age} Jahre</p>
    </div>
  );
};

export { Member };
