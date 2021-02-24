import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import signin from "./signin.svg";
import googleicon from "../../img/google-icon.svg";
import { GoogleLogin } from "react-google-login";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(22),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "30vw",
    marginTop: theme.spacing(1),
  },
  submit: {
    display: "flex",
    margin: theme.spacing(2, 0, 2),
    padding: "7px",
    width: "30vw",
    alignItems: "center"
  },
  googlesubmit: {
    display: "flex",
    margin: theme.spacing(2, 0, 2),
    width: "30vw",
    alignItems: "center",
    backgroundColor: "#202040",
    justifyContent: "center",
    color: "#eae7d9",
    borderRadius: "4px",
    fontSize: "14.3px",
    padding: "7px",
    border: "2px solid #202040",
    zIndex: "51",
    '&:hover':{
        backgroundColor: "rgb(22, 22, 44)  "
    }
  },
  signin: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(14),
  },
  googleIcon: {
    maxHeight: "20px",
    margin: "0 10px",
  },
  left:{
      padding: "50px 50px"
  }
}));

function Login() {
  const classes = useStyles();

  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const submitForm = () => {
      
  }

  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <Grid container>
      <Grid item xs={6} className={classes.left}>
        <img src={signin} className={classes.signin} />
      </Grid>
      <CssBaseline />
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
              onChange={e => setEmail(e.target.value)}
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
              onChange={e => setPassword(e.target.value)}
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
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
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
  );
}

export default Login;
