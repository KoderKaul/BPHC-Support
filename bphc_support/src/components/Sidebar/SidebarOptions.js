import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ErrorIcon from "@material-ui/icons/Error";
import TimelineRoundedIcon from "@material-ui/icons/TimelineRounded";
import HomeIcon from "@material-ui/icons/Home";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

export const SidebarOptions = [
  {
    Name: "Dashboard",
    to: "/home",
    subMenuItems: [],
    Icon: <DashboardIcon />,
  },
  {
    Name: "Profile",
    to: "/profile",
    subMenuItems: [],
    Icon: <PersonIcon />,
  },
  {
    Name: "History",
    to: "/history",
    subMenuItems: [],
    Icon: <TimelineRoundedIcon />,
  },
  {
    Name: "Complaints",
    to: "/complaint",
    subMenuItems: [],
    Icon: <ErrorIcon />,
  },
  {
    Name: "AddNotice",
    to: "/admin/notice",
    subMenuItems: [],
    Icon: <NoteAddIcon />,
  },
  {
    Name: "AddCourier",
    to: "/admin/courier",
    subMenuItems: [],
    Icon: <MailOutlineIcon/>,
  },
];
