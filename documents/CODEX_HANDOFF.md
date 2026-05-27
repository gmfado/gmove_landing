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
- Produção validada em `https://gmove.app/` e `https://gmove-landing.web.app/`.
- `https://www.gmove.app/` não respondeu no último teste.
- Home tem seção interativa `Como funciona`, seção de confiança e CTA de acesso antecipado.
- Editorial tem oito artigos publicados e quatro hubs: `treino-com-criterio`, `progressao`, `consistencia` e `recuperacao`.
- Para conversas paralelas, usar `documents/08_TRABALHO_SIMULTANEO.md`.

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
- `documents/20_TRABALHO_ATIVO.md`

## Próximo Passo Provável

Fechar a organização pós-deploy: commitar o pacote publicado, resolver domínio `www`, validar Search Console e decidir o destino dos arquivos legados que continuam fora do deploy.

## Cuidado

Não apagar os arquivos `Microsoft Copilot_*` sem decisão explícita. Eles estão ignorados no deploy e parecem ter sido usados como referência visual antiga.

Não publicar nova mudança sem revisar `git status`, porque o worktree ainda contém um pacote grande não commitado.
