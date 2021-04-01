import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ErrorIcon from "@material-ui/icons/Error";
import TimelineRoundedIcon from "@material-ui/icons/TimelineRounded";
export const SidebarOptionsAdmin = [
  {
    Name: "Dashboard",
    to: "/admin/home",
    subMenuItems: [],
    Icon: <DashboardIcon />,
  },
  {
    Name: "Profile",
    to: "admin/profile",
    subMenuItems: [],
    Icon: <PersonIcon />,
  },
  {
    Name: "Problems",
    to: "admin/problem",
    subMenuItems: [],
    Icon: <TimelineRoundedIcon />,
  },
  {
    Name: "Notices",
    to: "admin/notice",
    subMenuItems: [],
    Icon: <ErrorIcon />,
  },
];
