# 11 - Implementation Log

## 2026-05-29 - Paineis visuais do Editorial e dominios ativos

### Estado

- `css/editorial.css` ampliou os paineis de imagem nos cards de artigos, guias e hubs do Editorial.
- Os paineis passaram a preservar mais contexto visual, com gradiente menos escuro e bordas individuais.
- HTMLs editoriais passaram a usar `editorial.css?v=20260529-editorial-photo-panels`.
- `atualizacoes.html` recebeu a entrada publica `v0.3.8` com status `Publicado`.
- `documents/16_DOMINIOS_DNS.md` foi atualizado para refletir `gmove.com.br`, `www.gmove.com.br` e `www.gmove.app` ativos.

### Validacao local e externa

- Browser local desktop em `/conteudo/`: cards, guias e hubs sem overflow horizontal e console sem erros.
- Browser local mobile 390 x 844 em `/conteudo/`: cards, guias e hubs sem overflow horizontal e console sem erros.
- Browser local mobile 390 x 844 no artigo 10: bloco `article-reference` preservado e sem overflow horizontal.
- `curl -I -L https://www.gmove.app/` confirmou redirect para `https://gmove.app/`.
- `curl -I -L https://gmove.com.br/` confirmou `HTTP 200`.
- `curl -I -L https://www.gmove.com.br/` confirmou redirect para `https://gmove.com.br/`.

### Publicacao

- Deploy Firebase Hosting concluido no projeto `gmove-landing`; a CLI encontrou 88 arquivos e enviou 17 novos/alterados.
- Producao validada em `/atualizacoes/`, `/conteudo/`, CSS editorial, `/sitemap.xml`, `gmove-landing.web.app`, `www.gmove.app`, `gmove.com.br` e `www.gmove.com.br`.
- Reenviar o sitemap de 21 URLs no Search Console e solicitar URL Inspection dos artigos 09 e 10.

## 2026-05-25 - Atualização para GMOVE Renew

### Estado

- Site foi adaptado para o app atual em `gmove-app-renew`.
- Marca pública mudou para `GMOVE`.
- Assets finais de marca foram importados do app.
- Favicons e ícones foram regenerados.
- Prints novos foram capturados do Android físico e aplicados na landing.
- Landing passou a comunicar treinador inteligente de musculação.
- Paleta foi alinhada ao app atual.
- Documentação do site foi reorganizada em padrão semelhante ao app.

### Arquivos-chave

- `index.html`
- `css/style.css`
- `css/premium.css`
- `css/editorial.css`
- `js/main.js`
- `assets/brand/`
- `assets/screenshots/`
- `documents/`

### Validação

- `git diff --check` passou; o Git apenas avisou sobre CRLF no Windows.
- Varredura de links e assets locais passou.
- Varredura de guardrails passou fora dos ignores de deploy.
- QA visual em navegador local passou em desktop 1280 x 720 e mobile 390 x 844.
- Menu mobile, home, Editorial e artigo foram verificados sem overflow horizontal.
- Prints do app foram recapturados via `adb shell screencap` + `adb pull` para preservar PNG binário válido.

### Próximo Passo

Antes de deploy, revisar o diff final e decidir se arquivos antigos (`print1.png` a `print5.png`, logos legados e referências do Copilot) devem ser removidos do repositório ou apenas permanecer ignorados no Firebase.

## 2026-05-27 - Camada de produto, confiança e Editorial

### Estado

- Home recebeu a seção `Como funciona`, com simulador de decisão do treino.
- Hero ficou mais direto: plano, histórico, energia, equipamento, carga e retorno.
- Home recebeu seção de confiança com ponte para `seguranca.html`.
- Criada a página `seguranca.html` com princípios de dados, limites da inteligência, ads/mensuração e contato.
- Editorial recebeu páginas pilar: `treino-com-criterio`, `progressao`, `consistencia` e `recuperacao`.
- Listagem do Editorial ganhou cards de hubs com imagens, linkagem interna e JSON-LD `hasPart`.
- Navegação global foi atualizada para incluir `Como funciona` e `Segurança`.
- `sitemap.xml` e `firebase.json` foram atualizados para as novas URLs.

### Validação

