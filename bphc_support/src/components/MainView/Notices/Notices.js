import { CircularProgress, Paper } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Notice from "./Notice/Notice";
import useStyles from "./Notices.styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotices } from "../../../redux/noticeActions";

function MainView() {

  const classes = useStyles();
  const notices = useSelector((state) => state.notice.notices);
  console.log(notices);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNotices());
  }, [dispatch]);
  return !notices.length ? (
    <CircularProgress />
  ) : (
    <div className={classes.main}>
      {notices.map((notice) => (
        <Notice notice={notice} />
      ))}
    </div>
  );
}
export default MainView;
