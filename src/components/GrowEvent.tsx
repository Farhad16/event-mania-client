import React from "react";
import Wrapper from "./Wrapper";
import grow from "../assets/v2.jpg";
import { motion } from "framer-motion";

function GrowEvent() {
  return (
    <Wrapper className="bg-[#ebf8f8] grid grid-cols-1 sm:grid-cols-2 py-24 gap-4 sm:gap-8">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, easing: "easeOut", delay: 0.25 }}
        className="flex flex-col gap-6"
      >
        <h1 className="text-cyan-500 font-bold text-2xl sm:text-5xl">
          Elevate Your Event Growth
        </h1>
        <p className="text-base sm:text-[18px]">
          Discover a comprehensive suite of event management tools and
          technology to kickstart and sustain your event business. We provide
          the resources you need to expand and achieve success at every stage.
        </p>
      </motion.div>
      <motion.img
        src={grow}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, easing: "easeOut", delay: 0.25 }}
        className="w-full rounded-xl object-cover"
      />
    </Wrapper>
  );
}

export default GrowEvent;
