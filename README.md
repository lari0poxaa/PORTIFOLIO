# Portfólio — Larissa Eduarda Alexandrino

Portfólio estático de Análise de Dados, feito com HTML, CSS e JavaScript puro. Não requer instalação, build ou servidor: abra `index.html` em um navegador atualizado.

## Estrutura

```text
index.html
css/style.css
js/
  config.js
  main.js
  projects.js
assets/
  documents/curriculo.pdf
  icons/favicon.svg
  images/
```

## Personalização

### Contato e currículo

Edite `js/config.js` para alterar nome, e-mail, LinkedIn, GitHub e o caminho do currículo. Ao receber o currículo atualizado, substitua `assets/documents/curriculo.pdf`, mantendo o nome, ou ajuste `resume` em `config.js`.

O PDF incluído é um provisório identificado como tal; substitua-o antes de compartilhar o portfólio como currículo definitivo.

### Formação e experiência

Atualize o texto correspondente em `index.html` quando quiser informar instituição, período, cursos ou datas de experiência. A versão atual não inventa dados que não foram fornecidos.

### Projetos

Edite o array `PORTFOLIO_PROJECTS` em `js/projects.js`:

- Adicione um objeto com `id` único, `title`, `category`, `image`, `description`, `problem`, `objective`, `approach`, `results` e `tools`.
- Use uma das categorias dos filtros: `Power BI`, `SQL`, `Python`, `Excel` ou `Projetos Integrados`.
- Informe `githubUrl` e `dashboardUrl` apenas quando houver links reais; deixe `""` até lá.
- Coloque prévias em `assets/images/` e informe o caminho relativo em `image`.
- Para editar, altere os campos do objeto; para remover, retire-o do array.

Os projetos iniciais são exemplos com cenários e dados simulados; não devem ser apresentados como resultados de trabalho real.

## Recursos e acessibilidade

- Layout adaptável a celular, tablet e desktop.
- Navegação por âncoras, menu móvel, foco visível e suporte à preferência de movimento reduzido.
- Ícones Lucide carregados pela CDN do unpkg; o conteúdo e os controles permanecem identificáveis se a CDN estiver indisponível.
- SEO básico com título, descrição e metadados Open Graph.

O site não usa frameworks nem coleta dados de visitantes. Os links de LinkedIn, GitHub e e-mail são editáveis em `js/config.js`.
