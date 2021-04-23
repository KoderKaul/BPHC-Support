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
import useStyles from "../AddNotices/AddNotices.styles";
import { postCourier } from "../../../redux/courierActions";

function AddCourier({ currentId, setCurrentId }) {
  const states = useSelector((state) => state);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [postData, setPostData] = useState({
    studentName: "",
    studentEmail: "",
    bhawan: user.result.studentBhawan,
    roomNo: "",
    selectedFile: "",
    courierDesc: "",
  });
  const dispatch = useDispatch();
  const classes = useStyles();

  const clear = () => {
    setPostData({
      studentName: "",
      studentEmail: "",
      bhawan: user.result.studentBhawan,
      roomNo: "",
      selectedFile: "",
      courierDesc: "",
    });
  };

  const handleSubmit = async (e) => {
    console.log("clicked");
    e.preventDefault();
    dispatch(postCourier(postData));

    clear();
  };

  return (
    <Container component="main" className={classes.main}>
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6">Add Courier</Typography>
          <TextField
            name="StudentName"
            variant="outlined"
            label="StudentName"
            fullWidth
            required={true}
            value={postData.studentName}
            onChange={(e) =>
              setPostData({ ...postData, studentName: e.target.value })
            }
          />
          <TextField
            name="StudentEmail"
            variant="outlined"
            label="StudentEmail"
            fullWidth
            required={true}
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, studentEmail: e.target.value })
            }
          />
          <TextField
            name="courierDesc"
            variant="outlined"
            label="CourierDescription"
            fullWidth
            multiline
            required={true}
            rows={4}
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, courierDesc: e.target.value })
            }
          />
          <TextField
            name="RoomNo."
            variant="outlined"
            label="RoomNo."
            fullWidth
            required={true}
            value={postData.roomNo}
            onChange={(e) =>
              setPostData({ ...postData, roomNo: e.target.value })
            }
          />
          <TextField
            name="Bhawan"
            variant="outlined"
            label="Bhawan"
            fullWidth
            disabled
            required={true}
            value={postData.bhawan}
          />
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

export default AddCourier;
