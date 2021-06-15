import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@material-ui/core";
import Iframe from "../../../../iframes/Iframe";
import { useStyles } from "./styles";

var width = window.screen.availWidth;
//var height = window.screen.availHeight;

export const MapBrazil = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <Card className={classes.card}>
            <Grid container justify="center">
              <Grid item>
                <CardContent>
                  {" "}
                  {/* TODO: Depois podem trocar esse Titulo 
                  <Typography className={classes.typography}>
                    {" "}
                    Mapa - Brasil{" "}
                  </Typography>
                  */}
                </CardContent>
              </Grid>
            </Grid>
            <Grid container justify="center" alignContent="center">
              <Grid item>
                <CardContent className={classes.cardContent}>
                  <Iframe
                    width={1 / 1.9}
                    height={1 / 1.9}
                    src="https://app.powerbi.com/view?r=eyJrIjoiMzk5MWI1YTktYjk4Zi00ZDQ3LTk1MmUtMDhjMzQyYTZjMTU3IiwidCI6IjA3MzU5ODdlLWIxYmQtNDg0Ni1iM2ZhLTQ5NGE0OGUwMjI0MSJ9"
                  />
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
