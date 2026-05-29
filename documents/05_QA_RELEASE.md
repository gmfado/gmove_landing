# 05 - QA e Release do Site

## Checklist Local

Antes de deploy:

- `git status --short --branch`;
- servidor estático local;
- abrir home em desktop;
- abrir home em mobile;
- testar menu mobile;
- testar carrossel de prints;
- testar CTA de email;
- testar links de Manifesto, Editorial, Privacidade e Termos;
- abrir `/conteudo/`;
- abrir pelo menos um artigo;
- verificar console do navegador;
- conferir que não há overflow horizontal.

## Validacao URLs Limpas v0.3.9 - 2026-05-29

- Canonicals, `og:url`, sitemap e links publicos foram alinhados para os caminhos finais com barra: `/manifesto/`, `/atualizacoes/`, `/privacidade/`, `/seguranca/`, `/termos/` e Editorial.
- `atualizacoes.html` registra `v0.3.9` com status `Publicado`.
- `tools/verify-docs.ps1`: passou com 36 Markdown files e 21 URLs no sitemap.
- `tools/verify-public-copy.ps1`: passou com 22 HTML files.
- `node --check js/main.js`: passou.
- JSON-LD local parseou corretamente: 29 blocos em 21 HTML files.
- Local Firebase Hosting: rotas limpas principais responderam `HTTP 200`; rotas `.html` de paginas raiz redirecionaram `301` para a forma com barra.
- Browser local desktop 1280 x 900 em `/atualizacoes/`: `v0.3.9`, canonical e `og:url` limpos, sem links `.html`, sem overflow horizontal e sem erros de console.
- Browser local mobile 390 x 844 em `/conteudo/`: canonical limpo, links editoriais sem `.html`, sem overflow horizontal e sem erros de console.
- Deploy Firebase Hosting concluido no projeto `gmove-landing`; a CLI encontrou 88 arquivos e enviou 23 novos/alterados.
- Producao validada com `Cache-Control: no-cache`: `/`, `/manifesto/`, `/atualizacoes/`, `/privacidade/`, `/seguranca/`, `/termos/`, `/conteudo/` e `/sitemap.xml` responderam `HTTP 200`.
- Producao: `/manifesto.html`, `/atualizacoes.html`, `/privacidade.html`, `/seguranca.html` e `/termos.html` redirecionaram `301` para os caminhos finais com barra.
- Producao: `/atualizacoes/` exibiu `v0.3.9`, canonical limpo e sem canonical `.html`; `/sitemap.xml` manteve 21 URLs e nenhuma URL `.html`.
- Browser em producao confirmou `/atualizacoes/` desktop e `/conteudo/` mobile sem links `.html`, sem overflow horizontal e sem erros de console.
- Evidencias: `documents/qa/gmove-clean-urls-updates-desktop-2026-05-29.png`, `documents/qa/gmove-clean-urls-editorial-mobile-2026-05-29.png`, `documents/qa/gmove-prod-clean-urls-updates-desktop-2026-05-29.png`, `documents/qa/gmove-prod-clean-urls-editorial-mobile-2026-05-29.png`.
- Search Console: `https://gmove.app/sitemap.xml` reenviado apos `v0.3.9`; a tabela confirmou `/sitemap.xml`, envio e ultima leitura em 2026-05-29, status `Processado`, 21 paginas encontradas e notificacao `Sitemap enviado`.
- Evidencia textual: `documents/qa/search-console-sitemap-v039-2026-05-29.json`.
- Proximo passo operacional: acompanhar cobertura das 21 URLs limpas e revalidar o artigo 09 em alguns dias.

## Validação Editorial ED-010 - 2026-05-29

