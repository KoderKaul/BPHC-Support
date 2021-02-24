import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
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
import { red } from "@material-ui/core/colors";
import BookmarkIcon from "@material-ui/icons/Bookmark";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) =>
  createStyles({
    active: {
      color: "green"
    },
    root: {
      maxWidth: 345
    },
    media: {
      height: 0,
      paddingTop: "56.25%"
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    },
    avatar: {
      backgroundColor: red[500]
    }
  })
);

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            VS
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="#1 Mess Query"
        subheader="February 7, 2021"
      />
      <CardMedia
        className={classes.media}
        image="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2017/02/13/547903-hostel-mess-food-021217.jpg"
        title="Mess Query"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Improper Behaviour of Mess workers
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          The workers became arrogant when off-campus tourists came into the
          mess.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="bookmark">
          <BookmarkIcon />
        </IconButton>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
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
          <Typography paragraph>
            Status: <b className={classes.active}>Accepted</b>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