- `node --check js/main.js` passou.
- `git diff --check` passou; o Git apenas avisou sobre conversão LF/CRLF no Windows.
- JSON-LD: 15 blocos parseados sem erro.
- Varredura local de `href/src`: todos os destinos internos existem.
- Sitemap XML parseou com 18 URLs, incluindo os quatro hubs e `seguranca.html`.
- Browser desktop 1366 x 900: home, Editorial e hub `progressao` sem overflow horizontal, sem imagens quebradas e com CSS carregado.
- Browser mobile 390 x 844: home, menu mobile, `seguranca.html` e Editorial sem overflow horizontal.
- Simulador da home validado: ao selecionar `Casa`, o resultado muda para treino adaptado.
- Console do navegador sem erros durante a rodada visual.

### Evidências locais

- `documents/qa/gmove-home-decision-desktop-2026-05-27.png`
- `documents/qa/gmove-home-decision-mobile-2026-05-27.png`
- `documents/qa/gmove-editorial-hubs-desktop-2026-05-27.png`
- `documents/qa/gmove-editorial-hubs-mobile-2026-05-27.png`
- `documents/qa/gmove-security-mobile-2026-05-27.png`

### Ajuste visual da seção Como funciona

- Adicionados efeitos de trilha nos passos do raciocínio, sinal nos cards de contexto e brilho controlado nos chips ativos.
- O painel agora pulsa quando a recomendação muda, reforçando visualmente que o app recalculou a decisão.
- No mobile, efeitos contínuos ficam desligados para preservar legibilidade e desempenho; apenas a atualização por interação permanece.
- Validação mobile 390 x 844 passou sem overflow horizontal e sem erros no console.

## 2026-05-27 - Publicação Firebase Hosting

### Estado

- Site publicado em produção no Firebase Hosting, projeto `gmove-landing`.
- URL padrão: `https://gmove-landing.web.app/`.
- Domínio `https://gmove.app/` validado com HTTP 200 e conteúdo novo.
- `https://www.gmove.app/` não respondeu no teste desta rodada.

### Validação

- `node --check js/main.js` passou.
- `git diff --check` passou; o Git apenas avisou sobre conversão LF/CRLF no Windows.
- Varredura local de HTML, links internos e JSON-LD passou.
- Dry-run do Firebase passou antes do deploy real.
- Rotas ao vivo verificadas: `/`, `/conteudo/`, `/seguranca/`, `/privacidade/`, `/termos/`, `/sitemap.xml` e `/robots.txt`.
- Browser na versão publicada: home, `#como-funciona`, Editorial e menu mobile sem overflow horizontal, sem imagens quebradas e sem erros de console.

### Evidências ao vivo

- `documents/qa/gmove-live-how-mobile-2026-05-27.png`
- `documents/qa/gmove-live-editorial-mobile-2026-05-27.png`

## 2026-05-27 - Documentacao operacional para frentes paralelas

### Estado

- Criado protocolo de trabalho simultaneo em `documents/08_TRABALHO_SIMULTANEO.md`.
- Criado roteiro de Search Console, indexacao, robots, sitemap e Ads/AdSense em `documents/09_SEARCH_CONSOLE_INDEXACAO.md`.
- Criada matriz de paginas publicas em `documents/10_MATRIZ_PAGINAS_PUBLICAS.md`.
- Criado inventario de assets em `documents/12_INVENTARIO_ASSETS.md`.
- Criado modelo de Git, legados e release em `documents/13_GIT_LEGADOS_RELEASE.md`.
- Criada pesquisa aplicada de melhorias e features em `documents/14_MELHORIAS_FEATURES_PESQUISA_2026.md`.
- `README.md`, `00_START_HERE.md`, `20_TRABALHO_ATIVO.md` e docs editoriais foram atualizados para apontar o novo fluxo.
- `firebase.json` passou a ignorar `video.mp4`, pois o arquivo nao esta referenciado no site atual e tem peso alto.
- `video.mp4` foi removido do workspace pelo usuario por nao ser necessario; o ignore permanece como protecao.

### Validacao

- Matriz de paginas foi baseada em HTML real, canonicals e sitemap atual.
- Inventario de assets foi baseado em auditoria local de tamanho dos arquivos.
- Fontes oficiais consultadas para Search Console, sitemap, robots, conteudo people-first e AdSense foram registradas no documento 09.

## 2026-05-27 - Ajuste de CTA publicado

### Estado

