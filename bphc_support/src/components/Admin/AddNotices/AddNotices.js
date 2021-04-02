import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Container,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import useStyles from "./AddNotices.styles";
import {postNotice} from "../../../redux/noticeActions"

function AddNotices() {
  const [postNoticeData, setPostNoticeData] = useState({
    noticeTitle: "",
    noticeSubTitle: "",
    noticeDesc: "",
    noticeImage: "",
    eventTiming: new Date(),
    issuedBy: "",
  });
  const dispatch = useDispatch();
  const classes = useStyles();

  const clear = () => {
    setPostNoticeData({
      noticeTitle: "",
      noticeSubTitle: "",
      noticeDesc: "",
      tags: "",
      noticeImage: "",
      eventTiming: new Date(),
      issuedBy: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(postNoticeData);
    dispatch(postNotice(postNoticeData));
    clear();
  };

  return (
    <Container component="main" className={classes.main}>
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6">Add Notice</Typography>
          <TextField
            name="creator"
            variant="outlined"
            label="Notice Title"
            fullWidth
            value={postNoticeData.noticeTitle}
            onChange={(e) =>
              setPostNoticeData({
                ...postNoticeData,
                noticeTitle: e.target.value,
              })
            }
          />
          <TextField
            name="title"
            variant="outlined"
            label="Notice SubTitle"
            fullWidth
            value={postNoticeData.noticeSubTitle}
            onChange={(e) =>
              setPostNoticeData({
                ...postNoticeData,
                noticeSubTitle: e.target.value,
              })
            }
          />

          <TextField
            name="Date"
            variant="outlined"
            label="Event Date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            type="date"
            value={postNoticeData.eventTiming}
            onChange={(e) =>
              setPostNoticeData({
                ...postNoticeData,
                eventTiming: e.target.value,
              })
            }
          />
          <TextField
            name="message"
            variant="outlined"
            label="Notice Description"
            fullWidth
            multiline
            rows={4}
            value={postNoticeData.noticeDesc}
            onChange={(e) =>
              setPostNoticeData({
                ...postNoticeData,
                noticeDesc: e.target.value,
              })
            }
          />
          <TextField
            name="issuedBy"
            variant="outlined"
            label="Issued By"
            fullWidth
            value={postNoticeData.issuedBy}
            onChange={(e) =>
              setPostNoticeData({
                ...postNoticeData,
                issuedBy: e.target.value,
              })
            }
          />
          <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostNoticeData({ ...postNoticeData, noticeImage: base64 })
              }
            />
          </div>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default AddNotices;
