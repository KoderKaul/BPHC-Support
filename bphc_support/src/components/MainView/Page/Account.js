import React, { useState, useEffect } from "react";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "../../../img/inside-bphc.jpeg";
import {
  TextField,
  Button,
  Typography,
  Paper,
  makeStyles,
  InputAdornment,
  Grid,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import FileBase from "react-file-base64";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "55vw",
    alignItems: "center",
    margin: "50px",
    zIndex: "10",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    flexDirection: "row",
    padding: theme.spacing(2),
  },
  buttonSubmit: {
    margin: "20px 10px",
  },
}));

function Account() {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [hostel, sethostel] = useState("");
  const [room, setroom] = useState("");
  const [phone, setphone] = useState("");
  const [studentImage, setstudentImage] = useState("");
  useEffect(() => {
    axios
      .get("https://bphcsupportapi.herokuapp.com/student/" + user.result.email)
      .then((res) => {
        setname(res.data[0].name != undefined ? res.data[0].name : "");
        setemail(res.data[0].email != undefined ? res.data[0].email : "");
        sethostel(res.data[0].bhawan != undefined ? res.data[0].bhawan : "");
        setroom(res.data[0].roomNo != undefined ? res.data[0].roomNo : "");
        setphone(res.data[0].phoneNo != undefined ? res.data[0].phoneNo : "");
        setstudentImage(
          res.data[0].studentImage != undefined ? res.data[0].studentImage : ""
        );
      })
      .catch((error) => console.log(error.message));
  }, []);
  const saveData = () => {
    console.log(phone);
    axios
      .patch(
        "https://bphcsupportapi.herokuapp.com/student/" + user.result.email,
        {
          bhawan: hostel,
          roomNo: room,
          phoneNo: phone,
          studentImage: studentImage,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className={classes.main}>
      <Paper className={classes.paper} variant="outlined">
        <Grid
          container
          className={`${classes.root} ${classes.form}`}
          spacing={6}
          direction="column"
          justify="space-around"
        >
          <Grid item xs={12}>
            <Typography variant="h4">Profile</Typography>
          </Grid>
          <Grid item xs={12}>
            <ReactRoundedImage
              image={studentImage}
              roundedColor="#321124"
              imageWidth="250"
              imageHeight="250"
              roundedSize="10"
            />
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setstudentImage(base64)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="Name"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Name:</InputAdornment>
                ),
              }}
              fullWidth
              autoComplete="off"
              disabled
              value={name}
              size="small"
            />
            <TextField
              name="Email"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Email:</InputAdornment>
                ),
              }}
              fullWidth
              autoComplete="off"
              disabled
              value={email}
              size="small"
            />
            <TextField
              name="Hostel"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Hostel:</InputAdornment>
                ),
              }}
              fullWidth
              onChange={(e) => sethostel(e.target.value)}
              value={hostel}
              autoComplete="off"
              size="small"
            />
            <TextField
              name="Room No."
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Room No.</InputAdornment>
                ),
              }}
              fullWidth
              value={room}
              onChange={(e) => setroom(e.target.value)}
              autoComplete="off"
              size="small"
            />
            <TextField
              name="Phone No."
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Phone No.</InputAdornment>
                ),
              }}
              value={phone}
              onChange={(e) => setphone(e.target.value)}
              fullWidth
              autoComplete="off"
              size="small"
            />
            <div className={classes.fileInput}></div>
            <Button
              className={classes.buttonSubmit}
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              onClick={saveData}
              startIcon={<SaveIcon />}
            >
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Account;
