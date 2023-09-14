import React from "react";
import Layout from "./layout";
import About from "./About";
import EventTypes from "./eventTypes";
import Events from "./events";
import GrowEvent from "./GrowEvent";
import Experiences from "./experinces";
import BannerSection from "./banner-section/BannerSection";

function Home() {
  return (
    <Layout>
      <BannerSection />
      <About />
      <EventTypes />
      <Events />
      <GrowEvent />
      <Experiences />
    </Layout>
  );
}

export default Home;
