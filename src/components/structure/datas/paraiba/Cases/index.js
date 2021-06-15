import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import Iframe from "../../../../iframes/Iframe";
import { useStyles } from "./styles";

export const Cases = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        {/* <Grid container justify="center">
          <Grid item>
            <CardContent>
              <Typography> Casos Confirmados </Typography>
            </CardContent>
          </Grid>
        </Grid> */}

        <Grid container justify="center">
          <Grid item>
            <CardContent>
              <Iframe
                width={1 / 3}
                height={1 / 2}
                src="https://app.powerbi.com/view?r=eyJrIjoiNzg3ZDQxYjgtNzQ2ZS00YzAxLTg4YmMtNTRmODFlYmJmMzY5IiwidCI6IjA3MzU5ODdlLWIxYmQtNDg0Ni1iM2ZhLTQ5NGE0OGUwMjI0MSJ9"
              />
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};
