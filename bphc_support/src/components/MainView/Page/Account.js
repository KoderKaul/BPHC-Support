import React, {useState}from "react";
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
import SaveIcon from '@material-ui/icons/Save';
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
    zIndex: "10"
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
              image={user.result.imageUrl}
              roundedColor="#321124"
              imageWidth="250"
              imageHeight="250"
              roundedSize="10"
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
              value={user.result.name}
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
              value={user.result.email}
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
              startIcon={<SaveIcon/>}
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
