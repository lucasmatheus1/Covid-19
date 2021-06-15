import React from "react";
import DenseAppBar from "../../components/structure/appbar/AppBar";
import { Footer } from "../../components/structure/footer";
import { makeStyles } from "@material-ui/core/styles";
import { TextContentClipping } from "../../components/structure/content/TextContentClipping";

import data from "./datasContact";
import { Grid, Typography, Link, Box } from "@material-ui/core";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

/* import Firebase from "../../db/firebase"; */

function detectMobile() {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/IPhone/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true;
  } else {
    return false;
  }
}

/* function setFirebase(collection, document, data) {
  Firebase.firestore().collection(collection).doc(document).set(data);
} */

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f3f4f5",
    marginTop: 35,
    overflowX: "hidden",
    overflowY: "hidden",
    minHeight: "93vh",
  },
  content: {
    marginTop: "2%",
    marginLeft: "20%",
    marginRight: "20%",
  },
  title: {
    marginLeft: 5,
    marginBottom: 10,
    marginTop: 40,
    color: "#343894",
  },

  text: { marginRight: 20, marginLeft: 20, marginTop: 13 },
  textContent: {
    marginRight: 20,
    marginLeft: 20,
  },
  divider: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 35,
    fontSize: 22,
    color: "#5e6bf7",
  },
  imgs: {
    marginLeft: 30,
  },
  avatar: {
    width: theme.spacing(23),
    height: theme.spacing(20),
  },
  icons: {},

  icon: {
    padding: theme.spacing(2),
    width: theme.spacing(4),
    height: theme.spacing(3),
  },
  iconTransparent: {
    padding: theme.spacing(2),
    width: theme.spacing(4),
    height: theme.spacing(3),
    color: "rgba(0,0,0,0)",
  },
  controlTextDivider: {
    marginTop: -18,
  },
  dividerTalking: {
    marginTop: 30,
  },
  phone: {
    marginLeft: 4,
  },
  nameWorker: {
    marginTop: 10,
    fontSize: 18,
    color: "#0e155e",
  },
  nameWorkerAfterTextDivider: {
    marginTop: -18,
    fontSize: 18,
    color: "#0e155e",
  },
  offices: { marginLeft: 20 },
  support: {},
  officeWorker: {
    marginTop: 1,
    fontSize: 15,
    color: "#0e155e",
  },
  officePhone: {},
  officeEmail: {},
  end: {
    marginBottom: 20,
  },
  box: {
    marginLeft: 56,
  },
}));

// const redirectToBigCard = (ref) => {
//   if (ref.current === null) {
//     // treatment solution
//     window.scrollTo(0, 0);
//   } else {
//     window.scrollTo(0, ref.current.offsetTop);
//   }
// };

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