- CTA principal do hero passou de `Ver como decide` para `Como o treino é escolhido`.
- Alteracao publicada via Firebase Hosting no projeto `gmove-landing`.

### Validacao

- `node --check js/main.js` passou.
- Varredura local de links e JSON-LD passou.
- `git diff --check` passou; apenas avisos LF/CRLF do Windows.
- `https://gmove.app/` validado com o CTA novo e sem o texto antigo.
- Rotas `/`, `/conteudo/`, `/sitemap.xml` e `/robots.txt` responderam HTTP 200 apos deploy.

## 2026-05-27 - Diagnostico e configuracao inicial de www

### Estado

- DNS atual de `www.gmove.app`: CNAME para `gmove.app`.
- `https://www.gmove.app/` ainda nao responde corretamente.
- Custom Domain `www.gmove.app` criado no Firebase Hosting com `redirectTarget` para `gmove.app`.
- Firebase reconheceu `HOST_ACTIVE` e `OWNERSHIP_ACTIVE`.
- Certificado SSL ficou em `CERT_PREPARING` e depois avancou para `CERT_VALIDATING`.
- Firebase solicitou TXT `_acme-challenge.www.gmove.app` com valor `rDJYrfPftE3tEqg9ad8cHwdqCXUFL8f9MGCTsltO75I`.

### Pendencia

- Atualizar DNS no Hostinger: CNAME `www` deve apontar para `gmove-landing.web.app`, conforme `requiredDnsUpdates` retornado pelo Firebase.
- Se o certificado nao emitir apos a troca de CNAME, adicionar o TXT ACME solicitado.
- Revalidar `https://www.gmove.app/` apos propagacao DNS e emissao do certificado.

## 2026-05-27 - Configuracao inicial de gmove.com.br

### Estado

- Custom Domain `gmove.com.br` criado no Firebase Hosting no site `gmove-landing`.
- Custom Domain `www.gmove.com.br` criado com `redirectTarget` para `gmove.com.br`.
- DNS autoritativo do dominio confirmado como Registro.br: `a.auto.dns.br` e `b.auto.dns.br`.
- Firebase retornou `HOST_UNHOSTED`, `OWNERSHIP_MISSING` e `CERT_VALIDATING` para os dois novos dominios, indicando pendencia de DNS externo.
- Registros DNS necessarios foram consolidados em `documents/16_DOMINIOS_DNS.md`.
- `atualizacoes.html` recebeu a entrada publica `v0.3.2`.
- Deploy Firebase Hosting publicado no projeto `gmove-landing` apos o registro publico.

### Pendencia

- Salvar os registros A, CNAME, TXT de ownership e TXT de ACME no painel do Registro.br.
- Reconsultar o Firebase depois da propagacao ate `HOST_ACTIVE`, `OWNERSHIP_ACTIVE` e `CERT_ACTIVE`.
- Testar `https://gmove.com.br/` e o redirect `https://www.gmove.com.br/` depois da emissao do certificado.

## 2026-05-27 - Otimizacao de prints do app

### Estado

- Geradas variantes AVIF e WebP de 720px para os 5 prints atuais em `assets/screenshots/`.
- `index.html` passou a servir os prints com `<picture>`: AVIF preferencial, WebP como fallback moderno e PNG original como fallback final.
- Imagens do carrossel receberam `loading="lazy"`, `decoding="async"` e dimensoes declaradas.
- PNGs originais foram mantidos como fonte e fallback.

### Impacto

- PNGs originais: aproximadamente 2.7 MB no lote.
- WebP 720px: aproximadamente 207 KB no lote.
- AVIF 720px: aproximadamente 141 KB no lote.

### Validacao local

- `node --check js/main.js` passou.
- `git diff --check` passou; apenas avisos LF/CRLF do Windows.
- Auditoria de `href`, `src`, `srcset` e JSON-LD passou em 19 arquivos HTML.
- Chrome local em 1366px e 390px confirmou AVIF ativo, imagens carregadas e ausencia de overflow horizontal.
- Evidencias: `documents/qa/gmove-optimized-home-desktop-2026-05-27.png`, `documents/qa/gmove-optimized-home-mobile-top-2026-05-27.png`, `documents/qa/gmove-optimized-home-mobile-carousel-2026-05-27.png`.

### Pendencia

- Monitorar comportamento real apos propagacao/cache do Firebase Hosting.

