# 20 - Trabalho Ativo e Escopo de Commit

## Objetivo

Evitar mistura entre mudanças do site, conteúdo editorial, assets e futuras frentes paralelas.

## 2026-05-25 - Atualização para app atual

Status: publicado em produção; consolidado no commit da release `v0.3.1`

Escopo do pacote:

- alinhar landing ao GMOVE atual;
- importar marca e favicons atuais do app;
- capturar e usar prints atuais do app;
- remover barras do Android dos prints publicados;
- atualizar paleta, copy e efeitos visuais;
- reorganizar documentação do site;
- documentar pesquisa de features 2026;
- preparar QA mobile.

Arquivos que entram no pacote:

- `CODEX.md`;
- `README.md`;
- `index.html`;
- `site.webmanifest`;
- `firebase.json`;
- `css/style.css`;
- `css/premium.css`;
- `css/editorial.css`;
- `js/main.js`;
- `favicon.ico`;
- `favicon-32.png`;
- `apple-touch-icon.png`;
- `icon-192.png`;
- `icon-512.png`;
- `assets/brand/*`;
- `assets/screenshots/*`;
- `documents/*`;
- páginas HTML tocadas pela troca de marca.

Arquivos vistos e deixados fora:

- `Microsoft Copilot_ o seu complemento de IA.html`;
- `Microsoft Copilot_ o seu complemento de IA_files/**`;
- logos e prints antigos ainda versionados, mas não usados pela landing.

Não apagar sem decisão explícita:

- arquivos `Microsoft Copilot_*`;
- artigos publicados em `conteudo/`;
- assets editoriais existentes.

Validação prevista:

- servidor estático local;
- Browser desktop/mobile;
- checagem de links;
- `git diff --check`.

## 2026-05-27 - Pacote de crescimento do site

Status: publicado em produção; consolidado no commit da release `v0.3.1`

Escopo:

- seção interativa `Como funciona` na home;
- seção de confiança na home;
- nova página `seguranca.html`;
- quatro hubs editoriais em `conteudo/`;
- navegação global com `Como funciona` e `Segurança`;
- `sitemap.xml` e `firebase.json` atualizados;
- cache-busting atualizado para `20260527-site-growth`;
- QA desktop/mobile com evidências em `documents/qa/`.

Validação:

- deploy Firebase Hosting concluído em 2026-05-27;
- produção validada em `https://gmove.app/` e `https://gmove-landing.web.app/`;
- `https://www.gmove.app/` não respondeu no último teste;
- rotas principais responderam HTTP 200;
- home, Editorial, `Como funciona` e menu mobile publicados sem overflow horizontal.

## Frentes Paralelas Recomendadas

Antes de abrir uma nova conversa, escolher uma frente:

- `docs`: revisar documentação, fechar handoff e preparar commit;
- `editorial`: Search Console, novos ensaios, revisão de artigos e calendário;
- `landing`: performance, imagens WebP/AVIF, testes de conversão e refinamentos visuais;
- `infra`: domínio `www`, analytics, Search Console, Ads/AdSense e headers;
- `assets`: inventário de imagens, peso, uso e substituições.

### Atualizacao 2026-05-27 - prints otimizados

- Prints do app ja possuem variantes `-720.webp` e `-720.avif`.
- `index.html` usa `<picture>` com AVIF, WebP e PNG fallback.
- QA visual desktop/mobile passou em Chrome local.
- Deploy Firebase Hosting concluido e validado em `https://gmove.app/`.
- Proximo passo desta frente: otimizar imagens editoriais quando houver novo lote ou crescimento de peso.

### Atualizacao 2026-05-27 - pagina de updates

- Criada `atualizacoes.html` para registrar updates publicos do GMOVE com versionamento.
- Versao publica atual: `v0.3.1`.
- Historico inicial ampliado para 8 entradas, cobrindo Renew, produto/seguranca/Editorial, deploy, documentacao, CTA, www, performance de prints e changelog publico.
- Toda atualizacao significativa deve entrar na pagina com versao, data, status, impacto e mensagem clara.
- Nova URL adicionada a navegacao global, footer, sitemap e Firebase rewrite `/atualizacoes`.

### Atualizacao 2026-05-27 - navegacao desktop/mobile

