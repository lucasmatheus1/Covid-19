import React from "react";
import "./index.css";
import AppBar from "../../components/structure/appbar/AppBar";
import { Grid, Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

// import { ImageDivider } from "../../components/structure/content/ImageDivider";
import { MapChartPB } from "../../components/structure/datas/paraiba/MapChartPB";
import { Ranking } from "../../components/structure/datas/paraiba/Ranking";
import { Charts } from "../../components/structure/datas/paraiba/Charts";
import { SquareCharts } from "../../components/structure/datas/paraiba/SquareCharts";
/* import { Projections } from "../../components/structure/datas/paraiba/Projections"; */
import { BasicCards } from "../../components/structure/datas/BasicCards/index";
import { TextContent } from "../../components/structure/content/TextContent";
import { Footer } from "../../components/structure/footer";

import data from "./dataPanelPB";

const useStyles = makeStyles((theme) => ({
  distancePar: {
    marginTop: 10,
    marginLeft: 75,
    marginRight: 75,
  },

  text: {
    marginLeft: "10%",
    marginRight: "10%",
  },

  update: {
    flexGrow: 1,
    marginLeft: "10%",
    marginBottom: "20px",
    marginTop: "20px",
  },
}));

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

var listIframes = {
  lables:
    "https://app.powerbi.com/view?r=eyJrIjoiM2U2ZWRlMzYtNDRjMy00Y2JlLThiNWMtMGVjZWNkYmQ3MzlkIiwidCI6IjA3MzU5ODdlLWIxYmQtNDg0Ni1iM2ZhLTQ5NGE0OGUwMjI0MSJ9&pageName=ReportSection",
  mapa1:
    "https://app.powerbi.com/view?r=eyJrIjoiYzEwNzZkNzEtZmQ5YS00YzcyLWEyNDctZDVmNzIyOGFhZDllIiwidCI6IjA3MzU5ODdlLWIxYmQtNDg0Ni1iM2ZhLTQ5NGE0OGUwMjI0MSJ9",
  mapa2:
    "https://app.powerbi.com/view?r=eyJrIjoiODFlMmM4NjUtMjBhNy00MTQxLWIyYTEtM2Q3ODBlZDQxZmQwIiwidCI6IjA3MzU5ODdlLWIxYmQtNDg0Ni1iM2ZhLTQ5NGE0OGUwMjI0MSJ9",
  rankingCidades:
    "https://app.powerbi.com/view?r=eyJrIjoiNmU0NjRkMTUtNGI0YS00MWVmLWE2MzEtNmIxOTI2M2RhOGM3IiwidCI6IjA3MzU5ODdlLWIxYmQtNDg0Ni1iM2ZhLTQ5NGE0OGUwMjI0MSJ9",
  graficos_initial:
    "https://app.powerbi.com/view?r=eyJrIjoiNzFkMjRlMDktYzg1MS00MDRhLTlkZmQtMzA2YjMzM2IzOGZjIiwidCI6IjA3MzU5ODdlLWIxYmQtNDg0Ni1iM2ZhLTQ5NGE0OGUwMjI0MSJ9",
  graficos_end:
    "https://app.powerbi.com/view?r=eyJrIjoiM2Y5MGM1ZTEtYzM5Yy00YmRiLTg1NGMtNWI2MTgzYjczNWM0IiwidCI6IjA3MzU5ODdlLWIxYmQtNDg0Ni1iM2ZhLTQ5NGE0OGUwMjI0MSJ9",
  previsoes:
    "https://app.powerbi.com/view?r=eyJrIjoiMWI2MmY2MzEtOTQ5MC00M2MxLThmYmItNmM2MWE2MjU0M2VjIiwidCI6IjA3MzU5ODdlLWIxYmQtNDg0Ni1iM2ZhLTQ5NGE0OGUwMjI0MSJ9&pageName=ReportSection",
  achatamento:
    "https://app.powerbi.com/view?r=eyJrIjoiMmE0MDkyZGYtZThhZi00MzQ3LWJlMTUtZmVlMTlkYjAzNGNkIiwidCI6IjA3MzU5ODdlLWIxYmQtNDg0Ni1iM2ZhLTQ5NGE0OGUwMjI0MSJ9",
};

const verificationMobile = () => {
  var mobile = detectMobile();
  if (mobile) {
    listIframes.lables =
      "https://app.powerbi.com/view?r=eyJrIjoiMGY4NDE1YzAtNGNiZS00YjZjLWIxM2EtNjQzOWEzM2Q3ZWU1IiwidCI6IjA3MzU5ODdlLWIxYmQtNDg0Ni1iM2ZhLTQ5NGE0OGUwMjI0MSJ9";
    listIframes.rankingCidades =
      "https://app.powerbi.com/view?r=eyJrIjoiZWU0MTRiODUtN2JhMC00OTYwLTgxMjMtODZhNDA2Y2FkODY4IiwidCI6IjA3MzU5ODdlLWIxYmQtNDg0Ni1iM2ZhLTQ5NGE0OGUwMjI0MSJ9";
    listIframes.graficos_initial =
      "https://app.powerbi.com/view?r=eyJrIjoiMjg2MDhhMGItZDZkNi00YWNmLTg1ZWEtNDAwMWU3ZDA1YTc4IiwidCI6IjA3MzU5ODdlLWIxYmQtNDg0Ni1iM2ZhLTQ5NGE0OGUwMjI0MSJ9";
    listIframes.graficos_end =
      "https://app.powerbi.com/view?r=eyJrIjoiODgyOGY4Y2EtNTdiOC00ODIwLThjNGMtZDhlMDNiOWY0ZTYxIiwidCI6IjA3MzU5ODdlLWIxYmQtNDg0Ni1iM2ZhLTQ5NGE0OGUwMjI0MSJ9";
    listIframes.previsoes =
      "https://app.powerbi.com/view?r=eyJrIjoiODllNDM5MzMtYmI4OC00MWNjLWJlYjEtYjc5NWQwYjRkZmE3IiwidCI6IjA3MzU5ODdlLWIxYmQtNDg0Ni1iM2ZhLTQ5NGE0OGUwMjI0MSJ9";
    listIframes.achatamento =
      "https://app.powerbi.com/view?r=eyJrIjoiNDhhMTY1Y2QtYWZiMS00OGE4LWE3NzEtOTE0OGFlNDFiMzc1IiwidCI6IjA3MzU5ODdlLWIxYmQtNDg0Ni1iM2ZhLTQ5NGE0OGUwMjI0MSJ9";
  }
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

export const PanelPB = (props) => {
  window.scrollTo(0, 0);

  const classes = useStyles();

  // //references
  // const cardParaiba = useRef(null);

  // const start = useRef(null);

  // const indicadores = useRef(null);
  // const mapas = useRef(null);
  // const ranking = useRef(null);
  // const analise = useRef(null);
  // const projecoes = useRef(null);
  // const achatamento = useRef(null);

  // // receive value of link of state
  // var { foo } = props.location.state || "start";

  // // treatment solution
  // if (foo === "start" || foo === undefined || foo === null) {
  //   redirectToBigCard(start);
  // }

  // useEffect(() => {
  //   if (foo === "1") {
  //     redirectToBigCard(indicadores);
  //   } else if (foo === "2") {
  //     redirectToBigCard(mapas);
  //   } else if (foo === "3") {
  //     redirectToBigCard(ranking);
  //   } else if (foo === "4") {
  //     redirectToBigCard(analise);
  //   } else if (foo === "5") {
  //     redirectToBigCard(projecoes);
  //   } else if (foo === "6") {
  //     redirectToBigCard(achatamento);
  //   }
  // }, []);

  //mobile
  verificationMobile();

  // clickParaiba={() => redirectToBigCard(cardParaiba)}
  return (
    <div className="root">
      <AppBar />

      <div style={{ height: 35, marginTop: 21.5 }}></div>
      {
        // <ImageDivider numberImage={1} />
      }
      {/* <div className={classes.update} >
        <Typography variant='caption'> Atualizado às 20h, 24 de agosto </Typography>
      </div> */}

      <TextContent text="Indicadores COVID na Paraíba" />

      <BasicCards src={listIframes.lables} />

      {/* <ImageDivider numberImage={2} /> */}

      <TextContent text="Mapas dinâmicos" />

      <div className="big-card-clean">
        <MapChartPB src={listIframes.mapa1} />
      </div>
      <div className="big-card-clean">
        <MapChartPB src={listIframes.mapa2} />
      </div>

      {/* <ImageDivider numberImage={2} /> */}

      <TextContent text="Ranking de cidades" />
      <div className="big-card-clean">
        <Ranking src={listIframes.rankingCidades} />
      </div>

      {/* <ImageDivider numberImage={2} /> */}

      <TextContent text="Análise gráfica" />

      <div>
        {" "}
        {
          <Grid container direction="row" justify="center" spacing={4}>
            <Grid item>
              <Charts src={listIframes.graficos_initial} />
            </Grid>
            <Grid item>
              <Charts src={listIframes.graficos_end} />
            </Grid>
          </Grid>
        }
      </div>

      {/* <ImageDivider numberImage={2} /> */}

      <TextContent text="Projeções de casos e óbitos" />

      <div className="lastcard">
        <Grid container direction="row" justify="center" spacing={4}>
          <Grid item>
            <Charts src={listIframes.previsoes} />
          </Grid>
        </Grid>
      </div>

      {/* <ImageDivider numberImage={2} /> */}

      <TextContent text="Achatamento da curva" />

      <Space top={50} />
      <div className={classes.text}>
        {data.data1.map((paragraph) => (
          <Typography /* className={classes.distancePar} */ align="justify">
            {" "}
            {paragraph}{" "}
          </Typography>
        ))}
      </div>

      {/* <Space top={30} />

      <Grid container direction="row" justify="center" spacing={4}>
        <Grid item>
          <SquareCharts src={data.imgs[0]} alt="Imagem 1" />
        </Grid>
        <Grid item>
          <SquareCharts src={data.imgs[1]} alt="Imagem 2" />
        </Grid>
      </Grid> */}

      <Space top={30} />
      <div className={classes.text}>
        {data.data2.map((paragraph) => (
          <Typography /* className={classes.distancePar} */ align="justify">
            {" "}
            {paragraph}{" "}
          </Typography>
        ))}
      </div>

      {/* <Space top={30} />

      <Grid container direction="row" justify="center" spacing={4}>
        <Grid item>
          <SquareCharts src={data.imgs[2]} alt="Imagem 3" />
        </Grid>
        <Grid item>
          <SquareCharts src={data.imgs[3]} alt="Imagem 4" />
        </Grid>
      </Grid> */}

      <Space top={30} />
      <div className={classes.text}>
        {data.data3.map((paragraph) => (
          <Typography /* className={classes.distancePar} */ align="justify">
            {" "}
            {paragraph}{" "}
          </Typography>
        ))}
      </div>

      {/* <Space top={30} />

      <Grid container direction="row" justify="center" spacing={4}>
        <Grid item>
          <SquareCharts src={data.imgs[4]} alt="Imagem 5" />
        </Grid>
        <Grid item>
          <SquareCharts src={data.imgs[5]} alt="Imagem 6" />
        </Grid>
      </Grid> */}

      <Space top={30} />
      <div className={classes.text}>
        {data.data4.map((paragraph) => (
          <Typography /* className={classes.distancePar} */ align="justify">
            {" "}
            <Space top={30} />
            {paragraph}{" "}
          </Typography>
        ))}
      </div>

      <Space top={50} />

      <div className="lastcard">
        <Grid container direction="row" justify="center" spacing={4}>
          <Grid item>
            <Charts src={listIframes.achatamento} />
          </Grid>
        </Grid>
      </div>

      <Footer />
    </div>
  );
};
