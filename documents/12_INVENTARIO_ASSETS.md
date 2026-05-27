# 12 - Inventario de Assets

## Objetivo

Controlar assets publicos, peso, uso e oportunidades de otimizacao.

Atualizar quando novos prints, imagens editoriais, videos, favicons ou assets de marca forem adicionados.

## Resumo Atual

Data da auditoria: 2026-05-27.

Maiores arquivos detectados:

| Asset | Peso aproximado | Uso atual | Status |
| --- | ---: | --- | --- |
| `assets/screenshots/gmove-app-current-01.png` | 1.3 MB | Hero/landing | Otimizar com WebP/AVIF e variante mobile |
| `assets/screenshots/gmove-app-current-02-plan.png` | 562 KB | Landing | Otimizar com WebP/AVIF e variante mobile |
| `assets/screenshots/gmove-app-current-05-execution.png` | 444 KB | Landing | Otimizar com WebP/AVIF e variante mobile |
| `assets/screenshots/gmove-app-current-04-profile.png` | 242 KB | Landing | Otimizar com WebP/AVIF e variante mobile |
| `assets/screenshots/gmove-app-current-03-evolution.png` | 112 KB | Landing | Ok, considerar WebP junto do lote |
| `css/style.css` | 61 KB | Global | Aceitavel, revisar crescimento periodicamente |
| `css/premium.css` | 39 KB | Home premium | Aceitavel, revisar se efeitos aumentarem |
| `css/editorial.css` | 34 KB | Editorial | Aceitavel |
| `js/main.js` | 32 KB | Global | Aceitavel, manter `node --check` |

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
| `assets/screenshots/gmove-app-current-01.png` | Hoje | Hero e narrativa | Gerar WebP/AVIF e versao menor |
| `assets/screenshots/gmove-app-current-02-plan.png` | Plano | Hero/narrativa | Gerar WebP/AVIF e versao menor |
| `assets/screenshots/gmove-app-current-03-evolution.png` | Evolucao | Narrativa | Gerar WebP/AVIF |
| `assets/screenshots/gmove-app-current-04-profile.png` | Perfil | Narrativa | Gerar WebP/AVIF |
| `assets/screenshots/gmove-app-current-05-execution.png` | Execucao | Hero/narrativa | Gerar WebP/AVIF e versao menor |

## Imagens Editoriais

Imagens editoriais atuais ficam dentro dos slugs de artigo como `preset-imagem-conteudo-*.jpg`.

Status:

- artigos 01 a 08 tem imagens sociais/editoriais;
- hubs usam imagens dos artigos como apoio visual;
- tamanhos estao entre 114 KB e 230 KB, adequados para a fase atual;
- proximo passo ideal e gerar WebP para cards/listagem mantendo JPG fallback.

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

1. Gerar WebP/AVIF para prints do app.
2. Usar `<picture>` ou CSS com fallback quando adicionar formatos modernos.
3. Criar variantes menores para mobile em `assets/screenshots/responsive/`.
4. Rodar QA visual desktop/mobile apos troca de formato.
5. Atualizar esta matriz depois de cada lote.

## Comandos Uteis

Listar assets por peso:

```powershell
Get-ChildItem -Recurse -File assets, conteudo, css, js | Sort-Object Length -Descending | Select-Object Length, FullName
```

Buscar uso de um asset:

```powershell
rg -n "nome-do-arquivo" .
```
