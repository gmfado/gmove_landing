# 12 - Inventario de Assets

## Objetivo

Controlar assets publicos, peso, uso e oportunidades de otimizacao.

Atualizar quando novos prints, imagens editoriais, videos, favicons ou assets de marca forem adicionados.

## Resumo Atual

Data da auditoria: 2026-05-28.

Maiores arquivos detectados:

| Asset | Peso aproximado | Uso atual | Status |
| --- | ---: | --- | --- |
| `assets/screenshots/gmove-app-current-01-720.avif` | 31 KB | Hero/landing | Ativo via `<picture>` com WebP/PNG fallback |
| `assets/screenshots/gmove-app-current-05-execution-720.avif` | 32 KB | Hero/landing | Ativo via `<picture>` com WebP/PNG fallback |
| `assets/screenshots/gmove-app-current-02-plan-720.avif` | 23 KB | Hero/landing | Ativo via `<picture>` com WebP/PNG fallback |
| `assets/screenshots/gmove-app-current-04-profile-720.avif` | 30 KB | Landing | Ativo via `<picture>` com WebP/PNG fallback |
| `assets/screenshots/gmove-app-current-03-evolution-720.avif` | 22 KB | Landing | Ativo via `<picture>` com WebP/PNG fallback |
| `css/style.css` | 61 KB | Global | Aceitavel, revisar crescimento periodicamente |
| `css/premium.css` | 39 KB | Home premium | Aceitavel, revisar se efeitos aumentarem |
| `css/editorial.css` | 34 KB | Editorial | Aceitavel |
| `js/main.js` | 32 KB | Global | Aceitavel, manter `node --check` |

Observacao: PNGs originais permanecem como fallback. O lote original de prints soma aproximadamente 2.7 MB; os WebP 720px somam aproximadamente 207 KB e os AVIF 720px somam aproximadamente 141 KB.

## Marca

| Asset | Uso | Status |
| --- | --- | --- |
| `assets/brand/brand-wordmark.png` | Navbar publica | Ativo |
| `assets/brand/brand-wordmark.svg` | Fonte vetorial | Ativo como asset de referencia |
| `assets/brand/brand-symbol.png` | Favicons/manifesto visual | Ativo |
| `assets/brand/brand-symbol.svg` | Fonte vetorial | Ativo como asset de referencia |
| `assets/brand/brand-symbol-dark-bg.jpg` | Marca sobre fundo escuro | Ativo/referencia |
| `favicon.ico`, `favicon-32.png`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png` | Navegador/PWA/social | Ativo |

## Prints Do App

Todos os prints atuais vieram do app em `C:\Users\gmfad\Documents\Projetos\gmove-app-renew` e foram recortados para remover barras do Android.

| Asset | Tela | Uso | Proxima acao |
| --- | --- | --- | --- |
| `assets/screenshots/gmove-app-current-01.png` + `-720.webp`/`-720.avif` | Hoje | Hero e narrativa | Regerar quando o app mudar |
| `assets/screenshots/gmove-app-current-02-plan.png` + `-720.webp`/`-720.avif` | Plano | Hero/narrativa | Regerar quando o app mudar |
| `assets/screenshots/gmove-app-current-03-evolution.png` + `-720.webp`/`-720.avif` | Evolucao | Narrativa | Regerar quando o app mudar |
| `assets/screenshots/gmove-app-current-04-profile.png` + `-720.webp`/`-720.avif` | Perfil | Narrativa | Regerar quando o app mudar |
| `assets/screenshots/gmove-app-current-05-execution.png` + `-720.webp`/`-720.avif` | Execucao | Hero/narrativa | Regerar quando o app mudar |

## Imagens Editoriais

Imagens editoriais atuais ficam dentro dos slugs de artigo como `preset-imagem-conteudo-*`.

Status:

- artigos 01 a 08 tem imagens sociais/editoriais em JPG, WebP e AVIF;
- as capas foram humanizadas em 2026-05-28 com maior variacao de pessoas, ambientes, objetos e cenas de treino, preparacao, registro, decisao de carga e repeticao;
- a curadoria atual alterna escada de predio, lavanderia, mesa de cozinha, escritorio, aparelho de cabo, leg press, mural de treino e parque para evitar repeticao visual;
- todos os arquivos finais dos oito artigos estao normalizados em 2048x1152;
- JPGs ficam aproximadamente entre 245 KB e 314 KB;
- WebP fica aproximadamente entre 68 KB e 103 KB;
- AVIF fica aproximadamente entre 35 KB e 63 KB;
- hubs usam imagens dos artigos como apoio visual;
- caminhos publicos foram preservados para manter Open Graph, Twitter Card, hubs e listagem sem quebra.

## Legados E Fora Do Deploy

Ignorados no Firebase:

- `gmove_logo.png`
- `gmove_logo_web.png`
- `print1.png` a `print5.png`
- `Microsoft Copilot_ o seu complemento de IA.html`
- `Microsoft Copilot_ o seu complemento de IA_files/**`
- `documents/**`
- `assets/screenshots/*.xml`
- `video.mp4`, caso seja reintroduzido acidentalmente

Observacao: `video.mp4` foi removido do workspace em 2026-05-27 porque nao era necessario e nao estava referenciado pelo site atual. O ignore permanece no Firebase como protecao caso o arquivo seja reintroduzido por engano.

## Plano De Otimizacao

1. Criar variantes menores para imagens editoriais em listagens, se o peso crescer.
2. Rodar QA visual desktop/mobile apos cada troca de formato.
3. Atualizar esta matriz depois de cada lote.

## Comandos Uteis

Listar assets por peso:

```powershell
Get-ChildItem -Recurse -File assets, conteudo, css, js | Sort-Object Length -Descending | Select-Object Length, FullName
```

Buscar uso de um asset:

```powershell
rg -n "nome-do-arquivo" .
```
