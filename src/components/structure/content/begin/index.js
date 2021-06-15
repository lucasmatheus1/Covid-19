import React, { useState, useLayoutEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "@material-ui/core/Link";
import { Link as LinkRouter } from "react-router-dom";

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
          setSize([
            window.innerWidth * proportionWidth,
            window.innerHeight * 0.55 * proportionHeight,
          ]);
        } else if (window.innerWidth < 900) {
          setSize([
            window.innerWidth * proportionWidth,
            window.innerHeight * 0.5 * proportionHeight,
          ]);
        } else if (window.innerWidth < 1024) {
          setSize([
            window.innerWidth * proportionWidth,
            window.innerHeight * 0.6 * proportionHeight,
          ]);
        } else {
          setSize([
            widthScreen * proportionWidth,
            heightScreen * 0.91 * proportionHeight,
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

export const Image = (props) => {
  const [width, height] = useWindowSize();
  return <img alt="img" src={props.src} width={width} height={height} />;
};

export const Begin = (props) => {
  return (
    <Carousel autoPlay infiniteLoop interval={20000}>
      {props.obj.map((item) => {
        return (
          <div>
            {item.url[0] === "/" ? (
              <div>
                <LinkRouter to={item.url}>
                  <div>
                    <Image src={item.image} />
                  </div>
                </LinkRouter>
              </div>
            ) : (
              <div>
                <Link href={item.url} target="_blank" rel="noopener noreferrer">
                  <div>
                    <Image src={item.image} />
                  </div>
                </Link>
              </div>
            )}
          </div>
        );
      })}
    </Carousel>
  );
};
