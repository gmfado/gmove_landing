# EDITORIAL_SPRINTS

## OBJETIVO

Registrar o histórico das sprints executadas na área editorial do website GMOVE.

Este documento preserva rastreabilidade de execução editorial sem misturar conteúdo/site com a governança do app GMOVE.

---

## ESCOPO

Este documento registra sprints editoriais já executadas e validadas.

Ele cobre apenas:
- conteúdo do website;
- artigos publicados em `conteudo/`;
- SEO editorial;
- listagem editorial;
- sitemap do website;
- documentação editorial em `documents/editorial/`.

Ele não controla nem documenta:
- app Flutter;
- Firebase;
- arquitetura do produto;
- estado técnico do app;
- sprints do app GMOVE.

---

## REGRA CENTRAL

APP ≠ EDITORIAL.

- documentos do app → produto Flutter/Firebase;
- documentos editoriais → conteúdo/site;
- sprint editorial não deve ser registrada em `SPRINTS_GMOVE.md`;
- sprint do app não deve ser registrada neste documento.

---

## PADRÃO DE REGISTRO

Cada sprint editorial deve conter:
- código;
- objetivo;
- arquivos envolvidos;
- alterações realizadas;
- validação;
- impacto relevante, quando necessário.

---

## REGRAS DE REGISTRO

- registrar apenas sprint editorial executada;
- não registrar plano como sprint concluída;
- não usar este documento como backlog;
- manter rastreabilidade suficiente para leitura futura;
- separar claramente website/conteúdo de app/produto;
- manter UTF-8 íntegro em todo copy, HTML, XML e Markdown.

---

## SPRINT ATUAL

### ED-010 - Paineis visuais no Editorial

**status**
Publicada em producao.

**objetivo**
Dar mais presenca visual aos cards, guias e hubs do Editorial sem perder leitura, performance percebida ou estabilidade mobile.

**arquivos envolvidos**
- `css/editorial.css`
- `conteudo/index.html`
- `conteudo/*/index.html`
- `atualizacoes.html`
- `documents/05_QA_RELEASE.md`
- `documents/11_IMPLEMENTATION_LOG.md`
- `documents/20_TRABALHO_ATIVO.md`

**alteracoes**
- cards de artigo, guias e hubs ganharam paineis de imagem maiores;
- gradientes de imagem ficaram menos escuros para preservar mais contexto visual;
- cards e guias passaram a usar borda individual, evitando bloco visual pesado na listagem;
- mobile recebeu alturas fixas para paineis de imagem e checagem contra overflow horizontal;
- HTMLs editoriais passaram a usar `editorial.css?v=20260529-editorial-photo-panels`;
- changelog publico recebeu `v0.3.8`.

**validacao local**
- Browser local desktop em `/conteudo/`: 9 cards visuais, 4 guias e 4 hubs sem overflow horizontal;
- Browser local mobile 390 x 844 em `/conteudo/`: cards, guias e hubs sem overflow horizontal;
- Browser local mobile 390 x 844 no artigo 10: bloco `article-reference` preservado e sem overflow horizontal;
- console do navegador sem erros nas rotas testadas;
- CSS `20260529-editorial-photo-panels` ativo nas rotas testadas.

**validacao e publicacao**
- deploy Firebase Hosting concluido no projeto `gmove-landing`;
- producao validada em `/atualizacoes/`, `/conteudo/`, CSS editorial e `/sitemap.xml`;
- Browser em producao confirmou `/atualizacoes/` mobile com `v0.3.8`, `/conteudo/` desktop/mobile com 9 cards visuais, 4 guias, 4 hubs, H1 unico, console sem erros e sem overflow horizontal.

### ED-009 - Referencias visuais e leitura mobile dos artigos

**status**
Publicada em producao.

**objetivo**
Melhorar a leitura dos ensaios no mobile e tornar cada tese editorial mais concreta com referencias visuais reais do app GMOVE.

**arquivos envolvidos**
- `css/editorial.css`
- `conteudo/*/index.html`
- `assets/screenshots/gmove-app-current-02-plan-*`
- `assets/screenshots/gmove-app-current-03-evolution-*`
- `assets/screenshots/gmove-app-current-05-execution-*`
- `atualizacoes.html`
- `documents/editorial/EDITORIAL_RESEARCH_2026-05-28.md`
- `documents/editorial/VISUAL_SYSTEM_EDITORIAL.md`

**alteracoes**
- dez ensaios publicados receberam bloco `article-reference`;
- cada bloco usa screenshot real do app com AVIF, WebP e PNG fallback, alt, dimensoes, legenda e `loading="lazy"`;
- CSS editorial recebeu layout responsivo para a referencia visual, com coluna unica no mobile e imagem limitada para nao pesar a leitura;
- links em paragrafos ficaram mais visiveis e links de retorno/rodape ganharam alvo minimo de toque;
- a referencia visual foi adicionada ao CSS editorial; no estado atual, os HTMLs editoriais usam `editorial.css?v=20260528-editorial-border-fix`;
- changelog publico recebeu `v0.3.7`.

