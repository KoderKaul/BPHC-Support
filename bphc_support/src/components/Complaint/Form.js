import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, Paper } from "@material-ui/core";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "40vw",
    padding: "25px",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: "8px",
    backgroundColor: theme.palette.primary.main,
  },
  input: {
    borderRadius: "8px",
  },
  textfield: {
    borderRadius: "8px",
  },
}));

const hostels = [
  "Valmiki",
  "Gautam",
  "Ram",
  "Ganga",
  "Vyas",
  "Krishna",
  "Vishwakarma",
  "Meera",
  "Malviya",
];
const complaints = ["Room issue", "Hostel issue", "Mess issue", "Others"];

function Form() {
  const classes = useStyles();
  const [hostel, setHostel] = React.useState("");
  const [complaint, setComplaint] = React.useState("");

  const handleChange = (event) => {
    setHostel(event.target.value);
  };
  const handleComplaintChange = (event) => {
    setComplaint(event.target.value);
  };
  return (
    <Container component="main" className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper} variant="outlined">
        <Typography variant="h5">Complaint Form</Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required={true}
                fullWidth
                id="name"
                label="Name"
                autoFocus
                className={classes.textfield}
                InputProps={{
                  className: classes.input,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                className={classes.textfield}
                InputProps={{
                  className: classes.input,
                }}
                autoComplete="id"
                name="id"
                variant="outlined"
                required={true}
                fullWidth
                id="id"
                label="ID"
                autoFocus
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                className={classes.textfield}
                InputProps={{
                  className: classes.input,
                }}
                autoComplete="room-number"
                name="room-number"
                variant="outlined"
                required={true}
                fullWidth
                id="room-number"
                label="Room Number"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                style={{ width: "100%", textAlign: "left" }}
                className={classes.textfield}
                InputProps={{
                  className: classes.input,
                }}
                variant="outlined"
                id="standard-select-hostel"
                select
                label="Hostel Name"
                value={hostel}
                onChange={handleChange}
              >
                {hostels.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.textfield}
                InputProps={{
                  className: classes.input,
                }}
                variant="outlined"
                required={true}
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.textfield}
                InputProps={{
                  className: classes.input,
                }}
                variant="outlined"
                required={true}
                fullWidth
                name="subject-complaint"
                label="Subject of your complaint"
                id="subject-complaint"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                style={{ width: "100%", textAlign: "left" }}
                className={classes.textfield}
                InputProps={{
                  className: classes.input,
                }}
                variant="outlined"
                id="standard-select-hostel"
                select
                label="Complaint Topic"
                value={complaint}
                onChange={handleComplaintChange}
              >
                {complaints.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.textfield}
                InputProps={{
                  className: classes.input,
                }}
                variant="outlined"
                required={true}
                multiline
                rows={5}
                fullWidth
                name="describe-complaint"
                label="Describe your complaint"
                id="describe-complaint"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Form;
