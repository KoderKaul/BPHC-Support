import React, { useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import useStyles from "./Notice.styles";
import defaultImg from "../../../../img/audi.jpg";
import moment from "moment";
function Notice({ notice }) {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <Card className={classes.NoticeContainer}>
        <CardMedia
          className={classes.NoticeImg}
          image={notice.noticeImage || defaultImg}
          title={notice.noticeTitle}
        />
        <div className={classes.overlay}>
          <Typography variant="h6">{notice.noticeTitle}</Typography>
          <Typography variant="body2">{moment(notice.createdAt).fromNow()}</Typography>
        </div>

        <div className={classes.overlay2}>
          <Button style={{ color: "white" }} size="small">
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
        <Typography
          className={classes.title}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {notice.noticeSubTitle || notice.noticeTitle}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {notice.eventTiming || "2nd April"} 
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {notice.noticeDesc}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {notice.noticeIssuedBy}
          </Typography>
        </CardContent>
        {/*<CardActions
          className={classes.CardActions}
        >
          <Button size="small" color="primary">
            <DeleteIcon fontSize="small" /> Delete{" "}
          </Button>
        </CardActions>*/}
      </Card>
    </div>
  );
}

export default Notice;