**validacao**
- `node --check js/main.js` passou;
- JSON-LD de `atualizacoes.html` parseou corretamente e inclui `v0.3.7`;
- 11 rotas editoriais responderam 200 localmente;
- Browser local mobile 390 x 844 confirmou 10 artigos com 1 bloco `article-reference` e sem overflow horizontal;
- deploy Firebase Hosting concluido no projeto `gmove-landing`;
- producao validada em `/atualizacoes/`, `/conteudo/`, artigos 01 e 10, CSS versionado, asset AVIF de screenshot e `/sitemap.xml`;
- Browser em producao confirmou `v0.3.7` publicado, bloco visual mobile sem overflow e AVIF carregado.

**evidencias**
- `documents/qa/gmove-editorial-reference-mobile-2026-05-28.png`
- `documents/qa/gmove-editorial-reference-desktop-2026-05-28.png`
- `documents/qa/gmove-prod-reference-mobile-2026-05-28.png`
- `documents/qa/gmove-prod-updates-v037-2026-05-28.png`

### ED-008 - Ensaio 10 sobre registro de treino

**status**
Publicada em producao.

**objetivo**
Integrar o artigo `O que anotar no treino para saber se voce esta evoluindo` como decimo ensaio do Editorial, conectando registro, progressao e decisao de treino.

**arquivos envolvidos**
- `conteudo/o-que-anotar-no-treino-para-saber-se-voce-esta-evoluindo/index.html`
- `conteudo/o-que-anotar-no-treino-para-saber-se-voce-esta-evoluindo/preset-imagem-conteudo-10.jpg`
- `conteudo/o-que-anotar-no-treino-para-saber-se-voce-esta-evoluindo/preset-imagem-conteudo-10.webp`
- `conteudo/o-que-anotar-no-treino-para-saber-se-voce-esta-evoluindo/preset-imagem-conteudo-10.avif`
- `conteudo/index.html`
- `conteudo/progressao/index.html`
- `conteudo/treinar-sem-registrar-e-repetir-sem-saber-se-esta-evoluindo/index.html`
- `js/main.js`
- `sitemap.xml`
- `firebase.json`
- `atualizacoes.html`

**alteracoes**
- artigo 10 mantem SEO completo, Open Graph, Twitter Card, JSON-LD `Article`, breadcrumb estruturado, H1 unico, leitura rapida, capa editorial e CTA;
- capa do artigo 10 foi refeita antes da publicacao para evitar repeticao de personagem, roupa, celular ou tela de app, mantendo uma cena editorial com caderno fisico na academia;
- `/conteudo/` passou a listar o Ensaio 10 na grade;
- destaque rotativo do Editorial passou a ter 10 itens e 10 indicadores;
- hub `progressao/` passou a recomendar o Ensaio 10;
- artigo 06 passou a apontar para o novo ensaio como resposta pratica sobre o que registrar no treino;
- `sitemap.xml` passou a incluir a URL do artigo 10;
- `firebase.json` passou a incluir AVIF no header de cache longo de imagens;
- changelog publico recebeu `v0.3.6`.

**validacao**
- `node --check js/main.js`;
- auditoria local de JSON-LD, H1, links, `src`, `srcset`, sitemap e assets passou;
- Browser local desktop/mobile validou `/conteudo/` e o artigo 10;
- deploy Firebase Hosting concluido em `gmove-landing`;
- producao validada com HTTP 200 no novo artigo, `/conteudo/`, `/atualizacoes/`, `/sitemap.xml` e assets da capa;
- pendente operacional: reenvio do sitemap no Search Console apos publicacao.

**validacao local**
- `node --check js/main.js` passou;
- auditoria local confirmou 22 HTMLs, 10 artigos, 21 URLs no sitemap, JSON-LD parseavel, H1 unico, links/assets resolvidos e trio JPG/WebP/AVIF em todos os artigos;
- Browser local validou `/conteudo/` sem overflow horizontal, com 10 indicadores no destaque editorial e card do Ensaio 10;
- Browser local desktop 1280 x 900 e mobile 390 x 844 validou o artigo 10 sem overflow horizontal, com H1 integro, alt correto e capa AVIF carregada em 2048x1152;
- evidencias: `documents/qa/gmove-editorial-ed008-article-desktop-2026-05-28.png`, `documents/qa/gmove-editorial-ed008-article-mobile-2026-05-28.png` e `documents/qa/gmove-editorial-ed008-list-desktop-2026-05-28.png`;
- producao validada apos deploy em 2026-05-28.

**validacao em producao**
- deploy Firebase Hosting concluido no projeto `gmove-landing`;
- producao validada com HTTP 200 em `https://gmove.app/conteudo/`, artigo 10, `https://gmove.app/sitemap.xml`, `https://gmove.app/atualizacoes/`, asset AVIF do artigo 10 e arquivo de verificacao do Search Console;
- sitemap em producao possui 21 URLs e inclui o artigo 10;
- Browser em producao confirmou `/conteudo/` com 10 indicadores, artigo 10 sem overflow horizontal, JSON-LD `Article`/`BreadcrumbList`, capa carregada e console sem erros;
- evidencia: `documents/qa/gmove-prod-ed008-article-desktop-2026-05-28.png`.

**pendencia**
- reenviar o sitemap no Search Console e solicitar URL Inspection para os artigos 09 e 10.

---

### ED-007 - Ensaio 09 e fila editorial orientada a Ads

**status**
Publicada em producao.

**objetivo**
Auditar os oito artigos existentes contra a nova regua de Google Ads e iniciar a sequencia de novos posts pelo artigo sobre semana como unidade real de evolucao.

