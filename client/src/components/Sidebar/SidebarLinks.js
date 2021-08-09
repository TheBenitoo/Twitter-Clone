import React from 'react'

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

export const SidebarLinks = [
    {
        title: "Home",
        icon: <HomeIcon/>,
        link: "/home"
    },
    {
        title: "Search",
        icon: <SearchIcon/>,
        link: "/search"
    },
    {
        title: "Notification",
        icon: <NotificationsNoneIcon/>,
        link: "/notifications"
    },
    {
        title: "Messages",
        icon: <MailOutlineIcon/>,
        link: "/messages"
    },
    {
        title: "Bookmarked",
        icon: <BookmarkBorderIcon/>,
        link: "/bookmarked"
    },
    {
        title: "Lists",
        icon: <ListAltIcon/>,
        link: "/lists"
    },
    {
        title: "Profile",
        icon: <PermIdentityIcon/>,
        link: "/profile" //getCookieName to display Username in url
    },
    {
        title: "More",
        icon: <MoreHorizIcon/>,
        link: "/more"
    },
]