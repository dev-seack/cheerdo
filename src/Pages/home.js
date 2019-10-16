import React from "react";

import { Aux } from "../Components/hoc/aux";
import { Hero } from "../Components/HomeComponents/Hero";
import { News } from "../Components/HomeComponents/News";
import { InstagramFeed } from "../Components/HomeComponents/InstagramFeed";
import { Teams } from "../Components/HomeComponents/Teams";
import { Trainingsplan } from "../Components/Trainingsplan";
import { ContactForm } from "../Components/HomeComponents/ContactForm";

const Home = (props) => {
  return (
    <Aux>
      <Hero />
      <Aux maxContainer>
        <News />
      </Aux>
      <InstagramFeed />
      <Aux maxContainer>
        <Teams />
        <Trainingsplan />
        <ContactForm />
      </Aux>
    </Aux>
  );
};

export { Home };