**arquivos envolvidos**
- `documents/editorial/EDITORIAL_ADS_RESEARCH_MAP_2026-05-28.md`
- `conteudo/a-semana-e-a-menor-unidade-real-de-evolucao-no-treino/index.html`
- `conteudo/a-semana-e-a-menor-unidade-real-de-evolucao-no-treino/preset-imagem-conteudo-9.jpg`
- `conteudo/a-semana-e-a-menor-unidade-real-de-evolucao-no-treino/preset-imagem-conteudo-9.webp`
- `conteudo/a-semana-e-a-menor-unidade-real-de-evolucao-no-treino/preset-imagem-conteudo-9.avif`
- `conteudo/index.html`
- `js/main.js`
- `sitemap.xml`
- `conteudo/progressao/index.html`
- artigos 01, 03, 05 e 08 para pontes internas
- `documents/03_SEO_EDITORIAL_E_ADS.md`
- `documents/editorial/EDITORIAL_ESTADO_ATUAL.md`

**alteracoes**
- os oito artigos existentes foram auditados para Ads/SEO e classificados como base boa, sem necessidade de reescrita ampla;
- a decisao registrada foi usar ajustes leves de linkagem conforme novos clusters forem publicados;
- criado o artigo 09, `A semana e a menor unidade real de evolucao no treino`;
- o artigo 09 recebeu title, meta description, canonical, Open Graph, Twitter Card, JSON-LD `Article`, JSON-LD `BreadcrumbList`, H1 unico, leitura rapida, capa editorial e CTA;
- a capa do artigo 09 foi gerada como cena documental domestica e convertida para JPG, WebP e AVIF em 2048x1152;
- `/conteudo/`, destaque rotativo de `js/main.js`, hub `progressao/` e `sitemap.xml` foram atualizados para o novo ensaio;
- artigos 01, 03, 05 e 08 receberam pontes internas para ED-007 sem alterar suas teses principais.

**validacao**
- `node --check js/main.js` passou;
- `git diff --check` passou, com apenas avisos LF/CRLF do Windows;
- auditoria local confirmou JSON-LD parseavel, H1 unico, referencias locais resolvidas e assets do artigo 09 em 2048x1152.
- Chrome headless/CDP validou `/conteudo/` e o artigo 09 em desktop/mobile sem overflow horizontal, com 9 indicadores no destaque editorial e imagem de capa carregada;
- evidencias: `documents/qa/gmove-editorial-ed007-list-cdp-2026-05-28.png`, `documents/qa/gmove-editorial-ed007-article-desktop-cdp-2026-05-28.png` e `documents/qa/gmove-editorial-ed007-article-mobile-cdp-2026-05-28.png`.
- deploy Firebase Hosting concluido no projeto `gmove-landing`; a CLI encontrou 84 arquivos e publicou a nova versao;
- producao validada com HTTP 200 em `https://gmove.app/conteudo/a-semana-e-a-menor-unidade-real-de-evolucao-no-treino/`, `https://gmove.app/conteudo/`, `https://gmove.app/sitemap.xml` e `https://gmove.app/atualizacoes/`;
- changelog publico atualizado para `v0.3.5` com status `Publicado` e validado em producao.

**impacto**
- o Editorial passa a ter uma primeira peca nova explicitamente orientada por clusters de Google Ads, sem abandonar a linguagem de ensaio;
- os artigos antigos comecam a funcionar como trilhas internas para os novos posts, melhorando continuidade editorial e relevancia de landing/pre-landing.

---

### ED-006-R1 - Humanizacao das imagens editoriais

**status**
Concluida localmente; aguardando publicacao.

**objetivo**
Substituir o lote visual dos oito artigos por imagens mais humanas, mais variadas, menos genericas e menos roboticas, mantendo URLs publicas, formatos modernos e estrutura SEO existentes.

**arquivos envolvidos**
- oito artigos em `conteudo/<slug>/index.html`
- listagem e hubs editoriais em `conteudo/index.html` e `conteudo/<hub>/index.html`
- oito JPGs `preset-imagem-conteudo-*.jpg`
- 16 variantes AVIF/WebP `preset-imagem-conteudo-*.avif` e `preset-imagem-conteudo-*.webp`
- `css/editorial.css`
- `atualizacoes.html`
- `documents/05_QA_RELEASE.md`
- `documents/11_IMPLEMENTATION_LOG.md`
- `documents/12_INVENTARIO_ASSETS.md`
- `documents/editorial/EDITORIAL_SPRINTS.md`
- `documents/editorial/EDITORIAL_ESTADO_ATUAL.md`

**alteracoes**
- capas com mockup, composicao abstrata, cara de banco generico ou repeticao excessiva de personagens e objetos foram substituidas por cenas documentais com pessoas, ambientes e objetos mais variados;
- a rodada final alterna escada de predio, lavanderia de casa, mesa de cozinha, gaveta de escritorio, aparelho de cabo, leg press, mural de treino e barras de parque;
- todos os assets finais foram normalizados em 2048x1152 com JPG, WebP e AVIF;
- os `alt`, `width` e `height` das capas visiveis nos oito artigos foram atualizados;
- `css/editorial.css` recebeu guardrail mobile para titulos longos de artigo e cache-busting `20260528-editorial-humanized`;
- os caminhos publicos foram preservados para manter Open Graph, Twitter Card, hubs, listagem e destaque rotativo sem troca de URL;
- `atualizacoes.html` recebeu `v0.3.4` com status `Em validacao visual` nesta rodada; o update foi publicado nas rodadas editoriais seguintes.

