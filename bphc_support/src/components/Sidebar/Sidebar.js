import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import { SidebarOptions } from "./SidebarOptions";
import bitslogo from "../../img/bitslogo.png";
import useStyles from "./Sidebar.styles";
import { SidebarOptionsAdmin } from "./SidebarOptionsAdmin";

function Sidebar(props) {
  const classes = useStyles();
  const sidebarOptions =
    props.type == "student" ? SidebarOptions : SidebarOptionsAdmin;
  return (
    <div className={classes.sidebarContainer}>
      <div className={classes.sidebarHeader}>
        <img src={bitslogo} className={classes.logo} />
        <Typography
          variant="h4"
          className={classes.title}
          component={NavLink}
          to="/"
        >
          BPHC Support
        </Typography>
      </div>
      <div className={classes.sidebarMenuContainer}>
        {sidebarOptions.map((item, key) => {
          return (
            <NavLink
              exact
              to={item.to}
              style={{ textDecoration: "none", color: "white" }}
              className={classes.sidebarMenuItem}
              activeClassName={classes.sidebarMenuItemActive}
            >
              <div className={classes.Icon}>{item.Icon}</div>
              <Typography variant="h5" component="h2">
                {item.Name}
              </Typography>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
