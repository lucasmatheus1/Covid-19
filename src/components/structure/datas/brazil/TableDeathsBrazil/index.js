import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import Iframe from "../../../../iframes/Iframe";
import { useStyles } from "./styles";

//var width = window.screen.availWidth;
//var height = window.screen.availHeight;

export const TableDeathsBrazil = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Grid container justify="center">
          {/* <Grid item>
            <CardContent>
              <Typography> Casos - Brasil </Typography>
            </CardContent>
          </Grid> */}
        </Grid>
        <CardContent>
          <Iframe
            width={1 / 3}
            height={1 / 2}
            src="https://app.powerbi.com/view?r=eyJrIjoiMGZjYjc2NjktMDIzNy00OGNjLWIwNzAtNTk0OThkYWNkMGIxIiwidCI6IjA3MzU5ODdlLWIxYmQtNDg0Ni1iM2ZhLTQ5NGE0OGUwMjI0MSJ9"
          />
        </CardContent>
      </Card>
    </div>
  );
};
