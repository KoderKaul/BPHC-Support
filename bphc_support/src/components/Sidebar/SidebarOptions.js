import React from "react";
import { Button, makeStyles, Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ErrorIcon from "@material-ui/icons/Error";
import TimelineRoundedIcon from '@material-ui/icons/TimelineRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  links: {
    display: "flex",
    color: "#eae7d9",
    backgroundColor: theme.palette.primary.main,
    paddingLeft: "25px",
    paddingRight: "75px",
    paddingTop: "15px",
    paddingBottom: "15px",
    width: "90%",
    justifyContent: "flex-start",
  },
}));

function SidebarOptions() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <Grid container spacing={1} direction="column">
          <Grid item xs={12}>
            <Button
              component={NavLink}
              to="/dashboard"
              className={classes.links}
              startIcon={<DashboardIcon />}
              activeStyle={{ backgroundColor: "#3581B8" }}
            >
              Dashboard
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Button
              component={NavLink}
              to="/account"
              className={classes.links}
              startIcon={<PersonIcon />}
              activeStyle={{ backgroundColor: "#3581B8" }}
            >
              Profile
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Button
              component={NavLink}
              to="/complaint"
              className={classes.links}
              startIcon={<ErrorIcon />}
              activeStyle={{ backgroundColor: "#3581B8" }}
            >
              Complaint
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Button
              component={NavLink}
              to="/history"
              className={classes.links}
              startIcon={<TimelineRoundedIcon/>}
              activeStyle={{ backgroundColor: "#3581B8" }}
            >
              History
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default SidebarOptions;