**validacao**
- `node --check js/main.js` passou;
- `git diff --check` passou sem erros reais, apenas avisos LF/CRLF do Windows;
- auditoria local confirmou os oito artigos com JPG/WebP/AVIF em 2048x1152 e referencias HTML presentes;
- Browser local validou `/conteudo/index.html` sem overflow horizontal;
- Browser local no artigo de repeticao viavel confirmou AVIF ativo, alt atualizado, dimensoes naturais 2048x1152 e console sem erros;
- Browser mobile em 390 x 844 capturou o artigo com titulo sem corte, capa nova visivel e sem overflow horizontal;
- evidencias: `documents/qa/gmove-editorial-humanized-list-desktop-2026-05-28.png`, `documents/qa/gmove-editorial-humanized-article-desktop-2026-05-28.png` e `documents/qa/gmove-editorial-humanized-article-mobile-2026-05-28.png`.

**impacto**
- o Editorial fica visualmente mais humano e proprietario, com menor repeticao de personagens, objetos e enquadramentos, menos dependente de interface ficticia e mais conectado ao treino real que o GMOVE tenta organizar.

---

### ED-006 - Pesquisa aplicada, imagem SEO e leitura rapida dos artigos

**status**
Concluida.

**objetivo**
Fazer pesquisa aprofundada em canais externos adequados e aplicar melhorias nos oito artigos do Editorial GMOVE em SEO, copy, escaneabilidade, imagens e governanca tecnica, sem criar novos slugs e sem transformar o Editorial em blog generico.

**arquivos envolvidos**
- oito artigos em `conteudo/<slug>/index.html`
- `conteudo/index.html`
- `css/editorial.css`
- `js/main.js`
- 16 novas variantes de imagem em AVIF/WebP nos slugs dos artigos
- `sitemap.xml`
- `documents/editorial/EDITORIAL_RESEARCH_2026-05-28.md`
- `documents/editorial/EDITORIAL_SPRINTS.md`
- `documents/editorial/EDITORIAL_ESTADO_ATUAL.md`
- `documents/03_SEO_EDITORIAL_E_ADS.md`

**alteracoes**
- pesquisa externa registrada com 6 canais: Google Search Central, base tecnica de treino/saude, SERP brasileira, benchmarks de apps, comunidades e auditoria visual aplicada;
- cada artigo recebeu bloco de "Leitura rapida" com tese e 3 pontos de decisao;
- cada artigo recebeu imagem editorial real em `<picture>` com AVIF, WebP, JPG fallback, `alt`, dimensoes e legenda;
- JSON-LD `Article` dos oito artigos foi enriquecido com `articleSection`, `keywords`, `isAccessibleForFree` e `dateModified` em 2026-05-28;
- oito artigos receberam JSON-LD `BreadcrumbList`;
- listagem editorial passou a usar imagem social editorial real em vez de apenas `icon-512.png`;
- backgrounds editoriais da listagem e destaque rotativo passaram a usar WebP;
- `sitemap.xml` recebeu `lastmod` nas URLs editoriais tocadas;
- cache-busting de `editorial.css` e `main.js` atualizado para `20260528-editorial-research`.

**validacao**
- `node --check js/main.js` passou;
- `git diff --check` passou sem erros, apenas avisos LF/CRLF do Windows;
- auditoria local de `href`, `src`, `srcset`, JSON-LD, imagens AVIF/WebP e `sitemap.xml` passou em 20 arquivos HTML;
- Browser local em 1280 x 900 validou `/conteudo/` sem overflow horizontal, H1 revelado e cards editoriais com imagens;
- Browser local em 390 x 844 validou artigo com AVIF ativo, H1 revelado, capa carregada, bloco "Leitura rapida" visivel e console sem erros;
- deploy Firebase Hosting concluido no projeto `gmove-landing` e producao validada em `https://gmove.app/conteudo/`, artigo editorial, `/atualizacoes/`, CSS/JS versionados, `sitemap.xml` e AVIF;
- evidencias: `documents/qa/gmove-editorial-research-desktop-2026-05-28.png` e `documents/qa/gmove-editorial-article-mobile-2026-05-28.png`.

**impacto**
- artigos ficam mais escaneaveis, mais ricos para Image SEO, mais claros para mecanismos de busca e mais consistentes com a tese editorial de decisao, registro, progressao e criterio.

---

### ED-005 — Correção de abertura e refinamento premium da listagem editorial

**status**
Concluída.

**objetivo**
Corrigir a experiência de abertura do Editorial em previews/ambientes locais, eliminando links que podiam cair em listagem de diretório, e elevar a listagem `/conteudo/` com copy, arquitetura de leitura, SEO de coleção e QA mobile mais fortes.

**arquivos envolvidos**
- `conteudo/index.html`
- `css/editorial.css`
- `js/main.js`
- `firebase.json`
- páginas públicas com links para CSS/JS versionados
- oito artigos em `conteudo/<slug>/index.html`
- `documents/editorial/EDITORIAL_SPRINTS.md`
- `documents/editorial/EDITORIAL_ESTADO_ATUAL.md`
- `documents/03_SEO_EDITORIAL_E_ADS.md`
- `documents/05_QA_RELEASE.md`

