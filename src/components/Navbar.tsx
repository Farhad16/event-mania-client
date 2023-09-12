import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CelebrationIcon from "@mui/icons-material/Celebration";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";

import { css, tw } from "twind/css";
import useScrollSectionById from "../hooks/useScrollById";
import Wrapper from "./Wrapper";

export const pages = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Events", id: "events" },
  { name: "Experience", id: "experience" },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<any>(null);
  const [scroll, setScroll] = React.useState<any>(false);
  const { scroll: scrollSection } = useScrollSectionById();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  return (
    <AppBar
      position="sticky"
      className={tw(
        css({
          "&.MuiAppBar-root": {
            background: !scroll ? "rgba(0, 0, 0, 0)" : "rgba(241, 245, 249, 1)",
            boxShadow: scroll ? "rgba(0, 0, 0, 0.2) 0px 10px 9px" : "none",
            minHeight: "65px",
            transition: "all 0.6s ease;",
            // top: "60px",
            color: "black",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
          },
        }),
        `${scroll ? "py-0" : "py-6"}`
      )}
    >
      <Wrapper
        maxWidth="lg"
        className="flex flex-row justify-between items-center text-black text-md"
      >
        <div className="flex flex-row items-center">
          <CelebrationIcon
            className="text-[#ff4d70]"
            sx={{ fontSize: "30px" }}
          />
          <h1 className="pt-1 fontt text-transparent bg-clip-text bg-gradient-to-r from-[#ff4a4a] to-[#b611fc] font-bold text-2xl">
            EventMania
          </h1>
        </div>
        <div>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              className="outline-none focus:outline-none"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => {
                    handleCloseNavMenu();
                    scrollSection(page.id);
                  }}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
                alignItems: "center",
              },
            }}
          >
            {pages.map((page) => (
              <p
                key={page.name}
                className="px-4 text-md hover:text-transparent hover:text-md bg-clip-text bg-gradient-to-r from-[#18c8fd] to-purple-600 transition duration-300 ease-in-out cursor-pointer"
                onClick={() => {
                  handleCloseNavMenu();
                  scrollSection(page.id);
                }}
              >
                {page.name}
              </p>
            ))}
            <Typography className="py-2 px-4 !text-md bg-gradient-to-r to-[#9c0dda] from-[#fb74ae]  rounded-full text-white !ml-24">
              Contact Us
            </Typography>
          </Box>
        </div>
      </Wrapper>
    </AppBar>
  );
}
export default Navbar;
