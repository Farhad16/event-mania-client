import React from "react";
import { tw } from "twind";
import { css } from "twind/css";
import { Container, Divider } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import useScrollSectionById from "../hooks/useScrollById";
import { pages } from "./Navbar";

const Footer = () => {
  const { scroll } = useScrollSectionById();

  return (
    <div className="bg-gray-700">
      <Container maxWidth="lg">
        <div className="flex flex-col space-y-10">
          <div className="flex flex-col sm:flex-row justify-between gap-8">
            <div className="flex flex-col">
              <h1 className=" font-extrabold pb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#d4a0f5] to-[#ffc3cf] text-[40px]">
                eventMania
              </h1>
              <p className="text-lg">Your dream our mission</p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-3 items-center">
                <LocationOnIcon /> <p>Dhanmondi, Dhaka, Bangladesh</p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <PhoneIcon /> <p>+880175---16</p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <EmailIcon /> <p>techzone@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {pages.map((page: any, idx: any) => (
                <p
                  key={page.name}
                  onClick={() => {
                    scroll(page.id);
                  }}
                  className="cursor-pointer"
                >
                  {page.name}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Divider className="bg-white bg-opacity-50 w-full h-[2px] " />
            <small>@Copyright techzone {new Date().getFullYear()}</small>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
