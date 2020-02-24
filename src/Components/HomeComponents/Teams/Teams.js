import React from "react";
import "./Teams.css";

import { Aux } from "../../hoc/_aux";
import { SectionHeadline } from "../../Text/SectionHeadline";
import { Member } from "./Member";
import { PrimaryButton } from "../../Buttons/PrimaryButton";

// teamimages
import silversmartiesImage from "../../../assets/teams/ucs-silversmarties.png";
import supremeImage from "../../../assets/teams/ucs-supreme.png";
import steelersImage from "../../../assets/teams/ucs-steelers.png";
import silverspiritImage from "../../../assets/teams/ucs-silverspiritdancer.png";
import silverliciousImage from "../../../assets/teams/ucs-silverlicious.png";
import dancingsmartiesImage from "../../../assets/teams/ucs-dancingsmarties.png";

class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Aux>
        <SectionHeadline headline="Wähle dein TEAM">
          Wir haben in den Bereichen Cheerleading und Cheerdance Teams in 3
          verschiedenen Altersgruppen.
        </SectionHeadline>
        <div className="TeamContainer">
          <Member
            imageSource={silversmartiesImage}
            carouselPosition="Back Left"
            name="Silver Smarties"
            category="Cheerleader"
            age="5 - 12"
          />
          <Member
            imageSource={supremeImage}
            carouselPosition="Middle Left"
            name="Supreme"
            category="Cheerleader"
            age="12 - 16"
          />

          <Member
            imageSource={steelersImage}
            carouselPosition="Front Left"
            name="Steelers"
            category="Cheerleader"
            age="16 - ∞"
          />
          <Member
            imageSource={silverspiritImage}
            carouselPosition="Front Right"
            name="Silver Spirit"
            category="Cheerdancer"
            age="16 - ∞"
          />
          <Member
            imageSource={silverliciousImage}
            carouselPosition="Middle Right"
            name="Silverlicious"
            category="Cheerdancer"
            age="12 - 16"
          />
          <Member
            imageSource={dancingsmartiesImage}
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
