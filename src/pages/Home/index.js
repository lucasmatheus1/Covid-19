import React, { useState, useEffect, useLayoutEffect } from "react";
import DenseAppBar from "../../components/structure/appbar/AppBar";
import { Footer } from "../../components/structure/footer";
import { makeStyles } from "@material-ui/core/styles";
import { Begin } from "../../components/structure/content/begin";

import data from "./datasHome";
import { Grid, CircularProgress } from "@material-ui/core";
import { Link as LinkRouter } from "react-router-dom";

import Firebase from "../../db/firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f3f4f5",
    marginTop: 50,
    overflowX: "hidden",
    overflowY: "hidden",
    minHeight: "93vh",
  },
  imgs: { marginLeft: 20, marginRight: 20 },
  img: {
    width: theme.spacing(35),
    height: theme.spacing(30),
    margin: 6,
  },
  title: { marginTop: 50, marginLeft: 20, marginRight: 20 },
  text: {
    marginLeft: 20,
    marginRight: 20,
  },
  textLoad: {
    fontFamily: "monospace",
    color: "#5e6bf7",
    fontSize: 15,
  },
  boxs: {
    marginLeft: 20,
  },
}));

var db = Firebase.firestore();

export const Image = (props) => {
  const [width, height] = useWindowSize();
  return <img alt="img" src={props.src} width={width} height={height} />;
};

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

const stringTreatment = (object) => {
  var images = Object.values(object);
  var listAux = [];

  var listLinks = Object.keys(object);
  listLinks.map((item, index) => {
    listAux.push({
      image: images[index],
      url: item,
    });
  });

  // listAux.sort(function (a, b) {
  //   if (a.content > b.content) return 1;
  //   else if (b.content > a.content) return -1;
  //   else return 0;
  // });

  return listAux;
};

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);

  function detectMobile() {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      return true;
    } else {
      return false;
    }
  }

  useLayoutEffect(() => {
    function updateSize() {
      var widthScreen = window.innerWidth;
      var heightScreen = window.innerHeight;
      if (detectMobile() === true) {
        if (widthScreen >= heightScreen) {
          setSize([widthScreen, heightScreen * 0.91]);
        } else {
          const proportionSmartphoneHeight = 0.7;
          if (widthScreen / heightScreen < 0.1) {
            setSize([0, 0]);
          } else if (widthScreen / heightScreen < 0.2) {
            setSize([
              widthScreen,
              heightScreen * 0.15 * proportionSmartphoneHeight,
            ]);
          } else if (widthScreen / heightScreen < 0.3) {
            setSize([
              widthScreen,
              heightScreen * 0.2 * proportionSmartphoneHeight,
            ]);
          } else if (widthScreen / heightScreen < 0.4) {
            setSize([
              widthScreen,
              heightScreen * 0.2 * proportionSmartphoneHeight,
            ]);
          } else if (widthScreen / heightScreen < 0.5) {
            setSize([
              widthScreen,
              heightScreen * 0.25 * proportionSmartphoneHeight,
            ]);
          } else if (widthScreen / heightScreen < 0.6) {
            setSize([
              widthScreen,
              heightScreen * 0.3 * proportionSmartphoneHeight,
            ]);
          } else {
            setSize([
              widthScreen,
              heightScreen * 0.4 * proportionSmartphoneHeight,
            ]);
          }
        }
      } else {
        const proportionHeight = 0.7;
        const proportionWidth = 0.9;
        if (window.innerWidth < 290) {
          setSize([0, 0]);
        } else if (window.innerWidth < 320) {
          setSize([
            window.innerWidth * proportionWidth,
            window.innerHeight * 0.15 * proportionHeight,
          ]);
        } else if (window.innerWidth < 480) {
          setSize([
            window.innerWidth * proportionWidth,
            window.innerHeight * 0.3 * proportionHeight,
          ]);
        } else if (window.innerWidth < 720) {
          setSize([
            window.innerWidth * proportionWidth,
            window.innerHeight * 0.5 * proportionHeight,
          ]);
        } else if (window.innerWidth < 768) {
          console.log("entrou 1");
          setSize([
            window.innerWidth * proportionWidth,
            window.innerHeight * 0.55 * proportionHeight,
          ]);
        } else if (window.innerWidth < 900) {
          console.log("entrou 2");
          setSize([
            window.innerWidth * proportionWidth,
            window.innerHeight * 0.5 * proportionHeight,
          ]);
        } else if (window.innerWidth < 1024) {
          console.log("entrou 3");
          setSize([
            window.innerWidth * proportionWidth,
            window.innerHeight * 0.6 * proportionHeight,
          ]);
        } else {
          console.log("entrou 4");
          setSize([
            widthScreen * proportionWidth,
            heightScreen * 0.8 * proportionHeight,
          ]);
        }
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

function getFirebase(collection, document, setState, setLoad) {
  var docProjections = db.collection(collection).doc(document);
  docProjections
    .get()
    .then(function (doc) {
      if (doc.exists) {
        var object = stringTreatment(doc.data());
        console.log(object);
        setLoad(true);
        setState(object);
      } else {
        setState([
          {
            image: "",
            url: "",
          },
        ]);
      }
    })
    .catch(function (error) {
      setState([
        {
          image: "",
          url: "",
        },
      ]);
    });
}

export function Home(props) {
  window.scrollTo(0, 0);

  const classes = useStyles();
  const [newsHome, setNewsHome] = useState([]);
  const [flagLoad, setFlagLoad] = useState(false);

  useEffect(() => {
    getFirebase("home", "news", setNewsHome, setFlagLoad);
  }, []);

  return (
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

        {flagLoad === false ? (
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item>
              <p className={classes.textLoad}>Carregando</p>
            </Grid>
            <Space top="15" />
            <Grid item>
              <CircularProgress />
            </Grid>
          </Grid>
        ) : (
          <Grid item>
            <Begin obj={newsHome} />
          </Grid>
        )}

        <Space top={25} />

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
                          <LinkRouter to={intern.link}>
                            <img
                              alt="img"
                              className={classes.img}
                              src={intern.photo}
                            ></img>
                          </LinkRouter>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>

        <Space top={25} />

        {
          // {flagLoad1 === false ? (
          //   <Grid item>
          //     <CircularProgress />
          //   </Grid>
          // ) : (
          //   <Grid item>
          //     <Grid
          //       container
          //       direction="row"
          //       spacing={1}
          //       className={classes.boxs}
          //     >
          //       {projections.map((value) => (
          //         <Grid item xs={11.5}>
          //           <a
          //             href={value.url}
          //             target="_blank"
          //             style={{ textDecoration: "none" }}
          //           >
          //             <Grid
          //               container
          //               direction="column"
          //               justify="center"
          //               alignItems="center"
          //             >
          //               <Grid item>
          //                 {" "}
          //                 <Box
          //                   bgcolor="info.main"
          //                   display="flex"
          //                   flexDirection="column"
          //                   color="info.contrastText"
          //                 >
          //                   <Box p={1} display="flex" alignItems="center">
          //                     <Typography variant="h7">
          //                       Boletim {value.content[0]}
          //                     </Typography>
          //                   </Box>
          //                   <Box p={1}>
          //                     <Typography variant="h7">
          //                       {value.content.slice(3)}
          //                     </Typography>
          //                   </Box>
          //                 </Box>
          //               </Grid>
          //             </Grid>
          //           </a>
          //         </Grid>
          //       ))}
          //     </Grid>
          //   </Grid>
          // )}
        }
      </Grid>

      <Space bottom={30} />
      <Footer />
    </div>
  );
}
