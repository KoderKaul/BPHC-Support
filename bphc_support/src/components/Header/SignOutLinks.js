import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import VpnKeyRoundedIcon from "@material-ui/icons/VpnKeyRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  icon: {
    color: theme.palette.secondary,
  },

  links: {
    color: theme.palette.primary.main,
  },
}));

function SignOutLinks() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button component={NavLink} to="/account" className={classes.links}>
        ACCOUNT
      </Button>

      <Button
        component={NavLink}
        to="/"
        className={classes.links}
        startIcon={<VpnKeyRoundedIcon />}
      >
        LOGIN
      </Button>
    </div>
  );
}

export default SignOutLinks;
