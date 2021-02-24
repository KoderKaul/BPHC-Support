import React from "react";
import bphc from "../../img/inside-bphc.jpg";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  main: {
    position: "relative",
    height: "90%",
    width: "100%"
  },
  background: {
    backgroundImage: `url(${bphc})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 1, 1))",
  },
}));

function Main() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div>
      </div>
    </div>
  );
}

export default Main;
