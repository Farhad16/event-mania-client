import { Container } from "@mui/material";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { tw } from "twind";
import { css } from "twind/css";
import SingleFeedback from "./Feedback";
import { feedbacks } from "./static.data";
import { motion } from "framer-motion";
import Wrapper from "../Wrapper";

const Experiences = () => {
  return (
    <Wrapper className="flex flex-col gap-6 sm:gap-12 py-24" id="experiences">
      <motion.h2
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.25, ease: "easeOut" }}
        className="text-black font-bold text-2xl sm:text-5xl text-center sm:mb-0 mb-4"
      >
        Participant's <span className="text-cyan-500">Experiences</span>
      </motion.h2>
      <div>
        <Swiper
          autoHeight={true}
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 2000,
          }}
          spaceBetween="10"
          pagination={{ clickable: true, el: ".slider-page" }}
          className={tw(
            css({
              "& .swiper-scrollbar": {
                "@apply": "hidden",
              },
            })
          )}
          loop
          breakpoints={{
            600: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {feedbacks.map((feedback, idx) => (
            <SwiperSlide key={idx}>
              <SingleFeedback {...feedback} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className={tw(
            "slider-page text-center mt-4 space-x-2 flex flex-row items-center justify-center"
          )}
        />
      </div>
    </Wrapper>
  );
};

export default Experiences;
