import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import logo from "../../assets/united-cheer-sports-logo.svg";
import "./Navigation.css";

// Routes - Pages
import { Home } from "../../Pages/home";

const Navigation = (props) => {
  return (
    <Router>
      <div className="NavigationContainer">
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
            <Link to="/startseite#kontakt">
              <span data-hover="Kontakt">Kontakt</span>
            </Link>
          </li>
        </ul>
      </div>
      <Route exact component={Home} path="/" />
      <Route component={Home} path="/startseite" />
    </Router>
  );
};

export { Navigation };
