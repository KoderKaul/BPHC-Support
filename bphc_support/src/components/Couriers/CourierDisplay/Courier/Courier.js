import React, { useContext } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import useStyles from "./Courier.styles";
import note_bg from "../../../../img/jared.jpg";

function Courier(courier) {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <Card className={classes.courierContainer}>
        <CardMedia
          className={classes.cardImage}
          image={note_bg}
          title="Courier Title"
        />
        <div className={classes.overlay}>
          <Typography variant="h6">Courier Room</Typography>
        </div>
        <Typography
          className={classes.overlay2}
          gutterBottom
          variant="overline"
          component="h2"
        >
          Courier Data
        </Typography>
        <br />
        <Typography
          className={classes.title}
          gutterBottom
          variant="h5"
          component="h2"
        >
          Courier Title
        </Typography>
        <CardContent>
          <Typography
            variant="body1"
            color="textSecondary"
            component="p"
            className={classes.details}
          >
            Courier Note 2
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary">
            <EditIcon fontSize="small" /> Edit
          </Button>

          <Button size="small" color="primary">
            <DeleteIcon fontSize="small" /> Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Courier;
