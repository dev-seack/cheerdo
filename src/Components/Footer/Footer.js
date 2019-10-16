import React from "react";
import "./Footer.css";

import { SafeLink } from "../SafeLink";

import footerlogo from "../../assets/united-cheer-sports-dortmund-footer-logo.png";
import instagramLogo from "../../assets/united-cheer-sports-instagram.svg";
import facebookLogo from "../../assets/united-cheer-sports-facebook.svg";
import dosbLogo from "../../assets/united-cheer-sports-dortmund-dosb-mitglied.svg";
import ccvdLogo from "../../assets/united-cheer-sports-dortmund-ccvd-mitglied.svg";

const Footer = (props) => {
  const year = new Date().getFullYear();
  return (
    <div className="Footer">
      <img
        className="FooterLogo"
        src={footerlogo}
        alt="United Cheer Sports e.V. Dortmund Schriftzug, Cheeleading, Cheerdance, Sport in Dortmund"
      />
      <div className="ContentContainer">
        <div className="FullContainer FooterNavigation">
          <SafeLink to="/startseite" target="_self">
            <span data-hover="STARTSEITE">STARTSEITE</span>
          </SafeLink>
          <SafeLink to="/news" target="_self">
            <span data-hover="NEWS">NEWS</span>
          </SafeLink>
          <SafeLink to="/probetraining" target="_self">
            <span data-hover="PROBETRAINING">PROBETRAINING</span>
          </SafeLink>
          <SafeLink to="/impressum" target="_self">
            <span data-hover="IMPRESSUM">IMPRESSUM</span>
          </SafeLink>
          <SafeLink to="/datenschutzerklaerung" target="_self">
            <span data-hover="DATENSCHUTZERKLÄRUNG">DATENSCHUTZERKLÄRUNG</span>
          </SafeLink>
        </div>
        <div className="SportbundContainer">
          <img
            src={dosbLogo}
            alt="united-cheer-sports-dortmund-dosb-mitglied"
          />
          <img
            src={ccvdLogo}
            alt="united-cheer-sports-dortmund-ccvd-mitglied"
          />
        </div>
        <div className="FooterSocialContainer">
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
        <div className="HalfContainer FooterCopyright">
          <p>Copyright {year} United Cheer Sports e.V. Dortmund</p>
        </div>
        <div className="HalfContainer FooterCopyright">
          <p>Made with Love in Germany by Legarti</p>
        </div>
      </div>
    </div>
  );
};

export { Footer };
