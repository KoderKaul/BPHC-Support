import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import forgotpassword from "./forgotpassword.svg";


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
    padding: "10px",
  },
  forgot: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(14),
    height: "60vh",
  },
  left: {
    paddingLeft: "5vw",
  },
}));

function ForgotPassword() {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.left}>
        <Grid item xs={6}>
          <img src={forgotpassword} className={classes.forgot} />
        </Grid>
        <CssBaseline />
        <Grid item xs={6} className = {classes.right}>
          <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
              <Typography component="h1" variant="h4">
                Forgot Password
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
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Change Password
                </Button>
              </form>
            </div>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default ForgotPassword;
