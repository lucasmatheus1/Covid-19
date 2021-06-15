import React from "react";
import DenseAppBar from "../../components/structure/appbar/AppBar";
import { Footer } from "../../components/structure/footer";
import { makeStyles } from "@material-ui/core/styles";

import { TextContent } from "../../components/structure/content/TextContent";

import data from "./datasNews";
import { Grid, Typography, Box } from "@material-ui/core";

import Search from "../search.js";

const useStyles = makeStyles((theme) => ({
  root2: {
    display: "flex",
    flexDirection: "column",
    marginTop: 35,
    overflowX: "hidden",
    overflowY: "hidden",
    minHeight: "93vh",
  },

  root: {
    display: "flex",
    flexDirection: "column",
    marginTop: 35,
    overflowX: "hidden",
    overflowY: "hidden",
    minHeight: "93vh",
    marginLeft: "10%",
    marginRight: "10%",
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
  search: {
    marginLeft: 100,
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

export function News(props) {
  window.scrollTo(0, 0);

  const classes = useStyles();

  return (
    <div className={classes.root2}>
      <div className={classes.root}>
        <DenseAppBar />

        <br />
        <TextContent text="Notícias" />

        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          spacing={1}
        >
          <Grid item></Grid>

          <Space top={25} />

          {data.news.map((paragraph) => (
            <Grid className={classes.text} item xs={11.5}>
              <Typography align="justify"> {paragraph} </Typography>
            </Grid>
          ))}

          <Space top={45} />
          <div className={classes.search}>
            <Search
              collection="news"
              document="news"
              column1="Data"
              column2="Tipo"
              column3="Título"
            />
          </div>

          <Space top={30} />

          <Grid item className={classes.imgs}>
            <Grid container direction="column">
              {data.arrayImages.map((item) => {
                return (
                  <Grid item>
                    <Grid container direction="row">
                      {item.map((intern) => {
                        return (
                          <Grid item>
                            {" "}
                            <a
                              href={intern.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                alt="img"
                                className={classes.img}
                                src={intern.img}
                              ></img>
                            </a>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Space top={30} />

          <Grid className={classes.text} item xs={11.5}>
            <Typography style={{ fontSize: 15 }}>
              {" "}
              <b>{data.disclaimer[0].slice(0, 10)} </b>{" "}
            </Typography>
          </Grid>
          <Space top={10} />

          {data.disclaimer.map((paragraph) => (
            <Grid className={classes.text} item xs={11.5}>
              <Typography style={{ fontSize: 15 }} align="justify">
                {" "}
                {paragraph.slice(11)}{" "}
              </Typography>
            </Grid>
          ))}

          <Space bottom={30} />
        </Grid>

        <Space bottom={30} />
      </div>
      <Footer />
    </div>
  );
}
