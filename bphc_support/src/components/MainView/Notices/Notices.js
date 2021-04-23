import { CircularProgress, Paper } from "@material-ui/core";
import React, { useEffect } from "react";
import Notice from "./Notice/Notice";
import useStyles from "./Notices.styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotices } from "../../../redux/noticeActions";

function MainView() {
  const classes = useStyles();
  const notices = useSelector((state) => state.notice.notices);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNotices());
  }, [dispatch]);
  return !notices.length ? (
    <CircularProgress />
  ) : (
    <div className={classes.main}>
      {notices
        .slice(0)
        .reverse()
        .map((notice, index) => (
          <Notice notice={notice} key={index} />
        ))}
    </div>
  );
}
export default MainView;
