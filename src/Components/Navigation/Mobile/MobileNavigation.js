import React from "react";
import { Enc } from "../../hoc/enc";
import "./MobileNavigation.css";
import menuButton from "../../../assets/mobile/united-cheer-sports-mobile-menu-toggle-button.svg";
import closeButton from "../../../assets/mobile/united-cheer-sports-mobile-menu-close-button.svg";
import logo from "../../../assets/united-cheer-sports-logo.svg";
import { SafeLink } from "../../SafeLink";

//icons
import home from "../../../assets/mobile/united-cheer-sports-mobile-menu-home.svg";
import news from "../../../assets/mobile/united-cheer-sports-mobile-menu-news.svg";
import training from "../../../assets/mobile/united-cheer-sports-mobile-menu-training.svg";
import contact from "../../../assets/mobile/united-cheer-sports-mobile-menu-contact.svg";

import instagramLogo from "../../../assets/united-cheer-sports-instagram.svg";
import facebookLogo from "../../../assets/united-cheer-sports-facebook.svg";

class MobileNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false
    };
  }

  toggleMenu = () => {
    const curMenuState = this.state.openMenu;
    document.body.classList.toggle("openMenuBody");

    this.setState({ openMenu: !curMenuState });
  };

  render() {
    return (
      <Enc>
        <div
          className={
            this.state.openMenu
              ? "openMenu MobileNavigationContainer"
              : "MobileNavigationContainer"
          }
        >
          <img
            className="Logo"
            src={logo}
            alt="united-cheer-sports dortmund, cheerleader, cheerdancer,cheerleading,sport in dortmund"
          />
          <ul className="MenuItemContainer">
            <SafeLink to="startseite">
              <li className="MenuItem">
                <img
                  src={home}
                  className="MenuItemIcon"
                  alt="united-cheer-sports dortmund, cheerleader, cheerdancer,cheerleading,sport in dortmund"
                />
                <span className="MenuItemName">Startseite</span>
              </li>
            </SafeLink>
            <SafeLink to="news">
              <li className="MenuItem">
                <img
                  src={news}
                  className="MenuItemIcon"
                  alt="united-cheer-sports dortmund, cheerleader, cheerdancer,cheerleading,sport in dortmund"
                />
                <span className="MenuItemName">News</span>
              </li>
            </SafeLink>
            <SafeLink to="probetraining">
              <li className="MenuItem">
                <img
                  src={training}
                  className="MenuItemIcon"
                  alt="united-cheer-sports dortmund, cheerleader, cheerdancer,cheerleading,sport in dortmund"
                />
                <span className="MenuItemName">Probetraining</span>
              </li>
            </SafeLink>
            <SafeLink to="startseite#contact">
              <li className="MenuItem">
                <img
                  src={contact}
                  className="MenuItemIcon"
                  alt="united-cheer-sports dortmund, cheerleader, cheerdancer,cheerleading,sport in dortmund"
                />
                <span className="MenuItemName">Kontakt</span>
              </li>
            </SafeLink>
          </ul>
        </div>
        <div
          className={
            this.state.openMenu
              ? "openMenu MobileNavigationToggle"
              : "MobileNavigationToggle"
          }
          onClick={this.toggleMenu}
        >
          <img
            className="ToggleButton"
            src={this.state.openMenu ? closeButton : menuButton}
            alt="united-cheer-sports-mobile-menu-toggle-button"
          />
          <div className="SocialContainer">
            <a
              href="https://www.instagram.com/unitedcheersports_cheerleader"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramLogo}
                alt="United Cheer Sports e.V. Dortmund Schriftzug, Cheeleading, Cheerdance, Sport in Dortmund"
              />
            </a>
            <a
              href="https://www.facebook.com/UnitedCheerSports/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebookLogo}
                alt="United Cheer Sports e.V. Dortmund Schriftzug, Cheeleading, Cheerdance, Sport in Dortmund"
              />
            </a>
          </div>
        </div>
        <div
          className={
            this.state.openMenu
              ? "openMenu MobileNavigationAccent"
              : "MobileNavigationAccent"
          }
        />
      </Enc>
    );
  }
}

export { MobileNavigation };
