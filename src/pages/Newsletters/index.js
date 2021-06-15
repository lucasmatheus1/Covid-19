import React, { useState, useEffect } from "react";
import DenseAppBar from "../../components/structure/appbar/AppBar";
import { Footer } from "../../components/structure/footer";
import { makeStyles } from "@material-ui/core/styles";

import data from "./datasNewsletters";
import {
  Grid,
  Typography,
  CircularProgress,
  CardContent,
  Card,
  Box,
} from "@material-ui/core";
// import { Link as LinkRouter } from "react-router-dom";

import Firebase from "../../db/firebase";

const useStyles = makeStyles((theme) => ({
  root2: {
    display: "flex",
    flexDirection: "column",
    marginTop: "55px",
    overflowX: "hidden",
    overflowY: "hidden",
    minHeight: "93vh",
  },

  root3: {
    flexGrow: 1,
    marginLeft: "20%",
    marginTop: "20px",
  },

  title3: {
    marginLeft: "10px",
    color: "#343894",
  },

  root: {
    display: "flex",
    flexDirection: "column",
    /* backgroundColor: "#f3f4f5", */
    marginLeft: "20%",
    marginRight: "20%",

    overflowX: "hidden",
    overflowY: "hidden",
    minHeight: "93vh",
  },
  title: { marginTop: 50, marginLeft: 20, marginRight: 20, color: "#343894" },
  /* text: {
    marginLeft: "20%",
    marginRight: "20%",
  }, */
  imageBrazil: {
    width: theme.spacing(35),
    height: theme.spacing(40),
  },
  imageParaiba: { width: theme.spacing(40), height: theme.spacing(30) },
  boxs: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    border: "1px solid #343894",
    borderRadius: 15,
    fontFamily: "Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContent: {
    marginTop: -20,
  },
}));

var db = Firebase.firestore();

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

function SecondaryTitle(props) {
  const style = makeStyles((theme) => ({
    style: {
      color: "#343894",
      fontSize: props.sizeFont,
    },
  }));
  const classe = style();

  return (
    <div>
      <Typography className={classe.style} variant="h4" color="#1a237e">
        {props.text}
      </Typography>
    </div>
  );
}

const stringTreatment = (object) => {
  var listTexts = Object.values(object);
  var contents = [];
  var listAux = [];

  listTexts.map((item) => {
    contents.push(item);
  });

  var listLinks = Object.keys(object);
  listLinks.map((item, index) => {
    listAux.push({
      content: contents[index],
      url: item,
    });
  });

  listAux.sort(function (a, b) {
    if (a.content > b.content) return 1;
    else if (b.content > a.content) return -1;
    return 0;
  });
  return listAux;
};

function getFirebase(collection, document, setState, setLoad) {
  var docProjections = db.collection(collection).doc(document);
  docProjections
    .get()
    .then(function (doc) {
      if (doc.exists) {
        var object = stringTreatment(doc.data());
        setLoad(true);
        console.log(object);
        setState(object);
      } else {
        setState([
          {
            content: "1. Ocorreu um erro, atualize a página, por favor.",
            url: "",
          },
        ]);
      }
    })
    .catch(function (error) {
      setState([
        {
          content: "1. Ocorreu um erro, atualize a página, por favor.",
          url: "",
        },
      ]);
    });
}

