import { CircularProgress, Paper } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Notice from "./Notice/Notice";
import useStyles from "./Notices.styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotices } from "../../../redux/noticeActions";

export default function MainView() {
  const [heading, setHeading] = useState("");
  const [subject, setSubject] = useState("");

  const classes = useStyles();

  const [description, setDescription] = useState("");
  const [toggle, setToggle] = useState(false);
  //   const noticesDummy = [
  //     {
  //       heading: "Holiday Tomorrow",
  //       description: "Tomorrow will be a holiday, come at your own risk",
  //       date: new Date(),
  //       subject: "Chutti tomorrow",
  //     },
  //     {
  //       heading: "Holiday Tomorrow",
  //       description: "Tomorrow will be a holiday, come at your own risk",
  //       date: new Date().toString(),
  //       subject: "Chutti tomorrow",
  //     },
  //   ];
  const handleSubmit = () => {
    console.log("heading, subject, description", heading, subject, description);
    const date1 = new Date();
    const date2 = date1.toString();
    const notice = { heading, subject, description, date2 };

    setHeading("");
    setSubject("");
    setDescription("");

    setToggle(false);
  };
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
