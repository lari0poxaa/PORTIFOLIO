/*
 * Projetos são estudos demonstrativos com cenários e dados simulados.
 * Para adicionar, editar ou remover um projeto, altere o array abaixo.
 * Campos de link são opcionais; use strings vazias até existir um destino real.
 */
window.PORTFOLIO_PROJECTS = [
  {
    id: "indicadores-atendimento",
    title: "Indicadores de atendimento",
    category: "Power BI",
    image: "assets/images/projeto-powerbi.svg",
    description: "Estudo demonstrativo de um painel para acompanhar volume, status e tempo de atendimento em uma operação fictícia.",
    problem: "Em uma operação fictícia, informações de atendimento dispersas dificultam a leitura do fluxo e a identificação de pontos de acompanhamento.",
    objective: "Organizar indicadores operacionais em uma visão que permita comparar períodos e explorar os dados por status e canal.",
    approach: "Modelagem simplificada, medidas ilustrativas em DAX e construção de páginas com filtros e hierarquia visual. Os dados são simulados.",
    results: "O exemplo demonstra como centralizar indicadores e facilitar a exploração do cenário. Não há resultados reais nem métricas de uma operação existente.",
    tools: ["Power BI", "DAX", "Modelagem de Dados"],
    githubUrl: "",
    dashboardUrl: ""
  },
  {
    id: "analise-pedidos-sql",
    title: "Exploração de pedidos com SQL",
    category: "SQL",
    image: "assets/images/projeto-sql.svg",
    description: "Consultas sobre uma base fictícia de pedidos para explorar composição, recorrência e variações por período.",
    problem: "Uma loja fictícia precisa compreender a estrutura de seus pedidos, mas os registros estão em tabelas relacionais sem uma visão consolidada.",
    objective: "Praticar consultas que agreguem informações de pedidos e itens, permitindo investigar padrões por período e categoria.",
    approach: "Consultas SQL com filtros, junções e agregações sobre uma estrutura de dados de exemplo, com checagens básicas de consistência.",
    results: "O estudo apresenta consultas reproduzíveis para responder perguntas de negócio. Os dados e possíveis achados são simulados e não representam uma loja real.",
    tools: ["SQL", "Modelagem de Dados"],
    githubUrl: "",
    dashboardUrl: ""
  },
  {
    id: "qualidade-cadastral-python",
    title: "Qualidade de dados cadastrais",
    category: "Python",
    image: "assets/images/projeto-python.svg",
    description: "Exemplo de perfilamento e tratamento de inconsistências em dados cadastrais fictícios.",
    problem: "Registros incompletos, duplicados ou com formatos divergentes podem dificultar análises e rotinas de conferência.",
    objective: "Demonstrar etapas de exploração, padronização e sinalização de possíveis problemas em uma base simulada.",
    approach: "Fluxo em Python para inspeção de campos, verificação de nulos e duplicidades e preparação de uma versão tratada para análise.",
    results: "O material demonstra uma sequência de validações que pode apoiar a revisão de dados. Não quantifica ganhos nem usa cadastros reais.",
    tools: ["Python", "Pandas", "Análise Exploratória"],
    githubUrl: "",
    dashboardUrl: ""
  },
  {
    id: "controle-pendencias-excel",
    title: "Acompanhamento de pendências",
    category: "Excel",
    image: "assets/images/projeto-excel.svg",
    description: "Planilha demonstrativa para estruturar pendências operacionais por etapa, responsável e situação.",
    problem: "Em um fluxo fictício, acompanhamentos registrados sem padrão podem dificultar a priorização e a consulta de itens em aberto.",
    objective: "Propor uma estrutura simples de controle que organize o status das pendências e facilite atualizações periódicas.",
    approach: "Organização tabular, validação de dados e fórmulas ilustrativas em Excel, com atenção à clareza e consistência dos registros.",
    results: "O exemplo mostra uma forma organizada de acompanhar itens em um cenário simulado. Não representa uma planilha usada em empresa.",
    tools: ["Excel", "Organização de Dados"],
    githubUrl: "",
    dashboardUrl: ""
  },
  {
    id: "fluxo-vendas-integrado",
    title: "Fluxo analítico de vendas",
    category: "Projetos Integrados",
    image: "assets/images/projeto-integrado.svg",
    description: "Estudo integrado de preparação, consulta e apresentação de dados de vendas inteiramente simulados.",
    problem: "Um conjunto fictício de vendas precisa passar por etapas claras antes de ser usado em uma visualização para acompanhamento.",
    objective: "Ilustrar um fluxo de ponta a ponta que conecte preparação dos dados, análise e comunicação de indicadores.",
    approach: "Cenário conceitual combinando limpeza exploratória em Python, consultas SQL e desenho de um painel Power BI.",
    results: "O projeto demonstra como ferramentas podem compor um fluxo analítico. Não apresenta conclusões comerciais ou resultados medidos de uma empresa real.",
    tools: ["Python", "SQL", "Power BI"],
    githubUrl: "",
    dashboardUrl: ""
  }
];
