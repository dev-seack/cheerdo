import React from "react";
import "./ContactForm.css";

import { SectionHeadline } from "../../Text/SectionHeadline";
import { Aux } from "../../hoc/aux";

const ContactForm = (props) => {
  return (
    <Aux id="kontakt">
      <SectionHeadline headline="Noch Fragen?">
        Bei offenen Fragen zum Probetraining, Kosten, Mitgliedschaften oder
        aenlichen kannst du uns jederzeit ueber unser Kontaktformular erreichen.
        Wir werden dir so schnell wie moeglich deine Frage beantworten.
      </SectionHeadline>
      <form className="ContactForm ContentContainer" autoComplete="off">
        <div className="FormGroup">
          <label htmlFor="vorname">Vorname*</label>
          <input type="text" name="vorname" id="vorname" required />
        </div>
        <div className="FormGroup">
          <label htmlFor="nachname">Nachname*</label>
          <input type="text" name="nachname" id="nachname" required />
        </div>
        <div className="FormGroup">
          <label htmlFor="email">E-Mail-Adresse*</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="FormGroup">
          <label htmlFor="telefonnummer">Telefonnummer</label>
          <input type="phone" name="telefonnummer" id="telefonnummer" />
        </div>
        <div className="FormGroup FormGroupText">
          <label htmlFor="nachricht">Deine Nachricht an uns*</label>
          <textarea name="nachricht" id="nachricht" required />
        </div>
      </form>
    </Aux>
  );
};

export { ContactForm };
