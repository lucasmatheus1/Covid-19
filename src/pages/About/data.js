const surgimentopicture = require("../../assets/images/about/location.png");

// backgroundMenu
const picMenu = require("../../assets/images/about/botoes.jpg");

// espalhamento
const picCatarro = require("../../assets/images/about/espalhamento/catarro.jpg");
const picEspirro = require("../../assets/images/about/espalhamento/espirro.jpg");
const picGoticulas = require("../../assets/images/about/espalhamento/goticulas.jpg");
const picPlacenta = require("../../assets/images/about/espalhamento/placenta.jpg");
const picSuperficie = require("../../assets/images/about/espalhamento/superficie.jpg");
const picToque = require("../../assets/images/about/espalhamento/toque.jpg");
const picTosse = require("../../assets/images/about/espalhamento/tosse.png");
const picTransmissaoAr = require("../../assets/images/about/espalhamento/transmissaoar.jpg");

// sintomas
const picAlteracaoPaladar = require("../../assets/images/about/sintomas/alteracaonopaladar.jpg");
const picCansaçoDor = require("../../assets/images/about/sintomas/cansaçoedor.jpg");
const picCorisa = require("../../assets/images/about/sintomas/corisa.jpg");
const picDiarrea = require("../../assets/images/about/sintomas/diarrea.jpg");
const picDifRespirar = require("../../assets/images/about/sintomas/dificuldadeDerespirar.png");
const picDorDeCabeça = require("../../assets/images/about/sintomas/dordecabeça.jpg");
const picDorDeGarganta = require("../../assets/images/about/sintomas/dordegarganta.jpg");
const picPressaoNoPeito = require("../../assets/images/about/sintomas/dorpressaonopeito.jpg");
const picErupcaoSanguinea = require("../../assets/images/about/sintomas/erupcaosanguinea.jpg");
const picFebre = require("../../assets/images/about/sintomas/febre.jpg");
const picNausea = require("../../assets/images/about/sintomas/nausea.jpg");
const picPerdaDaFala = require("../../assets/images/about/sintomas/perdadafala.png");
const picPerdaDeAlfato = require("../../assets/images/about/sintomas/perdadealfato.jpg");
const picReducaoDeApetite = require("../../assets/images/about/sintomas/reducaodeapetite.jpg");
const picTosseSeca = require("../../assets/images/about/sintomas/tosseseca.jpg");
const picVomitos = require("../../assets/images/about/sintomas/vomitos.jpg");

//o que fazer
const picDoctor = require("../../assets/images/about/oquefazer/doctor.png");

// proteção
const pic1 = require("../../assets/images/about/proteger/1.jpg");
const pic2 = require("../../assets/images/about/proteger/2.jpg");
const pic3 = require("../../assets/images/about/proteger/3.jpg");
const pic4 = require("../../assets/images/about/proteger/4.jpg");
const pic5 = require("../../assets/images/about/proteger/5.jpg");
const pic6 = require("../../assets/images/about/proteger/6.jpg");
const pic7 = require("../../assets/images/about/proteger/7.jpg");
const pic8 = require("../../assets/images/about/proteger/8.jpg");
const pic9 = require("../../assets/images/about/proteger/9.jpg");
const pic10 = require("../../assets/images/about/proteger/10.jpg");
const pic11 = require("../../assets/images/about/proteger/11.png");
const pic12 = require("../../assets/images/about/proteger/12.jpg");

