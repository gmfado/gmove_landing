# Pesquisa Editorial GMOVE - 2026-05-28

## Objetivo

Melhorar os posts do Editorial GMOVE em SEO, copy, leitura, imagens e governanca, sem transformar a area em blog generico de fitness.

## Canais pesquisados

1. Google Search Central - conteudo people-first, SEO Starter Guide, Image SEO e Article structured data.
   - https://developers.google.com/search/docs/fundamentals/creating-helpful-content
   - https://developers.google.com/search/docs/fundamentals/seo-starter-guide
   - https://developers.google.com/search/docs/appearance/google-images
   - https://developers.google.com/search/docs/appearance/structured-data/article

2. Base tecnica de treino e saude - diretrizes de atividade fisica e treino resistido.
   - https://www.cdc.gov/physical-activity-basics/guidelines/adults.html
   - https://acsm.org/education-resources/pronouncements-scientific-communications/position-stands/
   - https://www.acsm.org/wp-content/uploads/2026/03/Resistance-Training-Position-Stand-infographic.pdf

3. SERP brasileira de musculacao - temas de busca sobre troca de treino, progressao, cansaco e registro.
   - https://www.uol.com.br/vivabem/noticias/redacao/2025/01/09/variar-os-exercicios-na-musculacao-ou-manter-um-treino-fixo.htm
   - https://www.terra.com.br/vida-e-estilo/quer-mais-resultado-veja-se-trocar-o-treino-e-realmente-a-melhor-escolha%2Cca5bd2f3822e057b1a96bd5fdf7c18c9dz4ecvfd.html
   - https://www.personalgo.com.br/post/progressao-de-carga-musculacao/

4. Benchmarks de apps de treino - como concorrentes comunicam registro, progressao, planos e friccao.
   - https://play.google.com/store/apps/details?hl=en-US&id=com.hevy
   - https://caliberstrong.com/workout-app/
   - https://www.intensityapp.com/
   - https://humnrx.app/

5. Comunidades e dores reais - discussoes sobre logging, troca de treino e aderencia.
   - https://www.reddit.com/r/workout/comments/1prkjmf/do_you_log_your_workouts_did_it_actually_make_a/
   - https://www.reddit.com/r/Maromba/comments/1q6ilds/tempo_com_o_mesmo_treino/

6. Referencia visual aplicada - auditoria dos assets editoriais existentes e otimizacao local para formatos modernos.
   - Base usada: imagens proprietarias ja publicadas em `conteudo/<slug>/preset-imagem-conteudo-*.jpg`.

## Sintese

- O Google reforca conteudo feito para pessoas, com pagina tecnicamente legivel para busca, links claros, canonicals, dados estruturados e imagem contextualizada.
- Image SEO depende de imagem real na pagina, nome/alt/contexto coerentes e formatos eficientes. Antes, os artigos tinham imagem social e backgrounds, mas nao uma imagem editorial visivel com `alt`.
- Article structured data ajuda o mecanismo a entender titulo, imagem e datas; breadcrumbs melhoram contexto de URL e relacao com o Editorial.
- No tema treino, os sinais recorrentes sao progressao gradual, repeticao suficiente para comparar, registro como memoria operacional e adaptacao quando energia/recuperacao mudam.
- Benchmarks de apps reforcam que o mercado comunica "previous lifts", progressive overload, programas estruturados e log rapido; a diferenca do GMOVE deve ser criterio e decisao, nao lista de features.
- Comunidades apontam friccao de registro, dificuldade de enxergar resultado a partir de notas soltas e ansiedade de trocar treino cedo demais.

## Decisoes aplicadas

- Inserir em cada artigo um bloco de "Leitura rapida" com tese e 3 pontos de decisao.
- Inserir imagem editorial real em cada artigo com `<picture>`, AVIF, WebP, JPG fallback, `alt`, dimensoes e legenda.
- Gerar variantes AVIF/WebP dos 8 assets editoriais publicados.
- Manter JPG como `og:image`/`twitter:image` para compatibilidade social.
- Enriquecer JSON-LD dos artigos com `articleSection`, `keywords`, `isAccessibleForFree`, `dateModified` atualizado e `BreadcrumbList`.
- Trocar backgrounds editoriais da listagem e destaque rotativo para WebP.
- Atualizar `sitemap.xml` com `lastmod` nas URLs editoriais tocadas.
- Atualizar cache-busting de `editorial.css` e `main.js`.

## Cuidado editorial

Nao foram adicionadas promessas de resultado fisico, prescricoes medicas, abertura publica ampla ou funcionalidades ainda nao validadas. A melhoria reforca a tese do GMOVE: treino precisa ser legivel para virar processo.

## Rodada complementar - leitura mobile e referencias visuais

Data: 2026-05-28

Pesquisa complementar usada:

- Google Search Central - conteudo people-first, Image SEO, mobile-first indexing e page experience.
  - https://developers.google.com/search/docs/fundamentals/creating-helpful-content
  - https://developers.google.com/search/docs/appearance/google-images
  - https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing
  - https://developers.google.com/search/docs/appearance/page-experience
- web.dev - imagens responsivas, `width`/`height`, lazy loading e preservacao de aspect ratio para evitar deslocamento visual.
  - https://web.dev/learn/design/responsive-images/
  - https://web.dev/learn/html/images
- NN/g - imagens em mobile devem ter valor informacional, nao apenas decorativo.
  - https://www.nngroup.com/videos/mobile-images/
- WCAG 2.2 - alvo minimo de toque e espacamento suficiente em interfaces mobile.
  - https://www.w3.org/TR/WCAG22/#target-size-minimum
- Apple Human Interface Guidelines - legibilidade, hierarquia e alvos de toque confortaveis.
  - https://developer.apple.com/design/tips/

Decisoes aplicadas nesta rodada:

- Criar o componente compartilhado `article-reference` em `css/editorial.css`.
- Inserir um bloco de referencia visual em cada um dos 10 ensaios publicados.
- Usar screenshots reais do app ja existentes em `assets/screenshots/`, com AVIF/WebP/PNG fallback, `alt`, dimensoes e `loading="lazy"`.
- Manter as referencias proximas da conclusao do artigo para acrescentar concretude sem interromper a abertura do ensaio.
- Ajustar mobile para coluna unica, imagem menor, altura maxima e sem overflow horizontal.
- Reforcar leitura mobile com `text-wrap`, links de paragrafo mais visiveis e alvos de toque minimos em voltar/rodape.

Validacao local:

- Servidor estatico local em `http://127.0.0.1:4173/`.
- 11 rotas editoriais verificadas com HTTP 200: listagem e 10 artigos.
- Browser mobile 390x844: 10 artigos com 1 bloco `article-reference`, sem overflow horizontal.
- Browser desktop 1280x900: bloco `article-reference` validado com grid de texto + screenshot e AVIF ativo.
- Evidencias visuais:
  - `documents/qa/gmove-editorial-reference-mobile-2026-05-28.png`
  - `documents/qa/gmove-editorial-reference-desktop-2026-05-28.png`

Nao foi feito deploy nesta rodada porque a worktree ja continha muitas alteracoes locais e assets editoriais de frentes anteriores. Publicar agora poderia misturar escopos; a etapa segura e revisar/stagear explicitamente antes de Firebase Hosting.