- `v0.3.1` registrada em `atualizacoes.html` com status `Publicado`.
- Desktop ficou mais enxuto: Manifesto, Seguranca, Privacidade e Termos foram agrupados em `Sobre`.
- Mobile passou a usar barra inferior fixa com Inicio, App, Editorial, Updates e Mais.
- `Mais` abre o menu completo e preserva acesso a paginas institucionais e legais.
- Cache-busting global de `css/style.css` e `js/main.js` atualizado para `20260527-nav-v031`.
- Paginas raiz usam assets e links root-relative para funcionar tambem em rotas limpas com `trailingSlash`.
- QA local desktop/mobile passou sem overflow horizontal e sem erros no console.
- Deploy Firebase Hosting concluido e republicado apos ajuste de rota limpa.
- Producao validada em `https://gmove.app/`, `/atualizacoes/`, `/manifesto/`, CSS e JS versionados.

### Atualizacao 2026-05-28 - editorial com pesquisa aplicada

- Frente `editorial` revisou os oito artigos publicados com base em pesquisa externa documentada.
- Cada artigo recebeu capa visivel com AVIF/WebP/JPG fallback, alt, dimensoes e legenda.
- Cada artigo recebeu bloco "Leitura rapida" e JSON-LD enriquecido com breadcrumb, secao, keywords, disponibilidade livre e `dateModified=2026-05-28`.
- `/conteudo/` passou a usar imagens WebP em destaque/listas e imagem social editorial real.
- `sitemap.xml` recebeu `lastmod=2026-05-28` nas 13 URLs editoriais.
- `atualizacoes.html` registra `v0.3.3` como update publicado.
- QA local desktop/mobile passou sem overflow horizontal e com AVIF ativo no artigo testado.
- Deploy Firebase Hosting concluido e producao validada em `https://gmove.app/`, `/conteudo/`, `/atualizacoes/`, CSS/JS versionados, `sitemap.xml` e asset AVIF.
- Proximo passo desta frente: reenvio das URLs editoriais no Search Console.

### Atualizacao 2026-05-28 - mapa de registros operacionais

- Criado `documents/17_REGISTRO_OPERACIONAL.md` para orientar onde registrar log interno, QA, deploy, handoff, updates publicos, DNS, SEO, assets, Git e Editorial.
- Documentos de entrada atualizados para apontar para o mapa: `README.md`, `CODEX.md`, `documents/00_START_HERE.md`, `documents/08_TRABALHO_SIMULTANEO.md`, `documents/15_ATUALIZACOES_PUBLICAS.md` e `documents/CODEX_HANDOFF.md`.
- Nao entrou em `atualizacoes.html` por ser governanca interna de documentacao, sem alteracao publica de produto, site, Editorial ou infraestrutura.

### Atualizacao 2026-05-28 - Search Console batch

- Auditoria ao vivo do sitemap em producao validou 19 URLs sem falhas criticas de status, `noindex`, H1 ou JSON-LD.
- Criado `documents/qa/search-console-batch-2026-05-28.md` com URLs priorizadas para URL Inspection.
- Propriedade URL-prefix `https://gmove.app/` verificada no Search Console via arquivo HTML `google6e48a74231fe8281.html`.
- Sitemap `/sitemap.xml` enviado e processado no Search Console com 19 paginas encontradas.
- Solicitacao de indexacao enviada para `/conteudo/` e para os 4 hubs editoriais.
- Arquivo de verificacao publicado no Firebase Hosting; nao remover em limpezas futuras.
- Nao foram editados HTMLs nem imagens do Editorial para evitar conflito com a frente paralela de melhoria visual das imagens.
- Proximo pacote recomendado: alinhar canonicals, `og:url`, links internos e sitemap das paginas raiz para as URLs finais com barra, junto com a frente de imagens.
- Nao entrou em `atualizacoes.html` porque e preparacao operacional de Search Console, sem nova mudanca publicada no site.

### Atualizacao 2026-05-28 - imagens editoriais humanizadas

