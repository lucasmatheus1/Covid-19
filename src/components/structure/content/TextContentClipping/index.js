import React  from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#343894",
  },
}));



export const TextContentClipping = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h4" className={classes.title}>
        {" "}
        {props.text}{" "}
      </Typography>
    </div>
  );
};
