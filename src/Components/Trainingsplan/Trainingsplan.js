import React from "react";
import "./Trainingsplan.css";

import { SectionHeadline } from "../Text/SectionHeadline";
import { Aux } from "../hoc/aux";
import logo from "../../assets/united-cheer-sports-dortmund-footer-logo.svg";
import { Trainingstag } from "./Trainingstag";
import { PrimaryButton } from "../Buttons/PrimaryButton";

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
            team: "Dancing Smarties",
            time: "17:00 - 19:00",
            location:
              "Sporthalle Gertrud Bäumer Realschule Erwinstr. Ecke Schaeffelstr."
          },
          {
            team: "Silver Spirit Dancer",
            time: "19:30 - 21:30",
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
          }
        ],
        thursday: [
          {
            team: "Dancing Smarties",
            time: "17:00 - 19:00",
            location:
              "Sporthalle Gertrud Bäumer Realschule Erwinstr. Ecke Schaeffelstr."
          },
          {
            team: "Silver Spirit Dancer",
            time: "19:30 - 21:30",
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
          Wir wuerden uns riesig freuen dich beim Probetraining begruessen zu
          sehen. Schau einfach in unserem Trainingsplan wann es fuer dich am
          besten passt und melde dich zum Probetraining an und sei schon bald
          ein teil von United Cheer Sports Dortmund.
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
          <PrimaryButton to="" text="Download" />
          <PrimaryButton to="probetraining" text="Probetraining" />
        </div>
      </Aux>
    );
  }
}

export { Trainingsplan };
