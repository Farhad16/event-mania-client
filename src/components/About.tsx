import React from "react";
import Wrapper from "./Wrapper";

function About() {
  return (
    <div className="py-12 bg-slate-100">
      <Wrapper className="flex flex-col items-center text-center gap-3">
        <h3 className="text-cyan-500 font-bold text-xl sm:text-3xl">
          The Art of Exceptional Event Planning
        </h3>
        <h1 className="text-green-500 font-bold text-2xl sm:text-5xl">
          Event management turns visions into <br />
          memorable experiences.
        </h1>
        <p className="text-base sm:text-lg mt-2 text-gray-700">
          In event management, every detail matters, crafting lasting moments,
          fostering connections, <br />
          and creating timeless memories
        </p>
        <button className="mt-2 text-white transition duration-300 ease-in-out outline-none focus:outline-none hover:scale-[1.03] pt-2 pb-3 px-6 !text-md bg-gradient-to-r from-[#4e86f7] to-[#bf10f4] rounded-full font-semibold">
          Join An Event
        </button>
      </Wrapper>
    </div>
  );
}

export default About;
