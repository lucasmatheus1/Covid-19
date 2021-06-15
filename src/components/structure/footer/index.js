import React from "react";
import { Grid, Box, Typography, Divider, Link } from "@material-ui/core";
import { useStyles } from "./styles";
import { Link as LinkRouter } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const data = require("./footerData.json");

export const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.info}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="baseline"
        >
          <Grid item>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
            >
              {data.institucional.map((value) => (
                <Grid item>
                  <p1 className={classes.text}> {value} </p1>
                </Grid>
              ))}
              <Box m={1} />
              {data.endereco.map((value) => (
                <Grid item>
                  <p1 className={classes.text}> {value} </p1>
                </Grid>
              ))}
              <Box m={1} />
            </Grid>
          </Grid>

          <Grid item>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="flex-start"
              spacing={3}
            >
              {data.menus.map((object) => (
                <Grid item>
                  <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                  >
                    <Grid item>
                      <Typography className={classes.title} variant="h7">
                        {" "}
                        {object.title}{" "}
                      </Typography>
                    </Grid>
                    {object.values.map((menu, index) => (
                      <Grid item>
                        <LinkRouter
                          className={classes.text}
                          to={{
                            pathname: object.links[index],
                            state: { foo: object.message[index] },
                          }}
                        >
                          {menu}
                        </LinkRouter>
                      </Grid>
                    ))}
                  </Grid>
                  <Divider orientation="vertical" />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className={classes.logos}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
        >
          <Grid
            item
            xs={10}
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <Grid item>
              <Link href="https://portal.ufcg.edu.br/" target="_blank">
                <img
                  alt="UFCG"
                  height="130"
                  src={require("../../../assets/images/logoufcg.png")}
                ></img>
              </Link>
            </Grid>

            <Grid item>
              <Link href="https://cct.ufcg.edu.br/" target="_blank">
                <img
                  alt="CCT"
                  height="130"
                  src={require("../../../assets/images/cct.jpg")}
                ></img>
              </Link>
            </Grid>

            <Grid item>
              <Link href="https://uaep.ufcg.edu.br/" target="_blank">
                <img
                  alt="Unidade Academica de Engenharia de Produção"
                  height="130"
                  src={require("../../../assets/images/engprod.png")}
                ></img>
              </Link>
            </Grid>

            <Grid item>
              <Link
                href="https://www.ifpb.edu.br/campinagrande"
                target="_blank"
              >
                <img
                  alt="Unidade Academica de Engenharia de Produção"
                  height="130"
                  src={require("../../../assets/images/ifpb-1 (1).png")}
                ></img>
              </Link>
            </Grid>
          </Grid>

          <Grid
            item
            xs
            container
            direction="row"
            spacing={1}
            justify="flex-end"
            alignItems="flex-start"
          >
            <Grid item>
              <Link
                href="https://www.facebook.com/UFCGOficial/"
                target="_blank"
              >
                <FaFacebook className={classes.icons} />
              </Link>
            </Grid>

            <Grid item>
              <Link
                href="https://www.instagram.com/ufcg_oficial/"
                target="_blank"
              >
                <FaInstagram className={classes.icons} />
              </Link>
            </Grid>

            <Grid item>
              <Link href="https://twitter.com/UFCG_Oficial" target="_blank">
                <FaTwitter className={classes.icons} />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
};
