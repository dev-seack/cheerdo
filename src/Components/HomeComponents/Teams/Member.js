import React from "react";
import "./Member.css";

import cheerleaderImage from "../../../assets/cheerleader.png";
// import { SecondaryButton } from "../../Buttons/SecondaryButton";

const Member = (props) => {
  let classesArray = ["MemberContainer", props.carouselPosition];
  const classes = classesArray.join(" ");
  /*let classesArray = ["MemberContainer", props.carouselPosition];
  const [classes, setClasses] = useState(classesArray.join(" "));

  function handleClick() {
    let selected = document.querySelectorAll(".SelectedTeam");
    selected.forEach((ele) => {
      ele.classList.remove("SelectedTeam");
    });

    classesArray.push("SelectedTeam");
    const tempClasses = classesArray.join(" ");
    setClasses(tempClasses);
  }*/

  return (
    <div className={classes}>
      <img src={cheerleaderImage} alt="" className="MemberImage" />
      <h3 className="MemberName">{props.name}</h3>
      <p className="MemberInformation">{props.category}</p>
      <p className="MemberInformation"> {props.age} Jahre</p>
    </div>
  );
};

export { Member };
