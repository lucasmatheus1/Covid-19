import React from "react";
import { Box, Grid, Card, CardContent, Typography } from "@material-ui/core";
import Iframe from "../../../../iframes/Iframe";
import { useStyles } from "./styles";

var width = window.screen.availWidth;
//var height = window.screen.availHeight;

export const TableCases = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <Card className={classes.card}>
            {/* <Grid container justify="center">
              <Grid item>
                <CardContent>
                  <Typography> Tabela de Casos - Mundo </Typography>
                </CardContent>
              </Grid>
            </Grid> */}

            <Grid container justify="center" alignContent="center">
              <Grid item>
                <Iframe
                  width={1 / 2}
                  height={1 / 2}
                  src="https://app.powerbi.com/view?r=eyJrIjoiYmJmZTgzNWYtYTg2ZC00MDZkLWJhODktMWUyMDM4ODRlYWNhIiwidCI6IjA3MzU5ODdlLWIxYmQtNDg0Ni1iM2ZhLTQ5NGE0OGUwMjI0MSJ9"
                />
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
