import React from "react";
import { tw } from "twind";
import { css } from "twind/css";
import { Container, Divider } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import useScrollSectionById from "../hooks/useScrollById";
import CelebrationIcon from "@mui/icons-material/Celebration";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";

const AlterFooter = () => {
  return (
    <Wrapper className="bg-[#1e0a3c] text-white flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
      <div className="flex flex-col">
        <Link to="/">
          <div className="flex flex-row items-center">
            <CelebrationIcon
              className="text-[#50f492]"
              sx={{ fontSize: "40px" }}
            />
            <h1 className="pt-1 fontt text-transparent bg-clip-text bg-gradient-to-r from-[#0affa9] to-[#0aefff] font-extrabold text-xl">
              EventMania
            </h1>
          </div>
        </Link>
        <p className="text-md">
          Turning your visions into reality, event by event.
        </p>
      </div>

      <small>@Copyright eventMania {new Date().getFullYear()}</small>
    </Wrapper>
  );
};

export default AlterFooter;
