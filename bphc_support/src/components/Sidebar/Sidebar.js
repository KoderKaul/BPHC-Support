import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import SidebarOptions from "./SidebarOptions";
import bitslogo from "../../img/bitslogo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    backgroundColor: theme.palette.primary.main,
    zIndex: "5",
    background: "rgba(0, 0, 0, 0.5)",
    position: "fixed"
  },
  logo: {
    height: "40px",
    marginLeft: "10px",
    padding: "10px",
  },
  title: {
    color: "#eae7d9",
    textDecoration: "none",
  },
  sidebarHeader:{
      display: "flex",
      alignItems: "center",
      margin: "10px 25px",
      marginLeft: "10px"
  },
}));
function Sidebar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Grid container direction="column" spacing={4}>
          <Grid item xs={12}>
            <Grid container direction="row">
              <div className={classes.sidebarHeader}>
                <img src={bitslogo} className={classes.logo} />
                <Typography
                  variant="h5"
                  className={classes.title}
                  component={NavLink}
                  to="/"
                >
                  BPHC Support
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Grid item>
            <SidebarOptions />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Sidebar;
