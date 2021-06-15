import React from "react";
import { Grid, Card, CardContent } from "@material-ui/core";
import Iframe from "../../../../iframes/Iframe";
import { useStyles } from "./styles";


export const Ranking = (props) => {
  
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item></Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <Card className={classes.card}>
            <Grid container justify="center" alignContent="center">
              <Grid item>
                <CardContent className={classes.cardContent}>
                  <Iframe width={0.8} height={0.36} src={props.src} />
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
