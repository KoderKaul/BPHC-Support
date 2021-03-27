import { makeStyles } from "@material-ui/core/styles";
import sidebarImg from "../../img/marine.jpg";
export default makeStyles((theme) => ({
  sidebarContainer: {
    width: "15%",
    minWidth: "250px",
    backgroundImage: `linear-gradient(315deg,rgba(67, 67, 67, 0.8) 0%,rgba(0, 0, 0, 0.8) 74%),url(${sidebarImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  },
  logo: {
    height: "45px",
    marginLeft: "5px",
    padding: "10px",
  },
  title: {
    color: "white",
    textDecoration: "none",
    fontFamily: "Poppins",
    letterSpacing: "3px",
    textAlign: "center",
    fontWeight: "700",
  },
  sidebarHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px 25px",
    marginLeft: "10px",
  },
  sidebarMenuContainer: {
    marginTop: "100px",
  },
  sidebarMenuItem: {
    display: "flex",
    textAlign: "center",
    padding: "6px 25px",
    alignItems: "center",
    marginTop: "20px",
    color: "white",
    borderBottom: "1px solid white",
    transition: "transform 650ms",
    margin: "0 20px",
    "&:hover": {
      color: "#eae7d9",
      transform: "scale(1.07)",
      zIndex: "1",
    },
  },
  Icon: {
    paddingRight: "20px",
  },
  sidebarMenuItemActive: {
    color: "#5a55a",
    transform: "scale(1.1)",
    zIndex: "1",
  },
}));
