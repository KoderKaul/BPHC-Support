import React, { useEffect } from "react";
import {
  Grid,
  CircularProgress,
  CssBaseline,
  Container,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import Complaint from "./Complaint/Complaint";
import { makeStyles } from "@material-ui/core/styles";
import { fetchAllProblems, fetchProblems } from "../../../redux/problemActions";
import { loginSuccess } from "../../../redux/authActions";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: "center",
  },
}));

const Complaints = (props) => {
  const problems = useSelector((state) => state.problem.problems);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    if (props.type == "admin") {
      dispatch(fetchAllProblems());
    }
    if (props.type == "student") dispatch(fetchProblems());
  }, [problems]);
  return !problems.length ? (
    <CircularProgress />
  ) : (
    <Container className={classes.main}>
      <CssBaseline />
      <Grid container spacing={3}>
        {props.type == "student"
          ? problems
              .slice(0)
              .reverse()
              .map((problem) => (
                <Grid key={problem._id} item xs={12} sm={6} lg={4}>
                  <Complaint problem={problem} />
                </Grid>
              ))
          : props.type == "admin"
          ? problems
              .slice(0)
              .reverse()
              .filter((problem) => problem.problemStatus == "pending")
              .map((problem) => (
                <Grid key={problem._id} item xs={12} sm={6} lg={4}>
                  <Complaint type={props.type} problem={problem} />
                </Grid>
              ))
          : ""}
      </Grid>
    </Container>
  );
};

export default Complaints;
