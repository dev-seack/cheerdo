import React from "react";
import "./Trainingsplan.css";

import { SectionHeadline } from "../Text/SectionHeadline";
import { Aux } from "../hoc/_aux";
import logo from "../../assets/united-cheer-sports-dortmund-footer-logo.png";
import { Trainingstag } from "./Trainingstag";
import { PrimaryButton } from "../Buttons/PrimaryButton";
import trainingsplan from "../../assets/documents/trainingsplan.pdf";
import docBundle from "../../assets/documents/ucs-dokumente.zip";
import { SafeLink } from "../SafeLink";

class Trainingsplan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trainingsplan: {
        monday: [
          {
            team: "Silver Smarties",
            time: "17:00 - 19:00",
            location:
              "Sporthalle Gertrud Bäumer Realschule Erwinstr. Ecke Schaeffelstr."
          },
          {
            team: "Silverlicious",
            time: "17:30 - 19:30",
            location: "Diesterweg Grundschule Dortmund"
          },
          {
            team: "Steelers",
            time: "19:00 - 21:00",
            location:
              "Sporthalle Gertrud Bäumer Realschule Erwinstr. Ecke Schaeffelstr."
          }
        ],
        tuesday: [
          {
            team: "Silver Spirit Dancer",
            time: "19:00 - 21:30",
            location:
              "Sporthalle Gertrud Bäumer Realschule Erwinstr. Ecke Schaeffelstr."
          }
        ],
        wednesday: [
          {
            team: "Supreme",
            time: "17:00 - 19:00",
            location:
              "Sporthalle Gertrud Bäumer Realschule Erwinstr. Ecke Schaeffelstr."
          },
          {
            team: "Silverlicious",
            time: "17:30 - 19:30",
            location: "Helmholtz Gymnasium Dortmund"
          },
          {
            team: "Steelers",
            time: "19:00 - 21:00",
            location:
              "Sporthalle Gertrud Bäumer Realschule Erwinstr. Ecke Schaeffelstr."
          }
        ],
        thursday: [
          {
            team: "Silver Spirit Dancer",
            time: "19:00 - 21:30",
            location:
              "Sporthalle Gertrud Bäumer Realschule Erwinstr. Ecke Schaeffelstr."
          }
        ],
        friday: [
          {
            team: "Silver Smarties",
            time: "17:00 - 19:00",
            location: "Goethestr. 20, Dortmund"
          },
          {
            team: "Supreme",
            time: "17:00 - 19:00",
            location:
              "Sporthalle Gertrud Bäumer Realschule Erwinstr. Ecke Schaeffelstr."
          }
        ],
        saturday: [
          {
            team: "Kein Training"
          }
        ],
        sunday: [
          {
            team: "Silver Smarties",
            time: "10:00 - 12:00",
            location:
              "Sporthalle Gertrud Bäumer Realschule Erwinstr. Ecke Schaeffelstr."
          },
          {
            team: "Supreme",
            time: "12:00 - 14:00",
            location:
              "Sporthalle Gertrud Bäumer Realschule Erwinstr. Ecke Schaeffelstr."
          },
          {
            team: "Steelers",
            time: "14:00 - 17:00",
            location:
              "Sporthalle Gertrud Bäumer Realschule Erwinstr. Ecke Schaeffelstr."
          },
          {
            team: "Silver Spirit Dancer",
            time: "10:00 - 13:00",
            location:
              "Eierkamp, Mira Lobe Schule (wenn die Jugend da ist, 13:00 - 16:00)"
          }
        ]
      }
    };
  }

  render() {
    return (
      <Aux>
        <SectionHeadline headline="Training">
          Wir würden uns freuen dich bei einem Probetraining begrüßen zu dürfen.
          Sei schon bald Teil von United Cheer Sports e. V. Dortmund.
        </SectionHeadline>
        <div className="TrainingsplanContainer ContentContainer">
          <img
            className="Logo"
            src={logo}
            alt="united-cheer-sports-dortmund-trainingsplan"
          />
          <div className="TrainingstageContainer">
            <Trainingstag
              name="Montag"
              information={this.state.trainingsplan.monday}
            />
            <Trainingstag
              name="Dienstag"
              information={this.state.trainingsplan.tuesday}
            />
            <Trainingstag
              name="Mittwoch"
              information={this.state.trainingsplan.wednesday}
            />
            <Trainingstag
              name="Donnerstag"
              information={this.state.trainingsplan.thursday}
            />
            <Trainingstag
              name="Freitag"
              information={this.state.trainingsplan.friday}
            />
            <Trainingstag
              name="Samstag"
              information={this.state.trainingsplan.saturday}
            />
            <Trainingstag
              name="Sonntag"
              information={this.state.trainingsplan.sunday}
            />
          </div>
        </div>
        <div className="TrainingsplanButtonGroup ContentContainer">
          <SafeLink
            to={docBundle}
            target="_self"
            className="PrimaryButton"
            data-text="download"
          ></SafeLink>
          <PrimaryButton to="probetraining" text="Probetraining" />
        </div>
      </Aux>
    );
  }
}

export { Trainingsplan };
