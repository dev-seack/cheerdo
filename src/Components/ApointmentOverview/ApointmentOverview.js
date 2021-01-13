import React from "react";
import "./ApointmentOverview.css";
import { Aux } from "../hoc/_aux";

const ApointmentOverview = props => {
  return (
    <Aux>
      <p>Leider findet aufgrund der aktuellen Situation mit COVID-19 derzeit kein Präsenztraining statt. Unsere Trainer ermöglichen unseren Mitgliedern derweil Trainingsalternativen über Online Plattformen, Challenges, Wochenaufgaben etc. Anfragen für zukünftige Probetrainings sind weiterhin möglich! Sonstige Termine für die kommende Saison sind derzeit noch nicht vorhersehbar. Wir informieren euch bei Änderungen.</p>
      {/* <table>
        <tr>
          <th>Wann?</th>
          <th>Was?</th>
        </tr>
        <tr>
          <td>28.03.2020</td>
          <td>Deutsche Meisterschaft Sachsen Arena in Riesa</td>
        </tr>
        <tr>
          <td>23.05.2020 & 24.05.2020</td>
          <td>
            ELITE Cheerleading Championship (ECC) im Movie Park in Bottrop
          </td>
        </tr>
        <tr>
          <td>30.05.2020 & 31.05.2020</td>
          <td>
            ELITE Cheerleading Championship (ECC) im Movie Park in Bottrop
          </td>
        </tr>
        <tr>
          <td>20.06.2020</td>
          <td>
            Summer All Level Championship West in der Mitsubishi Electric Hall
            in D&uuml;sseldorf
          </td>
        </tr>
      </table> */}
    </Aux>
  );
};

export { ApointmentOverview };
