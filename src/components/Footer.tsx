import CelebrationIcon from "@mui/icons-material/Celebration";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { Divider } from "@mui/material";
import useScrollSectionById from "../hooks/useScrollById";
import { pages } from "./Navbar";
import Wrapper from "./Wrapper";

const Footer = () => {
  const { scroll } = useScrollSectionById();

  return (
    <Wrapper className="bg-[#1e0a3c] text-white flex flex-col gap-4 sm:gap-8 py-10">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <CelebrationIcon
              className="text-[#50f492]"
              sx={{ fontSize: "40px" }}
            />
            <h1 className="pt-1 fontt text-transparent bg-clip-text bg-gradient-to-r from-[#0affa9] to-[#0aefff] font-extrabold text-4xl">
              EventMania
            </h1>
          </div>
          <p className="text-lg">
            Turning your visions into reality, event by event.
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-wrap text-sm">
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
        <div className="flex flex-col gap-2 text-sm">
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
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <Divider className="bg-white bg-opacity-50 w-full h-[2px]" />
        <small>@Copyright eventMania {new Date().getFullYear()}</small>
      </div>
    </Wrapper>
  );
};

export default Footer;
