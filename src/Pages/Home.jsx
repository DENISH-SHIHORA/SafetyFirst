import React from "react";
import Features from "../components/Features";
import Feature from "../components/Feature";
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Services from "../components/Services";
import Subscribe from "../components/Subscribe";
import Facts from "../components/Facts";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import Blog from "../components/Blog";

function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Features />
      <About />
      <Services />
      <Facts />
      <Feature />
      <Subscribe />
      <Team />
      <Testimonial />
      <Blog />
    </>
  );
}

export default Home;
