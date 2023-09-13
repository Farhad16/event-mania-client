import React from "react";
import Wrapper from "../Wrapper";
import { eventCategory } from "./static.data";
import eventT from "../../assets/eventT.png";

function EventTypes() {
  return (
    <Wrapper className="bg-gray-200 flex flex-col items-center justify-between gap-6 sm:gap-12 sm:!px-[100px] py-12">
      <h1 className="text-purple-800 font-bold text-2xl sm:text-5xl text-center sm:mb-0 mb-4">
        A scalable event management system built
        <br /> to support growth
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-24 gap-6">
        <img src={eventT} className="w-full rounded-xl object-cover" />
        <div className="flex flex-col gap-8">
          {eventCategory.map((event: any, i: number) => (
            <div className="flex flex-col gap-1" key={event.name}>
              {event.icon}
              <p className="text-xl text-cyan-600 font-semibold">
                {event.name}
              </p>
              <p className="text-sm font-medium">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
      <button className="mt-2 text-white transition duration-300 ease-in-out outline-none focus:outline-none hover:scale-[1.03] pt-2 pb-3 px-6 !text-md bg-gradient-to-r from-[#4e86f7] to-[#bf10f4] rounded-full font-semibold">
        Create Your Event
      </button>
    </Wrapper>
  );
}

export default EventTypes;
