import React from "react";
import Wrapper from "./Wrapper";
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import logo from "../assets/logo.png";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LanguageIcon from "@mui/icons-material/Language";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function NavTop() {
  const [anchorElUser, setAnchorElUser] = React.useState<any>(null);
  const user = false;

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Wrapper
      maxWidth="lg"
      className="flex flex-row justify-between items-center bg-slate-100 min-h-[60px] w-full overflow-hidden text-sm"
    >
      <img src={logo} alt="logo" className="w-15 h-10" />
      <div className="sm:flex hidden flex-row items-center gap-4">
        <p className="flex flex-row gap-[2px] items-center">
          <SupportAgentIcon sx={{ fontSize: "16px" }} />
          <span>Support</span>
        </p>
        <p className="flex flex-row gap-[2px] items-center">
          <LanguageIcon sx={{ fontSize: "16px" }} />
          <span>Languages</span>
        </p>
      </div>
      {!user ? (
        <div className="flex flex-row items-center gap-4 font-medium">
          <p>Login</p>/ <p>Register</p>
        </div>
      ) : (
        <Tooltip title="Open settings">
          <IconButton
            onClick={handleOpenUserMenu}
            className="outline-none focus:outline-none p-0"
          >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
      )}
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Wrapper>
  );
}

export default NavTop;
