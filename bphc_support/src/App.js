import Login from "./components/Auth/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ForgotPassword from "./components/Auth/ForgotPassword";
import Header from "./components/Header/Header";
import Main from "./components/Page/Main";
import { makeStyles, Grid } from "@material-ui/core";
import Account from "./components/Page/Account";
import Sidebar from "./components/Sidebar/Sidebar";

const useStyles = makeStyles((theme) => ({
  
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/account">
          <Grid container fullWidth direction="row">
              <Grid item xs={2}>
                <Sidebar />
              </Grid>
              <Grid item xs={10}>
                <Header />
                <Account/>
              </Grid>
            </Grid>
          </Route>
          <Route path="/forgotpassword">
            <ForgotPassword />
          </Route>
          <Route path="/">
            <Grid container fullWidth direction="row">
              <Grid item xs={2}>
                <Sidebar />
              </Grid>
              <Grid item xs={10}>
                <Header />
                <Main />
              </Grid>
            </Grid>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