**alterações**
- links públicos para o Editorial e artigos passaram a apontar para `index.html` quando necessário, evitando abertura de árvore de diretórios em previews locais;
- `firebase.json` alinhado com `trailingSlash: true` para preservar canonicals editoriais com barra final;
- listagem `/conteudo/` recebeu hero mais claro, guias de leitura por fricção, copy reescrita nos cards, bloco de padrão editorial e CTA mais conectado ao produto;
- presença visual restaurada no hero, nos guias de leitura, no ensaio em destaque e nos cards editoriais;
- caminhos de imagens usados em CSS variables ajustados para resolverem a partir de `css/editorial.css`, evitando buscas incorretas em `/css/<slug>/...`;
- `conteudo/index.html` passou a declarar JSON-LD `CollectionPage` com `ItemList` dos oito ensaios;
- JSON-LD `Article` dos oito artigos foi normalizado com `datePublished` e `dateModified`;
- `main.js` foi ajustado para usar links relativos com `index.html` no destaque editorial rotativo;
- HTML público recebeu versionamento de CSS/JS com `?v=20260526-editorial-images` para evitar cache antigo de `main.js` e `editorial.css`.

**validação**
- servidor local em `http://127.0.0.1:8000/`;
- `/conteudo/`, `/conteudo/index.html`, `css/editorial.css?v=20260526-editorial-images` e `js/main.js?v=20260526-editorial-images` responderam HTTP 200;
- varredura local confirmou que todos os `href/src` internos existem;
- JSON-LD editorial parseável em todos os blocos verificados;
- `git diff --check` sem erros;
- navegador desktop: clique da home para Editorial abriu `conteudo/index.html` com CSS carregado e sem listagem de diretório;
- navegador desktop: artigo 01 abriu com `style.css` e `editorial.css` carregados, sem overflow horizontal;
- navegador mobile 390px: menu abriu o Editorial, sem overflow, sem diretório e com hint da próxima seção na primeira dobra;
- destaque editorial mobile validado com `main.js?v=20260526-editorial-images`, gerando `href` relativo com `index.html`.
- QA adicional: imagens do hero editorial, guias, destaque rotativo e cards visuais carregando a partir de `/conteudo/<slug>/preset-imagem-conteudo-*.jpg`.

**impacto**
- o Editorial deixa de depender do comportamento do servidor para resolver links de diretório;
- a listagem passa a funcionar mais como publicação editorial premium e menos como blog genérico;
- a base fica mais preparada para SEO, Search Console, compartilhamento e futura estratégia de Ads/AdSense.

---

## REGISTROS ANTERIORES

### ED-004-R1 — Refinamento premium de copy e imagens dos artigos 06, 07 e 08

**status**
Concluída.

**objetivo**
Refinar copy e imagens editoriais/social dos artigos 06, 07 e 08 para elevar identidade proprietária, presença de produto, musculação real e padrão premium, sem criar novos artigos, sem alterar slugs e sem mexer na estrutura visual global.

**arquivos envolvidos**
- `conteudo/treinar-sem-registrar-e-repetir-sem-saber-se-esta-evoluindo/index.html`
- `conteudo/treinar-sem-registrar-e-repetir-sem-saber-se-esta-evoluindo/preset-imagem-conteudo-6.jpg`
- `conteudo/por-que-trocar-de-treino-toda-hora-atrapalha-sua-evolucao/index.html`
- `conteudo/por-que-trocar-de-treino-toda-hora-atrapalha-sua-evolucao/preset-imagem-conteudo-7.jpg`
- `conteudo/o-treino-que-voce-consegue-repetir-vale-mais-do-que-o-treino-que-parece-perfeito/index.html`
- `conteudo/o-treino-que-voce-consegue-repetir-vale-mais-do-que-o-treino-que-parece-perfeito/preset-imagem-conteudo-8.jpg`
- `conteudo/index.html`
- `js/main.js`
- `documents/editorial/EDITORIAL_SPRINTS.md`
- `documents/editorial/EDITORIAL_ESTADO_ATUAL.md`

**alterações**
- artigo 06 refinado para reforçar registro como memória operacional do treino, não burocracia;
- artigo 07 refinado para reforçar referência, leitura e variação com critério, sem demonizar mudança de treino;
- artigo 08 refinado para reforçar treino viável como desenho de comportamento, não concessão menor;
- imagens dos artigos 06, 07 e 08 substituídas por composições premium com smartphone/tablet, interface inspirada no GMOVE, equipamentos reais de musculação, ambiente escuro e acentos amarelos;
- snippets dos artigos 06, 07 e 08 ajustados em `conteudo/index.html` e no destaque editorial de `js/main.js`;
- descrições sociais Open Graph e Twitter dos artigos 06, 07 e 08 ajustadas para refletir as teses refinadas;
- slugs, canonical, sitemap, estrutura global, CSS global e documentos do app preservados.

**validação**
- JSON-LD `Article` dos artigos 06, 07 e 08 validado como JSON parseável;
- H1 único confirmado nos artigos 06, 07 e 08;
- canonical preservado nos artigos 06, 07 e 08;
- `og:image` e `twitter:image` continuam apontando para os assets corretos nos slugs;
- imagens `preset-imagem-conteudo-6.jpg`, `preset-imagem-conteudo-7.jpg` e `preset-imagem-conteudo-8.jpg` verificadas nos caminhos finais;
- `/conteudo/` continua listando os 8 artigos;
- destaque editorial continua com os 8 artigos;
- `sitemap.xml` validado como XML;
- `EDITORIAL_ESTADO_ATUAL.md` continua informando 8 artigos publicados;
- revisão de integridade textual UTF-8 em HTML, JS e Markdown alterados → OK;
- verificação automática confirmou ausência de registro da ED-004-R1 nos documentos do app Flutter/Firebase.

