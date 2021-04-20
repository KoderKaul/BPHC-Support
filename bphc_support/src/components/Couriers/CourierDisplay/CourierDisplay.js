import React, { useEffect } from "react";
import { Grid, CircularProgress, CssBaseline } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./CourierDisplay.styles";
import Courier from "./Courier/Courier";
import { fetchCouriers } from "../../../redux/courierActions";

function CourierDisplay() {
  const states = useSelector((state) => state);
  const couriers = states.courier.couriers;
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(states);
    dispatch(fetchCouriers("f20180325@hyderabad.bits-pilani.ac.in"));
  }, [dispatch]);
  return !couriers.length ? (
    <CircularProgress />
  ) : (
    <div className={classes.main}>
      <CssBaseline />
      <Grid container spacing={1}>
        {couriers.map((courier) => (
          <Grid item xs={12} sm={12} lg={6}>
            <Courier courier={courier} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CourierDisplay;