### Publicacao

- Deploy Firebase Hosting concluido no projeto `gmove-landing`.
- Firebase encontrou 63 arquivos e enviou 13 novos.
- `https://gmove.app/` validado com referencias AVIF/WebP no HTML.
- Asset `assets/screenshots/gmove-app-current-01-720.avif` respondeu HTTP 200 em producao com `content-type=image/avif`.
- Rotas `/`, `/conteudo/`, `/sitemap.xml` e `/robots.txt` responderam HTTP 200.

## 2026-05-27 - Pagina publica de atualizacoes

### Estado

- Criada `atualizacoes.html` como changelog publico versionado do GMOVE.
- Versao publica atual definida como `v0.3.0`, cobrindo a pagina de updates, regra de versionamento e otimizacao de prints.
- Historico inicial documenta 8 entradas entre `v0.3.0` e `v0.1.0`, puxadas dos registros locais de implementacao, QA, deploy e infra.
- Navegacao global, mobile menu e footer passaram a incluir `Atualizacoes`.
- `sitemap.xml`, `firebase.json`, `README.md` e matriz de paginas publicas foram atualizados para a nova URL.

### Regra de produto

- Todo update significativo deve entrar em `atualizacoes.html` com versao publica, data, status, resumo do que mudou e motivo de importancia.
- Enquanto o produto esta em acesso assistido, usar versoes `v0.x` para marcos publicos e distinguir publicado, em teste e pesquisado.

### Validacao local

- `node --check js/main.js` passou.
- `git diff --check` passou; apenas avisos LF/CRLF do Windows.
- Auditoria local de `href`, `src`, `srcset`, JSON-LD e `sitemap.xml` passou em 19 arquivos HTML.
- Browser local em 1366 x 900 e 390 x 844 validou `atualizacoes.html` sem overflow horizontal.
- Menu mobile inclui `Atualizacoes` e o botao `Ver historico` rola para as notas de versao.

## 2026-05-27 - Guardrail para nao perder updates futuros

### Estado

- Criado `documents/15_ATUALIZACOES_PUBLICAS.md` com criterios, status permitidos, regra de versao e checklist de atualizacao.
- `CODEX.md`, `README.md`, `documents/00_START_HERE.md`, `documents/08_TRABALHO_SIMULTANEO.md`, `documents/13_GIT_LEGADOS_RELEASE.md` e `documents/20_TRABALHO_ATIVO.md` passaram a exigir conferencia de `atualizacoes.html` antes de encerramento, commit ou deploy quando houver update significativo.

### Regra

- Daqui para frente, update significativo sem entrada em `atualizacoes.html` precisa ter justificativa registrada.

## 2026-05-27 - Navegacao compacta desktop e bottom nav mobile

### Estado

- Desktop: links institucionais foram agrupados em `Sobre`, reduzindo a carga visual do topo.
- Mobile: criada barra inferior fixa com `Inicio`, `App`, `Editorial`, `Updates` e `Mais`.
- `Mais` abre o menu completo, mantendo Manifesto, Seguranca, Privacidade e Termos acessiveis.
- `atualizacoes.html` recebeu a entrada `v0.3.1` com status `Publicado`.
- Cache-busting global de `css/style.css` e `js/main.js` atualizado para `20260527-nav-v031`.
- Paginas raiz passaram a usar assets e links root-relative para preservar CSS/JS em rotas limpas com `trailingSlash`, como `/atualizacoes/`.

### Validacao local

- `node --check js/main.js` passou.
- `git diff --check` passou; apenas avisos LF/CRLF do Windows.
- Auditoria local de `href`, `src`, `srcset`, JSON-LD, `ItemList` de updates e `sitemap.xml` passou em 20 arquivos HTML.
- Browser mobile em 396px: barra inferior com 5 itens, hamburger oculto, sem overflow horizontal e sem erros no console.
- Interacao mobile: `Mais` abriu o menu completo, exibiu o botao de fechar e voltou `aria-expanded` para `false` ao fechar.
- Chrome local em 1366 x 900: topo exibiu `O app`, `Como funciona`, `Editorial`, `Atualizacoes` e `Sobre`; dropdown `Sobre` abriu com Manifesto, Seguranca, Privacidade e Termos.
- Evidencias: `documents/qa/gmove-nav-desktop-2026-05-27.png`, `documents/qa/gmove-nav-mobile-updates-2026-05-27.png`.

