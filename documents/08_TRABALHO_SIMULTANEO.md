# 08 - Trabalho Simultaneo

## Objetivo

Permitir que mais de uma conversa trabalhe no GMOVE Website sem misturar contexto, sobrescrever decisoes ou publicar mudancas incompletas.

Use este documento quando houver dois ou mais chats atuando no mesmo repositorio, ou quando uma tarefa puder conflitar com outra frente ativa.

## Regra Principal

Cada conversa deve ter um escopo claro antes de editar arquivos.

Escopos recomendados:

- `landing`: home, copy principal, secoes, efeitos e CTA;
- `editorial`: `/conteudo/`, artigos, hubs, SEO editorial e imagens editoriais;
- `assets`: marca, favicons, prints, imagens e otimizacao;
- `legal`: termos, privacidade, seguranca e paginas institucionais;
- `infra`: Firebase Hosting, sitemap, robots, cache, deploy e validacao;
- `docs`: documentacao, handoff, QA, logs e governanca.

Evitar duas conversas editando o mesmo arquivo ao mesmo tempo. Se for inevitavel, registrar no handoff qual trecho foi tocado e validar o diff antes de publicar.

## Ordem de Leitura Para Qualquer Chat Novo

1. `README.md`
2. `CODEX.md`
3. `documents/00_START_HERE.md`
4. `documents/CODEX_HANDOFF.md`
5. `documents/20_TRABALHO_ATIVO.md`
6. Este documento
7. `documents/10_MATRIZ_PAGINAS_PUBLICAS.md`, se a tarefa mexer em URL publica
8. Documento especifico da area tocada

Para tarefas editoriais, ler tambem:

1. `documents/editorial/EDITORIAL_ESTADO_ATUAL.md`
2. `documents/editorial/EDITORIAL_SPRINTS.md`
3. `documents/editorial/PUBLISHING_FLOW.md`

## Como Iniciar Uma Conversa Paralela

Antes de editar:

- rodar `git status --short --branch`;
- identificar arquivos ja modificados;
- declarar mentalmente o escopo da tarefa;
- abrir os documentos relevantes da area;
- evitar refatorar arquivos fora do escopo;
- verificar se a tarefa depende do app atual em `C:\Users\gmfad\Documents\Projetos\gmove-app-renew`.

Se a tarefa tocar produto, copy, promessa publica ou prints do app, consultar a documentacao do app antes de alterar o site.

## Como Registrar Trabalho

Ao concluir uma frente:

- atualizar `documents/11_IMPLEMENTATION_LOG.md` quando houver mudanca relevante de produto, site, visual, SEO ou publicacao;
- atualizar `documents/05_QA_RELEASE.md` quando houver validacao, screenshot, deploy ou QA;
- atualizar `documents/20_TRABALHO_ATIVO.md` quando abrir ou fechar uma frente paralela;
- atualizar documentos editoriais quando a mudanca envolver `/conteudo/`.

O registro deve informar:

- escopo;
- arquivos tocados;
- validacao feita;
- evidencias, quando houver;
- pendencias reais.

## Protocolo de Finalizacao

Antes de entregar:

- `node --check js/main.js`, quando `js/main.js` mudar;
- varredura de links internos quando HTML, sitemap ou assets mudarem;
- JSON-LD parseavel quando metadados estruturados mudarem;
- teste mobile quando houver alteracao visual;
- `git diff --check`;
- registrar evidencias em `documents/qa/` quando houver QA visual.

Antes de publicar:

- confirmar projeto Firebase em `.firebaserc`;
- rodar dry-run quando possivel;
- publicar somente se a validacao local estiver limpa;
- validar rotas publicas depois do deploy.

## Estado Atual de Coordenacao

Ultima revisao: 2026-05-27.

Estado publicado:

- producao ativa em `https://gmove.app/`;
- Firebase Hosting padrao em `https://gmove-landing.web.app/`;
- `https://www.gmove.app/` nao respondeu no ultimo teste;
- deploy de 2026-05-27 registrado em `documents/05_QA_RELEASE.md`;
- mudancas locais ainda nao foram commitadas.

Frentes naturais para conversas paralelas:

- `docs`: manter matriz, handoff, QA e release em dia;
- `editorial`: Search Console, proximos ensaios e revisao de artigos antigos;
- `landing`: otimizacao fina de performance, imagens WebP/AVIF e proximos experimentos de conversao;
- `infra`: dominio `www`, analytics, Search Console e futura preparacao de Ads/AdSense.

## Documentos Operacionais Criados

- `documents/09_SEARCH_CONSOLE_INDEXACAO.md`
- `documents/10_MATRIZ_PAGINAS_PUBLICAS.md`
- `documents/12_INVENTARIO_ASSETS.md`
- `documents/13_GIT_LEGADOS_RELEASE.md`

## Pendencias Operacionais

- Executar Search Console e URL Inspection.
- Resolver ou documentar `www.gmove.app`.
- Otimizar prints para WebP/AVIF.
- Decidir se legados serao removidos do repositorio ou apenas mantidos fora do deploy.
