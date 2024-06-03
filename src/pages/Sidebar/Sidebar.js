import React, { useState } from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOptions from "./SidebarOptions";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreIcon from "@mui/icons-material/More";
import DoneIcon from "@mui/icons-material/Done";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar, Button, Divider, IconButton, ListItemIcon, Menu, MenuItem } from "@mui/material";

const Sidebar = ({handleLogout , user}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar_twitterIcon" />
      <SidebarOptions active Icon={HomeIcon} text="Home" />
      <SidebarOptions active Icon={SearchIcon} text="Explore" />
      <SidebarOptions active Icon={NotificationsIcon} text="Notifications" />
      <SidebarOptions active Icon={MailOutlineIcon} text="Messages" />
      <SidebarOptions active Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOptions active Icon={ListAltIcon} text="Lists" />
      <SidebarOptions active Icon={PermIdentityIcon} text="Profile" />
      <SidebarOptions active Icon={MoreIcon} text="More" />

      <Button variant="outlined" className="sidebar_tweet">
        Tweet
      </Button>

      <div className="Profile_info">
        <Avatar src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" />
        <div className="user_info">
          <h4>Prafful Awadhiya</h4>
          <h5>@Prafful</h5>
        </div>
        <IconButton
          size="small"
          sx={{ ml: 2 }}
          aria-controls={openMenu ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openMenu ? "true" : undefined}
          onClick={handleClick}
        >
          <MoreHorizIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={openMenu}
          onClick={handleClose}
          onClose={handleClose}
        >
          <MenuItem className="Profile_info1">
            <Avatar src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" />
            <div className="user_info subUser_info">
              <div className="user_info">
                <h4>Prafful Awadhiya</h4>
                <h5>@Prafful</h5>
              </div>
              <ListItemIcon className="done-icon"><DoneIcon /></ListItemIcon>
            </div>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>Add an existing account</MenuItem>
          <MenuItem onClick={handleLogout}>Log out @AwadhiyaPrafful</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Sidebar;
