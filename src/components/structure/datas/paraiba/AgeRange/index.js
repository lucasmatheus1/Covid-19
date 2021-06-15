import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import Iframe from "../../../../iframes/Iframe";
import { useStyles } from "./styles";

export const AgeRange = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        {/* <Grid container justify="center">
          <Grid item>
            { <CardContent>
              <Typography> Óbitos por Faixa Etária </Typography>
            </CardContent> 
          </Grid>
        </Grid> */}

        <Grid container justify="center">
          <Grid item>
            <CardContent>
              <Iframe
                width={1 / 3}
                height={1 / 2}
                src="https://app.powerbi.com/view?r=eyJrIjoiNTBlMTA4MTQtYTdmMC00NWQ1LWI4MzctZjRkNjJhNmU1ODAxIiwidCI6IjA3MzU5ODdlLWIxYmQtNDg0Ni1iM2ZhLTQ5NGE0OGUwMjI0MSJ9"
              />
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};
