import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    main: {
      height: "100%",
      overflowY: "scroll",
      "&::-webkit-scrollbar": {
      display: "none",
    },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px"
    },
  }));