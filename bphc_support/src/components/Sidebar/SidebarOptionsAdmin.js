import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ErrorIcon from "@material-ui/icons/Error";
import TimelineRoundedIcon from "@material-ui/icons/TimelineRounded";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
export const SidebarOptionsAdmin = [
  {
    Name: "Dashboard",
    to: "/admin",
    subMenuItems: [],
    Icon: <DashboardIcon />,
  },

  {
    Name: "Problems",
    to: "/admin/problem",
    subMenuItems: [],
    Icon: <TimelineRoundedIcon />,
  },
  {
    Name: "Notices",
    to: "/admin/notice",
    subMenuItems: [],
    Icon: <ErrorIcon />,
  },
  {
    Name: "AddCourier",
    to: "/admin/courier",
    subMenuItems: [],
    Icon: <MailOutlineIcon />,
  },
];
