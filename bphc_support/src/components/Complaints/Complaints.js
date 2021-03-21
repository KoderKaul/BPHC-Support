import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Complaint from './Complaint/Complaint';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    smMargin: {
      margin: theme.spacing(1),
    },
    actionDiv: {
      textAlign: 'center',
    },
  }));

const Complaints = ({ setCurrentId }) => {
  const problems = useSelector((state) => state.problems);
  const classes = useStyles();
  console.log(problems);
  
  return (
    !problems.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {problems.map((problem) => (
          <Grid key={problem._id} item xs={12} sm={6} md={6}>
            <Complaint post={problem} setCurrentId={setCurrentId} />
            <h1>MUTH</h1>
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Complaints;
