# Codex Handoff

## Estado Atual Curto

- Site clonado de `https://github.com/gmfado/gmove_landing.git`.
- Marca pública deve ser `GMOVE`, sem hífen.
- App atual fica em `C:\Users\gmfad\Documents\Projetos\gmove-app-renew`.
- App atual usa base escura premium, ação `#B8F24B`, texto claro e wordmark/símbolo em `assets/brand/final/`.
- Landing foi atualizada para comunicar treinador inteligente de musculação, não a versão antiga do produto.
- Prints novos foram capturados em device físico Android e salvos em `assets/screenshots/`.
- Favicons e ícones foram gerados a partir do símbolo final do app.
- Documentação raiz antiga foi movida para `documents/legacy/`.
- Site publicado em 2026-05-27 no Firebase Hosting.
- Pacote Editorial publicado em 2026-05-28 ate `v0.3.7`, incluindo pesquisa aplicada, artigos 09 e 10, imagens humanizadas e referencias visuais nos artigos.
- Pacote `v0.3.9` publicado em 2026-05-29 com caminhos publicos limpos, sitemap alinhado e `atualizacoes.html` atualizado.
- `atualizacoes.html` mostra `v0.3.9` como update publicado; `v0.3.8` e `v0.3.4` tambem estao marcados como publicados.
- Produção validada em `https://gmove.app/` e `https://gmove-landing.web.app/`.
- `www.gmove.app` redireciona para `https://gmove.app/`.
- `gmove.com.br` responde `HTTP 200`; `www.gmove.com.br` redireciona para `https://gmove.com.br/`.
- Home tem seção interativa `Como funciona`, seção de confiança e CTA de acesso antecipado.
- Editorial tem dez artigos publicados e quatro hubs: `treino-com-criterio`, `progressao`, `consistencia` e `recuperacao`.
- Para conversas paralelas, usar `documents/08_TRABALHO_SIMULTANEO.md`.
- Para decidir onde registrar cada tipo de trabalho, usar `documents/17_REGISTRO_OPERACIONAL.md`.
- Batch de Search Console pronto em `documents/qa/search-console-batch-2026-05-28.md`.
- Search Console URL-prefix `https://gmove.app/` verificado via `google6e48a74231fe8281.html`; nao remover esse arquivo do deploy.
- Sitemap `/sitemap.xml` reenviado no Search Console apos `v0.3.9` em 2026-05-29; a tabela confirmou ultima leitura em 2026-05-29, status `Processado` e 21 paginas encontradas.
- Indexacao solicitada no Search Console para `/conteudo/` e os 4 hubs editoriais em 2026-05-28.
- Indexacao do artigo 09 solicitada em 2026-05-29; artigo 10 ja aparece como URL no Google, com HTTPS e breadcrumb validos.
- Indexacao solicitada no Search Console para `/manifesto/`, `/seguranca/` e `/atualizacoes/` em 2026-05-29; as tres estavam detectadas pelo sitemap, mas ainda nao indexadas.
- URL Inspection confirmou `https://gmove.app/conteudo/o-que-anotar-no-treino-para-saber-se-voce-esta-evoluindo/` como URL no Google, com HTTPS e breadcrumb validos.
- Sitemap atual em producao tem 21 URLs, sem entradas `.html`, e usa caminhos finais com barra para paginas raiz.

## Arquivos-Chave

- `index.html`
- `css/style.css`
- `css/premium.css`
- `css/editorial.css`
- `js/main.js`
- `assets/brand/`
- `assets/screenshots/`
- `documents/01_SITE_E_PRODUTO.md`
- `documents/02_DESIGN_E_UX.md`
- `documents/03_SEO_EDITORIAL_E_ADS.md`
- `documents/04_ASSETS_E_PRINTS.md`
- `documents/05_QA_RELEASE.md`
- `documents/08_TRABALHO_SIMULTANEO.md`
- `documents/17_REGISTRO_OPERACIONAL.md`
- `documents/20_TRABALHO_ATIVO.md`
- `tools/verify-docs.ps1`
- `tools/verify-public-copy.ps1`

## Próximo Passo Provável

Acompanhar a cobertura das 21 URLs limpas no Search Console e revalidar `/manifesto/`, `/seguranca/`, `/atualizacoes/` e o artigo 09 em alguns dias.

## Cuidado

Não apagar os arquivos `Microsoft Copilot_*` sem decisão explícita. Eles estão ignorados no deploy e parecem ter sido usados como referência visual antiga.

Não publicar nova mudança sem revisar `git status`, porque o worktree pode conter pacote de outra frente ainda não commitado.
