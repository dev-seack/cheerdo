import React from "react";

import { Aux } from "../Components/hoc/aux";
import { Hero } from "../Components/HomeComponents/Hero";
import { News } from "../Components/HomeComponents/News";
import { InstagramFeed } from "../Components/HomeComponents/InstagramFeed";

const Home = (props) => {
  return (
    <Aux>
      <Hero />
      <News />
      <InstagramFeed />
    </Aux>
  );
};

export { Home };
