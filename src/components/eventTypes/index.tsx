import React from "react";
import Wrapper from "../Wrapper";
import { eventCategory } from "./static.data";
import eventT from "../../assets/eventT.png";
import { motion } from "framer-motion";
import CustomButton from "../ui/CustomButton";

function EventTypes() {
  return (
    <Wrapper
      id="events"
      className="bg-gray-50 flex flex-col items-center justify-between gap-6 sm:gap-12 sm:!px-[100px] py-24 overflow-hidden"
    >
      <motion.h1
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.25, ease: "easeOut" }}
        className="text-black font-bold text-2xl sm:text-5xl text-center sm:mb-0 mb-4"
      >
        A scalable management system built
        <br /> to <span className="text-green-500">support growth</span>
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-24 gap-6">
        <motion.img
          src={eventT}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, easing: "easeOut", delay: 0.25 }}
          className="w-full rounded-xl object-cover"
        />
        <div className="flex flex-col gap-8">
          {eventCategory.map((event: any, i: number) => (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, easing: "easeOut", delay: 0.25 }}
              className="flex flex-col gap-1"
              key={event.name}
            >
              {event.icon}
              <p className="text-xl text-green-600 font-bold">{event.name}</p>
              <p className="text-sm font-medium">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <CustomButton>Create Your Event</CustomButton>
    </Wrapper>
  );
}

export default EventTypes;
