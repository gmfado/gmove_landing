# 13 - Git, Legados e Release

## Objetivo

Definir como empacotar mudancas, lidar com arquivos legados e evitar que conversas paralelas misturem commits.

## Estado Atual

- Branch atual: `main`.
- O site ja foi publicado em producao em 2026-05-27.
- O worktree ainda contem um pacote grande nao commitado.
- Existem arquivos legados no repositorio que nao fazem parte do deploy publico.

## Modelo De Frente

Cada conversa deve escolher uma frente antes de editar:

- `docs`
- `landing`
- `editorial`
- `assets`
- `legal`
- `infra`

Cada frente deve evitar arquivos fora do proprio escopo. Se precisar tocar arquivo compartilhado, registrar o motivo em `documents/20_TRABALHO_ATIVO.md`.

## Modelo De Branch

Quando houver apenas uma conversa ativa e o usuario quiser publicar rapido:

- trabalhar em `main`;
- validar;
- deployar;
- commitar o pacote publicado.

Quando houver conversas simultaneas:

- criar branch por frente com prefixo `codex/`;
- usar nomes curtos e objetivos.

Exemplos:

- `codex/docs-operacao-site`
- `codex/editorial-search-console`
- `codex/landing-performance-assets`
- `codex/infra-www-ads`

## Modelo De Commit

Preferir commits por pacote coerente:

- `docs: organize site operations docs`
- `landing: refine how it works section`
- `editorial: add search console checklist`
- `assets: optimize app screenshots`
- `infra: update firebase hosting ignores`

Evitar commits que misturam:

- copy de landing + artigo novo + favicon;
- deploy config + refatoracao visual;
- remocao de legado + feature nova.

## Legados

Arquivos legados conhecidos:

- `Microsoft Copilot_ o seu complemento de IA.html`
- `Microsoft Copilot_ o seu complemento de IA_files/**`
- `gmove_logo.png`
- `gmove_logo_web.png`
- `print1.png` a `print5.png`
- `video.mp4`, caso reapareca no workspace

Decisao atual:

- manter os arquivos conhecidos fora do deploy pelo `firebase.json`;
- nao apagar `Microsoft Copilot_*` sem decisao explicita do usuario;
- nao voltar a usar `print1.png` a `print5.png` na landing;
- `video.mp4` foi removido em 2026-05-27 por nao ser necessario;
- mover ou remover legados apenas em commit separado, para facilitar rollback.

## Checklist Antes De Commit

- `git status --short --branch`;
- revisar arquivos tocados;
- confirmar que docs de handoff foram atualizadas;
- `git diff --check`;
- `node --check js/main.js`, se JS mudou;
- varredura de links/JSON-LD, se HTML ou sitemap mudou;
- QA mobile, se visual mudou;
- confirmar se houve deploy ou nao.

## Checklist Antes De Deploy

- validar `.firebaserc` com projeto `gmove-landing`;
- rodar dry-run do Firebase quando possivel;
- garantir que `firebase.json` ignora docs e legados;
- validar que novas paginas estao no sitemap;
- validar localmente rotas, assets e console;
- publicar;
- testar `https://gmove.app/` e rotas principais;
- registrar em `documents/05_QA_RELEASE.md`.

## Checklist Depois De Deploy

- registrar URL publicada;
- registrar rotas testadas;
- atualizar `documents/11_IMPLEMENTATION_LOG.md`;
- atualizar Search Console quando houver mudanca estrutural;
- commitar o pacote publicado;
- se houver branch, abrir PR ou mesclar conforme orientacao do usuario.
