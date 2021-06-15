import React, { useState, useLayoutEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);

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

  useLayoutEffect(() => {
    function updateSize() {
      var widthScreen = window.innerWidth;
      var heightScreen = window.innerHeight;
      if (detectMobile() === true) {
        widthScreen = widthScreen / 28;
        heightScreen = heightScreen / 28;
        if (widthScreen >= heightScreen) {
          setSize([widthScreen, heightScreen * 0.91]);
        } else {
          if (widthScreen / heightScreen < 0.1) {
            setSize([0, 0]);
          } else if (widthScreen / heightScreen < 0.2) {
            setSize([widthScreen, heightScreen * 0.15]);
          } else if (widthScreen / heightScreen < 0.3) {
            setSize([widthScreen, heightScreen * 0.2]);
          } else if (widthScreen / heightScreen < 0.4) {
            setSize([widthScreen, heightScreen * 0.2]);
          } else if (widthScreen / heightScreen < 0.5) {
            setSize([widthScreen, heightScreen * 0.25]);
          } else if (widthScreen / heightScreen < 0.6) {
            setSize([widthScreen, heightScreen * 0.3]);
          } else {
            setSize([widthScreen, heightScreen * 0.5]);
          }
        }
      } else {
        widthScreen = widthScreen / 60;
        heightScreen = heightScreen / 60;
        if (window.innerWidth < 290) {
          setSize([0, 0]);
        } else if (window.innerWidth < 320) {
          setSize([widthScreen, heightScreen * 0.15]);
        } else if (window.innerWidth < 480) {
          setSize([widthScreen, heightScreen * 0.3]);
        } else if (window.innerWidth < 720) {
          setSize([widthScreen, heightScreen * 0.5]);
        } else if (window.innerWidth < 768) {
          setSize([widthScreen, heightScreen * 0.55]);
        } else if (window.innerWidth < 900) {
          setSize([widthScreen, heightScreen * 0.5]);
        } else if (window.innerWidth < 1024) {
          setSize([widthScreen, heightScreen * 0.6]);
        } else {
          setSize([widthScreen, heightScreen * 0.91]);
        }
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export const Divider = (props) => {
  const classes = useStyles();
  const sizeScream = useWindowSize();
  const width = sizeScream[0];

  return (
    <div className={classes.root}>
      <h1
        style={{
          marginTop: 25,
          margin: 10,
          height: "auto",
          color: "#7783fc",
          fontSize: width,
          textIndent: "2%",
          borderBottomColor: "#1a237e",
          borderBottom: "5px",
        }}
      >
        {props.text}
      </h1>
    </div>
  );
};
