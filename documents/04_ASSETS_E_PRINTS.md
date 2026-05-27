# 04 - Assets e Prints

## Marca

Assets atuais importados do app:

- `assets/brand/brand-symbol.svg`;
- `assets/brand/brand-symbol.png`;
- `assets/brand/brand-symbol-dark-bg.jpg`;
- `assets/brand/brand-wordmark.svg`;
- `assets/brand/brand-wordmark.png`.

Favicons e ícones gerados:

- `favicon.ico`;
- `favicon-32.png`;
- `apple-touch-icon.png`;
- `icon-192.png`;
- `icon-512.png`.

## Prints Atuais

Capturados em 2026-05-25 no Android físico conectado ao projeto do app atual.
Método recomendado: `adb shell screencap -p /sdcard/arquivo.png` seguido de `adb pull`.
Evitar redirecionamento direto de stdout no PowerShell para não corromper os PNGs.
Os arquivos publicados foram recortados para `1080 x 2032`, removendo status bar e barra de navegação do Android.

Arquivos:

- `assets/screenshots/gmove-app-current-01.png`: Hoje.
- `assets/screenshots/gmove-app-current-02-plan.png`: Plano.
- `assets/screenshots/gmove-app-current-03-evolution.png`: Evolução.
- `assets/screenshots/gmove-app-current-04-profile.png`: Perfil.
- `assets/screenshots/gmove-app-current-05-execution.png`: Execução.

Formatos publicados na landing:

- PNG original: fallback e fonte de recorte.
- `-720.webp`: fallback moderno leve.
- `-720.avif`: formato preferencial para navegadores compatíveis.

## Regras

- Não voltar a usar `print1.png` a `print5.png` na landing.
- Não usar prints da versão descontinuada.
- Ao trocar telas no app, recapturar prints e atualizar este documento.
- Prints devem mostrar estado real e útil, não tela vazia.
- Publicar prints sem barras do sistema Android; manter apenas a tela do app.

## Pendências

- Regerar PNG, WebP e AVIF quando as telas do app mudarem.
- Usar `documents/12_INVENTARIO_ASSETS.md` como controle de peso, uso e próximos lotes de otimização.

## Evidências de QA do Site

As capturas de validação local ficam em `documents/qa/` e não fazem parte do deploy público.
