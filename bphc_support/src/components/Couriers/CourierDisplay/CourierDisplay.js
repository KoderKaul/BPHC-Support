import React from "react";
import { Grid, CircularProgress, CssBaseline } from "@material-ui/core";
import { useSelector } from "react-redux";
import useStyles from "./CourierDisplay.styles";
import Courier from "./Courier/Courier";

function CourierDisplay() {
  const couriers = useSelector((state) => state.couriers);
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <CssBaseline />
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} lg={6}>
          <Courier />
        </Grid>
        <Grid item xs={12} sm={12} lg={6}>
          <Courier />
        </Grid>
        <Grid item xs={12} sm={12} lg={6}>
          <Courier />
        </Grid>
        <Grid item xs={12} sm={12} lg={6}>
          <Courier />
        </Grid>
        <Grid item xs={12} sm={12} lg={6}>
          <Courier />
        </Grid>
        <Grid item xs={12} sm={12} lg={6}>
          <Courier />
        </Grid>
        <Grid item xs={12} sm={12} lg={6}>
          <Courier />
        </Grid>
        <Grid item xs={12} sm={12} lg={6}>
          <Courier />
        </Grid>
      </Grid>
    </div>
  );
}

export default CourierDisplay;
