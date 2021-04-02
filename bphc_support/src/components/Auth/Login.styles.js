import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
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
    alignItems: "center",
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
    "&:hover": {
      backgroundColor: "rgb(22, 22, 44)  ",
    },
  },
  signin: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(14),
    height: "300px",
  },
  googleIcon: {
    maxHeight: "20px",
    margin: "0 10px",
  },
}));
