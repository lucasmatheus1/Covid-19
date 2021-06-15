import React, { useState, useLayoutEffect } from "react";
//import { useStyles } from "./styles";

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
        if (window.innerWidth < 290) {
          setSize([0, 0]);
        } else if (window.innerWidth < 320) {
          setSize([window.innerWidth, window.innerHeight * 0.15]);
        } else if (window.innerWidth < 480) {
          setSize([window.innerWidth, window.innerHeight * 0.3]);
        } else if (window.innerWidth < 720) {
          setSize([window.innerWidth, window.innerHeight * 0.5]);
        } else if (window.innerWidth < 768) {
          setSize([window.innerWidth, window.innerHeight * 0.55]);
        } else if (window.innerWidth < 900) {
          setSize([window.innerWidth, window.innerHeight * 0.5]);
        } else if (window.innerWidth < 1024) {
          setSize([window.innerWidth, window.innerHeight * 0.6]);
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

const imgs = {
  img1: "https://i.imgur.com/nrMVRte.png",
  img2: "https://i.imgur.com/t3tv7g1.png",
};

export const Image = (props) => {
  const [width, height] = useWindowSize();
  var heightChanged = height;
  var margin = 0;

  if (props.type === 2) {
    heightChanged /= 11;
    margin = 20;
  } else {
    heightChanged /= 3;
  }

  return (
    <img
      alt='divider' 
      style={{
        marginTop: margin,
      }}
      src={props.src}
      width={width}
      height={heightChanged}
    />
  );
};

export const ImageDivider = (props) => {
  return (
    <div>
      <Image src={imgs["img" + props.numberImage]} type={props.numberImage} />
    </div>
  );
};
