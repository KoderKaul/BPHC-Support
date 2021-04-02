import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  courierContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "5px",
    height: "100%",
    position: "relative",
    width: "350px"
  },
  cardImage: {
    height: 0,
    paddingTop: '60%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  title: {
    padding: "0 16px",
  },
  mainContainer: {
    width: "70%",
    zIndex: "1",
    marginBottom: "50px",
    height: "100%",
  },
});
