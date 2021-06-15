import React from "react";
import { Container } from "@material-ui/core";
import { useStyles } from "./styles";

export const ContentParaiba = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.content}>Conteúdo da Paraíba</Container>
    </div>
  );
};
