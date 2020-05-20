import React, { useEffect } from "react";
import GridItem from "./GridItem/GridItem";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
    flexGrow: 1,
  },
}));

const colors = ["#ff5252", "#2196f3", "#1de9b6", "#fb8c00"];

function GridContainer(props) {
  const classes = useStyles();
  const { columnName, value, length } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={1}>
          {columnName.map((item, i) => (
            <GridItem key={i} item={item} length={length} />
          ))}
          {value.map((item, i) => (
            <GridItem key={i} item={item} length={length} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default React.memo(GridContainer);
