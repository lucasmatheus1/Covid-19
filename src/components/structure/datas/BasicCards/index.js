import React from "react";
import { Paper, Grid } from "@material-ui/core";
import { useStyles } from "./styles";
import Iframe from "../../../../components/iframes/Iframe";

//import * as pbi from "powerbi-client";

function detectMobile() {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i) ||
    navigator.userAgent.match(/iPhone/i)
  ) {
    return true;
  } else {
    return false;
  }
}

export const BasicCards = (props) => {
  var proportionIframeWidth = 0.8;
  var proportionIframeHeight = 0.13;

  var mobile = detectMobile();
  if (mobile === true) {
    proportionIframeWidth = 0.8;
    proportionIframeHeight = 0.8;
  }

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={5} alignItems="center" justify="center">
        <Grid item>
          <Paper className={classes.paper}>
            <script src="/powerbi-client/dist/powerbi.js"></script>

            <Iframe
              width={proportionIframeWidth}
              height={proportionIframeHeight}
              src={props.src}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
