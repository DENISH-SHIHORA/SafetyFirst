import React from "react";
import About from "../components/About";
import Facts from "../components/Facts";
import Features from "../components/Features";
import Navbar1 from "../components/Navbar1";
import Subscribe from "../components/Subscribe";
import Team from "../components/Team";

function About1() {
  return (
    <>
      <Navbar1 />
      <About />
      <Facts />
      <Features />
      <Subscribe />
      <Team />
    </>
  );
}

export default About1;
