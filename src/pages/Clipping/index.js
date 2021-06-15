import React from "react";
import DenseAppBar from "../../components/structure/appbar/AppBar";
import { Footer } from "../../components/structure/footer";
import { makeStyles } from "@material-ui/core/styles";

import data from "./datasClipping";
import { Grid, Typography, Box, Paper, Button } from "@material-ui/core";
import { Link as LinkRouter } from "react-router-dom";

// function detectMobile() {
//   if (
//     navigator.userAgent.match(/Android/i) ||
//     navigator.userAgent.match(/webOS/i) ||
//     navigator.userAgent.match(/iPad/i) ||
//     navigator.userAgent.match(/iPod/i) ||
//     navigator.userAgent.match(/BlackBerry/i) ||
//     navigator.userAgent.match(/Windows Phone/i)
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f3f4f5",
    marginTop: "55px",
    overflowX: "hidden",
    overflowY: "hidden",
    minHeight: "93vh",
  },
  content: {
    marginTop: "2%",
    marginLeft: "20%",
    marginRight: "20%",
  },

  text: {
    marginLeft: 40,
    marginRight: 40,
  },
  link: {
    textDecoration: "none",
    margin: 5,
  },

  title: {
    marginLeft: "10px",
    color: "#343894",
  },

  profile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: 200,
    margin: "auto",
    padding: 5,
  },
}));

function Space(props) {
  const style = makeStyles((theme) => ({
    space: {
      marginLeft: props.left,
      marginRight: props.right,
      marginTop: props.top,
      marginBottom: props.bottom,
    },
  }));
  const classe = style();

  return <div className={classe.space}></div>;
}

export function ClippingPage(props) {
  window.scrollTo(0, 0);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DenseAppBar />

      <div className={classes.content}>
        <Box borderLeft={10} borderColor="#1090d8">
          <Typography variant="h4" className={classes.title}>
            Clipping
          </Typography>
        </Box>

        <Space top={40} />

        {data.clipping.map((paragraph) => (
          <Typography variant="body" align="justify">
            {" "}
            {paragraph}{" "}
          </Typography>
        ))}

        <Space top={40} />

        <Grid item>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="center"
            spacing={5}
          >
            <Grid item>
              <LinkRouter to="/boletins" className={classes.link}>
                <Box borderLeft={10} borderColor="#1090d8">
                  <Paper className={classes.profile} elevation={3} square>
                    <Typography
                      variant="subtitle"
                      align="center"
                      justify="center"
                      color="primary"
                    >
                      Boletins
                    </Typography>
                  </Paper>
                </Box>
              </LinkRouter>
            </Grid>
            <Grid item>
              <LinkRouter to="/noticias" className={classes.link}>
                <Box borderLeft={10} borderColor="#1090d8">
                  <Paper className={classes.profile} elevation={3} square>
                    <Typography
                      variant="subtitle"
                      align="center"
                      justify="center"
                      color="primary"
                    >
                      Notícias
                    </Typography>
                  </Paper>
                </Box>
              </LinkRouter>
            </Grid>
            <Grid item>
              <LinkRouter to="/artigos" className={classes.link}>
                <Box borderLeft={10} borderColor="#1090d8">
                  <Paper className={classes.profile} elevation={3} square>
                    <Typography
                      variant="subtitle"
                      align="center"
                      justify="center"
                      color="primary"
                    >
                      Artigos
                    </Typography>
                  </Paper>
                </Box>
              </LinkRouter>
            </Grid>
            <Grid item>
              <LinkRouter to="/orgsaude" className={classes.link}>
                <Box borderLeft={10} borderColor="#1090d8">
                  <Paper className={classes.profile} elevation={3} square>
                    <Typography
                      variant="subtitle"
                      align="center"
                      justify="center"
                      color="primary"
                    >
                      Organizações de Saúde
                    </Typography>
                  </Paper>
                </Box>
              </LinkRouter>
            </Grid>
            <Grid item>
              <LinkRouter to="/podcastsevideos" className={classes.link}>
                <Box borderLeft={10} borderColor="#1090d8">
                  <Paper className={classes.profile} elevation={3} square>
                    <Typography
                      variant="subtitle"
                      align="center"
                      justify="center"
                      color="primary"
                    >
                      Podcasts e Vídeos
                    </Typography>
                  </Paper>
                </Box>
              </LinkRouter>
            </Grid>
          </Grid>
        </Grid>

        <Space top={20} bottom={200} />
      </div>
      <Footer />
    </div>
  );
}
