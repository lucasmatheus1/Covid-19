const oms = require("../../assets/images/imgs-health/oms.png");
const johns = require("../../assets/images/imgs-health/johns.png");
const opas = require("../../assets/images/imgs-health/opas.png");
const minSaude = require("../../assets/images/imgs-health/min-saude.png");
const fioCruz = require("../../assets/images/imgs-health/fiocruz.png");
const governoPB = require("../../assets/images/imgs-health/governo-pb.png");
const prefeituraCG = require("../../assets/images/imgs-health/prefeitura-cg.jpg");
const ebserh = require("../../assets/images/imgs-health/ebserh.png");

const data = {
  orgHealth: [
    'Visite os portais das organizações de saúde e saiba mais sobre o COVID 19. Se preferir, acesse as principais notícias dessas instituições clicando no link. ou use o motor de busca para fazer pesquisas sobre as notícias de seu interesse. Caso inclua na pesquisa palavras relacionadas ao vírus, favor considerar termos como "Coronavírus"; "COVID 19", ou "SARS-CoV2".',
  ],
  disclaimer: [
    "Disclaimer: O mantenedor do site não se responsabiliza pelos conteúdos publicados nas notícias. A sua opinião não necessariamente reflete seu posicionamento sobre os temas apresentados. Essa página disponibiliza apenas links para as principais notícias divulgadas  por essas agências como forma de facilitar a busca e acesso à informação.",
  ],
  arrayImgs: [
    [
      {
        img: oms,
        url: "https://www.who.int/emergencies/diseases/novel-coronavirus-2019",
      },
      { img: johns, url: "https://coronavirus.jhu.edu/" },
      { img: opas, url: "https://www.paho.org/bra/" },
      { img: minSaude, url: "https://coronavirus.saude.gov.br/" },
    ],
    [
      { img: fioCruz, url: "https://portal.fiocruz.br/coronavirus" },
      {
        img: governoPB,
        url: "https://paraiba.pb.gov.br/diretas/saude/coronavirus",
      },
      { img: prefeituraCG, url: "https://coronaviruscg.com.br/" },
      { img: ebserh, url: "http://www2.ebserh.gov.br/web/huac-ufcg" },
    ],
  ],
};

export default data;