const data = {
  p1:
    "O COVID 19, denominado, novo Coronavírus, é uma doença infectocontagiosa, descoberta no final de 2019, na cidade de Wuhan, China. Desde então, o vírus se espalhou pelo mundo, continuando a ser propagado até o momento. Acesse os painéis explicativos para obter informações básicas sobre a doença.",
  backgroundMenu: picMenu,

  surgimento: {
    title: "Onde surgiu o vírus?",
    picture: surgimentopicture,
    body:
      "De acordo com Organização Pan-americana da Saúde – OPAS (2020), instituição ligada à Organização Mundial da Saúde (OMS), como mostra o mapa, o novo Coronavírus surgiu na cidade Hubei, província de Wuhan, China. Antes, seis outros tipos de Coronavírus foram identificados pela ciência: HCoV-229E, HCoV-OC43, HCoV-NL63, HCoV-HKU1, SARS-COV (provoca a Síndrome Respiratória Aguda Grave – SRAG) e o MERS-COV.",
  },

  linhaDoTempo: {
    title: "Qual a linha do tempo do Coronavírus?",
    body: [
      {
        data: "31 de dezembro de 2019",
        story:
          "A Organização Mundial da Saúde (OMS) é informada sobre 44 pacientes com pneumonia na cidade de Wuhan – China",
      },
      {
        data: "11 de janeiro",
        story:
          "Primeira morte na China. Um homem que teria feito compras no mercado de frutos de mar de Wuhan",
      },
      {
        data: "23 de janeiro de 2020",
        story:
          "Surge um novo vírus, 2019-nCOV, com casos importados na Tailândia, Japão, Coreia do Sul e EUA. Cinco mortes ocorreram na província de Hubei, China",
      },
      {
        data: "24 de janeiro",
        story:
          "O vírus chega à Europa com casos confirmados na França e Alemanha",
      },
      {
        data: "30 de janeiro de 2020",
        story:
          "A OMS declara, dado o surto provocado pelo novo Coronavírus, Emergência de Saúde Pública, que é o mais alto nível de alerta",
      },
      {
        data: "7 de fevereiro",
        story:
          "O médico chinês Li Wenliang falece por contrair o vírus. Antes, ele tinha alertado às autoridades chinesas sobre o poder de transmissibilidade do Sars-CoV2",
      },
      {
        data: "9 de fevereiro de 2020",
        story:
          "Trinta e quatro brasileiros foram repatriados, vindos da cidade de Wuhan",
      },
      {
        data: "26 de fevereiro de 2020",
        story:
          "O Brasil reporta o primeiro caso de COVID 19, um paciente de São Paulo que esteve na Itália",
      },
      {
        data: "5 de março de 2020",
        story:
          "São Paulo registra a primeira transmissão local. Os primeiros casos fora de São Paulo foram notificados no Rio de Janeiro e no Espírito Santo",
      },
      {
        data: "8 de março de 2020",
        story:
          "Jair Bolsonaro e Donald Trump se encontram nos Estados Unidos. Vinte e três membros da comitiva brasileira foram contaminados. O vírus já atinge 100 países e 500 óbitos",
      },
      {
        data: "11 de março de 2020",
        story:
          "A OMS declara que o vírus é uma pandemia, quando há a difusão do surto por vários países",
      },
      {
        data: "17 de março de 2020",
        story:
          "Itália e Espanha serão os prováveis novos epicentros da doença. O Brasil registra a primeira morte pelo vírus",
      },
      {
        data: "20 de março de 2020",
        story:
          "O Ministério da Saúde decreta estado de transmissão comunitária e sugere isolamento de 2 semanas para pessoas sintomáticas e as que tiveram contato",
      },
      {
        data: "24 de março de 2020",
        story:
          "Rio de Janeiro e São Paulo adotam medidas de isolamento. O vírus já atinge todos os Estados no Brasil. O presidente Jair Bolsonaro minimiza os efeitos do COVID-19",
      },
      {
        data: "26 de março de 2020",
        story:
          "Espanha e Itália ultrapassam a China no número de óbitos, antes epicentro. Os Estados Unidos lideram em número de casos. Seriam eles o novo epicentro?",
      },
      {
        data: "2 de abril de 2020",
        story:
          "Os casos no mundo ultrapassam 1 milhão e os óbitos chegam a 50 mil. Estados Unidos, Itália e Espanha, em ordem, lideram no total de casos. No Brasil, Jair Bolsonaro sanciona ajuda de R$ 1.200,00 para os trabalhadores informais",
      },
      {
        data: "7 de abril de 2020",
        story:
          "A China não registra óbitos e Nova Iorque passa a ser o epicentro nos Estados Unidos",
      },
      {
        data: "10 de abril de 2020",
        story: "Falece por COVID-19 um menino Ianomâmi de 15 anos",
      },
      {
        data: "12 de abril de 2020",
        story:
          "No mundo, os casos e óbitos chegam a 1,5 milhão e 100 mil. Estados Unidos e Brasil registram 500 mil e 20 mil casos e 20 mil e 1 mil óbitos. Os Estados Unidos passam a ter mais casos e óbitos no mundo",
      },
      {
        data: "16 de abril de 2020",
        story:
          "O doutor Hans Henri Kluge (OMS) afirma que a transição para o “novo normal” durante a pandemia deve ser guiada por princípios de saúde pública. Jair Bolsonaro demite o Ministro da Saúde, Luiz Henrique Mandetta",
      },
      {
        data: "23 de abril de 2020",
        story:
          "A OMS alerta que o combate à pandemia deve ser integrado a uma abordagem baseada nos direitos humanos e alerta para a violência doméstica",
      },
      {
        data: "28 de maio de 2020",
        story: "O Brasil supera a China em número de óbitos",
      },
      {
        data: "6 de maio de 2020",
        story:
          "A Alemanha anuncia a flexibilização total de suas atividades. O país foi um dos que soube melhor manejar a crise do Coronavírus",
      },
      {
        data: "20 de maio de 2020",
        story:
          "O Governo Federal publica um novo protocolo de uso da Hidroxicloroquina para tratar pacientes com Coronavírus, mesmo sem comprovação científica",
      },
      {
        data: "23 de maio de 2020",
        story:
          "O novo Ministro da Saúde, Nelson Teich, defende um plano para a retomada de atividades. No mundo, mais de 5 milhões de casos e 330 mil óbitos. O Brasil assume o segundo lugar mundial em número de casos",
      },
      {
        data: "25 de maio de 2020",
        story:
          "O Ministro da Saúde, Nelson Teich, pede demissão do cargo, após discordâncias com o presidente da república",
      },
      {
        data: "5 de junho de 2020",
        story:
          "O Brasil ultrapassa a Itália em número de óbitos, assumindo o terceiro lugar. O Ministério da Saúde omite, no painel COVID-19 do seu site, dados sobre casos, óbitos e outras informações",
      },
      {
        data: "9 de junho de 2020",
        story:
          "Após intervenção do Supremo Tribunal Federal, o Governo Federal volta a publicar os dados no site",
      },
      {
        data: "15 de junho de 2020",
        story:
          "A União Europeia reabre suas fronteiras internas. Porém, publica que visitantes de alguns países estão impedidos de entrar no continente",
      },
      {
        data: "17 de junho de 2020",
        story:
          "A OMS abandona as pesquisas com a Hidroxicloroquina após evidências afirmarem que ela não contribui para a redução da mortalidade pelo vírus. Contudo, segundo o órgão, a dexametasona pode reduzir a mortalidade",
      },
      {
        data: "21 de junho de 2020",
        story:
          "O Brasil ultrapassa a marca de 50 mil óbitos e 1 milhão de casos confirmados",
      },
      {
        data: "22 de junho de 2020",
        story:
          "A vacina desenvolvida pela Universidade de Oxford começa a ser testada em um grupo de voluntários no Brasil",
      },
      {
        data: "30 de junho de 2020",
        story:
          "O mundo ultrapassa 10 milhões de casos e 500 mil óbitos. A União Europeia inclui Brasil e Estados Unidos na lista de países, cujos visitantes estão impedidos de entrar no continente",
      },
      {
        data: "7 de julho de 2020",
        story: "O presidente Jair Bolsonaro anuncia que está com COVID-19",
      },
      {
        data: "20 de julho de 2020",
        story:
          "Dias atrás, o Brasil ultrapassara a marca de 2 milhões de casos e agora bate os 80 mil óbitos. A Rússia anuncia que finalizou os testes da vacina contra o COVID-19",
      },
      {
        data: "22 de julho de 2020",
        story: "O Brasil bate o recorde diário com 67.860 casos",
      },
      {
        data: "23 de julho de 2020",
        story:
          "No Brasil, duas vacinas já estão sendo testadas na fase 3 com milhares de pessoas, cujo objetivo é testar a eficácia. As parcerias da vacina no país são SINOVAC/Instituto Butantan e Universidade de Oxford/AstraZeneca e FIOCRUZ ",
      },

      {
        data: "8 de agosto de 2020",
        story: "Mortes no Brasil por COVID-19 chegam a 100.000",
      },
    ],
    body2:
      "No Brasil, duas vacinas já estão sendo testadas na fase 3 com milhares de pessoas, cujo objetivo é testar a eficácia. As parcerias da vacina no país são SINOVAC/Instituto Butantan e Universidade de Oxford/AstraZeneca e FIOCRUZ",
  },

  espalhamento: {
    title: "Como o vírus se espalha?",
    body: [
      {
        image: picTosse,
        legend: "Tosse",
      },
      {
        image: picToque,
        legend: "Aperto/toque de mão",
      },
      {
        image: picGoticulas,
        legend: "Goticulas de saliva",
      },
      {
        image: picTransmissaoAr,
        legend: "Transmissão pelo ar",
      },
      {
        image: picEspirro,
        legend: "Espirro",
      },
      {
        image: picCatarro,
        legend: "Catarro",
      },
      {
        image: picSuperficie,
        legend: "Superfícies",
      },
      {
        image: picPlacenta,
        legend: "Placenta",
      },
    ],
  },

  sintomas: {
    title: "Que sintomas podem aparecer?",
    body: [
      {
        image: picTosseSeca,
        legend: "Tosse seca",
      },
      {
        image: picFebre,
        legend: "Febre",
      },
      {
        image: picCorisa,
        legend: "Coriza",
      },
      {
        image: picDorDeGarganta,
        legend: "Dor de garganta",
      },
      {
        image: picDifRespirar,
        legend: "Falta de ar",
      },
      {
        image: picPerdaDeAlfato,
        legend: "Perda de olfato",
      },
      {
        image: picAlteracaoPaladar,
        legend: "Alteração no paladar",
      },
      {
        image: picNausea,
        legend: "Náusea",
      },
      {
        image: picVomitos,
        legend: "Vômitos",
      },
      {
        image: picDiarrea,
        legend: "Diarreia",
      },
      {
        image: picCansaçoDor,
        legend: "Fadiga muscular",
      },
      {
        image: picReducaoDeApetite,
        legend: "Redução do apetite",
      },
      {
        image: picErupcaoSanguinea,
        legend: "Erupção cutânea",
      },
      {
        image: picPressaoNoPeito,
        legend: "Dor/pressão no peito",
      },
      {
        image: picPerdaDaFala,
        legend: "Perda da fala",
      },
      {
        image: picDorDeCabeça,
        legend: "Dor de cabeça",
      },
    ],
  },

  oQueFazer: {
    title: "O que fazer nos primeiros sintomas?",
    body1: [
      {
        image: picDoctor,
        legend: "Ao aparecer esses sintomas, procure um serviço de saúde",
      },
    ],

    body2: ["Febre", "Tosse", "Dor de garganta", "Coriza"],
  },
  medicamentosOuVacinas: {
    title: "Há medicamentos ou vacinas?",
    body: [
      "Não há cura para esse vírus. Os pacientes, em sua maioria, se recuperam. Há três vacinas em estágio mais avançado de desenvolvimento, testadas em pessoas de diversas partes do mundo. São elas: Moderna (Estados Unidos); Universidade de Oxford/AstraZeneca (Inglaterra) e SINOVAC (China). No entanto, a Rússia anunciou que finalizou a terceira fase e logo deverá produzir a vacina em massa. Leia nas páginas de notícias ou artigos para maiores informações sobre a evolução das vacinas.",

      "",
    ],
  },

  diagnose: {
    title: "Como diagnosticar essa doença?",
    body: [
      {
        title: "Diagnóstico clínico",
        subtitle:
          "Sintomatologia e outros sintomas típicos em crianças e idosos, além de pacientes com Síndrome Respiratória Aguda Grave (SRAG)",
      },
      {
        title: "Diagnóstico clínico-epidemiológico",
        subtitle:
          "Pacientes com sintomas ou SRAG, associado a histórico de contato nos últimos 14 dias antes do surgimento dos sinais com caso confirmado em laboratório para COVID-19",
      },
      {
        title: "Diagnóstico clínico-imagem",
        subtitle:
          "Identificação de alterações tomográficas em pacientes com sintomas respiratórios e febre/SRAG ou óbitos por SRAG não confirmado ou descartado por exame laboratorial",
      },
      {
        title: "Diagnóstico laboratorial",
        subtitle:
          "Para pacientes com sintomas respiratórios ou febre/SRAG poderão ser realizados os exames de biologia molecular (RT-PCR), imunológico, ensaio enzimático (ELISA), teste rápido, imunoensaio (ECLIA) ou de antígenos",
      },

      {
        title: "Diagnóstico laboratorial p/ assintomáticos",
        subtitle:
          "Para pessoas sem sintomas da COVID-19, os exames recomendados são o de biologia molecular, imunológico reagente para IgM e/ou IgA (ELISA e/ou teste rápido)",
      },
    ],
  },

  proteger: {
    title: "Como nos protegermos do vírus?",
    body: [
      {
        image: pic1,
        legend: "Lavar as mãos com frequência",
      },
      {
        image: pic2,
        legend: "Higienizar as mãos com álcool gel 70%",
      },
      {
        image: pic3,
        legend: "Cobri o nariz/boca ao espirrar/tossir",
      },
      {
        image: pic4,
        legend: "Manter distância de 1m de outra pessoa",
      },
      {
        image: pic5,
        legend: "Higienizar celular e brinquedos",
      },
      {
        image: pic6,
        legend: "Não compartilhar objetos pessoais",
      },
      {
        image: pic7,
        legend: "Manter os ambientes limpos e ventilados",
      },
      {
        image: pic8,
        legend: "Evitar aglomeração e circulação",
      },
      {
        image: pic9,
        legend: "Se doente, evitar contato com pessoas",
      },
      {
        image: pic10,
        legend: "Dormir bem e ter uma boa alimentação",
      },
      {
        image: pic11,
        legend: "Usar máscara ao sair de casa",
      },
      {
        image: pic12,
        legend: "Ficar em casa sempre que possível",
      },
    ],
  },

  ciclo: {
    title: "Qual o ciclo de transmissão da doença?",
    body: [
      {
        title: "Entre o 4° e 5° dia",
        subtitle:
          "Período de incubação do vírus e aparecimento dos primeiros sintomas",
      },
      {
        title: "Entre o 6° e 10° dia",
        subtitle:
          "Do início dos sintomas à detecção e/ou hospitalização do paciente",
      },
      {
        title: "Entre o 11° e 14° dia",
        subtitle:
          "Tempo de recuperação do paciente com sintomas leves e sem internação",
      },
      {
        title: "Entre o 11° e 18° dia",
        subtitle: "Período de internação do paciente para a sua recuperação",
      },
      {
        title: "Entre o 19° e 25° dia",
        subtitle:
          "Tempo de internação do paciente na Unidade de Terapia Intensiva - UTI",
      },
      {
        title: "Entre o 26° e 27° dia",
        subtitle:
          "Liberação do paciente recuperado ou seu falecimento por COVID-19",
      },
    ],
  },

  perfil: {
    title: "Qual o perfil das pessoas com maior risco?",
    body: [
      "Idosos acima de 60 anos",
      "Pacientes com câncer em tratamento",
      "Doentes crônicos e autoimunes",
      "Doentes afetados por comorbidades",
      "Fumantes",
      "Diabéticos",
      "Pessoas com doenças cardiovasculares",
      "Pessoas com HIV",
      "Obesos",
      "Pacientes asmáticos ou com bronquite",
      "Pessoas com síndrome respiratória",
      "Pessoas com doenças renais crônicas",
      "Doentes com imunodepressão",
      "Gestantes e puérperas",
      "Pessoas com doenças hematológicas",
    ],
  },

  comorbidades: {
    title: "O que são as chamadas comorbidades?",
    body1:
      "As comorbidades são doenças pré-existentes potencializadas pelo contato com o vírus. As comorbidades e algumas condições de saúde combinam ao menos duas das seguintes doenças:",
    body2: [
      "Obesidade",
      "Diabetes",
      "Hipertensão",
      "Doenças cardiovasculares (insuficiência cardíaca e arritmia)",
      "Doenças respiratórias crônicas (asma, bronquite, DPOC)",
      "Doenças renais (insuficiência renal crônica)",
      "Tuberculose",
      "HIV",
      "Enfermidades hematológicas",
      "Doenças por imunodepressão (lúpus ou câncer)",
    ],
  },

  rebanho: {
    title: "O que é imunidade ou grupo de rebanho?",
    body:
      "A imunidade de rebanho ou de grupo representa a proteção que uma população adquire a uma doença infecciosa, seja através da vacinação, ou da imunidade desenvolvida por uma infecção anterior. As pessoas suscetíveis de uma determinada população são expostas ao vírus, mas protegidas por outras pessoas que estão imunes à doença. Segundo dados de uma pesquisa nacional, conduzida pela Universidade Federal de Pelotas – UFPel e coordenada pelo Prof. Pedro Hallal, a taxa de infecção no país é de 3,8% da população. A imunidade de rebanho, segundo especialistas, é alcançada quando se tem 60% a 70% da população. Ainda de acordo com o Professor Hallal, pensar na imunidade de rebanho como política de saúde é um absurdo, já que um número aproximado de 1 milhão de pessoas morreria antes de atingi-la.",
    subsection: "Práticas de sucesso",
    body2:
      "Diversos países agiram com eficiência, eficácia e efetividade na prevenção e combate à pandemia do COVID-19. Algumas práticas de sucesso foram observadas, como por exemplo:",
    body3: [
      "Testagem contínua e massiva da população e identificação precoce dos casos",
      "Fechamento de bares, restaurantes, escolas, universidades, comércio e indústrias não essenciais",
      "Adoção do distanciamento, isolamento social e quarentenas obrigatórias",
      "Implantação de políticas rigorosas de Lockdown",
      "Isolamento de pessoas com casos, rastreamento e monitoramento dos grupos de contatos",
      "Monitoramento das taxas de mobilidade e de isolamento social",
      "Injeção de dinheiro na economia visando ajudar empresas, colaboradores e vulneráveis",
      "Comprometimento e disciplina das pessoas na execução das medidas de contenção",
      "Estabelecimento de equipes de investigação de casos e óbitos suspeitos",
      "Proibição de aglomerações em locais públicos, festas, estádios, shows, etc.",
      "Produção e distribuição em massa de equipamentos de proteção individual (EPI)",
      "Formação de comitês científicos de apoio ao processo de tomada de decisão",
      "Sistemas de saúde robustos e resilientes para lidar com as emergências",
      "Produção por empresas locais de kits de diagnóstico, insumos, recursos e equipamentos",
      "Instalação de barreiras sanitárias e fechamento das fronteiras (aeroportos, portos, rodoviárias)",
      "Adoção massiva do uso de máscaras e higienização para quem precisa sair para as ruas",
      "Desinfecção de ruas, estações de transporte e outros locais públicos",
      "Capacidade mutante de adicionar leitos de enfermaria, de UTI, recursos e profissionais",
      "Capacidade de liderança, articulação local e instituição de gestão ágil",
      "Combate rigoroso à desinformação sobre a pandemia do Coronavírus",
    ],

    subsection2: "Modelagem das projeções",

    body4: [
      "Como são feitas as projeções? Diversas fases compreendem o processo de previsão para o COVID-19, como: modelagem dos dados; análise do comportamento das curvas no tempo; identificação de padrões nas curvas; determinação do método de previsão; análise residual, calibração e ajuste do modelo; validação e estabelecimento das projeções.",
      "Na modelagem dos dados, os conjuntos são tratados com o objetivo de checar a existência de dados discrepantes, ausentes ou inconsistentes. Várias ferramentas são empregadas para a modelagem desses dados, tais como: teste de normalidade, Box-Plot, teste de Grubbs, histograma, teste de ensaios, funções autocorrelação e autocorrelação parcial e gráficos de dispersão.",
      "A análise do comportamento das curvas das variáveis casos e óbitos acumulados visa compreender como os dados estão se distribuindo ao longo do tempo. Essa abordagem faz parte da análise de séries temporais, ou seja, são séries históricas de um certo conjunto de dados. O uso da média móvel é útil para facilitar o reconhecimento de certos padrões e tendências.",
      "Na fase de identificação de padrões nas curvas, a modelagem visa reconhecer comportamentos, tais como tendências de crescimento ou decrescimento, estabilização, concentração de dados em torno de valores médios, achatamentos, autocorrelacionamentos, curvas em “S”, entre outros. Essa etapa é importante para se buscar uma curva que melhor se ajuste ao padrão dos dados reais.",
      "Com os padrões de comportamentos já reconhecidos, procede-se ao uso dos métodos de previsão. Nesta pesquisa são utilizados métodos baseados em séries temporais e envolvem técnicas, como: média móvel, suavização exponencial (simples, dupla e Método de Holt-Winters), decomposição sazonal, tendências amortecidas (sazonais e não sazonais) e modelos ARIMA. De acordo com a modelagem de dados, comportamentos e padrões das curvas, o método é selecionado para se fazer as projeções preliminares. Os intervalos de confiança utilizados nesta pesquisa foram 95%, 97,5% e 99,5%. Os intervalos de previsão aplicados variaram de 40% a 95%. Três indicadores são utilizados para selecionar os modelos ARIMA, que são: AIC, AICc e BIC. Algumas séries de dados necessitam de transformação por serem autocorrelacionados. Duas técnicas são aplicadas para transformar os dados: transformada de Johnson e transformada de Box-Cox. Os valores atípicos são identificados por 3 desvios em torno da média e ajustados pelo método de interpolação do Spline cúbico.",
      "A análise residual representa verificar, através de medidas de erro, a diferença entre os valores reais do conjunto de dados e os valores ajustados pelos métodos de previsão. Essa diferença, conhecida como ruído ou desvios, deve ser a mínima possível, para que se tenham projeções mais assertivas e confiáveis. As medidas de erro utilizadas nessa pesquisa são o erro percentual médio (MAPE), o erro médio absoluto (DAM) e o erro médio quadrático da raiz (RMSE). A ideia é que esses três indicadores sejam minimizados simultaneamente, para se gerar projeções mais precisas.",
      "Na fase de calibração e ajuste dos modelos, os intervalos de confiança e de previsão são ajustados para se produzir os menores erros possíveis, dada a grande incerteza que envolve a pandemia. O primeiro ajuste relaciona esses intervalos e a verificação dos seus efeitos em torno das medidas de erro. Outros indicadores são usados para determinar a precisão dos métodos e assim, auxiliar na calibração dos modelos, como U de Theil e Durbin-Watson. Os ajustes também são realizados com base na avaliação das métricas de erro.",
      "A validação de um modelo é feita a partir de inúmeros testes, por exemplo, testes de normalidade, identificação de homocedasticidade, teste de independência, teste dos valores atípicos, testes de correlação, testes de Ljung-Box e Box-Pierce. Gráficos de dispersão cruzando valores ajustados e os erros, resíduos versus a ordem de ocorrência no tempo, também são úteis para validar os modelos. Outro importante teste aplicado nesta pesquisa é a validação cruzada, que envolve um teste de hipótese entre dois conjuntos de dados: um conjunto de treinamento, obtido pelo ajuste em torno dos valores históricos, e um conjunto de teste, obtido a partir do modelo de previsão e os dados reais que ocorrerão no futuro. Se não houver diferença estatística entre os conjuntos, o modelo é válido, apresentando a capacidade de prever novos valores.",
      "Por fim, com o modelo validado, as projeções são realizadas para produzir estimativas assertivas, precisas e confiáveis. Outros dois métodos são usados em combinação com os métodos de previsão: uma Simulação de Monte Carlo foi empregada para projetar os valores previstos nos intervalos de confiança e de previsão com o fim de preservar a representatividade estatística. Já os métodos de otimização foram usados para definir o método de previsão mais adequado, a partir da minimização das medidas de erro.",
    ],
  },

  glossario: {
    Section: "Glossário e notas",
    title: "Glossário",
    subtitle:
      "Esta seção oferece um glossário básico cujo objetivo é esclarecer sobre termos e conceitos aplicados na aba PAINEL PB. Os termos estão listados em ordem alfabética.",

    body: [
      {
        title: "Acumulado(s)",
        text:
          "Este termo representa o somatório, dia a dia, do valor de uma variável. Ou seja, o valor de ontem vai ser somado com o valor de hoje e, assim por diante. O valor acumulado não pode ser negativo para casos, óbitos e recuperados, já que essas variáveis não assumem valores negativos.",
      },
      {
        title: "AIC",
        text:
          "É o critério de informação de Akaike, usado como fator de escolha dentre modelos em avaliação.",
      },
      {
        title: "AICc",
        text:
          "Critério de informação de Akaike corrigido, usado como fator de escolha dentre modelos em avaliação que são alimentados a partir de uma amostra pequena",
      },
      {
        title: "Análise gráfica",
        text:
          "Esta seção trata da apresentação de uma série de gráficos que mostram o comportamento do COVID-19 por meio de diversos indicadores para o Estado da Paraíba.",
      },
      {
        title: "Arima",
        text:
          "Família de modelos auto-regressivos integrados de médias móveis utilizados em processos de previsão.",
      },
      {
        title: "BIC",
        text:
          "Critério Bayesiano de Schwarz, utilizado para escolher modelos em avaliação quando há relação entre uma variável dependente e outras explanatórias ou independentes que explicam a primeira.",
      },
      {
        title: "Casos",
        text: "São os casos registrados por acometimento do Coronavírus.",
      },
      {
        title: "Confirmado (a)",
        text:
          "É o valor da variável que foi oficialmente registrado pelo poder público ou instituição.",
      },
      {
        title: "Comorbidades",
        text:
          "Ocorrência de duas ou mais doenças que se relacionam simultaneamente entre si.",
      },
      {
        title: "COVID-19",
        text:
          "É a doença transmissível do novo Coronavírus, também chamada de SARS-CoV2, descoberta no final de 2019, na China.",
      },
      {
        title: "Diário (dia)",
        text:
          "É o valor da variável registrado no dia ou diariamente. Ou seja, a frequência do valor da variável é contada por dia.",
      },
      {
        title: "Doenças Autoimunes",
        text:
          "São doenças cujo sistema imunológico de uma pessoa ataca as próprias células do organismo.",
      },
      {
        title: "Doenças cardiovasculares",
        text:
          "São doenças que atacam o sistema cardíaco, composto de coração e vasos sanguíneos.",
      },
      {
        title: "DPOC",
        text:
          "Doença pulmonar obstrutiva crônica que ataca o sistema respiratório, como por exemplo, a bronquite e o enfisema. Essas doenças bloqueiam a passagem de ar pelos pulmões.",
      },
      {
        title: "ECLIA",
        text:
          "É o exame de eletroquimioluminescência utilizado para detectar doenças como Hepatite C, HIV, entre outras.",
      },
      {
        title: "ELISA",
        text:
          "Do Inglês Enzyme Linked ImmunonoSorbent Assay, é um teste para detectar anticorpos específicos (IgG e IgM) ou doenças, como o HIV.",
      },
      {
        title: "EPI",
        text:
          "Significa Equipamentos de Proteção Individual. Na pandemia do COVID-19 os EPIs têm sido utilizados pelos profissionais de saúde, como por exemplo, máscaras, luvas, aventais, calçados, óculos de proteção facial e gorros.",
      },
      {
        title: "Escala logarítmica",
        text:
          "Os valores absolutos da variável são transformados através de uma função logarítmica (Log10).",
      },
      {
        title: "Escala absoluta",
        text:
          "São os valores contados como a frequência de uma determinada variável.",
      },
      {
        title: "Expectativa",
        text:
          "Se refere à projeção da variável para um determinado período de tempo, dado em dias.",
      },
      {
        title: "Flexibilização",
        text:
          "Corresponde aos planos de reabertura econômica das atividades ou afrouxamento de medidas de contenção.",
      },
      {
        title: "Habitantes (hab)",
        text:
          "É a quantidade de pessoas que vivem em uma região, seja, cidade, Estado ou da Federação.",
      },
      {
        title: "HIV",
        text:
          "Trata-se do vírus da imunodeficiência humana, que ataca o sistema imunológico e provoca a AIDS (Síndrome da Imunodeficiência Adquirida)",
      },
      {
        title: "Imunidade de rebanho",
        text:
          "É a proteção indireta de pessoas não imunizadas por pessoas que já estão vacinadas.",
      },
      {
        title: "Incidência",
        text:
          "É uma relação entre a quantidade total de uma determinada variável e a quantidade de habitantes de uma população.",
      },
      {
        title: "Incubação",
        text:
          "É o período decorrido entre a exposição de uma pessoa ao vírus e a manifestação dos sintomas iniciais.",
      },
      {
        title: "Indicadores COVID-19",
        text:
          "São medidas que estimam um determinado aspecto ligado ao Coronavírus. Essas métricas visam avaliar o comportamento da doença.",
      },
      {
        title: "K",
        text:
          "Grandeza para representar 1 mil unidades de uma determinada variável. ",
      },
      {
        title: "Leitos",
        text:
          "É uma cama dedicada a receber um paciente que será internado em uma enfermaria, quarto ou Unidade de Terapia Intensiva (UTI)",
      },
      {
        title: "Letalidade",
        text:
          "Representa os falecimentos em decorrência do Coronavírus em relação aos casos confirmados.",
      },
      {
        title: "Mapas dinâmicos",
        text:
          "São representações gráficas de indicadores COVID-19 no Estado da Paraíba, mostrando a evolução da doença nos municípios paraibanos.",
      },
      {
        title: "Média móvel",
        text:
          "É um cálculo matemático que envolve a soma dos valores de uma variável nos últimos “n” dias e divide pela quantidade desses dias. A média móvel tem outra função importante, que é suavizar os dados de uma dada variável ao longo do tempo, apontando tendências e padrões no comportamento de curvas.",
      },
      {
        title: "Mortalidade",
        text:
          "É a quantidade de óbitos relacionada ao número de habitantes de uma população.",
      },
      {
        title: "Novos",
        text:
          "São as quantidades de casos, óbitos e recuperados registrados no dia. ",
      },
      {
        title: "Número básico de expedição (Rt)",
        text:
          "Esse indicador é a taxa de transmissibilidade ao longo do tempo. Ele mostra a quantidade de pessoas que pode ser infectada por uma mesma pessoa com Coronavírus.",
      },
      {
        title: "Óbitos",
        text: "São os falecimentos confirmados pelo COVID-19. ",
      },
      {
        title: "Projeções",
        text:
          "São as estimativas dos casos e óbitos confirmados e acumulados em um horizonte de tempo à frente.",
      },
      {
        title: "Puérperas",
        text:
          "Mulheres que tiveram filhos a pouco tempo e estão na fase do pós-parto ou resguardo.",
      },
      {
        title: "Ranking",
        text:
          "Classifica as cidades paraibanas de acordo com alguns critérios, como número de casos, número de óbitos, letalidade, entre outros.",
      },
      {
        title: "Recuperados",
        text:
          "É a quantidade oficial de pacientes recuperados do Coronavírus a partir da internação hospitalar.",
      },
      {
        title: "RT-PCR",
        text:
          "Do inglês, Reverse Transcription Polymerase Chain Reaction, ou transcrição reversa seguida de cadeia reativa à polimerase. Teste usado para detectar a presença do vírus em uma pessoa a partir do material coletado do seu nariz ou garganta.",
      },
      {
        title: "Semana epidemiológica",
        text:
          "É a semana epidêmica designada pelo Ministério da Saúde e que se estende do domingo ao sábado de uma mesma semana.",
      },
      {
        title: "Sintomatologia",
        text:
          "Se refere ao estudo e avaliação dos sintomas, causas e etiologias de uma doença.",
      },
      {
        title: "SRAG",
        text:
          "A Síndrome Respiratória Aguda Grave é uma complicação da síndrome gripal e pode vir acompanhada de sintomas como insuficiência respiratória, dispneia, desconforto respiratório, entre outros.",
      },
      {
        title: "Taxa de (de) crescimento",
        text:
          "É um indicador que mede o crescimento ou decrescimento de um determinado indicador. Para números acumulados a taxa sempre será positiva. Para variáveis medidas como novos números, dia a dia, ou semana a semana, a taxa pode ser negativa, caso os valores sejam menores que o dia ou semana anterior.",
      },
      {
        title: "Taxa de isolamento",
        text: "Mede, dia a dia, o percentual de isolamento das pessoas.",
      },
      {
        title: "Taxa de mobilidade",
        text:
          "Mede, dia a dia, o percentual de mobilidade das pessoas nas casas ou em lugares como mercados, parques, entre outros.",
      },
      {
        title: "Taxa de ocupação",
        text:
          "Mede quanto de um determinado recurso está sendo utilizado ou ocupado. ",
      },
      {
        title: "Testes aplicados",
        text:
          "Refere-se à quantidade de testes rápidos, adquiridos e distribuídos pelo Estado da Paraíba e aplicados pelos municípios. ",
      },
      {
        title: "Tomográficas",
        text:
          "Termo relacionado à tomografia, que é um exame radiológico auxiliado por computador. ",
      },
      {
        title: "UTI",
        text: "Unidade de Terapia Intensiva",
      },
      {
        title: "Variação semanal",
        text: "Indica a variação de um indicador, de um percentual para outro.",
      },
      {
        title: "Zona de platô",
        text:
          "É uma parte do gráfico de casos ou óbitos, novos ou acumulados, que mostra uma estabilização nos dados. Para os dados acumulados, a zona de platô é alcançada quando a curva de casos ou óbitos vai ficando menos inclinada em direção paralela ao eixo “x” (período de tempo). A curva vai deitando em sentido horizontal. Para as curvas de novos casos ou novos óbitos, a zona de platô é atingida no pico ou cume da curva, cujo esforço é achatar esse cume para que os sistemas de saúde possam absorver os pacientes que precisam de cuidados médicos, notadamente cuidados intensivos. A ideia é que, alcançado o cume, os casos e óbitos, caiam de maneira consecutiva e consistente, de modo a assegurar a estabilização e controle da pandemia.",
      },
    ],

    title2: "Notas",
    subtitle2:
      "Nesta seção apresentamos uma definição dos indicadores e variáveis usados no PAINEL PB. A ideia é auxiliar na análise de gráficos e mapas.",

    body2: [
      {
        title: "Casos confirmados",
        text:
          "Registro dos casos totais e oficiais, somados (acumulados) ao longo do tempo em números absolutos.",
      },
      {
        title: "Casos confirmados por semana",
        text:
          "Registro da quantidade acumulada (dados absolutos) de casos confirmados por semana epidemiológica. No gráfico são ilustrados os percentuais de crescimento entre as semanas, ou seja, quanto houve de crescimento de uma semana para outra em torno dos valores acumulados para a Paraíba, João Pessoa e Campina Grande.",
      },
      {
        title: "Casos no dia",
        text:
          "Registro da quantidade de casos oficiais por dia em números absolutos. São novos casos por dia.",
      },
      {
        title: "Casos/10 mil hab",
        text:
          "Mede a incidência de casos, que é a quantidade de casos totais confirmados a cada 10 mil habitantes.",
      },
      {
        title: "Curvas logarítmicas de casos",
        text:
          "Curva que representa os casos acumulados e as projeções de 14 dias, fornecidas pelos modelos de previsão. Os dados são transformados em uma escala logarítmica, cujo objetivo é verificar se os casos atingiram a zona de platô ideal, ou seja, a curva que reflete uma queda consistente e sustentada dos casos após o pico.",
      },
      {
        title: "Curvas logarítmicas de óbitos",
        text:
          "Curva que representa os óbitos acumulados e as projeções de 14 dias, fornecidas pelos modelos de previsão. Os dados são transformados em uma escala logarítmica, cujo objetivo é verificar se os óbitos já atingiram a zona de platô ideal, ou seja, a curva que reflete uma queda consistente e sustentada dos óbitos após o pico.",
      },
      {
        title: "Expectativa de casos para 14 dias",
        text:
          "Curva que representa os casos acumulados; as projeções de 14 dias, fornecidas pelos modelos de previsão; e os intervalos de confiança para os dados projetados.",
      },
      {
        title: "Expectativa de óbitos para 14 dias",
        text:
          "Curva que representa os óbitos acumulados; as projeções de 14 dias, fornecidas pelos modelos de previsão; e os intervalos de confiança para os dados projetados.",
      },
      {
        title: "Leitos de enfermaria",
        text:
          "Medida da divisão entre o total de leitos ocupados e a capacidade máxima dos leitos de enfermaria, multiplicada por 100 para exibi-la como um percentual de ocupação.",
      },
      {
        title: "Leitos de UTI",
        text:
          "Medida da divisão entre o total de leitos ocupados e a capacidade máxima dos leitos de UTI, multiplicada por 100 para exibi-la como um percentual de ocupação.",
      },
      {
        title: "Letalidade",
        text:
          "É o número de óbitos confirmados por COVID-19, dividido pelo número total de casos confirmados. O valor resultante dessa relação é multiplicado por 100, dado em percentual.",
      },
      {
        title: "Média móvel",
        text:
          "Curva de ajuste dos dados obtida através de uma média dos últimos sete períodos.",
      },
      {
        title: "Mortalidade/10 k hab",
        text:
          "Mede a incidência de óbitos, que é a quantidade de óbitos totais confirmados a cada 10 mil habitantes.",
      },
      {
        title: "Número básico de reprodução (Rt)",
        text:
          "Envolve uma série de estimativas de parâmetros epidemiológicos do COVID-19. Em suma, este indicador pode ser sintetizado como a divisão entre a taxa de transmissão e a taxa de recuperação. Valores abaixo de “1” observados por mais de 14 dias consecutivos indicam uma tendência de controle da transmissão do vírus.",
      },
      {
        title: "Óbitos confirmados",
        text:
          "Registro dos óbitos totais e oficiais, somados (acumulados) ao longo do tempo em números absolutos.",
      },
      {
        title: "Óbitos confirmados por semana",
        text:
          "Registro da quantidade acumulada (dados absolutos) de óbitos confirmados por semana epidemiológica. No gráfico são ilustrados os percentuais de crescimento entre as semanas, ou seja, quanto houve de crescimento de uma semana para outra em torno dos valores acumulados para a Paraíba, João Pessoa e Campina Grande.",
      },
      {
        title: "Óbitos/10 mil hab",
        text:
          "Mede a incidência de óbitos, que é a quantidade de óbitos totais confirmados a cada 10 mil habitantes.",
      },
      {
        title: "Óbitos por faixa etária",
        text:
          "Ilustra a quantidade, em números absolutos, de falecimentos por Coronavírus na Paraíba por faixa de idade.",
      },
      {
        title: "Recuperados",
        text:
          "Registro da quantidade de pacientes recuperados totais e oficiais, somados (acumulados) ao longo do tempo em números absolutos.",
      },
      {
        title: "Recuperados no dia",
        text:
          "Registro da quantidade de pacientes recuperados oficiais por dia em números absolutos. São novas pessoas recuperadas por dia.",
      },
      {
        title: "Taxa de crescimento diário - casos",
        text:
          "Relaciona o crescimento percentual dos casos acumulados de um dia para o outro. É a divisão do total de casos acumulados no dia atual, pelo total de casos acumulados no dia anterior, menos “1”, multiplicado por 100.",
      },
      {
        title: "Taxa de crescimento diário - óbitos",
        text:
          "Relaciona o crescimento percentual dos óbitos acumulados de um dia para o outro. É a divisão do total de óbitos acumulados no dia atual, pelo total de óbitos acumulados no dia anterior, menos “1”, multiplicado por 100.",
      },
      {
        title: "Taxa de leitos - Enfermaria",
        text:
          "É o número total de leitos ocupados em uma enfermaria, dividido pelo o total de leitos instalados na mesma área, multiplicado por 100. Indicador dado em percentual.",
      },
      {
        title: "Taxa de leitos - UTI",
        text:
          "É o número total de leitos ocupados em uma UTI, dividido pelo o total de leitos instalados na mesma unidade, multiplicado por 100. Indicador dado em percentual.",
      },
      {
        title: "Taxa de mobilidade",
        text:
          "Mede a taxa percentual de movimentação das pessoas por seis centros de localização: mercados e farmácias, lazer e entretenimento, parques e praias, estações de trem e metrô, locais de trabalho e residências. O indicador acompanhado do sinal negativo (-) sinaliza uma queda percentual. O rastreamento é realizado pela plataforma Google, de maneira anônima, por meio de dados compartilhados voluntariamente por usuários.",
      },
      {
        title: "Taxa de isolamento social",
        text:
          "Mede a taxa percentual de isolamento das pessoas em suas residências.",
      },
      {
        title: "Testes aplicados",
        text:
          "Registra a quantidade absoluta de testes aplicados pelos municípios paraibanos.",
      },
      {
        title: "Testes/10 mil hab",
        text:
          "Mede a incidência de testes, que é a quantidade de testes totais confirmados a cada 10 mil habitantes.",
      },
      {
        title: "Ranking de cidades",
        text:
          "Ordena as cidades paraibanas em critérios como casos, casos/10k hab., óbitos, óbitos/10k hab., letalidade, testes e testes/10k.",
      },
    ],

    title3: "Fontes de dados e créditos",
    subtitle3:
      "Os dados e informações utilizados nessa pesquisa estão sendo levantados das seguintes de inúmeras fontes, tais como:",
    body3: [
      {
        title: "Canva",
        link: "http://canva.com",
      },
      {
        title: 'Google LLC "Google COVID-19 Community Mobility Reports"',
        link: "https://www.google.com/covid19/mobility/",
      },
      {
        title: "Governo do Estado da Paraíba",
        link: "https://superset.plataformatarget.com.br/superset/dashboard/55/",
      },
      {
        title: "Governo do Estado de São Paulo",
        link: "https://www.seade.gov.br/coronavirus/",
      },
      {
        title: "Humanitarian Data Exchange",
        link:
          "https://data.humdata.org/dataset/novel-coronavirus-2019-ncov-cases",
      },
      {
        title: "Imperial College London – Report 12",
        link:
          "https://www.imperial.ac.uk/mrc-global-infectious-disease-analysis/covid-19/report-12-global-impact-covid-19/",
      },
      {
        title:
          "Johns Hopkins University & Medicine. Center for Systems Science and Engineering",
        link: "https://coronavirus.jhu.edu",
      },
      {
        title: "Ministério da Saúde (MS)",
        link: "https://coronavirus.saude.gov.br/",
      },
      {
        title: "Organização Mundial da Saúde (OMS)",
        link: "https://www.who.int/emergencies/diseases/novel-coronavirus-2019",
      },
      {
        title: "Organização Pan-americana da Saúde (OPAS)",
        link:
          "https://www.paho.org/bra/index.php?option=com_content&view=article&id=6101:covid19&Itemid=875",
      },
      {
        title: "Painel Coronavírus – Ministério da Saúde",
        link: "https://covid.saude.gov.br/",
      },
      {
        title: "Power BI",
        link: "https://powerbi.microsoft.com/en-us/",
      },
      {
        title: "Prefeitura Municipal de Campina Grande",
        link: "https://coronaviruscg.com.br/",
      },
      {
        title: "Prefeitura Municipal de João Pessoa",
        link:
          "https://experience.arcgis.com/experience/d76ba516389d4e83b9a778d266cac5c1/",
      },
      {
        title: "Secretaria de Estado da Saúde - Paraíba",
        link: "https://www.instagram.com/saudepbgov/?hl=pt-br",
      },
      {
        title:
          "Universidade Federal de Campina Grande – Centro de Ciência e Tecnologia",
        link: "https://cct.ufcg.edu.br/category/noticias/",
      },
      {
        title: "Worldometer. COVID-19 Coronavirus Pandemic",
        link: "https://www.worldometers.info/coronavirus/",
      },
    ],
  },
};

export default data;