### Publicacao

- Deploy Firebase Hosting concluido no projeto `gmove-landing`.
- Firebase encontrou 63 arquivos e enviou 22 novos/alterados.
- Durante a validacao publicada, `/atualizacoes/` revelou quebra de assets relativos por causa de `trailingSlash`.
- Corrigidos assets e links das paginas raiz para caminhos root-relative antes da republicacao.
- Republicacao Firebase Hosting concluida com 7 arquivos alterados.
- Validacao em producao passou para `/`, `/atualizacoes.html`, `/atualizacoes/`, `/manifesto/`, `css/style.css?v=20260527-nav-v031` e `js/main.js?v=20260527-nav-v031`.
- Chrome headless em producao confirmou desktop com dropdown `Sobre` e mobile em `/atualizacoes/` com barra inferior ativa, `v0.3.1` publicado e sem overflow horizontal.

## 2026-05-28 - Pesquisa aplicada e SEO visual do Editorial

### Estado

- Pesquisa externa registrada em `documents/editorial/EDITORIAL_RESEARCH_2026-05-28.md`.
- Oito artigos do Editorial receberam capa visivel com `<picture>`, AVIF, WebP, JPG fallback, `alt`, dimensoes e legenda.
- Oito artigos receberam bloco de "Leitura rapida" para escaneabilidade.
- JSON-LD dos artigos foi enriquecido com `articleSection`, `keywords`, `isAccessibleForFree`, `dateModified=2026-05-28` e `BreadcrumbList`.
- `conteudo/index.html`, hubs e artigos passaram a usar cache-busting `20260528-editorial-research` para CSS/JS editoriais.
- `sitemap.xml` recebeu `lastmod=2026-05-28` nas 13 URLs editoriais.
- `atualizacoes.html` recebeu a entrada publica `v0.3.3` com status `Publicado`.

### Validacao local

- `node --check js/main.js` passou.
- `git diff --check` passou; apenas avisos LF/CRLF do Windows.
- Auditoria local de `href`, `src`, `srcset`, JSON-LD, imagens AVIF/WebP e `sitemap.xml` passou em 20 arquivos HTML.
- Browser local em 1280 x 900: `/conteudo/` sem overflow horizontal, H1 revelado e cards editoriais com imagens.
- Browser local em 390 x 844: artigo com AVIF ativo, H1 revelado, capa carregada, bloco "Leitura rapida" visivel e console sem erros.
- Evidencias: `documents/qa/gmove-editorial-research-desktop-2026-05-28.png`, `documents/qa/gmove-editorial-article-mobile-2026-05-28.png`.

### Pendencia

- Reenviar `/conteudo/`, hubs e artigos no Search Console apos deploy.

### Publicacao

- Deploy Firebase Hosting concluido no projeto `gmove-landing`.
- Firebase encontrou 79 arquivos e enviou 39 novos/alterados.
- Producao validada em `https://gmove.app/`, `/conteudo/`, artigo editorial, `/atualizacoes/`, CSS/JS versionados, `sitemap.xml` e asset AVIF.
- Browser em producao confirmou logo mobile com aproximadamente 24px, `v0.3.3` publicado, `/conteudo/` desktop com WebP e console sem erros.

## 2026-05-28 - Humanizacao das imagens editoriais

### Estado

- As oito imagens editoriais dos artigos foram substituidas por cenas documentais mais humanas e variadas, com pessoas, ambientes e objetos distintos em rotina real de treino, preparacao, registro, decisao de carga e repeticao.
- A segunda rodada ampliou a variedade visual com escada de predio, lavanderia de casa, mesa de cozinha, gaveta de escritorio, aparelho de cabo, leg press, mural de treino e barras de parque.
- Foram removidos da linguagem visual os sinais de mockup/futurismo e a repeticao excessiva de personagens, roupas e objetos que deixavam o Editorial com cara robotica ou de uma unica sessao fotografica.
- Os mesmos caminhos publicos foram preservados: `preset-imagem-conteudo-1` a `preset-imagem-conteudo-8` dentro dos respectivos slugs.
- Cada asset foi normalizado em 2048x1152 nos formatos JPG, WebP e AVIF.
- Os atributos `alt`, `width` e `height` das capas visiveis nos oito artigos foram atualizados para refletir as novas cenas.
- `css/editorial.css` recebeu um guardrail mobile para titulos longos de artigo e os HTMLs editoriais passaram a usar cache-busting `20260528-editorial-humanized`.
- `atualizacoes.html` recebeu a entrada publica `v0.3.4` com status `Em validacao visual` nesta frente; o update foi publicado nas rodadas editoriais seguintes.