**impacto**
- artigos 06, 07 e 08 ficam mais proprietários, menos genéricos e mais conectados ao universo GMOVE;
- imagens passam a comunicar produto digital, musculação real, registro, progressão e rotina com estética premium;
- editorial permanece com 8 artigos publicados e governança separada da documentação do app.

### ED-004 — Pacote editorial premium com 3 novos artigos

**status**
Concluída.

**objetivo**
Criar, escrever, implementar e validar três novos artigos do Editorial GMOVE, expandindo a área editorial de 5 para 8 artigos publicados, com padrão premium, SEO completo, imagens próprias e governança separada da documentação do app.

**arquivos envolvidos**
- `conteudo/treinar-sem-registrar-e-repetir-sem-saber-se-esta-evoluindo/index.html` (novo)
- `conteudo/treinar-sem-registrar-e-repetir-sem-saber-se-esta-evoluindo/preset-imagem-conteudo-6.jpg` (novo)
- `conteudo/por-que-trocar-de-treino-toda-hora-atrapalha-sua-evolucao/index.html` (novo)
- `conteudo/por-que-trocar-de-treino-toda-hora-atrapalha-sua-evolucao/preset-imagem-conteudo-7.jpg` (novo)
- `conteudo/o-treino-que-voce-consegue-repetir-vale-mais-do-que-o-treino-que-parece-perfeito/index.html` (novo)
- `conteudo/o-treino-que-voce-consegue-repetir-vale-mais-do-que-o-treino-que-parece-perfeito/preset-imagem-conteudo-8.jpg` (novo)
- `conteudo/index.html`
- `js/main.js`
- `sitemap.xml`
- `documents/editorial/EDITORIAL_SPRINTS.md`
- `documents/editorial/EDITORIAL_ESTADO_ATUAL.md`

**alterações**
- criado o artigo 06, `Treinar sem registrar é repetir sem saber se está evoluindo.`;
- criado o artigo 07, `Por que trocar de treino toda hora atrapalha sua evolução.`;
- criado o artigo 08, `O treino que você consegue repetir vale mais do que o treino que parece perfeito.`;
- cada artigo recebeu `<title>`, meta description, canonical, Open Graph, Twitter Card, JSON-LD `Article`, H1 único, CTA editorial e linkagem interna natural;
- geradas e salvas imagens sociais/editoriais próprias nos slugs como `preset-imagem-conteudo-6.jpg`, `preset-imagem-conteudo-7.jpg` e `preset-imagem-conteudo-8.jpg`;
- `conteudo/index.html` atualizado com os Ensaios 06, 07 e 08 e com oito indicadores no destaque editorial;
- `js/main.js` atualizado para incluir os três novos artigos no destaque editorial rotativo, preservando os artigos 01 a 05;
- `sitemap.xml` atualizado com os três novos slugs;
- pesquisa editorial rápida usada como base de precisão para registro de treino, progressão, variação, consistência e aderência;
- documentação atualizada apenas dentro de `documents/editorial/`, sem registro em documentos do app.

**validação**
- JSON-LD `Article` dos artigos 06, 07 e 08 validado como JSON parseável;
- `sitemap.xml` validado como XML;
- verificação automática confirmou title, meta description, canonical, Open Graph, Twitter Card e H1 único nos três novos artigos;
- verificação automática confirmou `og:image` e `twitter:image` absolutos nos três novos artigos;
- assets sociais/editoriais dos artigos 06, 07 e 08 verificados nos respectivos slugs;
- verificação automática confirmou os três artigos na listagem `/conteudo/` e no destaque editorial rotativo;
- revisão de integridade textual UTF-8 em HTML, JS, XML e Markdown alterados → OK;
- verificação automática confirmou ausência de registro da ED-004 nos documentos do app Flutter/Firebase.

**impacto**
- editorial público passa de 5 para 8 artigos publicados;
- a sequência editorial ganha um bloco forte sobre registro, leitura de progresso, variação com critério e repetição viável;
- SEO editorial, sitemap, listagem pública e destaque rotativo permanecem coerentes com o estado real publicado;
- governança editorial permanece separada da documentação do app.

### ED-003 — Novo artigo editorial: falta de disciplina e estrutura

**status**
Concluída.

**objetivo**
Criar e publicar o artigo 05 do Editorial GMOVE sobre falta de disciplina e falta de estrutura, mantendo o padrão visual, técnico, editorial e documental existente.

**arquivos envolvidos**
- `conteudo/o-problema-nao-e-falta-de-disciplina-e-falta-de-estrutura/index.html` (novo)
- `conteudo/o-problema-nao-e-falta-de-disciplina-e-falta-de-estrutura/preset-imagem-conteudo-5.jpg` (novo)
- `conteudo/index.html`
- `js/main.js`
- `sitemap.xml`
- `documents/editorial/EDITORIAL_SPRINTS.md`
- `documents/editorial/EDITORIAL_ESTADO_ATUAL.md`

