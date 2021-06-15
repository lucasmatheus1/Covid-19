import React from "react";
import { Grid, Card, CardContent } from "@material-ui/core";
import Iframe from "../../../../iframes/Iframe";
import { useStyles } from "./styles";

function detectMobile() {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true;
  } else {
    return false;
  }
}

export const Charts = (props) => {
  
  var proportionIframeWidth = 0.8;
  var proportionIframeHeight = 0.8;

  var mobile = detectMobile();
  if (mobile === true) {
    proportionIframeWidth = 0.8;
    proportionIframeHeight = 0.8;
  }

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
                  <Iframe
                    width={proportionIframeWidth}
                    height={proportionIframeHeight}
                    src={props.src}
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
