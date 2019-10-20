import React from "react";
import { Aux } from "../../hoc/_aux";
import { PrimaryButton } from "../../Buttons/PrimaryButton";
import "../../HomeComponents/ContactForm";
import "./FormComponent.css";

import dateFormat from "dateformat";

const FormComponent = (props) => {
  let date = new Date();
  date.setMonth(date.getMonth() - 12 * 5);

  const minBirthDate = dateFormat(date, "dd.mm.yyyy");

  return (
    <Aux isContentContainer>
      <p className="importantMessage">
        Wir moechten Sie/Dich bitten den Antrag auszufuellen und Unterschrieben
        beim Probetraining mitzubringen. Der Antrag wird nach dem Ausfuellen als
        PDF erstellt und kann heruntergeladen oder ausgedruckt werden.
      </p>
      <p>
        Hiermit beantrage ich für mich / mein Kind die Teilnahme am kostenlosen
        Probetraining des United Cheer Sports e.V. Die Dauer des Probetrainings
        entspricht 4 Trainingseinheiten. Zum ersten aktiven Probetraining ist
        dieser Antrag unterschrieben (bei minderjährigen durch einen
        Erziehungsberechtigten) beim Trainer anzugeben.
      </p>

      <form method="POST">
        <div className="FormGroup">
          <label htmlFor="childsFirstname">Vorname des Kindes</label>
          <input
            type="text"
            name="childsFirstname"
            id="childsFirstname"
            required
          />
        </div>
        <div className="FormGroup">
          <label htmlFor="childsLastname">Name des Kindes</label>
          <input
            type="text"
            name="childsLastname"
            id="childsLastname"
            required
          />
        </div>
        <div className="FormGroup Quarter">
          <label htmlFor="birthday">Geboren am</label>
          <input
            type="date"
            name="birthday"
            id="birthday"
            max={minBirthDate}
            required
          />
        </div>
        <div className="FormGroup Quarter">
          <label htmlFor="gender">Geschlecht</label>
          <div className="selectWrapper">
            <select name="gender" id="gender" required>
              <option value="female">Weiblich</option>
              <option value="male">Männlich</option>
            </select>
          </div>
        </div>
        <div className="FormGroup Half">
          <label htmlFor="team">Wähle dein team</label>
          <div className="selectWrapper">
            <select name="team" id="team" required>
              <option value="cheerleading">Cheerleading</option>
              <option value="cheerdancing">Cheerdancing</option>
            </select>
          </div>
        </div>

        <div className="FormGroup Half">
          <label htmlFor="email">E-Mail Adresse</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="FormGroup Half">
          <label htmlFor="telefonnummer">Telefonnummer (optional)</label>
          <input
            type="phone"
            name="telefonnummer"
            id="telefonnummer"
            required
          />
        </div>
        <div className="FormGroup Full">
          <label htmlFor="appointment">
            Wann können wir uns auf dich freuen?
          </label>
          <input type="text" name="appointment" id="appointment" required />
        </div>
        <div className="FormGroup FormGroupText">
          <label htmlFor="message">Haben Sie noch Fragen</label>
          <textarea name="message" id="message" />
        </div>
        <PrimaryButton submit text="Herunterladen" />
      </form>
    </Aux>
  );
};

export { FormComponent };
