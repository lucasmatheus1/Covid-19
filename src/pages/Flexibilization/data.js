function createData(indicadores, vermelha, laranja, amarela, verde) {
  return { indicadores, vermelha, laranja, amarela, verde };
}

const rows = [
  createData(
    "Taxa de progressão",
    ["10%", "10 pts."],
    ["8%≤PCN<10%", "5 pts."],
    ["5%≤PCN<8%", "-5 pts."],
    ["< 5%", "-10 pts."]
  ),
  createData(
    "Taxa de isolamento",
    ["< 45%", "20 pts."],
    ["45%≤TOIS<50%", "10 pts."],
    ["50%≤TOIS<55%", "-10 pts."],
    ["≥ 55%", "-20 pts."]
  ),
  createData(
    "Taxa de letalidade",
    ["≥ 5%", "20 pts."],
    ["4%≤TLO<5%", "10 pts."],
    ["3%≤TLO<4%", "-10 pts."],
    ["< 3%", "-20 pts."]
  ),
  createData(
    "Ocupação de leito",
    ["> 75%", "20 pts."],
    ["65%<TOH≤75%", "10 pts."],
    ["50%<TOH≤65%", "-10 pts."],
    ["≤50%", "-20 pts."]
  ),
  createData(
    "Taxa de transmissão",
    ['≥ 2,5"', "15 pts."],
    ['"≥ 2,0"', "10 pts."],
    ["1<R0≤2", "-10 pts."],
    ["≤1", "-15 pts."]
  ),
  createData(
    "Taxa de imunidade",
    ["< 45%", "15 pts."],
    ["70%≤TOIS<75%", "10 pts."],
    ["75%≤TOIS<80%", "-10 pts."],
    ["≥ 80%", "-15 pts."]
  ),
  createData(
    "Variação do score",
    ["35 a", "70"],
    ["0 a", "35"],
    ["- 35 a", "0"],
    ["- 70 a", "-35"]
  ),
  createData(
    "Calibragem (fase)",
    ["Até", "30"],
    ["Até", "20"],
    ["Até", "-20"],
    ["Até", "- 30"]
  ),
];

