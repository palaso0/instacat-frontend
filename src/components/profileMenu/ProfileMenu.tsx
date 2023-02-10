import React from "react";
import { Avatar, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
interface ProfileMenuProps {
  anchorEl?: HTMLElement | null;
  setAnchorEl?: any;
}

export const ProfileMenu: React.FC = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <IconButton sx={{ p: 0, ml: 2 }} onClick={handleOpenUserMenu}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
      </IconButton>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleCloseUserMenu}>
          <Link
            to="/profile"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography textAlign="center">Profile</Typography>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography textAlign="center">Settings</Typography>
        </MenuItem>
        <MenuItem onClick={handleCloseUserMenu}>
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography textAlign="center">Logout</Typography>
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
};