- `css/editorial.css` ampliou os paineis visuais dos cards, guias e hubs do Editorial.
- HTMLs editoriais usam `css/editorial.css?v=20260529-editorial-photo-panels`.
- `atualizacoes.html` registra `v0.3.8` com status `Publicado`.
- Local desktop `/conteudo/`: 9 cards visuais, 4 guias e 4 hubs sem overflow horizontal, CSS novo ativo e console sem erros.
- Local mobile 390 x 844 `/conteudo/`: cards, guias e hubs sem overflow horizontal, CSS novo ativo e console sem erros.
- Local mobile 390 x 844 artigo 10: bloco `article-reference` preservado e sem overflow horizontal.
- DNS/HTTP de dominios validado: `www.gmove.app` redireciona para `https://gmove.app/`; `gmove.com.br` responde `HTTP 200`; `www.gmove.com.br` redireciona para `https://gmove.com.br/`.
- Deploy Firebase Hosting concluido no projeto `gmove-landing`; a CLI encontrou 88 arquivos e enviou 17 novos/alterados.
- Producao validada com `Cache-Control: no-cache`: `/atualizacoes/` exibiu `v0.3.8`, `/conteudo/` carregou `editorial.css?v=20260529-editorial-photo-panels`, CSS editorial respondeu `HTTP 200` e `/sitemap.xml` manteve 21 URLs.
- Browser em producao confirmou `/atualizacoes/` mobile com `v0.3.8`, `/conteudo/` desktop/mobile com CSS novo, 9 cards visuais, 4 guias, 4 hubs, H1 unico, console sem erros e sem overflow horizontal.
- Search Console: sitemap reenviado em 2026-05-29; artigo 09 com indexacao solicitada; artigo 10 ja aparece como URL no Google.

## Validação Editorial ED-009 - 2026-05-28

- Os 10 ensaios receberam bloco `article-reference` com screenshot real do app, texto de contexto, legenda, `alt`, dimensoes e `loading="lazy"`.
- A referencia visual foi adicionada ao CSS editorial; no estado atual, os HTMLs editoriais usam `css/editorial.css?v=20260528-editorial-border-fix`.
- `atualizacoes.html` registra `v0.3.7` com status `Publicado`.
- `node --check js/main.js`: sem erro de sintaxe.
- JSON-LD de `atualizacoes.html` parseou corretamente e inclui `v0.3.7`.
- Local: `/atualizacoes.html`, `/conteudo/`, artigo 01, artigo 10 e CSS editorial responderam 200.
- Local mobile 390 x 844: 10 artigos com 1 bloco `article-reference`, imagens carregadas e sem overflow horizontal.
- Deploy Firebase Hosting concluido no projeto `gmove-landing`; a CLI encontrou 88 arquivos e enviou 17 novos/alterados.
- Producao validada com HTTP 200 em `/atualizacoes/`, `/atualizacoes.html`, `/conteudo/`, artigos 01 e 10, CSS editorial versionado, asset AVIF de screenshot e `/sitemap.xml`.
- Browser em producao confirmou `v0.3.7` publicado em `/atualizacoes/`, artigo mobile sem overflow horizontal, CSS editorial carregado e AVIF do screenshot carregado.
- Evidencias de producao: `documents/qa/gmove-prod-reference-mobile-2026-05-28.png` e `documents/qa/gmove-prod-updates-v037-2026-05-28.png`.

## Validação Editorial ED-008 - 2026-05-28

