import React from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Grid,
  IconButton,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import bitslogo from "../../img/bitslogo.png";
import { NavLink } from "react-router-dom";
import SignOutLinks from "./SignOutLinks";

const useStyles = makeStyles((theme) => ({
  
}));

function Header() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
          <Grid container direction="row" alignItems="center">
            <Grid item xs={12} direction="row">
              <Grid container alignItems="center" justify="flex-end">
                <SignOutLinks />
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