export function ContactPage(props) {
  const classes = useStyles();

  return (
    <div className={classes.root2}>
      <div className={classes.root}>
        <DenseAppBar />

        <div className={classes.content}>
          <Grid
            container
            direction="column"
            alignItems="flex-start"
            justify="flex-start"
            spacing={2}
          >
            <div className={classes.dividerTalking}>
              <Box borderLeft={10} borderColor="#1090d8">
                <Typography variant="h5" className={classes.title}>
                  Mídias sociais
                </Typography>
              </Box>
            </div>

            <Grid item>
              {data.contato.map((paragraph) => (
                <Grid className={classes.text} item xs={11.5}>
                  <Typography variant="h6" align="justify">
                    {" "}
                    {paragraph}{" "}
                  </Typography>
                </Grid>
              ))}
            </Grid>

            <Grid
              item
              container
              direction="column"
              alignItems="center"
              justify="center"
              spacing={1}
            >
              <Grid item>
                <Grid container direction="row" spacing={7}>
                  {data.institutions.map((institute) => (
                    <Grid item className={classes.grid}>
                      <div className={classes.imgs}>
                        <img
                          className={classes.avatar}
                          alt={institute.name}
                          src={institute.avatar}
                        />
                        {institute.name === "Engenharia de Produção - UFCG" ? (
                          <div className={classes.icons}>
                            <FaInstagram className={classes.iconTransparent} />

                            <Link href={institute.facebook} target="_blank">
                              <FaFacebook className={classes.icon} />
                            </Link>
                            <FaTwitter className={classes.iconTransparent} />
                          </div>
                        ) : (
                          <div className={classes.icons}>
                            <Link href={institute.instagram} target="_blank">
                              <FaInstagram className={classes.icon} />
                            </Link>
                            <Link href={institute.twitter} target="_blank">
                              <FaTwitter className={classes.icon} />
                            </Link>
                            <Link href={institute.facebook} target="_blank">
                              <FaFacebook className={classes.icon} />
                            </Link>

                            {/* <Link href={developer.instagram} target="_blank">
                      <FaInstagram className={classes.icon} />
                    </Link> */}
                          </div>
                        )}
                        <Typography className={classes.phone} variant="body2">
                          {institute.phone}
                        </Typography>

                        {/* <Typography className={classes.abstract}variant="caption" align='justify' >
                    {developer.abstract}
                  </Typography> */}
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={11.5}>
              <div className={classes.dividerTalking}>
                <Box borderLeft={10} borderColor="#1090d8">
                  <Typography variant="h5" className={classes.title}>
                    Fale Conosco
                  </Typography>
                </Box>
              </div>
            </Grid>

            <Grid item>
              <Typography style={{ marginLeft: 20 }}>
                {" "}
                <a
                  href="mailto:covidpbbr@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "#343894" }}
                >
                  covidpbbr@gmail.com
                </a>
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            direction="column"
            alignItems="flex-start"
            justify="flex-start"
            spacing={1}
          >
            <Grid item xs={11.5}>
              <div className={classes.dividerTalking}>
                <Box borderLeft={10} borderColor="#1090d8">
                  <Typography variant="h5" className={classes.title}>
                    Ascom
                  </Typography>
                </Box>
              </div>
            </Grid>
            <Grid item>
              {data.ascom.map((paragraph) => (
                <Grid className={classes.textContent} item xs={11.5}>
                  <Typography align="justify"> {paragraph} </Typography>
                </Grid>
              ))}
            </Grid>

            <Grid item>
              <Grid item>
                <Grid
                  container
                  direction="column"
                  alignItems="flex-start"
                  justify="flex-start"
                >
                  {data.workers.map((worker) => (
                    <Grid item>
                      {worker.name !== "Gutemberg Medeiros" ? (
                        <div className={classes.offices}>
                          <Typography
                            className={classes.nameWorker}
                            variant="body2"
                          >
                            <b>{worker.name}</b>
                          </Typography>
                          <Typography
                            className={classes.officeWorker}
                            variant="body2"
                          >
                            <b>{worker.office}</b>
                          </Typography>
                          <Typography
                            className={classes.officePhone}
                            variant="body2"
                          >
                            {worker.phone}
                          </Typography>
                          <Typography
                            className={classes.officeEmail}
                            variant="body2"
                          >
                            {worker.email.indexOf(" ") >= 0 ? (
                              <div>
                                <a
                                  href={"mailto:" + worker.email.split(" ", 1)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    textDecoration: "none",
                                    color: "#343894",
                                  }}
                                >
                                  {worker.email.split(" ", 1)}
                                </a>
                                <br />
                                <a
                                  href={
                                    "mailto:" + worker.email.split(" ", 2)[1]
                                  }
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    textDecoration: "none",
                                    color: "#343894",
                                  }}
                                >
                                  {worker.email.split(" ", 2)[1]}
                                </a>{" "}
                              </div>
                            ) : (
                              <a
                                href={"mailto:" + worker.email}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  textDecoration: "none",
                                  color: "#343894",
                                }}
                              >
                                {worker.email}
                              </a>
                            )}
                          </Typography>
                        </div>
                      ) : (
                        <></>
                      )}
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={11.5}>
            <div className={classes.dividerTalking}>
              <Box borderLeft={10} borderColor="#1090d8">
                <Typography variant="h5" className={classes.title}>
                  Suporte de TI
                </Typography>
              </Box>
            </div>
          </Grid>

          <Grid
            container
            direction="row"
            alignItems="flex-start"
            justify="flex-start"
          >
            <Grid item>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  alignItems="flex-start"
                  justify="flex-start"
                >
                  {data.workers.map((worker) => (
                    <Grid item>
                      {worker.name === "Gutemberg Medeiros" ? (
                        <div className={classes.offices}>
                          <Typography
                            className={classes.nameWorker}
                            variant="body2"
                          >
                            <b>{worker.name}</b>
                          </Typography>
                          <Typography
                            className={classes.officeWorker}
                            variant="body2"
                          >
                            <b>{worker.office}</b>
                          </Typography>
                          <Typography
                            className={classes.officePhone}
                            variant="body2"
                          >
                            {worker.phone}
                          </Typography>
                          <Typography
                            className={classes.officeEmail}
                            variant="body2"
                          >
                            <a
                              href={"mailto:" + worker.email}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                textDecoration: "none",
                                color: "#343894",
                              }}
                            >
                              {worker.email}
                            </a>
                          </Typography>
                        </div>
                      ) : (
                        <></>
                      )}
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Space top={20} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
