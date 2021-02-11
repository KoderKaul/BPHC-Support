import React from "react";
import { AppBar, Toolbar, makeStyles, Box, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import bitslogo from "./bitslogo.png";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: "30px",
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
              <Grid container direction="row" spacing={1}>
                <Grid item>
                  <img src={bitslogo} className={classes.logo} />
                </Grid>
                <Grid item >
                  <Typography variant="h6" className={classes.title} component={NavLink} to="/">
                    BPHC Support
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={9} direction="row">
              <Button color="inherit" component={NavLink} to="/login">Login</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
