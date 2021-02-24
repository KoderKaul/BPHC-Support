import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
} from "@material-ui/core";
import SignOutLinks from "./SignOutLinks";

function Header() {
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