### Validacao local

- `node --check js/main.js` passou.
- `git diff --check` passou sem erros reais; apenas avisos LF/CRLF do Windows.
- Auditoria local confirmou 8 artigos x JPG/WebP/AVIF em 2048x1152.
- Browser local em `/conteudo/index.html` validou a listagem sem overflow horizontal.
- Browser local no artigo de repeticao viavel confirmou AVIF ativo, dimensoes 2048x1152, alt atualizado e console sem erros.
- Browser mobile em 390 x 844 capturou o artigo com titulo sem corte, capa nova visivel e sem overflow horizontal.
- Evidencias locais: `documents/qa/gmove-editorial-humanized-list-desktop-2026-05-28.png`, `documents/qa/gmove-editorial-humanized-article-desktop-2026-05-28.png`, `documents/qa/gmove-editorial-humanized-article-mobile-2026-05-28.png`.

### Pendencia

- Publicar em Firebase Hosting quando a frente for aprovada.

## 2026-05-28 - Mapa de registro operacional

### Estado

- Criado `documents/17_REGISTRO_OPERACIONAL.md` para definir onde registrar log interno, QA, deploy, handoff, updates publicos, DNS, SEO, assets, Git e sprints editoriais.
- `documents/00_START_HERE.md`, `README.md`, `CODEX.md`, `documents/08_TRABALHO_SIMULTANEO.md`, `documents/15_ATUALIZACOES_PUBLICAS.md` e `documents/CODEX_HANDOFF.md` passaram a apontar para o novo mapa.
- `documents/08_TRABALHO_SIMULTANEO.md` foi atualizado para refletir que `www.gmove.app` ja aponta para o Firebase e que ha frente editorial/infra local em andamento.

### Decisao de registro publico

- Nao foi criada entrada em `atualizacoes.html` porque a mudanca e governanca interna de documentacao, sem alteracao publicada de produto, site, Editorial ou infraestrutura.

## 2026-05-28 - Artigo 10 e cache AVIF

### Estado

- Artigo `O que anotar no treino para saber se voce esta evoluindo` integrado ao Editorial.
- `conteudo/index.html` passou a listar o Ensaio 10 e a exibir o decimo indicador no destaque rotativo.
- `js/main.js` recebeu o item do Ensaio 10 no carrossel editorial.
- `sitemap.xml` passou a incluir a URL do artigo 10, elevando o sitemap para 21 URLs.
- `atualizacoes.html` recebeu a entrada publica `v0.3.6` com status `Publicado`.
- `firebase.json` passou a incluir `avif` no header de cache longo de imagens.

### Validacao e publicacao

- `node --check js/main.js` passou.
- Auditoria local confirmou 22 HTMLs, 10 artigos, 21 URLs no sitemap, JSON-LD parseavel, H1 unico, links/assets resolvidos e trio JPG/WebP/AVIF em todos os artigos.
- Browser local validou `/conteudo/` e artigo 10 sem overflow horizontal.
- Deploy Firebase Hosting concluido no projeto `gmove-landing`.
- Producao validada em `/conteudo/`, artigo 10, `/sitemap.xml`, `/atualizacoes/`, asset AVIF do artigo 10 e arquivo de verificacao do Search Console.
- Browser em producao confirmou artigo 10 com JSON-LD `Article`/`BreadcrumbList`, capa carregada e console sem erros.
- Proximo passo: reenviar sitemap no Search Console e solicitar URL Inspection para os artigos 09 e 10.

## 2026-05-28 - Referencias visuais e leitura mobile dos artigos

### Estado

