# 17 - Registro Operacional

## Objetivo

Evitar perda, duplicidade ou mistura de registros no GMOVE Website.

Este documento nao substitui os logs existentes. Ele e o mapa de decisao para saber onde registrar cada tipo de trabalho.

## Regra Principal

Nao existe um unico arquivo para registrar tudo.

Cada conclusao deve ir para o registro certo:

- historico interno e decisoes: `documents/11_IMPLEMENTATION_LOG.md`;
- QA, evidencias, deploy e validacao: `documents/05_QA_RELEASE.md`;
- frente ativa, pendencia e handoff: `documents/20_TRABALHO_ATIVO.md`;
- update publico versionado: `atualizacoes.html`;
- matriz de URL publica, SEO e proxima acao: `documents/10_MATRIZ_PAGINAS_PUBLICAS.md`.

Se houver duvida, registrar primeiro em `documents/20_TRABALHO_ATIVO.md` como pendencia curta e depois consolidar no documento correto.

## Onde Registrar Cada Coisa

| Situacao | Registrar em | Quando |
| --- | --- | --- |
| Mudanca relevante de produto, site, copy, visual, SEO ou infraestrutura | `documents/11_IMPLEMENTATION_LOG.md` | Ao concluir a implementacao ou decisao |
| QA local, QA em producao, prints, evidencias, teste mobile, teste desktop ou deploy | `documents/05_QA_RELEASE.md` | Sempre que houver validacao |
| Frente em andamento, escopo, conflito, pendencia, handoff ou proximo passo | `documents/20_TRABALHO_ATIVO.md` | Ao abrir, mudar ou encerrar uma frente |
| Mudanca publica significativa para usuario, produto, site, Editorial, infra ou status | `atualizacoes.html` | Antes de deploy, commit final ou entrega |
| Duvida se algo deve entrar no changelog publico | `documents/15_ATUALIZACOES_PUBLICAS.md` | Antes de decidir nao registrar publicamente |
| Nova URL, mudanca de canonical, title, description, JSON-LD ou status SEO | `documents/10_MATRIZ_PAGINAS_PUBLICAS.md` | Quando URL ou SEO mudarem |
| Search Console, sitemap, robots, Ads/AdSense ou indexacao | `documents/09_SEARCH_CONSOLE_INDEXACAO.md` e `documents/05_QA_RELEASE.md` | Ao executar ou validar |
| Dominios, DNS, Firebase Hosting custom domain, certificado ou redirect | `documents/16_DOMINIOS_DNS.md` e `documents/05_QA_RELEASE.md` | Ao criar, alterar ou validar |
| Imagens, prints, formatos AVIF/WebP, peso e uso de assets | `documents/12_INVENTARIO_ASSETS.md` | Ao adicionar, substituir ou otimizar assets |
| Commit, release, branch, legado ou limpeza de arquivo antigo | `documents/13_GIT_LEGADOS_RELEASE.md` | Ao preparar release ou decidir destino de legado |
| Conteudo editorial, sprint editorial, pesquisa de artigo ou alteracao em `/conteudo/` | `documents/editorial/EDITORIAL_ESTADO_ATUAL.md` e `documents/editorial/EDITORIAL_SPRINTS.md` | Ao executar frente editorial |
| Estado curto para a proxima conversa | `documents/CODEX_HANDOFF.md` | Quando o handoff geral ficar desatualizado |

## Minimo De Uma Entrada Boa

Toda entrada relevante deve responder:

- o que mudou;
- por que mudou;
- arquivos ou URLs tocados;
- como foi validado;
- status atual;
- pendencias reais;
- se entrou ou nao em `atualizacoes.html`.

## Checklist De Encerramento

Antes de encerrar uma frente:

1. Rodar `git status --short --branch`.
2. Confirmar se a mudanca e publica ou apenas interna.
3. Conferir `documents/15_ATUALIZACOES_PUBLICAS.md` se houver duvida sobre update publico.
4. Atualizar `documents/11_IMPLEMENTATION_LOG.md` quando houver mudanca relevante.
5. Atualizar `documents/05_QA_RELEASE.md` quando houver QA, evidencia ou deploy.
6. Atualizar `documents/20_TRABALHO_ATIVO.md` quando houver pendencia ou frente aberta.
7. Atualizar documento especifico da area tocada.
8. Registrar explicitamente por que `atualizacoes.html` nao foi atualizado, se houver risco de duvida.
9. Stage por arquivo ou pasta explicita, nunca por `git add .` em worktree com frentes paralelas.
10. Rodar `powershell -ExecutionPolicy Bypass -File .\tools\finish-worktree-check.ps1` antes da resposta final.
11. Se houver sujeira intencional, rodar com `-AllowDirty` e registrar a pendencia no handoff.

## Anti-Duplicidade

Evitar copiar o mesmo texto longo em varios documentos.

Use esta separacao:

- `11_IMPLEMENTATION_LOG.md`: narrativa cronologica interna.
- `05_QA_RELEASE.md`: fatos de validacao.
- `20_TRABALHO_ATIVO.md`: estado vivo e pendencias.
- `atualizacoes.html`: versao publica, resumida e clara.
- documento especifico da area: detalhe operacional.

Quando precisar repetir algo, repetir apenas o resumo e apontar para o documento principal.

## Regra Para Conversas Paralelas

Se outra conversa ja modificou arquivos:

- nao sobrescrever;
- ler o diff antes de editar o mesmo arquivo;
- manter a alteracao o menor possivel;
- registrar o motivo no handoff se tocar arquivo compartilhado;
- nao fazer commit de trabalho de outra frente sem decisao explicita.