- Artigo 10 integrado: `/conteudo/o-que-anotar-no-treino-para-saber-se-voce-esta-evoluindo/`.
- Capa do artigo 10 refeita após QA visual para evitar repetição de personagem, roupa, celular ou tela de app; imagem final usa cena documental de academia com caderno físico.
- Assets do artigo 10 confirmados em JPG, WebP e AVIF, todos com `2048 x 1152`.
- `/conteudo/`, destaque rotativo de `js/main.js` e `sitemap.xml` passaram a incluir o Ensaio 10.
- `atualizacoes.html` registra `v0.3.6` com status `Publicado`.
- `firebase.json` passou a aplicar cache longo tambem para assets AVIF.
- `node --check js/main.js`: sem erro de sintaxe.
- Auditoria local de JSON-LD, H1 unico, links internos, `src`, `srcset`, sitemap e assets passou em 22 arquivos HTML.
- Sitemap local possui 21 URLs e inclui o artigo 10.
- Browser local: `/conteudo/` validado sem overflow horizontal, com 10 indicadores no destaque editorial e card do Ensaio 10.
- Browser local desktop 1280 x 900 e mobile 390 x 844: artigo 10 validado sem overflow horizontal, com H1 integro, alt correto e capa AVIF carregada em 2048 x 1152.
- Evidencias locais: `documents/qa/gmove-editorial-ed008-article-desktop-2026-05-28.png`, `documents/qa/gmove-editorial-ed008-article-mobile-2026-05-28.png`, `documents/qa/gmove-editorial-ed008-list-desktop-2026-05-28.png`.
- Deploy Firebase Hosting concluido no projeto `gmove-landing`; a CLI encontrou 88 arquivos e enviou 10 novos.
- Producao validada com HTTP 200 em `/conteudo/`, artigo 10, `/sitemap.xml`, `/atualizacoes/`, asset AVIF do artigo 10 e arquivo de verificacao do Search Console.
- `/sitemap.xml` em producao possui 21 URLs e inclui o artigo 10.
- AVIF do artigo 10 respondeu `image/avif` com cache longo `public, max-age=31536000, immutable`.
- Browser em producao confirmou `/conteudo/` sem overflow, com 10 indicadores no destaque editorial, artigo 10 com JSON-LD `Article`/`BreadcrumbList`, capa carregada e console sem erros.
- Evidencia de producao: `documents/qa/gmove-prod-ed008-article-desktop-2026-05-28.png`.
- Pendente desta rodada: reenvio do sitemap no Search Console apos publicacao.

## Validação Editorial ED-007 - 2026-05-28

- Servidor local: `http://127.0.0.1:8010/`.
- `node --check js/main.js`: sem erro de sintaxe.
- `git diff --check`: sem erro de whitespace; apenas avisos LF/CRLF do Windows.
- Auditoria local de JSON-LD, H1 único e links internos passou nos arquivos tocados.
- Assets do artigo 09 confirmados em JPG, WebP e AVIF com `2048 x 1152`.
- Chrome headless/CDP: `/conteudo/` validado sem overflow horizontal, com 9 indicadores no destaque editorial e link para o Ensaio 09.
- Chrome headless/CDP: artigo 09 validado em desktop e mobile sem overflow horizontal, com H1 íntegro e imagem de capa carregada.
- Evidências locais: `documents/qa/gmove-editorial-ed007-list-cdp-2026-05-28.png`, `documents/qa/gmove-editorial-ed007-article-desktop-cdp-2026-05-28.png`, `documents/qa/gmove-editorial-ed007-article-mobile-cdp-2026-05-28.png`.
- Deploy Firebase Hosting concluído no projeto `gmove-landing`; primeira publicação encontrou 84 arquivos e enviou 12 novos, e segunda publicação do changelog enviou 1 arquivo.
- Produção validada com HTTP 200 em `/conteudo/a-semana-e-a-menor-unidade-real-de-evolucao-no-treino/`, `/conteudo/`, `/sitemap.xml` e `/atualizacoes/`.
- `/atualizacoes/` validado com `v0.3.5`, status `Publicado` e link para o novo ensaio.

## Validação Atual - 2026-05-25

- Servidor local: `http://127.0.0.1:8000/` respondeu HTTP 200.
- Links e assets locais: varredura passou, incluindo URLs com `#fragment`.
- Guardrails visuais: sem grafia antiga da marca, logo antigo em uso, `font-size` com `vw` ou `letter-spacing` negativo fora do ignore de deploy.
- Desktop 1280 x 720: home sem imagens quebradas, sem overflow horizontal, CTA visível e próxima seção já aparece na primeira dobra.
- Mobile 390 x 844: home sem imagens quebradas, sem overflow horizontal, CTA visível, menu mobile abre corretamente e próxima seção aparece na primeira dobra.
- Prints publicados: `1080 x 2032`, sem status bar e sem barra de navegação do Android.
- Rodada premium: hero simplificado, controles flutuantes escondidos, barra de progresso escondida e reveals sem blur/zoom.
- Editorial mobile: `/conteudo/` e um artigo validado sem imagens quebradas e sem overflow horizontal.
- Evidências locais: `documents/qa/site-desktop-home.png`, `documents/qa/site-mobile-home.png`, `documents/qa/site-mobile-menu.png`, `documents/qa/site-mobile-editorial.png`, `documents/qa/site-mobile-article.png`.

