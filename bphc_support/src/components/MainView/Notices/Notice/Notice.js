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
function Notice({ notice }) {
  const classes = useStyles();
  return (
    <div className={classes.NoticeContainer}>
      <Card
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: "5px",
          height: "100%",
          position: "relative",
        }}
      >
        <CardMedia
          style={{
            height: "500px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backgroundBlendMode: "darken",
          }}
          image={defaultImg}
          title="Loremsum"
        />
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            color: "white",
          }}
        >
          <Typography variant="h6">{notice.noticeTitle}</Typography>
          <Typography variant="body2">22/1/21 22:11</Typography>
        </div>
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            color: "white",
          }}
        >
          <Button style={{ color: "white" }} size="small">
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
        <Typography
          style={{
            padding: "0 16px",
          }}
          gutterBottom
          variant="h5"
          component="h2"
        >
          Movie Screening
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Saturday, 8pm
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {notice.noticeDesc}
          </Typography>
        </CardContent>
        <CardActions
          style={{
            padding: "0 16px 8px 16px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button size="small" color="primary">
            <DeleteIcon fontSize="small" /> Delete{" "}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Notice;
