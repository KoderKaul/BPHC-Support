import React from "react";
import CourierDisplay from "./CourierDisplay/CourierDisplay";
import AddCourier from "../Admin/AddCourier/AddCourier";
import { Container, Grow, Grid } from "@material-ui/core";
import useStyles from "./Couriers.styles";

function Couriers(props) {
  const classes = useStyles();
  return (
    <Grow in>
      <Container className={classes.main}>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={1}
        >
          <Grid item xs={12} md={7}>
            <CourierDisplay type={props.type} />
          </Grid>
          <Grid item xs={12} md={5}>
            {props.type == "admin" ? <AddCourier /> : null}
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
}

export default Couriers;
