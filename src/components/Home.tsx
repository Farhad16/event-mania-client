import React from "react";
import Layout from "./layout/Layout";
import About from "./About";
import Banner from "./banner";

function Home() {
  return (
    <Layout>
      <Banner />
      <About />
    </Layout>
  );
}

export default Home;
