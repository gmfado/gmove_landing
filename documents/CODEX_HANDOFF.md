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
- Pacote Editorial v0.3.3 publicado em 2026-05-28 no Firebase Hosting.
- Ajuste local v0.3.4 humaniza as imagens dos oito artigos com maior variacao de pessoas, ambientes e objetos; esta em validacao visual e ainda nao foi publicado em producao.
- Produção validada em `https://gmove.app/` e `https://gmove-landing.web.app/`.
- `www.gmove.app` aponta para `gmove-landing.web.app` e deve redirecionar para `https://gmove.app/`; manter em observação se houver oscilação regional/CDN.
- Home tem seção interativa `Como funciona`, seção de confiança e CTA de acesso antecipado.
- Editorial tem oito artigos publicados e quatro hubs: `treino-com-criterio`, `progressao`, `consistencia` e `recuperacao`.
- Para conversas paralelas, usar `documents/08_TRABALHO_SIMULTANEO.md`.
- Para decidir onde registrar cada tipo de trabalho, usar `documents/17_REGISTRO_OPERACIONAL.md`.
- Batch de Search Console pronto em `documents/qa/search-console-batch-2026-05-28.md`.
- Search Console URL-prefix `https://gmove.app/` verificado via `google6e48a74231fe8281.html`; nao remover esse arquivo do deploy.
- Sitemap `/sitemap.xml` enviado e processado no Search Console com 19 paginas encontradas.
- Indexacao solicitada no Search Console para `/conteudo/` e os 4 hubs editoriais em 2026-05-28.
- Artigo 10 publicado no Editorial; sitemap em producao tem 21 URLs e deve ser reenviado no Search Console.

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

## Próximo Passo Provável

Revisar o worktree antes de qualquer nova edição: ha uma frente editorial/infra local em andamento. No Search Console, reenviar `sitemap.xml` e inspecionar os artigos 09 e 10. Depois, alinhar URLs limpas (`/manifesto/`, `/atualizacoes/`, `/privacidade/`, `/seguranca/`, `/termos/`) em canonicals, `og:url`, links internos e sitemap, publicar e revalidar.

## Cuidado

Não apagar os arquivos `Microsoft Copilot_*` sem decisão explícita. Eles estão ignorados no deploy e parecem ter sido usados como referência visual antiga.

Não publicar nova mudança sem revisar `git status`, porque o worktree pode conter pacote de outra frente ainda não commitado.
