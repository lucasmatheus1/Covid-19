import React from "react";
import DenseAppBar from "../../components/structure/appbar/AppBar";
import { Footer } from "../../components/structure/footer";
import { makeStyles } from "@material-ui/core/styles";

import { TextContentClipping } from "../../components/structure/content/TextContentClipping";

import data from "./datasHealth";
import { Grid, Typography, Box } from "@material-ui/core";

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
   
  root: {
    display: "flex",
    flexDirection: "column",
    overflowX: "hidden",
    overflowY: "hidden",
    minHeight: "93vh",
    marginLeft: "20%",
    marginRight: "20%",
  },
  title: { marginTop: 50, marginLeft: 20, marginRight: 20, color: "#343894" },
  /* text: {
    marginLeft: "20%",
    marginRight: "20%",
  }, */
  imgs: {
    marginLeft: 20,
  },
  img: {
    width: theme.spacing(25),
    height: theme.spacing(23),
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

export function HealthOrganization(props) {
  window.scrollTo(0, 0);

  const classes = useStyles();

  return (
    <div className={classes.root2} > 
      <DenseAppBar />
      <div className={classes.root}>
        <Grid
          container
          direction="column"
          alignItems="flex-start"
          justify="flex-start"
          spacing={1}
        >
          <Grid item>
            <Box borderLeft={10} borderColor="#1090d8">
              <Typography variant="h4" className={classes.title}>
                Organizações de Saúde
              </Typography>
            </Box>
          </Grid>

          <Space top={25} />

          {data.orgHealth.map((paragraph) => (
            <Grid className={classes.text} item xs={11.5}>
              <Typography align="justify"> {paragraph} </Typography>
            </Grid>
          ))}

          <Space top={30} />

          <Grid item className={classes.imgs}>
            <Grid container direction="column">
              {data.arrayImgs.map((item) => {
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

          <Space top={45} />

          <Search
            collection="health"
            document="organizations"
            column1="Data"
            column2="Tipo"
            column3="Título"
          />

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

        
          </div>
      <Footer />
    </div>
  );
}