- Os 10 ensaios publicados receberam bloco `article-reference` com screenshot real do app, texto de contexto, legenda, `alt`, dimensoes e `loading="lazy"`.
- `css/editorial.css` recebeu estilos compartilhados para a referencia visual, ajustes de leitura mobile, links em paragrafos, `text-wrap` e alvos de toque mais confortaveis.
- A referencia visual foi adicionada ao CSS editorial; no estado atual, os HTMLs editoriais usam `editorial.css?v=20260528-editorial-border-fix`.
- `atualizacoes.html` recebeu a entrada publica `v0.3.7` com status `Publicado`.
- Pesquisa complementar e criterio visual registrados em `documents/editorial/EDITORIAL_RESEARCH_2026-05-28.md` e `documents/editorial/VISUAL_SYSTEM_EDITORIAL.md`.

### Validacao e publicacao

- `node --check js/main.js` passou.
- JSON-LD de `atualizacoes.html` parseou corretamente e incluiu `v0.3.7`.
- Local: `/atualizacoes.html`, `/conteudo/`, artigo 01, artigo 10 e CSS editorial responderam 200.
- Browser local mobile confirmou 10 artigos com bloco `article-reference` e sem overflow horizontal.
- Deploy Firebase Hosting concluido no projeto `gmove-landing`; a CLI encontrou 88 arquivos e enviou 17 novos/alterados.
- Producao validada em `/atualizacoes/`, `/conteudo/`, artigos 01 e 10, CSS `editorial-reference`, asset AVIF de screenshot e `/sitemap.xml`.
- Browser em producao confirmou `v0.3.7` publicado, bloco visual mobile sem overflow e AVIF carregado.

## 2026-05-29 - URLs limpas e sitemap alinhado

### Estado

- Canonicals, `og:url`, JSON-LD, navegacao, rodapes, chamadas editoriais e `sitemap.xml` foram alinhados para os caminhos finais com barra.
- Paginas raiz indexaveis usam `/manifesto/`, `/atualizacoes/`, `/privacidade/`, `/seguranca/` e `/termos/` nas referencias publicas.
- Links do Editorial e destaque rotativo de `js/main.js` passaram a apontar para caminhos publicos sem `index.html`.
- `tools/verify-docs.ps1` foi ajustado para resolver caminhos limpos de paginas raiz para seus arquivos `.html`.
- `atualizacoes.html` recebeu a entrada publica `v0.3.9` com status `Publicado`.

### Validacao e publicacao

- `node --check js/main.js` passou.
- `tools/verify-docs.ps1` passou com 36 Markdown files e 21 URLs no sitemap.
- `tools/verify-public-copy.ps1` passou com 22 HTML files.
- `git diff --check` passou sem erro real; apenas avisos LF/CRLF do Windows.
- JSON-LD local parseou corretamente: 29 blocos em 21 HTML files.
- Browser local desktop validou `/atualizacoes/` com `v0.3.9`, canonical limpo, sem links `.html`, sem overflow horizontal e sem erros de console.
- Browser local mobile validou `/conteudo/` com links editoriais limpos, sem overflow horizontal e sem erros de console.
- Deploy Firebase Hosting concluido no projeto `gmove-landing`; a CLI encontrou 88 arquivos e enviou 23 novos/alterados.
- Producao validada com `HTTP 200` em rotas limpas, `301` das rotas `.html` para os caminhos finais, `/atualizacoes/` exibindo `v0.3.9` e `/sitemap.xml` com 21 URLs sem `.html`.
- Browser em producao confirmou `/atualizacoes/` desktop e `/conteudo/` mobile sem links `.html`, sem overflow horizontal e sem erros de console.
- Search Console recebeu novamente `https://gmove.app/sitemap.xml` apos `v0.3.9`; a tabela confirmou envio e ultima leitura em 2026-05-29, status `Processado`, 21 paginas encontradas e notificacao `Sitemap enviado`.
- Search Console URL Inspection pos-`v0.3.9`: `/manifesto/`, `/seguranca/` e `/atualizacoes/` estavam como `O URL nao esta no Google`, motivo `Detectada, mas nao indexada no momento`; indexacao solicitada para as tres.
- URL Inspection confirmou `https://gmove.app/conteudo/o-que-anotar-no-treino-para-saber-se-voce-esta-evoluindo/` como URL no Google, com HTTPS e breadcrumb validos.
- Evidencia textual registrada em `documents/qa/search-console-url-inspection-clean-urls-2026-05-29.json`.
- Proximo passo: acompanhar cobertura das 21 URLs limpas e revalidar URLs ainda pendentes em alguns dias.
