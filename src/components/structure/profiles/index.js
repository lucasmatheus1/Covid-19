import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Grid, Typography, Link, Box } from "@material-ui/core";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
// import { borders } from '@material-ui/system';
import data from "./data";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:'2%', 
    marginBottom: "2%",
    marginLeft: "20%", 
    marginRight: '20%'
  },

  title: {
    marginLeft: "10px",
    color: "#343894",
  },

  title2: {
    color: "#343894",
  },

  box: {
    alignSelf: "flex-start",
  },

  person: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
  },

  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },

  icons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    padding: "5px",
  },

  abstract: {
    border: "2px",
  },
}));

export default function Profiles() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        spacing={10}
      >
        <Grid item>
          <Box borderLeft={10} borderColor="#1090d8" className={classes.box}>
            <Typography variant="h4" className={classes.title}>
              {" "}
              Membros do time{" "}
            </Typography>
          </Box>
          <br/>  <br/> 
          <Grid
            container
            direction="column"
            alignItems="flex-start"
            justify="flex-start"
            spacing={2}
          >
            {data.quemsomos.map((paragraph) => (
              <Grid item >
                <Typography align="justify"> {paragraph} </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Typography variant="h4" className={classes.title2}>
          Membros do Time
        </Typography>
        <br />

        <Typography variant="h6" className={classes.title2}>
          {" "}
          PESQUISADORES{" "}
        </Typography>

        <Grid item>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="center"
            spacing={7}
          >
            {data.manangers.map((mananger) => (
              <Grid item className={classes.grid}>
                <div className={classes.person}>
                  <Avatar
                    className={classes.avatar}
                    alt={mananger.name}
                    src={mananger.avatar}
                  />
                   <br />
                  <Typography variant="h5">{mananger.name}</Typography>
                  <Typography variant="caption">
                    {" "}
                    {mananger.positionOnProject}{" "}
                  </Typography>
                  <Typography variant="body2">
                    {mananger.position + ", " + mananger.Institution}
                  </Typography>
                  <div className={classes.icons}>
                    <Link href={mananger.linkedin} target="_blank">
                      <FaLinkedinIn className={classes.icon} />
                    </Link>
                    {/* <Link href={mananger.instagram} target="_blank">
                        <FaInstagram className={classes.icon} />
                      </Link> */}
                  </div>
                  {/* <Typography variant="caption" align='justify' >
                      {mananger.abstract}
                    </Typography> */}
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="center"
            spacing={7}
          >
            {data.researchers.map((researcher) => (
              <Grid item className={classes.grid} >
                <div className={classes.person}>
                  <Avatar
                    className={classes.avatar}
                    alt={researcher.name}
                    src={researcher.avatar}
                  />
                   <br />
                  <Typography variant="h5">{researcher.name}</Typography>
                  <Typography variant="caption">
                    {" "}
                    {researcher.positionOnProject}{" "}
                  </Typography>
                  <Typography variant="body2">{}</Typography>
                  <Typography variant="body2">
                    {researcher.position + ", " + researcher.Institution}
                  </Typography>
                  <div className={classes.icons}>
                    <Link href={researcher.linkedin} target="_blank">
                      <FaLinkedinIn className={classes.icon} />
                    </Link>
                    {/*  <Link href={researcher.instagram} target="_blank">
                        <FaInstagram className={classes.icon} />
                      </Link> */}
                  </div>
                    {/* <Typography variant="caption" align='justify' >
                      {researcher.abstract}
                    </Typography> */}
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Typography variant="h6" className={classes.title2}>
          {" "}
          DESENVOLVEDORES{" "}
        </Typography>

        <Grid item>
          <Grid container direction="row" justify="center" spacing={7}>
            {data.developers.map((developer) => (
              <Grid item className={classes.grid}>
                <div className={classes.person}>
                  <Avatar
                    className={classes.avatar}
                    alt={developer.name}
                    src={developer.avatar}
                  />
                   <br />
                  <Typography variant="h5">{developer.name}</Typography>
                  <Typography variant="caption">
                    {" "}
                    {developer.positionOnProject}{" "}
                  </Typography>
                  <Typography variant="body2">{}</Typography>
                  <Typography variant="body2">
                    {developer.position + ", " + developer.Institution}
                  </Typography>
                  <div className={classes.icons}>
                    <Link href={developer.linkedin} target="_blank">
                      <FaLinkedinIn className={classes.icon} />
                    </Link>
                    <Link href={developer.github} target="_blank">
                      <FaGithub className={classes.icon} />
                    </Link>
                    {/* <Link href={developer.instagram} target="_blank">
                        <FaInstagram className={classes.icon} />
                      </Link> */}
                  </div>
                  {/* <Typography className={classes.abstract}variant="caption" align='justify' >
                      {developer.abstract}
                    </Typography> */}
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Typography variant="h6" className={classes.title2}>
          {" "}
          CLIPPING{" "}
        </Typography>

        <Grid item>
          <Grid container direction="row" justify='space-evenly' spacing={7}>
            {data.clipping.map((researcher) => (
              <Grid item className={classes.grid}>
                <div className={classes.person}>
                  <Avatar
                    className={classes.avatar}
                    alt={researcher.name}
                    src={researcher.avatar}
                  />
                  <br />
                  <Typography variant="h5">{researcher.name}</Typography>                  
                  <Typography variant="caption">
                    {" "}
                    {researcher.positionOnProject}{" "}
                  </Typography>
                  <Typography variant="body2">{}</Typography>
                  <Typography variant="body2">
                    {researcher.position + ", " + researcher.Institution}
                  </Typography>
                  <div className={classes.icons}>
                    <Link href={researcher.linkedin} target="_blank">
                      <FaLinkedinIn className={classes.icon} />
                    </Link>
                    <Link href={researcher.instagram} target="_blank">
                        <FaInstagram className={classes.icon} />
                    </Link>
                  </div>
                  {/* <Typography className={classes.abstract}variant="caption" align='justify' >
                      {developer.abstract}
                    </Typography> */}
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

    </div>
  
  );
}
