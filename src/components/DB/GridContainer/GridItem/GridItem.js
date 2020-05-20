import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
  },
}));

function GridItem(props) {
  const classes = useStyles();
  const { item, length } = props;

  const handleTitle = () => {
    if (length === 4) return 3;
    if (length === 6) return 2;
    if (length === 5) return 2;
    if (length === 2) return 6;
    if (length === 3) return 4;
  };

  return (
    <Grid item xs={handleTitle()}>
      <Paper className={classes.paper}>{item}</Paper>
    </Grid>
  );
}

export default GridItem;
