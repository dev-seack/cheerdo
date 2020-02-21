import React from "react";
import "./ContactForm.css";

import { SectionHeadline } from "../../Text/SectionHeadline";
import { PrimaryButton } from "../../Buttons/PrimaryButton";
import { Aux } from "../../hoc/_aux";

const ContactForm = (props) => {
  return (
    <Aux>
      <div id="kontakt"></div>
      <SectionHeadline headline="Noch Fragen?">
        Bei offenen Fragen zum Probetraining, Kosten, Mitgliedschaften oder
        aenlichen kannst du uns jederzeit ueber unser Kontaktformular erreichen.
        Wir werden dir so schnell wie moeglich deine Frage beantworten.
      </SectionHeadline>
      <form
        action="https://formcarry.com/s/5bEG9QjSBSE"
        method="POST"
        className="ContactForm ContentContainer"
        autoComplete="off"
        accept-charset="UTF-8"
      >
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
        <input type="hidden" name="_gotcha" />
        {/* <!-- use this to prevent spam --> */}
        <PrimaryButton submit text="Absenden" />
      </form>
    </Aux>
  );
};

export { ContactForm };
