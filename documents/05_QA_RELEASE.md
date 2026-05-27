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