- Frente `editorial/assets` substituiu as oito capas dos artigos por imagens mais humanas, variadas e menos roboticas.
- As novas cenas priorizam treino real, preparacao, registro, decisao de carga e repeticao, com maior variacao de pessoas, ambientes e objetos, sem mockup futurista como protagonista.
- A rodada final alterna escada de predio, lavanderia, mesa de cozinha, escritorio, aparelho de cabo, leg press, mural de treino e parque.
- Os caminhos publicos `preset-imagem-conteudo-*` foram preservados nos slugs dos artigos.
- JPG, WebP e AVIF foram normalizados em 2048x1152.
- `alt`, `width` e `height` das capas foram atualizados nos oito artigos.
- CSS editorial recebeu guardrail mobile para titulos longos de artigo e cache-busting `20260528-editorial-humanized`.
- `atualizacoes.html` registra `v0.3.4` com status `Publicado`.
- QA local passou: Browser desktop sem overflow, artigo com AVIF ativo, console sem erros, Browser mobile com titulo sem corte, capa nova visivel e sem overflow horizontal.
- Evidencias: `documents/qa/gmove-editorial-humanized-list-desktop-2026-05-28.png`, `documents/qa/gmove-editorial-humanized-article-desktop-2026-05-28.png`, `documents/qa/gmove-editorial-humanized-article-mobile-2026-05-28.png`.
- Publicado em producao nas rodadas editoriais seguintes; manter apenas monitoramento visual normal.

### Atualizacao 2026-05-28 - artigo 10 e cache AVIF

- Artigo 10 `O que anotar no treino para saber se voce esta evoluindo` integrado ao Editorial.
- `/conteudo/`, destaque rotativo de `js/main.js`, `sitemap.xml` e `atualizacoes.html` foram atualizados para o novo ensaio.
- `atualizacoes.html` registra `v0.3.6` com status `Publicado`.
- `firebase.json` passou a incluir AVIF no header de cache longo de imagens.
- QA local e producao passaram; deploy Firebase Hosting concluido no projeto `gmove-landing`.
- Producao validada em `/conteudo/`, artigo 10, `/sitemap.xml`, `/atualizacoes/`, asset AVIF do artigo 10 e arquivo de verificacao do Search Console.
- Proximo passo desta frente: reenviar o sitemap no Search Console e solicitar URL Inspection para os artigos 09 e 10.

### Atualizacao 2026-05-28 - referencias visuais e leitura mobile dos artigos

- Os 10 ensaios receberam um bloco `article-reference` com screenshots reais do app para conectar a tese do texto a uma referencia visual concreta.
- `css/editorial.css` recebeu estilos compartilhados para o novo bloco, ajustes de leitura mobile, links em paragrafos, `text-wrap` e alvo minimo de toque em links de retorno/rodape.
- A referencia visual foi adicionada ao CSS editorial; no estado atual, os HTMLs editoriais usam `editorial.css?v=20260528-editorial-border-fix`.
- Screenshots usados: `assets/screenshots/gmove-app-current-02-plan-*`, `gmove-app-current-03-evolution-*` e `gmove-app-current-05-execution-*`.
- Pesquisa complementar registrada em `documents/editorial/EDITORIAL_RESEARCH_2026-05-28.md`.
- `atualizacoes.html` registra `v0.3.7` com status `Publicado`.
- QA local: 11 rotas editoriais responderam 200; Browser mobile 390x844 confirmou 1 bloco por artigo e sem overflow horizontal; Browser desktop validou grid e AVIF ativo.
- Evidencias: `documents/qa/gmove-editorial-reference-mobile-2026-05-28.png` e `documents/qa/gmove-editorial-reference-desktop-2026-05-28.png`.
- Deploy Firebase Hosting concluido no projeto `gmove-landing`; primeira publicacao encontrou 88 arquivos e enviou 17 novos/alterados.
- Producao validada em `https://gmove.app/atualizacoes/`, `/conteudo/`, artigos 01 e 10, CSS editorial versionado, asset AVIF de screenshot, `/sitemap.xml` e Browser mobile/desktop.
- Evidencias de producao: `documents/qa/gmove-prod-reference-mobile-2026-05-28.png` e `documents/qa/gmove-prod-updates-v037-2026-05-28.png`.

### Atualizacao 2026-05-29 - revisao geral dos documentos

- Frente `docs` revisou README, CODEX, start here, handoff, matriz de paginas publicas, Search Console, trabalho ativo e estado editorial.
- Matriz publica foi alinhada ao sitemap atual de 21 URLs e passou a incluir os artigos 09 e 10.
- Handoff foi atualizado para refletir `v0.3.7`, dez artigos publicados e pendencia real de reenvio do sitemap no Search Console.
- Criado `tools/verify-docs.ps1` para checar links locais de Markdown, arquivos da matriz, total do sitemap e divergencias entre `sitemap.xml` e `documents/10_MATRIZ_PAGINAS_PUBLICAS.md`.
- Nao entrou em `atualizacoes.html` porque e governanca interna de documentacao, sem mudanca publica de produto, conteudo ou interface.

