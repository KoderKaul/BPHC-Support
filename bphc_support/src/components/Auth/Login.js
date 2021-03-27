import React, { useState } from "react";
import {
  CssBaseline,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Container,
  Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import signin from "./signin.svg";
import googleicon from "../../img/google-icon.svg";
import { GoogleLogin } from "react-google-login";
import useStyles from "./Login.styles";
import { useHistory } from "react-router-dom";
import { loginSuccess } from "../../redux/authActions";

function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();
  const submitForm = () => {};

  const googleSuccess = async (response) => {
    console.log(response);
    const result = response?.profileObj;
    const token = response?.tokenId;
    //login
    try {
      dispatch(loginSuccess(result, token));
      history.push("/");
    } catch (error) {}
  };

  const googleFailure = (response) => {
    console.log("Google Sign In was unsuccessful.Try Again Later");
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={6} className={classes.left}>
        <img alt="Sign In" src={signin} className={classes.signin} />
      </Grid>
      <CssBaseline />
      <Grid item xs={12}>
        <Container component="main" maxWidth="xs">
          <div className={classes.paper}>
            <Typography component="h1" variant="h4">
              Login
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={submitForm}
              >
                Login
              </Button>

              <GoogleLogin
                clientId="942581170297-n59k04e7hf2di4qdsi4cpuffnaauoj14.apps.googleusercontent.com"
                render={(renderProps) => (
                  <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className={classes.googlesubmit}
                  >
                    <img src={googleicon} className={classes.googleIcon} />
                    LOG IN WITH GOOGLE
                  </button>
                )}
                buttonText="Login"
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy={"single_host_origin"}
              />
              <Grid container>
                <Grid item xs>
                  <Link href="/forgotpassword" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
}

export default Login;
