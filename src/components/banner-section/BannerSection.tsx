import React from "react";
import "./Banner.css";
import Wrapper from "../Wrapper";
import { motion } from "framer-motion";

function BannerSection() {
  return (
    <Wrapper className="bannerbg flex flex-col items-center text-center justify-center  gap-3">
      <h3 className="text-[#ffffff] font-bold text-xl sm:text-3xl">
        Welcome to EventMania
      </h3>
      <motion.h1
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.25, ease: "easeOut" }}
        className="text-green-500 font-bold text-2xl sm:text-5xl"
      >
        Transform your events into a profitable
        <br /> business or volunteer program.
      </motion.h1>
      <p className="text-base sm:text-lg text-gray-100 mt-2 font-medium">
        EventMania attracts millions of people seeking live experiences every
        day,
        <br />
        giving you access to the largest events marketplace in the world.
      </p>
    </Wrapper>
  );
}

export default BannerSection;
