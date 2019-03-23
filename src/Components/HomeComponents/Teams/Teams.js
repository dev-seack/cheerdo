import React from "react";
import "./Teams.css";

import { Aux } from "../../hoc/aux";
import { SectionHeadline } from "../../Text/SectionHeadline";
import { Member } from "./Member";
import { PrimaryButton } from "../../Buttons/PrimaryButton";

class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Aux>
        <SectionHeadline headline="Wähle dein TEAM">
          Von den Silver Smarties bis zu den Steelers, Cheerdancer und
          Cheerleader. Jeder findet sein richtiges Team. Wir wuerden uns riesig
          freuen dich beim Probetraining begruessen zu duerfen. Schau vorbei und
          wähle dein Team.
        </SectionHeadline>
        <div className="TeamContainer">
          <Member
            carouselPosition="Back Left"
            name="Silver Smarties"
            category="Cheerleader"
            age="5 - 12"
          />
          <Member
            carouselPosition="Middle Left"
            name="Supreme"
            category="Cheerleader"
            age="12 - 16"
          />

          <Member
            carouselPosition="Front Left"
            name="Steelers"
            category="Cheerleader"
            age="16 - ∞"
          />
          <Member
            carouselPosition="Front Right"
            name="Silver Spirit"
            category="Cheerdancer"
            age="16 - ∞"
          />
          <Member
            carouselPosition="Middle Right"
            name="Silverlicious"
            category="Cheerdancer"
            age="12 - 16"
          />
          <Member
            carouselPosition="Back Right"
            name="Dancing Smarties"
            category="Cheerdancer"
            age="5 - 12"
          />
        </div>
        <PrimaryButton text="Probetraining" to="probetraining" />
      </Aux>
    );
  }
}

export { Teams };
