import React from "react";
import Layout from "./layout/Layout";
import About from "./About";
import Banner from "./banner";
import EventTypes from "./eventTypes";
import Events from "./events";
import GrowEvent from "./GrowEvent";
import Experiences from "./experinces";
import WriteExperience from "./write-experience";

function Home() {
  return (
    <Layout>
      <Banner />
      <About />
      <EventTypes />
      <Events />
      <GrowEvent />
      <Experiences />
    </Layout>
  );
}

export default Home;
