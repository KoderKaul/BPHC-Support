import React from "react";
import bphc from "../../img/inside-bphc.jpg";
import { makeStyles, Grid, Grow, Container, Paper } from "@material-ui/core";
import Problem from "./Problem";
const useStyles = makeStyles((theme) => ({
  main: {
    position: "relative",

  },
  background: {
    backgroundImage: `url(${bphc})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "93.6vh",
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 1, 1))",
  },

  problempost: {
    marginTop: "100px",
  },
}));

function Main() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.background}></div>
      <div>
      </div>
    </div>
  );
}

export default Main;
