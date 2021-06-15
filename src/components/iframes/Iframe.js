import React, { useState, useLayoutEffect } from "react";
import { iframeStyles } from "./iframeStyle";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth < 550) {
        setSize([440, window.innerHeight]);
      } else {
        setSize([window.innerWidth, window.innerHeight]);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export default function Iframe(props) {
  const classes = iframeStyles();
  const sizeScream = useWindowSize(); // [width, heigth], to remove warnings
  const width = sizeScream[0];
  return (
    <div>
      <div className={classes.container}>
        <iframe
          title={props.title}
          className={classes.iframe}
          src={props.src}
          width={width * props.width}
          height={width * props.height}
          frameborder="0"
          allowFullScreen="true"
        ></iframe>
      </div>
    </div>
  );
}
