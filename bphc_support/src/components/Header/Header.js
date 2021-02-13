import React from "react";
import { AppBar, Toolbar, makeStyles, Box, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import bitslogo from "../../img/bitslogo.png";
import { NavLink } from "react-router-dom";
import SignOutLinks from "./SignOutLinks";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: "35px",
  },
  title:{
      color: "white",
      textDecoration: "none"
  }
}));

function Header() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Grid container direction="row" alignItems="center">
            <Grid item xs={3}>
              <Grid container direction="row" spacing={1} alignItems="center">
                <Grid item>
                  <img src={bitslogo} className={classes.logo} />
                </Grid>
                <Grid item >
                  <Typography variant="h5" className={classes.title} component={NavLink} to="/">
                    BPHC Support
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={9} direction="row">
              <Grid container alignItems="center" justify = "flex-end">
                <SignOutLinks/>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