export function Newsletter(props) {
  window.scrollTo(0, 0);

  const classes = useStyles();

  const [projections, setProjections] = useState([]);
  const [ufcg, setUfcg] = useState([]);
  const [flagLoad1, setFlagLoad1] = useState(false);
  const [flagLoad2, setFlagLoad2] = useState(false);

  useEffect(() => {
    getFirebase("newsletter", "projections", setProjections, setFlagLoad1);
    getFirebase("newsletter", "UFCG", setUfcg, setFlagLoad2);
  }, []);

  return (
    <div className={classes.root2}>
      <div className={classes.root3}>
        <Box borderLeft={10} borderColor="#1090d8">
          <Typography variant="h4" className={classes.title3}>
            {"Boletins"}
          </Typography>
        </Box>
      </div>
      <div className={classes.root}>
        <DenseAppBar />

        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          spacing={1}
        >
          <Space top={25} />

          {data.newsletter.map((paragraph) => (
            <Grid className={classes.text} item>
              <Typography align="justify"> {paragraph} </Typography>
            </Grid>
          ))}

          <Space top={25} />

          <Grid item>
            <SecondaryTitle text="Boletins de projeções" sizeFont={24} />
          </Grid>

          <Space top={30} />

          {flagLoad1 === false ? (
            <Grid item>
              <CircularProgress />
            </Grid>
          ) : (
            <Grid item>
              <Grid
                container
                direction="row"
                spacing={3}
                className={classes.boxs}
              >
                {projections.map((value) => (
                  <Grid item>
                    <a
                      href={value.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      <Card className={classes.card}>
                        <Grid
                          container
                          justify="center"
                          alignContent="center"
                          direction="column"
                        >
                          <Grid item>
                            <CardContent>
                              <Typography
                                variant="h6"
                                justify="center"
                                color="primary"
                              >
                                <b>
                                  Boletim {value.content[0] + value.content[1]}
                                </b>
                              </Typography>
                            </CardContent>
                          </Grid>
                        </Grid>
                        {/* <Grid item>
                              <CardContent className={classes.cardContent}>
                                <Typography variant="h7">
                                  {value.content.slice(4)}
                                </Typography>
                              </CardContent>
                            </Grid> */}
                      </Card>
                    </a>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          )}

          <Space top={25} />

          <Grid item>
            <SecondaryTitle text="Boletins epidemiológicos" sizeFont={24} />
          </Grid>

          <Space bottom={30} />

          <Grid item>
            <Grid
              container
              direction="row"
              spacing={1}
              alignItems="center"
              justify="center"
            >
              <Grid item>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://coronavirus.saude.gov.br/boletins-epidemiologicos"
                >
                  <img
                    alt="img"
                    src={data.images[1]}
                    className={classes.imageBrazil}
                  ></img>
                </a>
              </Grid>
              <Grid item>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://paraiba.pb.gov.br/diretas/saude/coronavirus/profissionais-de-saude/boletins-e-notas-tecnicas"
                >
                  <img
                    alt="img"
                    src={data.images[0]}
                    className={classes.imageParaiba}
                  ></img>
                </a>
              </Grid>
            </Grid>
          </Grid>

          <Space top={25} />

          <Grid item>
            <SecondaryTitle text="Boletins da UFCG" sizeFont={24} />
          </Grid>

          <Space bottom={30} />

          {flagLoad2 === false ? (
            <Grid item>
              <CircularProgress />
            </Grid>
          ) : (
            <Grid item>
              <Grid
                container
                direction="row"
                spacing={6}
                className={classes.boxs}
              >
                {ufcg.map((value) => (
                  <Grid className={classes.secondaryTitle} item xs={11.5}>
                    <a
                      href={value.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      <Card className={classes.card}>
                        <Grid
                          container
                          justify="center"
                          alignContent="center"
                          direction="column"
                        >
                          <Grid item>
                            <Grid
                              container
                              direction="column"
                              justify="center"
                              alignContent="center"
                            >
                              <Grid item>
                                <CardContent>
                                  <Typography
                                    variant="h6"
                                    justify="center"
                                    color="primary"
                                  >
                                    <b>
                                      Boletim{" "}
                                      {value.content[0] + value.content[1]}
                                    </b>
                                  </Typography>
                                </CardContent>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item>
                            <CardContent className={classes.cardContent}>
                              <Typography variant="h6" color="primary">
                                {value.content.slice(4)}
                              </Typography>
                            </CardContent>
                          </Grid>
                        </Grid>
                      </Card>
                    </a>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          )}
        </Grid>

        <Space bottom={30} />
      </div>
      <Footer />
    </div>
  );
}
