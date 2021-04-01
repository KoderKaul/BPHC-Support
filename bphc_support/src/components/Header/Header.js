import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  Avatar,
  IconButton,
} from "@material-ui/core";
import useStyles from "./Header.sytles";
import { useDispatch } from "react-redux";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { useHistory, useLocation } from "react-router-dom";
import { logoutAction } from "../../redux/authActions";

function Header({ title }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  console.log(user);

  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  //logout
  const handleLogout = () => {
    dispatch(logoutAction());
    history.push("/");
    setUser(null);
  };

  return (
    <div className={classes.Main}>
      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <Grid container direction="row" alignItems="center">
            <Grid item xs={6} direction="row">
              <Typography variant="h4" className={classes.Title}>
                {title}
              </Typography>
            </Grid>
            <Grid item xs={6} direction="row">
              <Grid container alignItems="center" justify="flex-end">
                {user ? (
                  <div className={classes.userDetail}>
                    <Typography variant="body1" className={classes.Title}>
                      Welcome, {user.result.name}
                    </Typography>
                    <Avatar src={user.result.imageUrl}></Avatar>
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                      onClick={handleLogout}
                    >
                      <PowerSettingsNewIcon />
                    </IconButton>
                  </div>
                ) : (
                  <div></div>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
