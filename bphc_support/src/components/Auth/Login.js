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
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import signin from "./signin.svg";
import googleicon from "../../img/google-icon.svg";
import { GoogleLogin } from "react-google-login";
import useStyles from "./Login.styles";
import { useHistory } from "react-router-dom";
import { loginSuccess } from "../../redux/authActions";
import axios from "axios";
import { fetchUserInfo } from "../../redux/userActions";

function Login() {
  const states = useSelector((state) => state);
  const classes = useStyles();
  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();
  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("https://bphcsupportapi.herokuapp.com/admin/login", {
        email: email,
      })
      .then((res) => {
        console.log(res.data);
        console.log("states", states);
        localStorage.setItem("token", res.data.token);

        dispatch(fetchUserInfo("admin", email));

        history.push("/admin");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const googleSuccess = async (response) => {
    console.log(response);
    const result = response?.profileObj;
    const token = response?.tokenId;
    //login
    try {
      dispatch(loginSuccess(result, token));
      //       dispatch(fetchUserInfo("student", result.email));
      axios
        .post("https://bphcsupportapi.herokuapp.com/student/login", {
          email: result.email,
        })
        .then((res) => {
          console.log("res:", res);
          localStorage.setItem("token", res.data.token);
          history.push("/home");
        })
        .catch((err) => {
          console.log(err.message);
          axios
            .post("https://bphcsupportapi.herokuapp.com/student/signup", {
              email: result.email,
              name: result.name,
              studentImage: result.imageUrl,
            })
            .then((res) => {
              console.log("res:", res);
              localStorage.setItem("token", res.data.token);
              history.push("/home");
            })
            .catch((err) => {
              console.log(err.message);
            });
        });
    } catch (error) {}
  };

  const googleFailure = (response) => {
    console.log("Google Sign In was unsuccessful.Try Again Later");
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.main}
    >
      <Grid item xs={6}>
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
                // autoComplete="off"
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
