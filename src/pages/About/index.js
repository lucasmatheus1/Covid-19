import React, { useEffect, useRef } from "react";
import DenseAppBar from "../../components/structure/appbar/AppBar";
import { Footer } from "../../components/structure/footer";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Box,
  Paper,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import data from "./data";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f3f4f5",
    marginTop: "55px",
    overflowX: "hidden",
    overflowY: "hidden",
    minHeight: "93vh",
    textAlign: "justify",
  },

  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    width: 200,
    height: 50,
    backgroundColor: "#ffee58",
  },

  img: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "70%",
  },

  media: {
    height: 140,
  },

  card: {
    maxWidth: 345,
    width: 180,
  },

  card2: {
    maxWidth: 345,
    width: 360,
  },

  grid: {
    margin: "auto",
  },

  divmenu: {
    backgroundImage: `url(${data.backgroundMenu})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 120,
    margin: "auto",
    cursor: "pointer",
  },

  Profile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: 200,
    margin: "auto",
    padding: 5,
  },

  paperDiag: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: `${theme.spacing(1)}px auto`,
    maxWidth: 120,
    padding: 10,
  },

  paperDiag2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: `${theme.spacing(1)}px auto`,
    backgroundColor: "#90caf9",
    padding: 10,
  },

  paperDiag3: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "auto" + "40%",
    width: "100%",
    margin: "auto",
    backgroundColor: "#90caf9",
  },

  rootAboutData: {
    marginTop: "2%",
    marginLeft: "20%",
    marginRight: "20%",
  },

  cardtext: {
    textAlign: "center",
  },

  title: {
    marginLeft: "10px",

    color: "#343894",
  },

  symptoms: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    width: 190,
    height: 50,
  },
  spaceTopRef: {
    marginTop: 60,
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

const Section = ({ title }) => {
  return (
    <div>
      <br />
      <Typography variant="h6" align="justify" color="primary">
        <Box fontWeight="fontWeightBold">{title}</Box>
      </Typography>
      <br />
    </div>
  );
};

const Links = ({ title, subtitle, body }) => {
  return (
    <div>
      <Typography variant="h5" color="primary">
        {/* <Box fontWeight="fontWeightBold">{title}&#013; </Box> */}

        <Box borderLeft={10} borderColor="#1090d8">
          <Typography
            variant="h4"
            style={{
              marginLeft: "10px",
              color: "#343894",
            }}
          >
            {title}
          </Typography>
        </Box>

        <Space top={20} />
      </Typography>
      <Typography variant="subtitle2">{subtitle}</Typography>
      <br />
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        spacing={2}
      >
        {body.map((data) => (
          <Grid item container xs={12} direction="column">
            <Typography>
              <a
                href={data.link}
                target="_blank"
                rel="noopener"
                style={{ textDecoration: "none", color: "#343894" }}
              >
                {" "}
                {data.title}{" "}
              </a>
            </Typography>
          </Grid>
        ))}
      </Grid>
      <br />
    </div>
  );
};

const GlossarioNotesPatterns = ({ title, subtitle, body }) => {
  return (
    <div>
      <Typography variant="h5" style={{ color: "#343894" }}>
        <Box>{title}&#013; </Box>
      </Typography>
      <Space top={15} />
      <Typography variant="subtitle2">{subtitle}</Typography>
      <br />
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        spacing={2}
      >
        {body.map((data) => (
          <Grid item container xs={12} direction="column">
            <Typography variant="overline" color="primary" align="justify">
              <Box fontWeight="fontWeightBold">{data.title}&#013; </Box>
            </Typography>
            <Typography variant="body2" align="justify">
              {data.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <br />
    </div>
  );
};

function AboutData(props) {
  const classes = useStyles();

  // //references footer
  const entenda = useRef(null);
  const praticas = useRef(null);
  const glossario = useRef(null);
  const modelagem = useRef(null);
  const fontes = useRef(null);

  //references initial
  const quaisSintomas = useRef(null);
  const primeirosSintomas = useRef(null);
  const diagnosticar = useRef(null);
  const ondeSurgiu = useRef(null);
  const qualPerfil = useRef(null);
  const seEspalha = useRef(null);
  const linhaTempo = useRef(null);
  const protegemos = useRef(null);
  const med = useRef(null);
  const ciclo = useRef(null);

  var listRefs = [
    { name: "Que sintomas podem aparecer?", ref: quaisSintomas },
    { name: "O que fazer nos primeiros sintomas?", ref: primeirosSintomas },
    { name: "Como diagnoticar essa doença?", ref: diagnosticar },
    { name: "Onde surgiu o vírus?", ref: ondeSurgiu },
    { name: "Como o vírus se espalha?", ref: seEspalha },
    /* { name: "Qual a linha do tempo do Coronavírus?", ref: linhaTempo }, */
    { name: "Como nos protegermos do vírus?", ref: protegemos },
    { name: "Há medicamentos ou vacinas?", ref: med },
    { name: "Qual o ciclo de transmissão da doença?", ref: ciclo },
    { name: "Qual o perfil das pessoas com maior risco?", ref: qualPerfil },
  ];

  // // receive value of link of state
  var { foo } = props.location.state || "";

  useEffect(() => {
    if (foo === "1") {
      // redirectToBigCard(entenda);
      window.scrollTo(0, 0);
    } else if (foo === "2") {
      // redirectToBigCard(praticas);
      window.scrollTo(0, 0);
    } else if (foo === "3") {
      // redirectToBigCard(modelagem);
      window.scrollTo(0, 0);
    } else if (foo === "4") {
      // redirectToBigCard(glossario);
      window.scrollTo(0, 0);
    } else if (foo === "5") {
      // redirectToBigCard(fontes);
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className={classes.rootAboutData}>
      {/* <Box borderLeft={10} borderColor="#1090d8">
        <Typography variant="h4" className={classes.title}>
          Sobre
        </Typography>
      </Box> */}
      <br />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={5}
      >
        <Grid item container>
          <Typography variant="body" align="justify">
            {" "}
            {data.p1}{" "}
          </Typography>
        </Grid>

        {listRefs.map((item) => (
          <Grid item>
            <div className={classes.divmenu}>
              <Box
                display="inline"
                onClick={() => {
                  redirectToBigCard(item.ref);
                }}
              >
                <Paper className={classes.paper} elevation={0} square>
                  <Typography variant="body1" align="center" color="primary">
                    <Box fontWeight="fontWeightBold"> {item.name} </Box>
                  </Typography>
                </Paper>
              </Box>
            </div>
          </Grid>
        ))}
      </Grid>
      <div ref={ondeSurgiu}></div>
      <div ref={entenda}></div>
      <div className={classes.spaceTopRef}></div>
      <Box borderLeft={10} borderColor="#1090d8">
        <Typography variant="h4" className={classes.title}>
          Entenda o coronavírus
        </Typography>
      </Box>
      <Section title={data.surgimento.title} />
      {/* <img
        src={data.surgimento.picture}
        alt="Local do surgimento"
        className={classes.img}
      /> */}
      {/* <br /> */}
      <Typography variant="body" align="justify">
        {" "}
        {data.surgimento.body}{" "}
      </Typography>
      <div ref={linhaTempo}></div>
      {/* <div className={classes.spaceTopRef}></div>
      <Section title={data.linhaDoTempo.title} />
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        spacing={2}
      >
        {data.linhaDoTempo.body.map((news) => (
          <Grid item container direction="column">
            <Typography variant="overline" align="justify" color="primary">
              <Box fontWeight="fontWeightBold">{news.data} &#013; </Box>
            </Typography>
            <Typography variant="body" align="justify">
              {news.story}
            </Typography>
          </Grid>
        ))}
      </Grid> */}
      <div ref={seEspalha}></div>
      <div className={classes.spaceTopRef}></div>
      <Section title={data.espalhamento.title} />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={5}
      >
        {data.espalhamento.body.map((object) => (
          <Grid item>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={object.image}
                  title={object.lengend}
                />
                <CardContent className={classes.cardtext}>
                  <Typography
                    variant="subtitle2"
                    justify="center"
                    color="primary"
                  >
                    <Box fontWeight="fontWeightBold"> {object.legend} </Box>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div ref={quaisSintomas}></div>
      <div className={classes.spaceTopRef}></div>
      <Section title={data.sintomas.title} />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={5}
      >
        {data.sintomas.body.map((object) => (
          <Grid item>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={object.image}
                  title={object.lengend}
                />
                <CardContent className={classes.cardtext}>
                  <Typography variant="subtitle2" color="primary">
                    <Box fontWeight="fontWeightBold">{object.legend}</Box>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div ref={primeirosSintomas}></div>
      <div className={classes.spaceTopRef}></div>
      <Section title={data.oQueFazer.title} />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={5}
      >
        {data.oQueFazer.body1.map((object) => (
          <Grid item>
            <Card className={classes.card2}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={object.image}
                  title={object.lengend}
                />
                <CardContent>
                  <Typography variant="subtitle2">{object.legend}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <br />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={5}
      >
        {data.oQueFazer.body2.map((sintoma) => (
          <Grid item>
            {/* <Box borderLeft={10} borderColor="#1090d8"> */}
            <Paper className={classes.symptoms} elevation={3} square>
              <Typography
                variant="h6"
                align="center"
                justify="center"
                color="primary"
              >
                {" "}
                {sintoma}{" "}
              </Typography>
            </Paper>
            {/* </Box> */}
          </Grid>
        ))}
      </Grid>
      <div ref={diagnosticar}></div>
      <div className={classes.spaceTopRef}></div>
      <Section title={data.diagnose.title} />
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={2}
      >
        {data.diagnose.body.map((object) => (
          <Grid
            item
            container
            direction="row"
            justify="space-evenly"
            alignItems="flex-start"
          >
            <Grid item container justify="flex-start" alignItems="flex-start">
              <Grid item xs>
                <Typography variant="h6" align="left" color="primary">
                  {object.title}
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Paper className={classes.paperDiag2} square elevation={1}>
                <Grid container wrap="nowrap">
                  <Grid item xs>
                    <Typography variant="body2" align="center">
                      {object.subtitle}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <div ref={protegemos}></div>
      <div className={classes.spaceTopRef}></div>
      <Section title={data.proteger.title} />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={5}
      >
        {data.proteger.body.map((object) => (
          <Grid item>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={object.image}
                  title={object.lengend}
                />
                <CardContent className={classes.cardtext}>
                  <Typography variant="subtitle2" color="primary">
                    <Box fontWeight="fontWeightBold">{object.legend}</Box>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div ref={med}></div>
      <div className={classes.spaceTopRef}></div>
      <Section title={data.medicamentosOuVacinas.title} />
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        spacing={2}
      >
        {data.medicamentosOuVacinas.body.map((text) => (
          <Grid item container>
            <Typography variant="body" align="justify">
              {text}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <div ref={ciclo}></div>
      <div className={classes.spaceTopRef}></div>
      <Section title={data.ciclo.title} />
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={2}
      >
        {data.ciclo.body.map((object) => (
          <Grid
            item
            container
            direction="row"
            justify="space-evenly"
            alignItems="flex-start"
          >
            <Grid item container justify="flex-start" alignItems="flex-start">
              <Grid item xs>
                <Typography variant="h6" align="left" color="primary">
                  {object.title}
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Paper className={classes.paperDiag2} square elevation={1}>
                <Grid container wrap="nowrap">
                  <Grid item xs>
                    <Typography variant="body2" align="center">
                      {object.subtitle}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <div ref={qualPerfil}></div>
      <div className={classes.spaceTopRef}></div>
      <Section title={data.perfil.title} />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={5}
      >
        {data.perfil.body.map((typeProfile) => (
          <Grid item>
            <Box borderLeft={10} borderColor="#1090d8">
              <Paper className={classes.Profile} elevation={3} square>
                <Typography
                  variant="subtitle"
                  align="center"
                  justify="center"
                  color="primary"
                >
                  {" "}
                  {typeProfile}{" "}
                </Typography>
              </Paper>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Section title={data.comorbidades.title} />
      <Typography variant="body2" align="justify">
        {data.comorbidades.body1}
      </Typography>
      <br />
      <ul>
        {data.comorbidades.body2.map((item) => (
          <li>
            <Typography variant="body" align="justify">
              {item}
            </Typography>
          </li>
        ))}
      </ul>
      <Section title={data.rebanho.title} />
      <Typography variant="body2" align="justify">
        {data.rebanho.body}
      </Typography>{" "}
      <br />
      <div ref={praticas}></div>
      <div className={classes.spaceTopRef}></div>
      <Box borderLeft={10} borderColor="#1090d8">
        <Typography variant="h4" className={classes.title}>
          {data.rebanho.subsection}
        </Typography>
      </Box>
      <br />
      <Typography variant="body2" align="justify">
        {data.rebanho.body2}
      </Typography>{" "}
      <br /> <br />
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        spacing={2}
      >
        <ul>
          {data.rebanho.body3.map((value) => (
            <li>
              <Typography variant="body2" align="left">
                {value}
              </Typography>
            </li>
          ))}
        </ul>
      </Grid>
      <div ref={modelagem}></div>
      <div className={classes.spaceTopRef}></div>
      <Box borderLeft={10} borderColor="#1090d8">
        <Typography variant="h4" className={classes.title}>
          {data.rebanho.subsection2}
        </Typography>
      </Box>
      <br />
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        spacing={2}
      >
        {data.rebanho.body4.map((value) => (
          <Grid item container xs={12}>
            <Typography variant="body2" align="justify  ">
              {value}
            </Typography>
          </Grid>
        ))}
      </Grid>{" "}
      <div ref={glossario}></div>
      <div className={classes.spaceTopRef}></div>
      <Box borderLeft={10} borderColor="#1090d8">
        <Typography variant="h4" className={classes.title}>
          {data.glossario.Section}
        </Typography>
      </Box>
      <Space top={20} />
      <GlossarioNotesPatterns
        title={data.glossario.title}
        subtitle={data.glossario.subtitle}
        body={data.glossario.body}
      />
      <GlossarioNotesPatterns
        title={data.glossario.title2}
        subtitle={data.glossario.subtitle2}
        body={data.glossario.body2}
      />
      <div ref={fontes}></div>
      <div className={classes.spaceTopRef}></div>
      <Links
        title={data.glossario.title3}
        subtitle={data.glossario.subtitle3}
        body={data.glossario.body3}
      />
    </div>
  );
}

const redirectToBigCard = (ref) => {
  if (ref.current === null) {
    // treatment solution
    window.scrollTo(0, 0);
  } else {
    window.scrollTo(0, ref.current.offsetTop);
  }
};

export function AboutPage(props) {
  //window.scrollTo(0, 0);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DenseAppBar />
      <AboutData location={props.location} />
      <Footer />
    </div>
  );
}
