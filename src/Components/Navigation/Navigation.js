import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/united-cheer-sports-logo.svg";
import "./Navigation.css";

const Navigation = (props) => {
  return (
    <div className="NavigationContainer">
      <div className="NavigationInnerContainer">
        <ul className="MainNavigation">
          <li>
            <Link to="/startseite">
              <span data-hover="Startseite">Startseite</span>
            </Link>
          </li>
          <li>
            <Link to="/news">
              <span data-hover="News">News</span>
            </Link>
          </li>
          <li>
            <Link to="/probetraining">
              <span data-hover="Probetraining">Probetraining</span>
            </Link>
          </li>
        </ul>
        <div className="NavigationLogoContainer">
          <img
            alt="United Cheer Sports e.V. Dortmund Logo, Cheeleading, Cheerdance, Sport in Dortmund"
            src={logo}
          />
        </div>
        <ul className="ContactNavigation">
          <li>
            <a href="/startseite#kontakt">
              <span data-hover="Kontakt">Kontakt</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Navigation };
