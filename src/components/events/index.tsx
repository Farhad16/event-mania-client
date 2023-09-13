import React from "react";
import Wrapper from "../Wrapper";
import { useForm, Controller } from "react-hook-form";
import SearchIcon from "@mui/icons-material/Search";
import { motion } from "framer-motion";
import "./Event.css";

function Events() {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    // Handle the search functionality here
    console.log(data.searchQuery);
  };

  const eventStatus = ["all", "ongoing", "upcoming"];

  return (
    <Wrapper
      className="p-12 py-24 flex flex-col items-center gap-6 bg-gray-200"
      id="events"
    >
      <motion.h1
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.25, ease: "easeOut" }}
        className="text-cyan-500 font-bold text-2xl sm:text-5xl text-center sm:mb-0 mb-4"
      >
        Join the event, be part of <br />
        something special
      </motion.h1>
      <motion.div
        className="search-box bg-slate-200 rounded-full px-6 py-3 flex items-center w-full sm:w-1/2"
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.25, ease: "easeOut" }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center">
            <div className="search-icon">
              <SearchIcon />
            </div>
            <Controller
              name="searchQuery"
              control={control}
              defaultValue=""
              render={({ field }: any) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Search"
                  className="search-input"
                />
              )}
            />
            <button type="submit" className="hidden">
              Submit
            </button>
          </div>
        </form>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex flex-row items-center justify-between gap-4 rounded-full text-sm font-semibold bg-gray-300 p-4 box-shadow"
      >
        {eventStatus.map((name) => (
          <motion.div
            className="text-center px-4 py-2 bg-slate-200 rounded-full cursor-pointer capitalize"
            whileHover={{
              backgroundColor: "rgb(226 232 240)",
              transition: { duration: 0.3, ease: "easeInOut" }, // Custom transition properties
            }}
            initial={{ backgroundColor: "#a7c6c7" }}
            key={name}
          >
            {name} Event
          </motion.div>
        ))}
      </motion.div>
    </Wrapper>
  );
}

export default Events;
