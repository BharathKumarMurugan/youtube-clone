import React from "react";
import "./header.css";
import MenuIcon from "@material-ui/icons/Menu";
// import YouTubeIcon from "@material-ui/icons/YouTube";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <MenuIcon />
                <img
                    className="header_logo"
                    alt="YouTube"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/512px-YouTube_Logo_%282013-2017%29.svg.png"
                />
            </div>
            <div className="header_input">
                <input placeholder="Search" type="text" />
                <SearchIcon className="header_searchButton" />
            </div>
            <div className="header_right">
                <VideoCallIcon className="header_icon" />
                <AppsIcon className="header_icon" />
                <NotificationsIcon className="header_icon" />
                <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/22911914?v=4" />
            </div>
        </div>
    );
}

export default Header;
