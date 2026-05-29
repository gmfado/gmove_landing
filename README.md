# GMOVE Website

Site público do GMOVE, alinhado ao app atual em `C:\Users\gmfad\Documents\Projetos\gmove-app-renew`.

## Fonte de Verdade

Leia nesta ordem:

1. `CODEX.md`
2. `documents/00_START_HERE.md`
3. `documents/CODEX_HANDOFF.md`
4. `documents/01_SITE_E_PRODUTO.md`
5. `documents/02_DESIGN_E_UX.md`
6. `documents/03_SEO_EDITORIAL_E_ADS.md`
7. `documents/04_ASSETS_E_PRINTS.md`
8. `documents/05_QA_RELEASE.md`
9. `documents/08_TRABALHO_SIMULTANEO.md`
10. `documents/17_REGISTRO_OPERACIONAL.md`
11. O documento especifico da frente: Editorial, Search Console, matriz publica, assets, DNS, release ou trabalho ativo.

Documentos operacionais frequentes:

- `documents/06_FEATURES_PESQUISA_2026.md` e `documents/14_MELHORIAS_FEATURES_PESQUISA_2026.md`: pesquisa e roadmap.
- `documents/07_DIRECAO_PREMIUM.md`: criterios visuais.
- `documents/09_SEARCH_CONSOLE_INDEXACAO.md`: Search Console, sitemap, robots e Ads/AdSense.
- `documents/10_MATRIZ_PAGINAS_PUBLICAS.md`: inventario das URLs publicas.
- `documents/11_IMPLEMENTATION_LOG.md`: log interno de implementacao.
- `documents/12_INVENTARIO_ASSETS.md`: inventario de imagens e arquivos.
- `documents/13_GIT_LEGADOS_RELEASE.md`: Git, legados e release.
- `documents/15_ATUALIZACOES_PUBLICAS.md`: regra do changelog publico.
- `documents/16_DOMINIOS_DNS.md`: dominios e DNS.
- `documents/20_TRABALHO_ATIVO.md`: escopo ativo e frentes paralelas.
- `documents/editorial/`: governanca editorial.

## Estrutura

- `index.html`: landing principal.
- `manifesto.html`, `atualizacoes.html`, `seguranca.html`, `privacidade.html`, `termos.html`: páginas estáticas.
- `conteudo/`: Editorial GMOVE.
- `assets/brand/`: marca atual importada do app.
- `assets/screenshots/`: prints atuais do app usados na landing.
- `css/`, `js/`: assets do site.
- `documents/`: documentação do site.
- `firebase.json`, `.firebaserc`: deploy Firebase Hosting.

Para conversas paralelas, use `documents/08_TRABALHO_SIMULTANEO.md` e mantenha `documents/20_TRABALHO_ATIVO.md` atualizado.

Para saber onde registrar cada tipo de trabalho, use `documents/17_REGISTRO_OPERACIONAL.md`.

## Desenvolvimento Local

```powershell
python -m http.server 8000
```

Abrir `http://localhost:8000`.

## Validação de Copy Pública

```powershell
.\tools\verify-public-copy.ps1
```

Use antes de publicar mudanças em landing, Editorial, atualizações ou qualquer texto público.

## Validação de Documentação

```powershell
.\tools\verify-docs.ps1
```

Use quando tocar `documents/`, `README.md`, `CODEX.md`, `sitemap.xml` ou a matriz de paginas publicas.

## Deploy

```powershell
firebase deploy --only hosting --project gmove-landing
```
