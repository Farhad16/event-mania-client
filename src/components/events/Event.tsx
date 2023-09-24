import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CustomButton from "../ui/CustomButton";

function Event({ name, tagline, img, id }: any) {
  return (
    <motion.div
      className="box-shadow flex flex-col gap-2 p-6 bg-blue-100 rounded-xl group transition duration-300 ease-in-out"
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
      <div className="flex justify-between items-center mt-1">
        <CustomButton className="px-4 text-sm">Register Now</CustomButton>
        <Link to={`/event/${id}`}>
          <span className="transition duration-300 ease-in-out cursor-pointer text-right text-sm font-medium text-blue-700">
            See Details
          </span>
        </Link>
      </div>
    </motion.div>
  );
}

export default Event;