## Validação Editorial - 2026-05-26

- Servidor local: `http://127.0.0.1:8000/`.
- `/conteudo/`, `/conteudo/index.html`, `css/editorial.css?v=20260526-editorial-images` e `js/main.js?v=20260526-editorial-images` responderam HTTP 200.
- Varredura local de `href/src`: todos os destinos internos existem, incluindo assets com query string de versão.
- JSON-LD do Editorial: todos os blocos parsearam corretamente.
- Desktop 1366 x 900: clique da home para Editorial abriu `conteudo/index.html`, com CSS carregado, sem listagem de diretório e sem overflow horizontal.
- Desktop 1366 x 900: artigo 01 abriu a partir do Editorial com `style.css` e `editorial.css` carregados.
- Mobile 390 x 844: menu abriu o Editorial corretamente, sem diretório, sem overflow horizontal e com indicação da próxima seção na primeira dobra.
- Mobile 390 x 844: destaque editorial rotativo validado com `main.js?v=20260526-editorial-images`, gerando link relativo com `index.html`.
- Evidências locais: `documents/qa/editorial-desktop-2026-05-26.png`, `documents/qa/editorial-article-desktop-2026-05-26.png`, `documents/qa/editorial-mobile-2026-05-26.png`, `documents/qa/editorial-mobile-list-2026-05-26.png`.

### Ajuste de Imagens - 2026-05-26

- Imagem do ensaio em destaque restaurada no hero editorial.
- Guias de leitura e cards editoriais passaram a usar imagens de apoio dos slugs publicados.
- Caminhos em CSS variables corrigidos para `../conteudo/<slug>/...`, pois o navegador resolve esses `url(...)` a partir de `css/editorial.css`.
- Desktop e mobile revalidados sem overflow horizontal.
- Evidências locais: `documents/qa/editorial-desktop-images-2026-05-26.png`, `documents/qa/editorial-mobile-images-2026-05-26.png`, `documents/qa/editorial-mobile-guides-images-2026-05-26.png`, `documents/qa/editorial-mobile-card-images-2026-05-26.png`.

## Validação Produto + Editorial - 2026-05-27

- Servidor local: `http://127.0.0.1:8000/`.
- `node --check js/main.js`: sem erro de sintaxe.
- `git diff --check`: sem erro de whitespace; apenas avisos LF/CRLF do Windows.
- JSON-LD: 15 blocos parseados com sucesso.
- Links e assets locais: varredura de `href/src` passou.
- Sitemap: XML válido com 18 URLs, incluindo `seguranca.html` e os hubs editoriais.
- Home desktop 1366 x 900: CSS carregado, sem imagens quebradas, sem overflow horizontal.
- Home mobile 390 x 844: seção `Como funciona` e menu mobile validados sem overflow horizontal.
- Simulador `Como funciona`: botões atualizam a recomendação exibida.
- Editorial desktop/mobile: hubs editoriais visíveis, com imagens e links para páginas pilar.
- Página `seguranca.html` mobile: conteúdo legível, CSS carregado e sem overflow horizontal.
- Console do navegador: sem erros capturados na rodada visual.
- Evidências locais: `documents/qa/gmove-home-decision-desktop-2026-05-27.png`, `documents/qa/gmove-home-decision-mobile-2026-05-27.png`, `documents/qa/gmove-editorial-hubs-desktop-2026-05-27.png`, `documents/qa/gmove-editorial-hubs-mobile-2026-05-27.png`, `documents/qa/gmove-security-mobile-2026-05-27.png`.

