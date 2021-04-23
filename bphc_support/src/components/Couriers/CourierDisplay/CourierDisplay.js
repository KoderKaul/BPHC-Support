import React, { useEffect } from "react";
import { Grid, CircularProgress, CssBaseline } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./CourierDisplay.styles";
import Courier from "./Courier/Courier";
import { fetchAllCouriers, fetchCouriers } from "../../../redux/courierActions";

function CourierDisplay(props) {
  const states = useSelector((state) => state);
  const couriers = states.courier.couriers;
  console.log(couriers);
  const classes = useStyles();
  const dispatch = useDispatch();
  console.log(props);
  useEffect(() => {
    if (props.type == "admin") dispatch(fetchAllCouriers());
    if (props.type == "student") dispatch(fetchCouriers());
  }, []);
  return !couriers.length ? (
    <CircularProgress />
  ) : (
    <div className={classes.main}>
      <CssBaseline />
      <Grid container spacing={1}>
        {couriers
          .slice(0)
          .reverse()
          .map((courier, index) => (
            <Grid item xs={12} sm={12} lg={6}>
              <Courier courier={courier} key={index} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default CourierDisplay;