**alterações**
- criado o artigo 05 com título `O problema não é falta de disciplina. É falta de estrutura.`;
- publicado o slug `conteudo/o-problema-nao-e-falta-de-disciplina-e-falta-de-estrutura/`;
- implementados `<title>`, meta description, canonical, Open Graph, Twitter Card, JSON-LD `Article`, H1 único e CTA editorial;
- criada imagem social/editorial própria do artigo no slug, como `preset-imagem-conteudo-5.jpg`;
- adicionada linkagem interna para os artigos sobre motivação, começo e abandono, e treino perfeito;
- `conteudo/index.html` atualizado com o Ensaio 05 e com o quinto indicador do destaque editorial;
- `js/main.js` atualizado para incluir o artigo 05 no destaque editorial rotativo;
- `sitemap.xml` atualizado com a nova URL editorial;
- documentação atualizada apenas dentro de `documents/editorial/`, sem registro em documentos do app.

**validação**
- JSON-LD `Article` do artigo 05 validado como JSON parseável;
- `sitemap.xml` validado como XML;
- verificação automática confirmou title, meta description, canonical, Open Graph, Twitter Card e H1 único no artigo 05;
- verificação automática confirmou `og:image` e `twitter:image` absolutos no artigo 05;
- asset social/editorial do artigo 05 verificado no slug;
- revisão de integridade textual UTF-8 em HTML, JS, XML e Markdown alterados → OK.

**impacto**
- editorial público passa de 4 para 5 artigos publicados;
- a sequência editorial ganha um artigo sobre disciplina como consequência de estrutura, clareza e progressão;
- listagem editorial, destaque rotativo e sitemap permanecem coerentes com o estado real publicado;
- governança editorial permanece separada da documentação do app.

### ED-002 — SEO estrutural do website GMOVE

**status**
Concluída.

**objetivo**
Melhorar o SEO estrutural do website GMOVE como um todo, sem alterar layout visual, sem criar novos artigos e sem misturar documentação editorial com documentação do app.

**arquivos envolvidos**
- `index.html`
- `manifesto.html`
- `conteudo/index.html`
- `conteudo/como-evoluir-no-treino-sem-motivacao/index.html`
- `conteudo/por-que-voce-comeca-e-para-no-treino/index.html`
- `conteudo/o-treino-perfeito-que-voce-nunca-consegue-seguir/index.html`
- `conteudo/treinar-cansado-funciona/index.html`
- `sitemap.xml`
- `robots.txt`
- `documents/editorial/EDITORIAL_SPRINTS.md`
- `documents/editorial/EDITORIAL_ESTADO_ATUAL.md`

**alterações**
- home passou a ter JSON-LD global em `@graph` com `Organization`, `WebSite` e `SoftwareApplication`;
- imagens sociais dos quatro artigos passaram a usar URLs absolutas em Open Graph e Twitter Card;
- metadados de home, manifesto, listagem `/conteudo/` e artigos foram revisados sem mudança visual;
- canonical, `lang="pt-BR"`, `charset UTF-8`, viewport, H1 único, alt de imagens relevantes e linkagem interna foram conferidos;
- `robots.txt` e `sitemap.xml` foram revisados e permaneceram coerentes, sem necessidade de alteração estrutural;
- documentação atualizada apenas dentro de `documents/editorial/`, sem registro em documentos do app.

**validação**
- JSON-LD da home validado como JSON parseável;
- JSON-LD `Article` dos quatro artigos validado como JSON parseável;
- `sitemap.xml` validado como XML;
- `robots.txt` verificado com `Allow: /` e referência ao sitemap público;
- verificação automática confirmou title, meta description, canonical, Open Graph, Twitter Card, `lang`, charset, viewport e H1 único nas páginas públicas principais;
- verificação automática confirmou ausência de `og:image` e `twitter:image` relativos;
- revisão de integridade textual UTF-8 em HTML, XML, TXT e Markdown alterados → OK.

**impacto**
- SEO estrutural do website fica mais consistente para indexação, compartilhamento social e leitura por mecanismos de busca;
- dados estruturados globais passam a identificar a organização, o website e o app sem alterar a experiência visual;
- governança editorial permanece separada da documentação do app.

**observação de rastreabilidade**
O código recebido para esta sprint foi `ED-002`. O histórico anterior já possuía um registro `ED-002` de assets e destaque editorial; esse registro foi preservado abaixo.

---

### ED-002 — Correção de assets e destaque editorial premium

**status**
Concluída.

**objetivo**
Corrigir a organização das imagens editoriais dos artigos 02, 03 e 04, remover imagens dos cards pequenos da listagem e evoluir apenas o destaque editorial como área premium com alternância sutil entre artigos.

**arquivos envolvidos**
- `conteudo/index.html`
- `css/editorial.css`
- `js/main.js`
- `conteudo/por-que-voce-comeca-e-para-no-treino/index.html`
- `conteudo/o-treino-perfeito-que-voce-nunca-consegue-seguir/index.html`
- `conteudo/treinar-cansado-funciona/index.html`
- `documents/editorial/EDITORIAL_SPRINTS.md`
- `documents/editorial/EDITORIAL_ESTADO_ATUAL.md`