### Ajuste Visual - Como funciona - 2026-05-27

- A seção `Como funciona` recebeu efeitos leves de sinal, brilho em chip ativo e pulso de atualização do painel.
- Desktop 1366 x 900: animações `decisionFlowTrace`, `decisionSignalTrace` e `decisionChipGlint` ativas, sem overflow horizontal.
- Mobile 390 x 844: animações contínuas desligadas; apenas a microanimação de atualização ocorre após toque em um cenário.
- Interação mobile validada selecionando `Casa`: status, contexto, título e próximo aprendizado foram atualizados corretamente.
- Console do navegador: sem erros capturados.
- Evidências locais: `documents/qa/gmove-how-effects-desktop-2026-05-27.png`, `documents/qa/gmove-how-effects-mobile-top-2026-05-27.png`, `documents/qa/gmove-how-effects-mobile-board-2026-05-27.png`.

## Deploy Produção - 2026-05-27

- Firebase Hosting: deploy realizado no projeto `gmove-landing`.
- Arquivos publicados pelo Firebase: 53.
- URL padrão publicada: `https://gmove-landing.web.app/`.
- Domínio canônico validado: `https://gmove.app/` respondeu HTTP 200 com o title novo.
- Rotas ao vivo verificadas com HTTP 200: `/`, `/conteudo/`, `/seguranca/`, `/privacidade/`, `/termos/`, `/sitemap.xml` e `/robots.txt`.
- Home publicada: sem imagens quebradas, sem overflow horizontal e sem erros de console.
- Mobile 390 x 844 publicado: `#como-funciona` e `/conteudo/` validados sem overflow horizontal.
- Menu mobile publicado: abre corretamente, com links para O app, Como funciona, Manifesto, Editorial, Segurança, Privacidade e Termos.
- Observação: `https://www.gmove.app/` não respondeu no teste desta rodada.
- Evidências ao vivo: `documents/qa/gmove-live-how-mobile-2026-05-27.png`, `documents/qa/gmove-live-editorial-mobile-2026-05-27.png`.

## Documentacao Operacional - 2026-05-27

- Criados documentos de Search Console/indexacao, matriz de paginas publicas, inventario de assets e Git/legados/release.
- Criada pesquisa aplicada de melhorias e features em `documents/14_MELHORIAS_FEATURES_PESQUISA_2026.md`.
- `firebase.json` atualizado para ignorar `video.mp4`, arquivo pesado e nao referenciado pelo site atual.
- `video.mp4` removido do workspace pelo usuario; ignore mantido como protecao.
- Pendencias operacionais registradas: Search Console, `www.gmove.app`, WebP/AVIF dos prints e decisao final sobre legados.
- JSON do Firebase validado com normalizacao de BOM em memoria.
- Referencias internas dos novos documentos conferidas.
- Matriz de paginas conferida contra as 18 URLs do sitemap.
- `git diff --check`: sem erros; apenas avisos LF/CRLF do Windows.
- Dry-run do Firebase Hosting concluido com sucesso no projeto `gmove-landing`.

## Ajuste de CTA e Deploy - 2026-05-27

- CTA principal do hero alterado de `Ver como decide` para `Como o treino é escolhido`.
- Deploy Firebase Hosting realizado no projeto `gmove-landing`.
- Arquivos publicados pelo Firebase nesta rodada: 52.
- `https://gmove.app/` validado com o CTA novo e sem o texto antigo.
- Rotas verificadas com HTTP 200: `/`, `/conteudo/`, `/sitemap.xml` e `/robots.txt`.

## Diagnostico WWW - 2026-05-27

