import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  App: {
    backgroundColor: "#d8d8d8",
    height: "100vh",
    display: "flex",
  },
  MainView: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  Login: {
    width: "100%",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
}));