**alterações**
- cards pequenos dos Ensaios 02, 03 e 04 voltaram a usar fundo escuro editorial sem imagem;
- destaque editorial passou a usar `--ed-featured-image` e alternar entre os quatro artigos com imagens próprias;
- interação lateral por mouse e navegação por setas do teclado adicionadas ao destaque, com transição suave e sem dependência nova;
- Open Graph, Twitter Card e JSON-LD dos artigos 02, 03 e 04 passaram a apontar para `preset-imagem-conteudo-2.jpg`, `preset-imagem-conteudo-3.jpg` e `preset-imagem-conteudo-4.jpg` nos respectivos slugs;
- documentação atualizada apenas dentro de `documents/editorial/`, sem registro em documentos do app.

**validação**
- `/conteudo/` e os quatro artigos verificados via servidor local;
- imagens 1/2/3/4 verificadas nos caminhos finais corretos;
- cards pequenos verificados sem imagem de fundo;
- destaque editorial verificado com troca visual e conteúdo dos quatro artigos;
- mobile verificado sem quebra visual;
- `sitemap.xml` validado como XML;
- `firebase.json` verificado com ignores de `.firebase/**`, `.tmp.driveupload/**`, `.tmp.drivedownload/**`, `**/*.transferir`, arquivos ocultos e `node_modules`.

**impacto**
- assets editoriais ficam organizados por artigo;
- listagem editorial mantém hierarquia limpa: destaque visual premium acima, cards pequenos sóbrios abaixo;
- SEO social dos artigos passa a usar as imagens corretas de cada slug;
- governança editorial permanece separada da documentação do app.

---

### ED-001 — Padronização SEO e expansão editorial do site público

**status**
Concluída.

**objetivo**
Padronizar SEO do artigo editorial existente, publicar três novos artigos com SEO completo e conectar a navegação editorial sem alterar layout global, CMS ou estrutura visual do site.

**arquivos envolvidos**
- `conteudo/como-evoluir-no-treino-sem-motivacao/index.html`
- `conteudo/por-que-voce-comeca-e-para-no-treino/index.html` (novo)
- `conteudo/por-que-voce-comeca-e-para-no-treino/preset-imagem-conteudo-1.jpg` (novo)
- `conteudo/o-treino-perfeito-que-voce-nunca-consegue-seguir/index.html` (novo)
- `conteudo/o-treino-perfeito-que-voce-nunca-consegue-seguir/preset-imagem-conteudo-1.jpg` (novo)
- `conteudo/treinar-cansado-funciona/index.html` (novo)
- `conteudo/treinar-cansado-funciona/preset-imagem-conteudo-1.jpg` (novo)
- `conteudo/index.html`
- `sitemap.xml`
- `documents/editorial/EDITORIAL_SPRINTS.md`
- `documents/editorial/EDITORIAL_ESTADO_ATUAL.md`

**alterações**
- artigo 01 recebeu `<title>`, meta description, Open Graph e Twitter Card padronizados, com imagem social apontando para o asset editorial do próprio slug;
- artigo 01 manteve H1 único, hierarquia semântica existente e recebeu link interno natural para o artigo 02;
- criados os artigos 02, 03 e 04 seguindo o template editorial atual, com nav, hero, corpo, blocos editoriais, CTA final, footer, canonical, Open Graph, Twitter Card e JSON-LD `Article`;
- implementada linkagem interna em cadeia: artigo 01 → artigo 02 → artigo 03 → artigo 04;
- `conteudo/index.html` passou a exibir os três novos artigos como cards em grid secundário, mantendo o artigo 01 como destaque;
- `sitemap.xml` passou a incluir `/conteudo/` e os quatro artigos publicados;
- assets `preset-imagem-conteudo-1.jpg` foram adicionados nos três novos slugs para garantir caminho real de `og:image`;
- o registro da sprint editorial foi separado da documentação do app.

**validação**
- validação de existência de arquivos e assets editoriais → OK;
- verificação de títulos, descriptions, OG image, canonical e H1 único nos quatro artigos → OK;
- verificação de linkagem interna em cadeia e links da listagem → OK;
- validação XML do `sitemap.xml` → OK;
- revisão de integridade textual UTF-8 em HTML/MD/XML alterados → OK.

**impacto**
- editorial público passa de 1 para 4 artigos publicados;
- SEO editorial fica mais consistente, com metadados sociais, dados estruturados e sitemap atualizado;
- navegação editorial ganha sequência interna sem alterar layout, CSS global, CMS, design system ou estrutura global do site;
- governança documental passa a separar app GMOVE e editorial do website.

---

## HISTÓRICO

### ED-001 — Padronização SEO e expansão editorial do site público

Registro completo mantido em **Registros anteriores**.

---

## RELAÇÃO COM OUTROS DOCUMENTOS

Este documento complementa:
- `documents/editorial/EDITORIAL_ESTADO_ATUAL.md`;
- `documents/editorial/CONTENT_STRATEGY.md`;
- `documents/editorial/EDITORIAL_GUIDELINES.md`;
- `documents/editorial/PUBLISHING_FLOW.md`;
- `documents/editorial/ARTICLE_TEMPLATE.md`.

Este documento não substitui:
- documentação oficial do app em `C:\Users\gmfad\Documents\backupmestre\gmove\documents`;
- `SPRINTS_GMOVE.md`;
- `ESTADO_ATUAL_DO_APP_GMOVE.md`.

---

## REGRA FINAL

O histórico editorial pertence ao website.

O histórico do app pertence ao produto Flutter/Firebase.

Nunca misturar novamente.