- `www.gmove.app` foi criado como Custom Domain no Firebase Hosting via REST API.
- Configuracao desejada: redirect de `www.gmove.app` para `gmove.app`.
- Estado Firebase apos criacao: `HOST_ACTIVE`, `OWNERSHIP_ACTIVE`, certificado em `CERT_PREPARING`.
- Pendencia DNS no Hostinger: trocar CNAME `www -> gmove.app` para `www -> gmove-landing.web.app`.
- Estado posterior: certificado avancou para `CERT_VALIDATING` e o Firebase pediu TXT em `_acme-challenge.www.gmove.app`.
- TXT solicitado: `rDJYrfPftE3tEqg9ad8cHwdqCXUFL8f9MGCTsltO75I`.
- Enquanto o DNS nao mudar e o certificado nao concluir, `https://www.gmove.app/` pode continuar falhando.

## Dominio gmove.com.br - 2026-05-27

- Custom Domain `gmove.com.br` criado no Firebase Hosting para servir o site `gmove-landing`.
- Custom Domain `www.gmove.com.br` criado no Firebase Hosting com redirect para `gmove.com.br`.
- Validacao Firebase apos criacao: ambos ficaram em `HOST_UNHOSTED`, `OWNERSHIP_MISSING` e `CERT_VALIDATING`, aguardando DNS externo.
- DNS autoritativo confirmado no Registro.br: `a.auto.dns.br` e `b.auto.dns.br`.
- Registros pendentes documentados em `documents/16_DOMINIOS_DNS.md`.
- `gmove.com.br` ainda nao resolve publicamente ate que os registros sejam salvos no Registro.br.
- Canonical, sitemap e robots permanecem em `https://gmove.app/` para evitar duplicacao de SEO.
- `atualizacoes.html` atualizado para `v0.3.2` e publicado via Firebase Hosting.
- Deploy Firebase Hosting concluido no projeto `gmove-landing`; a CLI encontrou 63 arquivos e enviou 1 arquivo novo.
- `https://gmove-landing.web.app/atualizacoes/` validado com `v0.3.2`.
- `https://gmove.app/` validado com resposta HTML usando user-agent de navegador; chamadas sem user-agent podem retornar 502 regional e devem ser rechecadas antes de registrar incidente.

## Otimizacao De Prints - 2026-05-27

- Gerados AVIF e WebP 720px para os 5 prints do app.
- Home atualizada para servir AVIF/WebP via `<picture>`, mantendo PNG como fallback.
- Carrossel usa lazy loading nos prints abaixo da dobra.
- Reducao estimada: lote PNG original com aproximadamente 2.7 MB; lote AVIF com aproximadamente 141 KB e lote WebP com aproximadamente 207 KB.
- `node --check js/main.js` passou.
- `git diff --check` passou; apenas avisos LF/CRLF do Windows.
- Auditoria local de `href`, `src`, `srcset` e JSON-LD passou em 19 arquivos HTML, sem referencias quebradas.
- QA local com Chrome em 1366px e 390px confirmou AVIF ativo, imagens carregadas e sem overflow horizontal.
- Evidencias locais: `documents/qa/gmove-optimized-home-desktop-2026-05-27.png`, `documents/qa/gmove-optimized-home-mobile-top-2026-05-27.png`, `documents/qa/gmove-optimized-home-mobile-carousel-2026-05-27.png`.
- Deploy Firebase Hosting concluido no projeto `gmove-landing`; Firebase encontrou 63 arquivos e enviou 13 novos.
- `https://gmove.app/` validado com referencias AVIF/WebP no HTML.
- `https://gmove.app/assets/screenshots/gmove-app-current-01-720.avif` respondeu HTTP 200 com `content-type=image/avif`.
- Rotas verificadas com HTTP 200: `/`, `/conteudo/`, `/sitemap.xml` e `/robots.txt`.

## Pagina De Atualizacoes - 2026-05-27

