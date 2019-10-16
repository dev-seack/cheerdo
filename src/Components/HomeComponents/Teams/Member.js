import React from "react";
import "./Member.css";

// import { SecondaryButton } from "../../Buttons/SecondaryButton";

const Member = (props) => {
  let classesArray = ["MemberContainer", props.carouselPosition];
  const classes = classesArray.join(" ");

  return (
    <div className={classes}>
      <img src={props.imageSource} alt="" className="MemberImage" />
      <h3 className="MemberName">{props.name}</h3>
      <p className="MemberInformation">{props.category}</p>
      <p className="MemberInformation"> {props.age} Jahre</p>
    </div>
  );
};

export { Member };
