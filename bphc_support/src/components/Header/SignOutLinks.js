import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
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
    color: "white",
  },
}));

function SignOutLinks() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button component={NavLink} to="/" className={classes.links}>
        ACCOUNT
      </Button>
      <Button component={NavLink} to="/login" className={classes.links}>
        LOGIN
      </Button>
    </div>
  );
}

export default SignOutLinks;
