import React from "react";
import { PrimaryButton } from "../Components/Buttons/PrimaryButton";

import PageNotFound from "../assets/PageNotFound.svg";

const NotFound = () => (
  <div className="NotFoundContainer">
    <img
      alt="United Cheer Sports e.V. Dortmund - Page Not Found"
      src={PageNotFound}
    />
    <p>Seite nicht gefunden</p>
    <PrimaryButton to="" text="Schnell zurück" />
  </div>
);
export { NotFound };
