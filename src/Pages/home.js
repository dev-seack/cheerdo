import React from "react";

import { Aux } from "../Components/hoc/aux";
import { Hero } from "../Components/HomeComponents/Hero";
import { News } from "../Components/HomeComponents/News";
import { InstagramFeed } from "../Components/HomeComponents/InstagramFeed";
import { Teams } from "../Components/HomeComponents/Teams";
import { Trainingsplan } from "../Components/Trainingsplan";

const Home = (props) => {
  return (
    <Aux>
      <Hero />
      <News />
      <InstagramFeed />
      <Teams />
      <Trainingsplan />
    </Aux>
  );
};

export { Home };
