import React, { useEffect } from "react";
// import { getProblems } from "./actions/problems";
import { Route, Switch } from "react-router-dom";
import useStyles from "./App.styles";
import Sidebar from "./components/Sidebar/Sidebar";

//Pages
import Notices from "./components/MainView/Notices/Notices";
import Account from "./components/MainView/Page/Account";
import Complaint from "./components/MainView/Complaints/Form";
import History from "./components/MainView/Complaints/Complaints";
import Login from "./components/Auth/Login";
import Header from "./components/Header/Header";
import AddNotices from "./components/Admin/AddNotices/AddNotices";
import indexRoutes from "./admin-dash/src/routes/index.jsx";

import "./admin-dash/src/assets/scss/style.css";
import Couriers from "./components/Couriers/Couriers";
function App() {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <Switch>
        <Route exact path="/dashboard">
          {indexRoutes.map((prop, key) => {
            return (
              <Route path={prop.path} key={key} component={prop.component} />
            );
          })}
        </Route>
        <Route exact path="/admin/courier">
          <Sidebar type="admin" />
          <div className={classes.MainView}>
            <Header />
            <Couriers type="admin" />
          </div>
        </Route>
        <Route exact path="/admin/problem">
          <Sidebar type="admin" />
          <div className={classes.MainView}>
            <Header title="Problems" />
            <History type="admin" />
          </div>
        </Route>
        <Route exact path="/admin/notice">
          <Sidebar type="admin" />
          <div className={classes.MainView}>
            <Header />
            <AddNotices />
          </div>
        </Route>
        <Route exact path="/">
          <div className={classes.Login}>
            <Login />
          </div>
        </Route>
        <Route exact path="/history">
          <Sidebar type="student" />
          <div className={classes.MainView}>
            <Header title="History" type="student" />
            <History type="student" />
          </div>
        </Route>
        <Route exact path="/profile">
          <Sidebar type="student" />
          <div className={classes.MainView}>
            <Header title="Profile" type="student" />
            <Account />
          </div>
        </Route>
        <Route exact path="/complaint">
          <Sidebar type="student" />
          <div className={classes.MainView}>
            <Header title="Complaint" type="student" />
            <Complaint />
          </div>
        </Route>
        <Route exact path="/courier">
          <Sidebar type="student" />
          <div className={classes.MainView}>
            <Header type="student" />
            <Couriers type="student" />
          </div>
        </Route>
        <Route exact path="/home">
          <Sidebar type="student" />
          <div className={classes.MainView}>
            <Header title="Notices" type="student" />
            <Notices />
          </div>
        </Route>
        <Route exact path="/admin">
          <Sidebar type="admin" />
          <div className={classes.MainView}>
            <Header />
            <Notices />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
