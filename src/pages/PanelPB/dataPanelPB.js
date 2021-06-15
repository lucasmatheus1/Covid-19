const corte1 = require("../../assets/images/corte1.png");
const corte2 = require("../../assets/images/corte2.png");
const corte3 = require("../../assets/images/corte3.png");
const corte4 = require("../../assets/images/corte4.png");
const corte5 = require("../../assets/images/corte5.png");
const corte6 = require("../../assets/images/corte6.png");

const data = {
  data1: [
    "Uma das principais questões que se busca responder é se a curva, seja de casos ou de óbitos, está achatando. Quanto maior o pico dessa curva, mais casos e mais óbitos teremos ao mesmo tempo. Uma preocupação crítica dos gestores da saúde, especialmente do SUS - Sistema Único de Saúde, sob gestão de Estados e Municípios, é evitar a situação de um pico com elevado grau de inclinação. A explicação está na limitação de recursos dos entes públicos, particularmente nos leitos de enfermaria e de UTI (Unidade de Terapia Intensiva) em absorver a demanda, já que mais pessoas infectadas e sintomáticas buscariam o sistema de saúde pelo o agravamento da doença. Assim, reduzir o pico e distribuir a quantidade de pessoas infectados ao longo do tempo, pode melhorar as condições de atendimento da população, evitando que a capacidade instalada dos leitos não seja alcançada ou que o poder público tenha tempo para adicionar capacidade e ajustar recursos para que o sistema absorva mais pessoas.",

    "",

    "Como saber se uma curva está achatando? As curvas mais usadas para avaliar o comportamento epidêmico do COVID-19 são de casos acumulados, óbitos acumulados, novos casos e novos óbitos. Nessa sequência, veja o caso típico da Itália para ilustrar a questão do achatamento. Nós temos duas curvas com valores acumulados, casos e óbitos. Quando os dados vão se estabilizar? Para os dados acumulados a estabilidade ocorre quando a curva vai entrando na zona de platô, ou seja, quando a curva vai ficando menos inclinada em direção paralela ao eixo “x” (meses). A curva vai deitando em sentido horizontal. Para os casos acumulados na Itália, observe no gráfico que a curva começa a inclinar por volta do dia 30 de abril. O percentual de crescimento diário, neste ponto, estava abaixo de 1%. Na curva de óbitos acumulados a inclinação horizontal começa por volta de 1° de maio, com os percentuais caindo abaixo de 1%. Assim, a partir dessas datas, é possível observar que as curvas vão se estabilizando, alcançando, portanto, a zona de platô. As curvas acumuladas não se achatam, já que são plotadas em função dos valores acumulados. ",

    "",

    "",
  ],
  data2: [
    "Agora, veja os gráficos abaixo de novos casos e novos óbitos, registrados como a soma no dia. Para esse tipo de curva, a análise sobre a zona de platô recai sobre três fases: crescimento, pico e decrescimento. Neste tipo de curva é mais conveniente analisar o achatamento da curva. Aqui a conotação de platô se refere ao pico, mais precisamente reduzir o pico, de tal forma que os sistemas de saúde consigam ser resilientes ou se adaptar para receber novos pacientes. Quanto menos agudo for o pico, menos crítica é a situação, pois indica que menos pessoas estão se infectando e falecendo ao mesmo tempo. No exemplo da Itália, tanto a curva de casos, como a de óbitos são agudas. Isso explica a criticidade que o país viveu em um curto espaço de tempo. As linhas em vermelho representam as médias móveis de 7 dias, que ajudam a suavizar o comportamento dos dados e ter uma noção mais precisa do que ocorreu nos últimos sete dias. Para os sistemas de saúde, a curva de óbitos é mais relevante, pois indica que mais pacientes precisaram do serviço de UTI, que tem capacidade limitadíssima para uma pandemia dessa magnitude. O que se busca é mudar o curso da curva, de crescente para decrescente, durante vários dias consecutivos. Por isso, o distanciamento social é importante, pois as chances de pessoas se infectarem simultaneamente é menor e, portanto, favorece o achatamento da curva que é ter menos casos do que o dia anterior por vários dias. ",
  ],
  data3: [
    "",

    "",

    "",

    "Outro tipo de curva que permite uma visualização melhor da zona de platô é a curva logarítmica, como a função transformada logarítmica dos casos e óbitos acumulados em valores absolutos. Nos gráficos abaixo é possível classificar duas zonas: (1) preparação da estabilização e (2) zona de platô (estabilização).",
  ],
  data4: [
    "Antes de se alcançar a estabilidade sustentada dos casos e óbitos, é possível observar uma zona pré-platô (em verde), estabelecida dias após o pico, indo de 30 de março a 30 de abril, para casos, e de 4 de abril a 7 de maio para óbitos. Após a zona pré-platô, os dados começam a ter uma boa estabilização, sinalizando um maior controle sobre pandemia do COVID-19.  A área em azul é a zona de platô. É nessa zona que se deve criar as condições para a implantação de planos de reabertura econômica seguros e sustentáveis quando as curvas de novos casos e novos óbitos estiveram arrefecidas. Para o caso da Itália, uma sugestão segura seria iniciar os planos de flexibilização 30 dias após a entrada na zona de platô para a curva de casos acumulados.",

    "Algumas observações devem ser relatadas: ",

    "(1) a análise das curvas quanto à estabilização dos casos e óbitos deve ser realizada conjuntamente com outros indicadores, como taxa de internação, taxa de ocupação dos leitos de UTI, taxa de transmissibilidade (Rt), taxa de imunização, taxa de isolamento social, letalidade, novos focos de surtos, entre outras; ",

    "(2) as considerações sobre a estabilização das curvas valem apenas para a Itália, pois os percentuais de crescimento e os comportamentos epidêmicos das curvas são diferentes, de país para país; ",

    "(3) a análise da zona de platô das curvas logarítmicas pode auxiliar nas decisões de início de execução dos planos de reabertura ou mesmo decidir por retroceder à adoção de medidas de contenção mais rígidas em caso de reincidência;",

    "(4) A estabilização das curvas não garante que o surto está completamente controlado e pode voltar a explodir, a depender do processo de interiorização do vírus, planos inadequados e precipitação do início da implantação da reabertura econômica, desestímulo ao cumprimento das medidas de contenção, falta de disciplina e comprometimento da população, negacionismo das pessoas, falsa sensação de segurança que os planos de reabertura podem provocar, falta da vacina, etc. ",
  ],
  imgs: [corte1, corte2, corte3, corte4, corte5, corte6],
};

export default data;
