import React, { useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import moment from "moment";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import axios from "axios";
import { fetchAllProblems } from "../../../../redux/problemActions";
import { useDispatch } from "react-redux";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) =>
  createStyles({
    active: {
      color: "green",
    },
    passive: {
      color: "red",
    },
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: "56.25%",
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: "#c15050",
    },
  })
);

export default function Complaint({ problem, type }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const dispatch = useDispatch;
  const handleClose = (type) => {
    const newproblem = { ...problem, problemStatus: "solved" };

    if (type == "yes") {
      axios.patch(
        "https://bphcsupportapi.herokuapp.com/problem/" + problem._id,
        newproblem,
        { headers: { authorization: localStorage.getItem("token") } }
      );
    }
    setOpen(false);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {problem.studentBhawan[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={problem.problemCategory}
        subheader={moment(problem.problemDate).format(
          "dddd, MMMM Do YYYY, h:mm:ss a"
        )}
      />
      <CardMedia
        className={classes.media}
        image="https://www.integrify.com/site/assets/files/2411/complaint-handling-software.jpg"
        title="Mess Query"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {problem.problemTitle}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {problem.problemDesc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="bookmark">
          <BookmarkIcon />
        </IconButton>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography
            paragraph
            onClick={() => {
              if (type == "admin") handleClickOpen();
            }}
          >
            Status:{" "}
            <b
              className={
                problem.problemStatus == "pending"
                  ? classes.passive
                  : classes.active
              }
            >
              {problem.problemStatus.toUpperCase()}
            </b>
          </Typography>
        </CardContent>
      </Collapse>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Is the Problem Resolved?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Click "YES" if the problem is resolved
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose("no")} color="primary">
            No
          </Button>
          <Button onClick={() => handleClose("yes")} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
