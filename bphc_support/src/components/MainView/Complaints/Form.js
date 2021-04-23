import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, Paper } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { useDispatch } from "react-redux";
import { postProblem } from "../../../redux/problemActions";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
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

  const [postComplaintData, setPostComplaintData] = useState({
    studentName: JSON.parse(localStorage.getItem("profile")).result.name,
    studentId: "",
    studentRoomNo: "",
    studentBhawan: "",
    studentEmail: JSON.parse(localStorage.getItem("profile")).result.email,
    problemTitle: "",
    problemCategory: "",
    problemDesc: "",
    problemStatus: "pending",
  });

  const clear = () => {
    setPostComplaintData({
      studentId: "",
      studentRoomNo: "",
      studentBhawan: "",
      problemTitle: "",
      problemCategory: "",
      problemDesc: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(postProblem(postComplaintData));
    clear();
  };

  const dispatch = useDispatch();
  return (
    <Container component="main" className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper} variant="outlined">
        <Typography variant="h5">Complaint Form</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
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
                value={JSON.parse(localStorage.getItem("profile")).result.name}
                disabled
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
                autoComplete
                name="id"
                variant="outlined"
                required={true}
                InputLabelProps={{ shrink: true }}
                fullWidth
                id="id"
                label="ID"
                value={postComplaintData.studentId}
                onChange={(event) =>
                  setPostComplaintData({
                    ...postComplaintData,
                    studentId: event.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                className={classes.textfield}
                InputProps={{
                  className: classes.input,
                }}
                name="room-number"
                variant="outlined"
                required={true}
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={postComplaintData.studentRoomNo}
                onChange={(event) =>
                  setPostComplaintData({
                    ...postComplaintData,
                    studentRoomNo: event.target.value,
                  })
                }
                autocomplete
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
                value={postComplaintData.studentBhawan}
                autoComplete
                onChange={(event) =>
                  setPostComplaintData({
                    ...postComplaintData,
                    studentBhawan: event.target.value,
                  })
                }
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
                value={JSON.parse(localStorage.getItem("profile")).result.email}
                disabled
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
                value={postComplaintData.problemTitle}
                onChange={(event) =>
                  setPostComplaintData({
                    ...postComplaintData,
                    problemTitle: event.target.value,
                  })
                }
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
                value={postComplaintData.problemCategory}
                onChange={(event) =>
                  setPostComplaintData({
                    ...postComplaintData,
                    problemCategory: event.target.value,
                  })
                }
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
                InputLabelProps={{ shrink: true }}
                value={postComplaintData.problemDesc}
                onChange={(event) =>
                  setPostComplaintData({
                    ...postComplaintData,
                    problemDesc: event.target.value,
                  })
                }
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
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Form;
