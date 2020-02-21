import React from "react";

import { Aux } from "../Components/hoc/_aux";
import { Trainingsplan } from "../Components/Trainingsplan";
import { MapComponent } from "../Components/ProbetrainingComponents/Maps";
import { FormComponent } from "../Components/ProbetrainingComponents/FormComponent";
import { SectionHeadline } from "../Components/Text/SectionHeadline";

const Probetraining = props => {
  return (
    <Aux maxContainer>
      <SectionHeadline headline="anmelden">
        Wir w&uuml;rden uns freuen dich bei einem Probetraining begr&uuml;ßen zu
        d&uuml;rfen. Sei schon bald Teil von United Cheer Sports e.V. Dortmund.
      </SectionHeadline>
      <FormComponent />
      <SectionHeadline headline="Hier sind wir">
        Auf dem Trainingsplan weiter unten siehst du die jeweiligen Teams und
        ihre Trainingsorte. Bei Fragen kannst du dich jederzeit &uuml;ber das
        Kontaktformular melden.
      </SectionHeadline>
      <MapComponent />
      <Trainingsplan />
    </Aux>
  );
};

export { Probetraining };
