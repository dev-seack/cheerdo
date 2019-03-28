import React from "react";

import { Aux } from "../Components/hoc/aux";
import { Trainingsplan } from "../Components/Trainingsplan";
import { MapComponent } from "../Components/ProbetrainingComponents/Maps";
import { FormComponent } from "../Components/ProbetrainingComponents/FormComponent";
import { SectionHeadline } from "../Components/Text/SectionHeadline";

const Probetraining = (props) => {
  return (
    <Aux>
      <SectionHeadline headline="zum probetraining anmelden">
        Wir würden uns riesig freuen Dich beim Probetraining begrüßen zu dürfen.
        Schau einfach in userem Trainingsplan wann es für dich am betsen passt
        und melde dich zum Probetraining an. Sei schon bald ein teil von United
        Cheer Sports Dortmund.
      </SectionHeadline>
      <FormComponent />
      <SectionHeadline headline="Hier sind wir">
        Hier kannst du uns finden. Auf dem Trainingsplan weiter unten siehst du
        die jeweiligen Teams und ihre Trainingsorte. Du kannst natürlich auch
        jederzeit Fragen, welche Mannschaft, wo das naechste Training hat.
      </SectionHeadline>
      <MapComponent />
      <Trainingsplan />
    </Aux>
  );
};

export { Probetraining };
