import React from "react";
import DenseAppBar from "../../components/structure/appbar/AppBar";
import { Footer } from "../../components/structure/footer";
import { makeStyles } from "@material-ui/core/styles";
import { TextContent } from "../../components/structure/content/TextContent";

//import data from "./datasArticles";
import { Grid, Box, Typography } from "@material-ui/core";

import Search from "../search.js";

const useStyles = makeStyles((theme) => ({
  root2: {
    display: "flex",
    flexDirection: "column",
    marginTop: "55px",
    overflowX: "hidden",
    overflowY: "hidden",
    minHeight: "93vh",
  },

  title2: {
    marginLeft: "10%",
    marginRight: "10%",
  },

  root: {
    display: "flex",
    flexDirection: "column",
    marginTop: 35,
    overflowX: "hidden",
    overflowY: "hidden",
    minHeight: "93vh",
    marginLeft: "20%",
    marginRight: "20%",
  },
  title: { marginTop: 50, marginLeft: 20, marginRight: 20, color: "#343894" },
  text: {
    marginLeft: "10%",
    marginRight: "10%",
  },
  imgs: {
    marginLeft: 20,
  },
  img: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: 6,
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

// function SecondaryTitle(props) {
//   const style = makeStyles((theme) => ({
//     style: {
//       color: "#5e6bf7",
//       fontSize: props.sizeFont,
//     },
//   }));
//   const classe = style();

//   return (
//     <div>
//       <Typography className={classe.style} variant="h4" color="#1a237e">
//         {props.text}
//       </Typography>
//     </div>
//   );
// }

export function Articles(props) {
  window.scrollTo(0, 0);

  const classes = useStyles();

  return (
    <div className={classes.root2}>
      <div className={classes.root}>
        <DenseAppBar />

        <Grid
          container
          direction="column"
          alignItems="flex-start"
          justify="flex-start"
          spacing={1}
        >
          <Grid item>
            <div className={classes.title2}>
              <Box borderLeft={10} borderColor="#1090d8">
                <Typography variant="h4" className={classes.title}>
                  Artigos
                </Typography>
              </Box>
            </div>
          </Grid>
          <Space bottom={10} />
          <Grid item>
            <Search
              collection="articles"
              document="articles"
              column1="Data"
              column2="Tipo"
              column3="Título"
            />
          </Grid>
        </Grid>

        <Space bottom={30} />
      </div>
      <Footer />
    </div>
  );
}
