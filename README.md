# GMOVE Website

Site público do GMOVE, alinhado ao app atual em `C:\Users\gmfad\Documents\Projetos\gmove-app-renew`.

## Fonte de Verdade

Leia nesta ordem:

1. `CODEX.md`
2. `documents/00_START_HERE.md`
3. `documents/CODEX_HANDOFF.md`
4. `documents/01_SITE_E_PRODUTO.md`
5. `documents/02_DESIGN_E_UX.md`
6. `documents/06_FEATURES_PESQUISA_2026.md`
7. `documents/07_DIRECAO_PREMIUM.md`
8. `documents/08_TRABALHO_SIMULTANEO.md`
9. `documents/09_SEARCH_CONSOLE_INDEXACAO.md`
10. `documents/10_MATRIZ_PAGINAS_PUBLICAS.md`
11. `documents/12_INVENTARIO_ASSETS.md`
12. `documents/13_GIT_LEGADOS_RELEASE.md`
13. `documents/14_MELHORIAS_FEATURES_PESQUISA_2026.md`
14. `documents/15_ATUALIZACOES_PUBLICAS.md`

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

## Desenvolvimento Local

```powershell
python -m http.server 8000
```

Abrir `http://localhost:8000`.

## Deploy

```powershell
firebase deploy
```