- Criada `atualizacoes.html` com historico publico de versoes.
- Historico ampliado para 8 entradas: `v0.3.0`, `v0.2.5`, `v0.2.4`, `v0.2.3`, `v0.2.2`, `v0.2.1`, `v0.2.0` e `v0.1.0`.
- Navegacao global, mobile menu e footer atualizados com link para `Atualizacoes`.
- `node --check js/main.js` passou.
- `git diff --check` passou; apenas avisos LF/CRLF do Windows.
- Auditoria local de `href`, `src`, `srcset`, JSON-LD e `sitemap.xml` passou em 19 arquivos HTML.
- Sitemap possui 19 URLs e inclui `https://gmove.app/atualizacoes.html`.
- Browser local em 1366 x 900: pagina de updates sem overflow horizontal, card `v0.3.0` legivel e nav com espaco para o novo link.
- Browser local em 390 x 844: pagina sem overflow horizontal, botoes cabem em 320px, menu mobile inclui `Atualizacoes` e historico rola corretamente.

## Navegacao Desktop/Mobile - 2026-05-27

- `atualizacoes.html` atualizado para `v0.3.1` com status `Publicado`.
- Desktop 1366 x 900: menu superior reduzido para O app, Como funciona, Editorial, Atualizacoes e Sobre.
- Dropdown `Sobre` validado com Manifesto, Seguranca, Privacidade e Termos.
- Mobile 396px: barra inferior validada com Inicio, App, Editorial, Updates e Mais; hamburger oculto.
- Interacao mobile: `Mais` abre o menu completo, o botao de fechar aparece, o menu fecha corretamente e nao deixa `body` travado.
- Pagina de updates mobile marca `Updates` como item ativo e nao apresentou overflow horizontal.
- Console do navegador sem erros.
- Apos primeiro deploy, rota limpa `/atualizacoes/` revelou assets relativos quebrados; paginas raiz foram corrigidas para caminhos root-relative e republicadas.
- Producao validada em `/`, `/atualizacoes.html`, `/atualizacoes/`, `/manifesto/`, `css/style.css?v=20260527-nav-v031` e `js/main.js?v=20260527-nav-v031`.
- Chrome headless em producao confirmou desktop com dropdown `Sobre` e mobile em `/atualizacoes/` com barra inferior ativa, `v0.3.1` publicado e sem overflow horizontal.
- `node --check js/main.js` passou.
- `git diff --check` passou; apenas avisos LF/CRLF do Windows.
- Auditoria local de `href`, `src`, `srcset`, JSON-LD, `ItemList` e `sitemap.xml` passou em 20 arquivos HTML.
- Evidencias locais: `documents/qa/gmove-nav-desktop-2026-05-27.png`, `documents/qa/gmove-nav-mobile-updates-2026-05-27.png`.

## Editorial Pesquisa Aplicada - 2026-05-28

- Pesquisa aprofundada registrada em `documents/editorial/EDITORIAL_RESEARCH_2026-05-28.md`, cobrindo Google Search Central, base tecnica de treino/saude, SERP brasileira, benchmarks de apps, comunidades e auditoria visual aplicada.
- Oito artigos receberam capa editorial visivel com `<picture>`: AVIF preferencial, WebP moderno e JPG fallback.
- Oito artigos receberam bloco de "Leitura rapida", `BreadcrumbList`, `dateModified=2026-05-28`, `articleSection`, `keywords` e `isAccessibleForFree`.
- `conteudo/index.html` passou a usar imagens WebP nos cards/destaques e imagem social editorial real.
- `sitemap.xml` recebeu `lastmod=2026-05-28` nas 13 URLs editoriais.
- `atualizacoes.html` recebeu a entrada publica `v0.3.3` com status `Publicado`.
- `node --check js/main.js` passou.
- `git diff --check` passou; apenas avisos LF/CRLF do Windows.
- Auditoria local de `href`, `src`, `srcset`, JSON-LD, imagens AVIF/WebP e `sitemap.xml` passou em 20 arquivos HTML.
- Browser local em 1280 x 900 confirmou `/conteudo/` sem overflow horizontal, H1 revelado e cards editoriais com imagens.
- Browser local em 390 x 844 confirmou artigo com AVIF ativo, H1 revelado, capa carregada, bloco "Leitura rapida" visivel e console sem erros.
- Browser local confirmou `atualizacoes.html` com `v0.3.3` como versao atual e primeira entrada da timeline.
- Evidencias locais: `documents/qa/gmove-editorial-research-desktop-2026-05-28.png`, `documents/qa/gmove-editorial-article-mobile-2026-05-28.png`.
- Deploy Firebase Hosting concluido no projeto `gmove-landing`; Firebase encontrou 79 arquivos e enviou 39 novos/alterados.
- Producao validada em `https://gmove.app/`, `/conteudo/`, artigo editorial, `/atualizacoes/`, CSS/JS versionados, `sitemap.xml` e asset AVIF.
- Browser em producao confirmou mobile 390px com logo de aproximadamente 24px, `v0.3.3` publicado, sem overflow horizontal e console sem erros.
- Browser em producao confirmou `/conteudo/` desktop com WebP nos destaques, CSS versionado e sem overflow horizontal.
- Evidencias de producao: `documents/qa/gmove-prod-updates-mobile-2026-05-28.png`, `documents/qa/gmove-prod-editorial-desktop-2026-05-28.png`.
- Pendente: reenvio das URLs editoriais no Search Console.

