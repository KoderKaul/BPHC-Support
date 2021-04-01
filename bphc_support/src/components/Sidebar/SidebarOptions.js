import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ErrorIcon from "@material-ui/icons/Error";
import TimelineRoundedIcon from "@material-ui/icons/TimelineRounded";
import HomeIcon from "@material-ui/icons/Home";
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
    to: "/about",
    subMenuItems: [],
    Icon: <HomeIcon />,
  },
];
