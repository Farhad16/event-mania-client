import React from "react";
import Wrapper from "./Wrapper";
import { motion } from "framer-motion";
import CustomeButton from "./ui/CustomButton";

function About() {
  return (
    <Wrapper
      className="flex flex-col items-center text-center gap-3 bg-gray-200 py-24"
      id="about"
    >
      <h3 className="text-cyan-500 font-bold text-xl sm:text-3xl">
        The Art of Exceptional Event Planning
      </h3>
      <motion.h1
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.25, ease: "easeOut" }}
        className="text-green-500 font-bold text-2xl sm:text-5xl"
      >
        Event management turns visions into <br />
        memorable experiences.
      </motion.h1>
      <p className="text-base sm:text-lg mt-2 text-gray-700">
        In event management, every detail matters, crafting lasting moments,
        fostering connections, <br />
        and creating timeless memories
      </p>
      <CustomeButton>Join An Event</CustomeButton>
    </Wrapper>
  );
}

export default About;