## Imagens Editoriais Humanizadas - 2026-05-28

- Oito capas dos artigos foram substituidas por cenas documentais mais humanas e variadas, mantendo os mesmos caminhos publicos e os formatos AVIF, WebP e JPG.
- A rodada final inclui ambientes e objetos diferentes entre si: escada de predio, lavanderia, mesa de cozinha, escritorio, aparelho de cabo, leg press, mural de treino e parque.
- Os arquivos finais foram normalizados em 2048x1152.
- Os atributos `alt`, `width` e `height` das capas nos oito artigos foram atualizados.
- `css/editorial.css` recebeu guardrail mobile para titulos longos de artigo e cache-busting `20260528-editorial-humanized`.
- Nesta rodada, `atualizacoes.html` registrava `v0.3.4` com status `Em validacao visual`; o update foi publicado nas rodadas editoriais seguintes.
- `node --check js/main.js` passou.
- `git diff --check` passou sem erros reais; apenas avisos LF/CRLF do Windows.
- Auditoria local confirmou 8 artigos x JPG/WebP/AVIF em 2048x1152 e referencias HTML presentes.
- Browser local em 1280 x 720 validou `/conteudo/index.html` sem overflow horizontal.
- Browser local no artigo de repeticao viavel confirmou capa carregando AVIF, `naturalWidth=2048`, `naturalHeight=1152`, alt atualizado e console sem erros.
- Browser mobile em 390 x 844 capturou o artigo com titulo sem corte, capa nova visivel e sem overflow horizontal.
- Evidencias locais: `documents/qa/gmove-editorial-humanized-list-desktop-2026-05-28.png`, `documents/qa/gmove-editorial-humanized-article-desktop-2026-05-28.png`, `documents/qa/gmove-editorial-humanized-article-mobile-2026-05-28.png`.
- Pendente nesta rodada: deploy Firebase Hosting e validacao em producao, concluido nas rodadas editoriais seguintes.

## SEO

- Home com title, description, canonical, OG/Twitter e JSON-LD.
- Editorial com title, description, canonical e links internos.
- Artigos com JSON-LD `Article`.
- `sitemap.xml` atualizado quando URLs mudarem.
- `robots.txt` apontando para sitemap.

## Mobile

Validar pelo menos:

- 390px de largura;
- 430px de largura;
- desktop 1366px;
- desktop largo.

Critérios:

- texto não corta;
- botões cabem;
- imagens do hero não impedem leitura;
- carrossel não causa overflow;
- footer é navegável;
- CTA final é usável.

## Deploy

Deploy via Firebase Hosting:

```powershell
firebase deploy
```

O `firebase.json` deve ignorar documentação e arquivos de referência que não fazem parte do site público.
