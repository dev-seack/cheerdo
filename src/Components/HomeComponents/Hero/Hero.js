import React from "react";
import "./Hero.css";
import video from "../../../assets/homeVideo.mp4";
import ReactPlayer from 'react-player'
import poster from "../../../assets/homeVideo-poster.jpeg";
import headline from "../../../assets/united-cheer-sports-schriftzug.svg";
import instagramLogo from "../../../assets/united-cheer-sports-instagram.svg";
import facebookLogo from "../../../assets/united-cheer-sports-facebook.svg";

import { PrimaryButton } from "../../Buttons/PrimaryButton";

const Hero = props => {
  return (
    <div className="HeroContainer">
      <ReactPlayer
        url={video}
        className='VideoBackground'
        width='100%' height='100%'
        playing loop muted
        config={{
          file: {
            attributes: {
              poster: {poster}
            }
          }
        }}
      />
      <div className="InnerHeroContainer">
        <img
          className="HeroHeadline"
          src={headline}
          alt="United Cheer Sports e.V. Dortmund Schriftzug, Cheeleading, Cheerdance, Sport in Dortmund"
        />
        <p className="HeroSubline">
          Cheerleading und Cheerdance sind eigenst&auml;ndige
          Wettkampfsportarten und vereinen Turnen, Akrobatik und Tanz mit
          verschiedenen Schwerpunkten.
        </p>
        <p className="allTogether">Black White Green</p>
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