### Atualizacao 2026-05-29 - paineis visuais e dominios ativos

- Frente `editorial/infra` ampliou a presenca das imagens nos cards e guias do Editorial.
- CSS editorial recebeu paineis maiores, menos escurecidos e com guardrail mobile para cards, guias e hubs.
- HTMLs editoriais passaram a usar `editorial.css?v=20260529-editorial-photo-panels`.
- `atualizacoes.html` registra `v0.3.8` com status `Publicado`.
- Validacao local passou: `/conteudo/` desktop/mobile e artigo 10 mobile sem overflow horizontal, com console sem erros e CSS novo ativo.
- Deploy Firebase Hosting concluido no projeto `gmove-landing`; producao validada em `/atualizacoes/`, `/conteudo/`, CSS editorial e `/sitemap.xml`.
- `gmove.com.br` respondeu `HTTP 200`; `www.gmove.com.br` redirecionou para `https://gmove.com.br/`; `www.gmove.app` redirecionou para `https://gmove.app/`.
- Sitemap reenviado no Search Console em 2026-05-29; a tabela ainda mostrava ultima leitura em 2026-05-28 e 19 paginas encontradas no momento da checagem.
- URL Inspection do artigo 09 confirmou que a URL ainda nao esta no Google; indexacao solicitada em 2026-05-29.
- URL Inspection do artigo 10 confirmou que a URL ja esta no Google, com HTTPS e breadcrumb validos.
- Proximo passo operacional: aguardar o processamento do sitemap de 21 URLs e revalidar o artigo 09 em alguns dias.

### Atualizacao 2026-05-29 - URLs limpas e sitemap alinhado

- Frente `infra/seo` alinhou canonicals, `og:url`, JSON-LD, navegacao, rodapes, chamadas editoriais e `sitemap.xml` para os caminhos finais com barra.
- Paginas raiz indexaveis passaram de `.html` para `/manifesto/`, `/atualizacoes/`, `/privacidade/`, `/seguranca/` e `/termos/` nas referencias publicas.
- Links do Editorial e destaque rotativo tambem passaram a apontar para caminhos publicos sem `index.html`.
- `tools/verify-docs.ps1` passou a resolver caminhos limpos de paginas raiz para seus arquivos `.html`.
- `atualizacoes.html` registra `v0.3.9` com status `Publicado`.
- Validacao local passou: `node --check js/main.js`, `tools/verify-docs.ps1`, `tools/verify-public-copy.ps1`, `git diff --check`, JSON-LD e Browser desktop/mobile.
- Deploy Firebase Hosting concluido no projeto `gmove-landing`; producao validada em rotas limpas, redirecionamentos `.html`, `/atualizacoes/`, `/conteudo/` e `/sitemap.xml`.
- Search Console recebeu novamente `https://gmove.app/sitemap.xml` apos `v0.3.9`; a tabela confirmou `/sitemap.xml`, envio e ultima leitura em 2026-05-29, status `Processado`, 21 paginas encontradas e notificacao `Sitemap enviado`.
- Search Console URL Inspection pos-`v0.3.9`: indexacao solicitada para `/manifesto/`, `/seguranca/` e `/atualizacoes/`; o artigo `o-que-anotar-no-treino-para-saber-se-voce-esta-evoluindo/` ja estava no Google.
- Proximo passo operacional: acompanhar cobertura das 21 URLs limpas e revalidar URLs ainda pendentes em alguns dias.

### Atualizacao 2026-05-30 - Ensaio 11 e tracking leve

