import React, { useLayoutEffect, useState } from "react";
import { Grid, Card, CardContent } from "@material-ui/core";
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

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateSize() {
      var widthScreen = window.innerWidth;
      var heightScreen = window.innerHeight;
      if (detectMobile() === true) {
        if (widthScreen >= heightScreen) {
          setSize([widthScreen, heightScreen * 0.91]);
        } else {
          const proportionSmartphoneHeight = 0.7;
          if (widthScreen / heightScreen < 0.1) {
            setSize([0, 0]);
          } else if (widthScreen / heightScreen < 0.2) {
            setSize([
              widthScreen,
              heightScreen * 0.15 * proportionSmartphoneHeight,
            ]);
          } else if (widthScreen / heightScreen < 0.3) {
            setSize([
              widthScreen,
              heightScreen * 0.2 * proportionSmartphoneHeight,
            ]);
          } else if (widthScreen / heightScreen < 0.4) {
            setSize([
              widthScreen,
              heightScreen * 0.2 * proportionSmartphoneHeight,
            ]);
          } else if (widthScreen / heightScreen < 0.5) {
            setSize([
              widthScreen,
              heightScreen * 0.25 * proportionSmartphoneHeight,
            ]);
          } else if (widthScreen / heightScreen < 0.6) {
            setSize([
              widthScreen,
              heightScreen * 0.3 * proportionSmartphoneHeight,
            ]);
          } else {
            setSize([
              widthScreen,
              heightScreen * 0.4 * proportionSmartphoneHeight,
            ]);
          }
        }
      } else {
        const proportionHeight = 0.7;
        const proportionWidth = 0.9;
        if (window.innerWidth < 290) {
          setSize([0, 0]);
        } else if (window.innerWidth < 320) {
          setSize([
            window.innerWidth * proportionWidth,
            window.innerHeight * 0.15 * proportionHeight,
          ]);
        } else if (window.innerWidth < 480) {
          setSize([
            window.innerWidth * proportionWidth,
            window.innerHeight * 0.3 * proportionHeight,
          ]);
        } else if (window.innerWidth < 720) {
          setSize([
            window.innerWidth * proportionWidth,
            window.innerHeight * 0.5 * proportionHeight,
          ]);
        } else if (window.innerWidth < 768) {
          console.log("entrou 1");
          setSize([
            window.innerWidth * proportionWidth,
            window.innerHeight * 0.55 * proportionHeight,
          ]);
        } else if (window.innerWidth < 900) {
          console.log("entrou 2");
          setSize([
            window.innerWidth * proportionWidth,
            window.innerHeight * 0.5 * proportionHeight,
          ]);
        } else if (window.innerWidth < 1024) {
          console.log("entrou 3");
          setSize([
            window.innerWidth * proportionWidth,
            window.innerHeight * 0.6 * proportionHeight,
          ]);
        } else {
          console.log("entrou 4");
          setSize([
            widthScreen * proportionWidth,
            heightScreen * 0.8 * proportionHeight,
          ]);
        }
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

const Image = (props) => {
  const [width, height] = useWindowSize();
  return (
    <img
      alt={props.alt}
      src={props.src}
      width={props.width * width}
      height={props.height * height}
    />
  );
};

export const SquareCharts = (props) => {
  var proportionImageWidth = 0.4;
  var proportionImageHeight = 0.8;

  var mobile = detectMobile();
  if (mobile === true) {
    proportionImageWidth = 0.7;
    proportionImageHeight = 1;
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
                  <Image
                    src={props.src}
                    alt={props.alt}
                    width={proportionImageWidth}
                    height={proportionImageHeight}
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
