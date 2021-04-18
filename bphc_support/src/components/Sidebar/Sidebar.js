import React from "react";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import { SidebarOptions } from "./SidebarOptions";
import bitslogo from "../../img/bitslogo.png";
import useStyles from "./Sidebar.styles";
import { fetchProblems } from "../../redux/problemActions";
import { useDispatch } from "react-redux";
import { SidebarOptionsAdmin } from "./SidebarOptionsAdmin";
function GetProblems() {
  const dispatch = useDispatch();
  dispatch(fetchProblems());
}
function Sidebar(props) {
  const classes = useStyles();
  const sidebarOptions =
    props.type == "student" ? SidebarOptions : SidebarOptionsAdmin;
  return (
    <div className={classes.sidebarContainer}>
      <div className={classes.sidebarHeader}>
        <img src={bitslogo} className={classes.logo} alt="BitsLogo" />
        <Typography
          variant="h4"
          className={classes.title}
          component={NavLink}
          to="/home"
        >
          BPHC Support
        </Typography>
      </div>
      <div className={classes.sidebarMenuContainer}>
        {sidebarOptions.map((item, key) => {
          if (item.Name == "History") {
            GetProblems();
          }
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
