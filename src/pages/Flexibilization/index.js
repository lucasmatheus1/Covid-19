import React, { useLayoutEffect, useState } from "react";
import DenseAppBar from "../../components/structure/appbar/AppBar";
import { Footer } from "../../components/structure/footer";
import purple from "@material-ui/core/colors/purple";
import { MapChartFlexibilization } from "../../components/structure/datas/paraiba/MapChartFlexibilization";

/* import { FaFlag } from 'react-icons/fa';  */
/* import { Charts } from '../../components/structure/datas/paraiba/Charts' */
import {
  Grid,
  Typography,
  Box,
  List,
  ListItem,
  Link,
  /* Avatar, */
  Card,
  CardContent,
  Paper,
} from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import data from "./data";
import {
  Table,
  TableCell,
  TableBody,
  TableContainer,
  TableRow,
  TableHead,
} from "@material-ui/core/";
import Iframe from "../../components/iframes/Iframe";

const useStyles = makeStyles((theme) => ({
  page: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f3f4f5",
    marginTop: "55px",
    overflowX: "hidden",
    overflowY: "hidden",
    minHeight: "93vh",
  },

  card1: {
    maxHeight: "auto",
    maxWidth: "100%",
  },

  card2: {
    maxHeight: "auto",
    maxWidth: "100%",
  },

  title: {
    marginLeft: "10px",
    color: "#343894",
  },

  rootDataFlexibilization: {
    marginTop: "2%",
    marginLeft: "20%",
    marginRight: "20%",
  },

  flags: {
    height: theme.spacing(6),
    width: theme.spacing(6),
  },

  container: {
    backgroundColor: purple[900],
    color: "white",
    width: "auto",
  },

  red: {
    backgroundColor: "red",
    color: "write",
    height: theme.spacing(6),
    width: theme.spacing(6),
  },

  green: {
    backgroundColor: "green",
    height: theme.spacing(6),
    width: theme.spacing(6),
  },

  orange: {
    backgroundColor: "orange",
    color: "black",
    height: theme.spacing(6),
    width: theme.spacing(6),
  },

  yellow: {
    backgroundColor: "#ffeb3b",
    color: "black",
    height: theme.spacing(6),
    width: theme.spacing(6),
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

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
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

function detectMobile() {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return "mobile";
  } else if (
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i)
  ) {
    return "iPad";
  } else {
    return false;
  }
}

function TabelaIndicadores() {
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="Bandeiras">
        <TableHead>
          <TableRow>
            {data.criterios.tableTitles.map((title) => (
              <StyledTableCell align="center"> {title} </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.criterios.tableData.map((row) => (
            <StyledTableRow key={row.indicadores}>
              <StyledTableCell key=""> {row.indicadores} </StyledTableCell>
              <StyledTableCell align="center">
                {" "}
                {row.vermelha[0]} &nbsp; {row.vermelha[1]}{" "}
              </StyledTableCell>
              <StyledTableCell align="center">
                {" "}
                {row.laranja[0]} &nbsp; {row.laranja[1]}{" "}
              </StyledTableCell>
              <StyledTableCell align="center">
                {" "}
                {row.amarela[0]} &nbsp; {row.amarela[1]}{" "}
              </StyledTableCell>
              <StyledTableCell align="center">
                {" "}
                {row.verde[0]} &nbsp; {row.verde[1]}{" "}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function DataFlexibilization() {
  const classes = useStyles();
  const [width, height] = useWindowSize();

  /* function classFlag(color) {
    if (color === 'red') return classes.red;
    if (color === 'orange') return classes.orange; 
    if (color === 'green') return classes.green; 
    return classes.yellow; 
  } */

  return (
    <div className={classes.rootDataFlexibilization}>
      <Grid
        classesName={classes.maingrid}
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        spacing={3}
      >
        <Box borderLeft={10} borderColor="#1090d8">
          <Typography variant="h4" className={classes.title}>
            {" "}
            {data.title}{" "}
          </Typography>
        </Box>
        <br />

        <Card className={classes.card1}>
          <Grid container justify="center" alignContent="center">
            <Grid item>
              <CardContent>
                {detectMobile() === "mobile" ? (
                  <Iframe
                    width={0.6}
                    height={0.5}
                    src={data.iframe1Mobile.src}
                  />
                ) : detectMobile() === "iPad" ? (
                  <Iframe width={0.6} height={0.6} src={data.iframe1.src} />
                ) : (
                  <Iframe width={0.6} height={0.4} src={data.iframe1.src} />
                )}
              </CardContent>
            </Grid>
          </Grid>
        </Card>
        <br />
        <Box borderLeft={10} borderColor="#1090d8">
          <Typography variant="h4" className={classes.title}>
            {data.iframe2.title}{" "}
          </Typography>
        </Box>
        <br />

        <Card className={classes.card2}>
          <Grid container justify="center" alignContent="center">
            <Grid item>
              <CardContent>
                {detectMobile() === "iPad" ? (
                  <MapChartFlexibilization
                    src={data.iframe2.src}
                    width={0.6}
                    height={6.5}
                  />
                ) : detectMobile() === "mobile" ? (
                  <MapChartFlexibilization
                    src={data.iframe2.src}
                    width={0.53}
                    height={5.5}
                  />
                ) : (
                  <MapChartFlexibilization
                    src={data.iframe2.src}
                    width={0.6}
                    height={6.7}
                  />
                )}
              </CardContent>
            </Grid>
          </Grid>
        </Card>

        <br />
        <Box borderLeft={10} borderColor="#1090d8">
          <Typography variant="h4" className={classes.title}>
            {" "}
            {data.planoDeflexibilizacao.title}{" "}
          </Typography>
        </Box>
        <br />
        <Typography variant="body" align="justify">
          {data.planoDeflexibilizacao.p1 + " "}
          <Link href={data.planoDeflexibilizacao.linkdecreto}>
            {data.planoDeflexibilizacao.p12}
          </Link>
          {" " + data.planoDeflexibilizacao.p13}
        </Typography>

        <Grid item>
          <List>
            {data.planoDeflexibilizacao.topics.map((topic) => (
              <ListItem>
                <Typography variant="body" align="justify">
                  {" "}
                  {"- " + topic}{" "}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Typography variant="body" align="justify">
          {" "}
          {data.planoDeflexibilizacao.p2}{" "}
        </Typography>
        <br />
        <Typography variant="body" align="justify">
          {data.planoDeflexibilizacao.p3 + " "}
          <Link href={data.planoDeflexibilizacao.linkNotaTecnica}>
            {data.planoDeflexibilizacao.p32}
          </Link>
          {" " + data.planoDeflexibilizacao.p33}
        </Typography>
        <br />
        <Typography variant="body" align="justify">
          {data.planoDeflexibilizacao.p4 + " "}
          <Link href={data.planoDeflexibilizacao.linkGuia}>
            {data.planoDeflexibilizacao.p42}
          </Link>
          {" " + data.planoDeflexibilizacao.p43}
        </Typography>
        <br />
        <Box borderLeft={10} borderColor="#1090d8">
          <Typography variant="h4" className={classes.title}>
            {" "}
            {data.criterios.title}{" "}
          </Typography>
        </Box>
        <br />
        <Typography variant="body" align="justify">
          {" "}
          {data.criterios.p1}{" "}
        </Typography>
        <br />
        <Typography variant="body" align="justify">
          {data.criterios.p2 + " "}
          <Link href={data.criterios.link}>{data.criterios.p22}</Link>
          {" " + data.criterios.p23}
        </Typography>
        <br />
        <Grid item container alignItems="center">
          <TabelaIndicadores />
        </Grid>
        <br />
      </Grid>
    </div>
  );
}

export function FlexibilizationPage(props) {
  window.scrollTo(0, 0);

  const classes = useStyles();

  // //references
  // const start = useRef(null);

  // const situacao = useRef(null);
  // const mapas = useRef(null);
  // const plano = useRef(null);
  // const criterios = useRef(null);
  // // receive value of link of state
  // var { foo } = props.location.state || "start";

  // // treatment solution
  // if (foo === "start" || foo === undefined || foo === null) {
  //   redirectToBigCard(start);
  // }

  // useEffect(() => {
  //   if (foo === "1") {
  //     redirectToBigCard(situacao);
  //   } else if (foo === "2") {
  //     redirectToBigCard(mapas);
  //   } else if (foo === "3") {
  //     redirectToBigCard(plano);
  //   } else if (foo === "4") {
  //     redirectToBigCard(criterios);
  //   }
  // }, []);

  return (
    <div className={classes.page}>
      <DenseAppBar />
      <DataFlexibilization />
      <Footer />
    </div>
  );
}
