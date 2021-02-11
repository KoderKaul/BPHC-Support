import React from "react";
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
import signin from './signin.svg';
import googleicon from './google-icon.svg'

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
    margin: theme.spacing(2, 0, 2),
  },
  signin: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(14),
  },
  googleIcon:{
      maxHeight: "20px",
      margin: "0 10px"
  }
}));

function Login() {
  const classes = useStyles();

  return (
    <Grid container >
    <Grid item xs={6}>
        <img src={signin} className={classes.signin}/>
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
            autoFocus
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
          >
            Login
          </Button>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            <img src={googleicon} className={classes.googleIcon}/>
            Log In with Google
          </Button>

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