const data = {
  iframe1: {
    title: "Número de cidades por bandeira",
    src:
      "https://app.powerbi.com/view?r=eyJrIjoiNmVjNGRlZjItYmYzNC00NjVmLWFkNjYtZjM5ZDRiNzJmYTQ5IiwidCI6IjA3MzU5ODdlLWIxYmQtNDg0Ni1iM2ZhLTQ5NGE0OGUwMjI0MSJ9",
  },

  iframe1Mobile: {
    title: "Número de cidades por bandeira",
    src:
      "https://app.powerbi.com/view?r=eyJrIjoiNzVkMTJiMjUtMzc2OC00OTg3LTg2MTItOTM3N2E3M2VmM2FlIiwidCI6IjA3MzU5ODdlLWIxYmQtNDg0Ni1iM2ZhLTQ5NGE0OGUwMjI0MSJ9",
  },
  iframe2: {
    title: "Mapa situacional",
    src:
      "https://app.powerbi.com/view?r=eyJrIjoiZjcwM2ZjNmMtMmY3OC00OGFlLWE4N2UtYmUxMWYxY2YyNjhjIiwidCI6IjA3MzU5ODdlLWIxYmQtNDg0Ni1iM2ZhLTQ5NGE0OGUwMjI0MSJ9&pageName=ReportSection",
  },

  labelFlags: "QUANTIDADE DE MUNICÍPIOS POR BANDEIRA",
  flags: [
    {
      color: "red",
      value: 14,
      label: "Vermelho",
      title: "Bandeira vermelha",
      description: "restrições adicionais de locomoção",
    },
    {
      color: "orange",
      value: 126,
      label: "Laranja",
      title: "Bandeira laranja",
      description: "funcionamento de atividades essenciais",
    },
    {
      color: "#ffeb3b",
      value: 82,
      label: "Amarelo",
      title: "Bandeira amarela",
      description:
        "restrição do funcionamento de atividades que representam maior risco de contaminação",
    },
    {
      color: "green",
      value: 1,
      label: "Verde",
      title: "Bandeira verde",
      description:
        "todas as atividades em funcionamento com medidas de distanciamento social",
    },
  ],

  title: "Situação das cidades",
  subtitle: "Situação das cidades",
  type: "Object",

  planoDeflexibilizacao: {
    title: "Plano de Flexibilização",
    p1: "O Plano Novo Normal PB, regulamentado pelo",
    p12: "Decreto Estadual N° 40.304",
    p13:
      ", que oferece as diretrizes para a retomada das atividades no Estado da Paraíba, inclui 6 indicadores, sendo 4 eixos e 2 de calibragem. O objetivo desses indicadores é classificar os munícipios paraibanos em bandeiras, de acordo com uma Matriz Analítica, que indica a criticidade da cidade quanto à evolução do Coronavírus. A criticidade varia de acordo com a cor da bandeira, de vermelha (mais crítica), passando pelas bandeiras laranja e amarela, antes de chegar à bandeira verde (menos crítica). Os quatro indicadores, que representam os eixos, são:",
    topics: [
      "Taxa de progressão de casos novos (TPCN): crescimento percentual de casos novos em relação aos acumulados no período analisado;",
      "Taxa de letalidade observada (TLO): é a relação percentual (%) entre o número de óbitos e o total de casos no período;",
      "Taxa de obediência ao isolamento social (TOIS): é o percentual (%) de pessoas que respeitam o isolamento social em relação ao total de pessoas acompanhadas no período analisado;",
      "Taxa de ocupação hospitalar observada (TOH): é o percentual (%) de leitos ocupados, em relação ao total de leitos disponíveis, em UTI de adultos para o período analisado.",
    ],
    linkdecreto:
      "https://paraiba.pb.gov.br/noticias/governo-do-estado-apresenta-plano-de-retomada-gradual-e-segura-das-atividades-na-paraiba/DecretoNovoNormalPBconvertido.pdf",
    p2:
      "Os indicadores de calibração ajustam a Matriz Analítica e são: O Número Básico de Reprodução (R0), que representa a taxa de transmissão, ou quantas pessoas podem ser contaminadas por uma mesma pessoa doente; e a Taxa de Imunidade Populacional (TIP), que é o percentual (%) de pessoas que contraíram o vírus e estão, tanto recuperados, como imunes ao COVID 19.",
    p3:
      "Cada um dos eixos e indicadores de calibragem recebe uma pontuação de avaliação em 4 níveis, que varia de – 20 a + 20 (± 5, ± 10, ± 15, ± 20). Esses valores vão sendo somados para formar a pontuação da cidade. Quando menor essa pontuação total, mais bem avaliado é o município, e, portanto, menos risco ele estará exposto ao vírus, sendo representado pela cor da bandeira. Assim, bandeira vermelha representa o risco máximo, a bandeira verde significa risco mínimo. Para um maior detalhamento sobre esses indicadores, favor consultar a",
    p32: "Nota Técnica",
    p33: "publicada pelo Governo do Estado.",
    linkNotaTecnica:
      "https://paraiba.pb.gov.br/noticias/governo-do-estado-apresenta-plano-de-retomada-gradual-e-segura-das-atividades-na-paraiba/NOTATECNICASES_NOVONORMALPB_rev.pdf",
    p4:
      "No plano de retomada das atividades econômicas proposto pelo Governo do Estado, ainda constam um",
    p42: "guia",
    p43:
      "com recomendações gerais, que orientam os cidadãos para a adoção de medidas de proteção extremamente necessárias à mitigação do COVID 19.",
    linkGuia:
      "https://paraiba.pb.gov.br/diretas/saude/coronavirus/arquivos/novo-normal.pdf",
  },

  criterios: {
    title: "Critérios de classificação",
    p1:
      "A tabela na sequência ilustra os critérios de enquadramento e as pontuações para classificar o munícipio em uma das quatro cores de bandeiras.",
    "table:": [],
    p2:
      "As bandeiras determinam o nível de mobilidade, sendo: impedida (vermelha), restrita (laranja), reduzida (amarela) e novo normal (verde). Cada bandeira inclui as atividades que podem ser reabertas. O plano de flexibilização proposto pelo Governo Estadual ainda contempla a avaliação do nível de risco das atividades econômicas e a adoção de",
    p22: "protocolos sanitários",
    link:
      "https://paraiba.pb.gov.br/diretas/saude/coronavirus/protocolos-sanitarios",
    p23:
      "nesses segmentos. O período de avaliação para a mudança de fase, manutenção ou rebaixamento da bandeira é de 14 dias. Por fim, as cores das bandeiras representam:",
    protocoloslink:
      "https://paraiba.pb.gov.br/diretas/saude/coronavirus/protocolos-sanitarios",
    bandeiras: [
      "Bandeira vermelha: restrições adicionais de locomoção;",
      "Bandeira laranja: funcionamento de atividades essenciais;",
      "Bandeira amarela: restrição do funcionamento de atividades que representam maior risco de contaminação;",
      "Bandeira verde: todas as atividades em funcionamento com medidas de distanciamento social;",
    ],

    tableTitles: ["Indicadores", "Vermelha", "Laranja", "Amarela", "Verde"],
    tableData: rows,
  },
};

export default data;
