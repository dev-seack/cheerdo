import React from "react";

import { Aux } from "../Components/hoc/aux";
import { Trainingsplan } from "../Components/Trainingsplan";
import { MapComponent } from "../Components/ProbetrainingComponents/GoogleMaps";
import { SectionHeadline } from "../Components/Text/SectionHeadline";

const Probetraining = (props) => {
  return (
    <Aux>
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
