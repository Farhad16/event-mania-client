import React from "react";
import Layout from "./layout/Layout";
import About from "./About";
import Banner from "./banner";
import EventTypes from "./eventTypes";

function Home() {
  return (
    <Layout>
      <Banner />
      <About />
      <EventTypes />
    </Layout>
  );
}

export default Home;
