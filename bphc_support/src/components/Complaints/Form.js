import React, {useState} from "react";
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

  const [postComplaint, setPostComplaint] = useState({
        studentName: '',
        studentId: '',
        studentRoomNo: '',
        hostelName: '',
        studentEmail: '',
        complaintSubject: '',
        complaintTopic: '',
        complaintDescription: ''
  })
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
                autoComplete = "off"
                label="Name"
                autoFocus
                value={postComplaint.studentName}
                onChange={(event) => setPostComplaint({...postComplaint, studentName: event.target.value})}
                className={classes.textfield}
                InputProps={{
                  className: classes.input,
                }}
                InputLabelProps={{ shrink: true }} 
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
                InputLabelProps={{ shrink: true }} 
                fullWidth
                id="id"
                label="ID"
                value={postComplaint.studentId}
                onChange={(event) => setPostComplaint({...postComplaint, studentId: event.target.value})}
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
                InputLabelProps={{ shrink: true }} 
                value={postComplaint.studentRoomNo}
                onChange={(event) => setPostComplaint({...postComplaint, studentRoomNo: event.target.value})}
                id="room-number"
                label="Room Number"
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
                InputLabelProps={{ shrink: true }} 
                label="Hostel Name"
                value={postComplaint.hostelName}
                onChange={(event) => setPostComplaint({...postComplaint, hostelName: event.target.value})}
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
                InputLabelProps={{ shrink: true }} 
                label="Email Address"
                value={postComplaint.studentEmail}
                onChange={(event) => setPostComplaint({...postComplaint, studentEmail: event.target.value})}
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
                InputLabelProps={{ shrink: true }} 
                label="Subject of your complaint"
                id="subject-complaint"
                value={postComplaint.complaintSubject}
                onChange={(event) => setPostComplaint({...postComplaint, complaintSubject: event.target.value})}
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
                value={postComplaint.complaintTopic}
                onChange={(event)=> setPostComplaint({...postComplaint, complaintTopic: event.target.value})}
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
                value={postComplaint.complaintDescription}
                onChange={(event) => setPostComplaint({ complainDescription: event.target.value})}
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
