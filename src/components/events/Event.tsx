import React from "react";
import { motion } from "framer-motion";

function Event({ name, tagline, img }: any) {
  return (
    <motion.div
      className="box-shadow flex flex-col gap-2 p-8 bg-blue-100 rounded-xl group transition duration-300 ease-in-out"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src={img}
        alt="name"
        className="w-full h-[170px] rounded-lg transition duration-300 ease-in-out group-hover:scale-[1.02]"
      />
      <p className="text-green-500 font-semibold text-lg">{name}</p>
      <p className="text-sm font-medium">{tagline}</p>
    </motion.div>
  );
}

export default Event;
