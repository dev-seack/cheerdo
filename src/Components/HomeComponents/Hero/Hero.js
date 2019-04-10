import React from "react";
import "./Hero.css";
import video from "../../../assets/homeVideo.mp4";
import headline from "../../../assets/united-cheer-sports-schriftzug.svg";
import instagramLogo from "../../../assets/united-cheer-sports-instagram.svg";
import facebookLogo from "../../../assets/united-cheer-sports-facebook.svg";

import { PrimaryButton } from "../../Buttons/PrimaryButton";

const Hero = (props) => {
  return (
    <div className="HeroContainer">
      <div className="VideoBackground">
        <video loop muted autoPlay>
          <source src={video} type="video/mp4" />
          Dein Browser unterstuetzt keine Videos
        </video>
      </div>
      <div className="InnerHeroContainer">
        <img
          className="HeroHeadline"
          src={headline}
          alt="United Cheer Sports e.V. Dortmund Schriftzug, Cheeleading, Cheerdance, Sport in Dortmund"
        />
        <p className="HeroSubline">
          Cheerleading und Cheerdance sind selbstst&auml;ndige
          Wettkampfsportarten und vereinen Turnen, Akrobatik und Tanz sowie
          Anfeuerungsrufe.
        </p>
        <p className="allTogether">All Together</p>
        <PrimaryButton text="werde teil von ucs" to="probetraining" />
      </div>
      <div className="HeroSocialContainer">
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
  );
};

export { Hero };