- Frente `editorial/conversao` criou o Ensaio 11: `como-montar-uma-semana-de-treino-que-voce-consegue-repetir/`.
- `/conteudo/`, destaque rotativo, hubs `consistencia/` e `treino-com-criterio/`, `sitemap.xml` e `atualizacoes.html` foram atualizados.
- `sitemap.xml` passou para 22 URLs.
- `atualizacoes.html` registra `v0.3.10` com status `Publicado`.
- `main.js` ganhou tracking leve para cliques de CTA, formulario de acesso antecipado e leitura editorial quando houver provedor de analytics disponivel.
- Validacao local passou: `node --check js/main.js`, `tools/verify-public-copy.ps1`, `tools/verify-docs.ps1`, auditoria de JSON-LD/H1/links/assets e `git diff --check`.
- Browser local validou artigo 11 desktop/mobile, `/conteudo/` com 11 indicadores e `atualizacoes.html` com `v0.3.10`, sem overflow horizontal e sem erros de console.
- Deploy Firebase Hosting concluido no projeto `gmove-landing`.
- Producao validada com HTTP 200 no artigo 11, `/conteudo/`, `/atualizacoes/`, `/sitemap.xml` e AVIF do artigo 11; sitemap publico tem 22 URLs e inclui o artigo 11.
- Search Console recebeu novamente `https://gmove.app/sitemap.xml` apos `v0.3.10`; a tabela confirmou envio e ultima leitura em 2026-05-30, status `Processado`, 22 paginas encontradas e notificacao `Sitemap enviado`.
- URL Inspection do artigo 11 confirmou `O URL nao esta no Google`, motivo `Detectada, mas nao indexada no momento`; indexacao solicitada em 2026-05-30. A URL aparece associada ao sitemap `https://gmove.app/sitemap.xml`.
- Proximo passo operacional: acompanhar cobertura das 22 URLs e revalidar o artigo 11 em alguns dias.
- Proxima pauta editorial escolhida: `O que muda de uma semana para outra?`, conectando os ensaios sobre semana, registro e progressao sem criar dica generica de treino.
- Direcao da proxima pauta: mostrar que progresso real aparece na diferenca entre semanas, nao apenas na sensacao de treino pesado ou em uma sessao isolada.

### Regra permanente - updates publicos

- Antes de encerrar qualquer frente, conferir `documents/15_ATUALIZACOES_PUBLICAS.md`.
- Se a mudanca for update significativo, atualizar `atualizacoes.html` antes de deploy, commit final ou entrega.
- Se nao entrar em `atualizacoes.html`, registrar o motivo no handoff ou neste documento quando houver risco de duvida.

Regra: uma conversa não deve editar arquivos da frente de outra sem revisar o diff atual e registrar o motivo no handoff.

## Documentos Operacionais Pos-Deploy

Status: criados em 2026-05-27

- `documents/09_SEARCH_CONSOLE_INDEXACAO.md`;
- `documents/10_MATRIZ_PAGINAS_PUBLICAS.md`;
- `documents/12_INVENTARIO_ASSETS.md`;
- `documents/13_GIT_LEGADOS_RELEASE.md`;
- `documents/14_MELHORIAS_FEATURES_PESQUISA_2026.md`;
- `documents/15_ATUALIZACOES_PUBLICAS.md`;
- `documents/16_DOMINIOS_DNS.md`;
- `documents/17_REGISTRO_OPERACIONAL.md`.

## Infra - WWW

Status: ativo e validado por HTTP em 2026-05-29

- Custom Domain `www.gmove.app` criado no Firebase Hosting em 2026-05-27.
- DNS atual via Google DNS aponta `www.gmove.app` como CNAME de `gmove-landing.web.app`.
- Firebase Hosting reportou `HOST_ACTIVE`, `OWNERSHIP_ACTIVE` e `CERT_ACTIVE`.
- Configuracao desejada: redirect de `www.gmove.app` para `gmove.app`.
- `curl -I -L https://www.gmove.app/` confirmou `HTTP 301` para `https://gmove.app/` e depois `HTTP 200`.
- Se algum teste HTTP retornar erro regional/CDN, revalidar depois antes de registrar como incidente de producao.

## Infra - gmove.com.br

Status: ativo e validado por HTTP/DNS em 2026-05-29

- Custom Domain `gmove.com.br` criado no Firebase Hosting em 2026-05-27.
- Custom Domain `www.gmove.com.br` criado com redirect para `gmove.com.br`.
- DNS autoritativo confirmado no Registro.br: `a.auto.dns.br` e `b.auto.dns.br`.
- Google DNS confirmou A apex `199.36.158.100`, TXT `hosting-site=gmove-landing`, CNAME `www -> gmove-landing.web.app` e TXT ACME.
- `https://gmove.com.br/` respondeu `HTTP 200`.
- `https://www.gmove.com.br/` respondeu `HTTP 301` para `https://gmove.com.br/` e depois `HTTP 200`.
- Registros completos e rotina de revalidacao estao em `documents/16_DOMINIOS_DNS.md`.
- Canonical segue em `https://gmove.app/` ate decisao explicita de trocar o dominio principal.
