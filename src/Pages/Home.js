import React from "react";
import Featured from "../Components/Featured";
import Hero from "../Components/Hero";
import { Recent } from "../Components/Recent";
import Reward from "../Components/Reward";
import Location from "../Components/Location";
import Team from "../Components/Team";

function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Recent />
      <Reward />
      <Location />
      <Team />
    </>
  );
}

export default Home;
