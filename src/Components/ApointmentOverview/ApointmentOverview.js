import React from "react";
import "./ApointmentOverview.css";
import { Aux } from "../hoc/aux";

const ApointmentOverview = (props) => {
  return (
    <Aux>
      <table>
        <tr>
          <th>Wann?</th>
          <th>Was?</th>
        </tr>
        <tr>
          <td>01.01.2020</td>
          <td>
            Silver Smarties nehmen zum ersten mal an der diesjährigen
            Meisterschaft in Hamburg teil
          </td>
        </tr>
        <tr>
          <td>01.01.2020</td>
          <td>Supreme hat einen Auftritt an der Reinoldikirche</td>
        </tr>
        <tr>
          <td>01.01.2020</td>
          <td>Dancing Smarties hat einen Auftritt an der Reinoldikirche</td>
        </tr>
      </table>
    </Aux>
  );
};

export { ApointmentOverview };
