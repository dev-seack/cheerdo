import React from "react";

import { Aux } from "../Components/hoc/_aux";

const Impressum = props => {
  return (
    <Aux maxContainer>
      <div style={{ marginTop: "200px" }}>
        <h1>Impressum</h1>
        <ul style={{ listStyle: "none", marginTop: "50px" }}>
          <li>United Cheer Sports e.V.</li>
          <li>c/o Elisabete Santos Lopez</li>
          <li>Schüruferstr. 301 44287 Dortmund</li>
          <li>Mail: info@united-cheer-sports.de</li>
          <li>
            <p>Vorstand:</p>
            <p>Leonie Langkabel , 1. Vorsitzende</p>
            <p>Kirsten Lorenzo , 2. Vorsitzende</p>
            <p>Elisabete Santos Lopez , Kassenwartin</p>
          </li>
          <li>
            <p>Angemeldet im Vereinsregister Dortmund VR-Nr. 6454 Finanzamt</p>
            <p>
              Dortmund Ost Steuernr. 314/5702/8127 Mitglied des CCVNRW e. V.
            </p>
          </li>
        </ul>
      </div>
    </Aux>
  );
};

export { Impressum };
