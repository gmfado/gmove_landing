# 20 - Trabalho Ativo e Escopo de Commit

## Objetivo

Evitar mistura entre mudanças do site, conteúdo editorial, assets e futuras frentes paralelas.

## 2026-05-25 - Atualização para app atual

Status: publicado em produção e ainda não commitado

Escopo do pacote:

- alinhar landing ao GMOVE atual;
- importar marca e favicons atuais do app;
- capturar e usar prints atuais do app;
- remover barras do Android dos prints publicados;
- atualizar paleta, copy e efeitos visuais;
- reorganizar documentação do site;
- documentar pesquisa de features 2026;
- preparar QA mobile.

Arquivos que entram no pacote:

- `CODEX.md`;
- `README.md`;
- `index.html`;
- `site.webmanifest`;
- `firebase.json`;
- `css/style.css`;
- `css/premium.css`;
- `css/editorial.css`;
- `js/main.js`;
- `favicon.ico`;
- `favicon-32.png`;
- `apple-touch-icon.png`;
- `icon-192.png`;
- `icon-512.png`;
- `assets/brand/*`;
- `assets/screenshots/*`;
- `documents/*`;
- páginas HTML tocadas pela troca de marca.

Arquivos vistos e deixados fora:

- `Microsoft Copilot_ o seu complemento de IA.html`;
- `Microsoft Copilot_ o seu complemento de IA_files/**`;
- logos e prints antigos ainda versionados, mas não usados pela landing.

Não apagar sem decisão explícita:

- arquivos `Microsoft Copilot_*`;
- artigos publicados em `conteudo/`;
- assets editoriais existentes.

Validação prevista:

- servidor estático local;
- Browser desktop/mobile;
- checagem de links;
- `git diff --check`.

## 2026-05-27 - Pacote de crescimento do site

Status: publicado em produção e ainda não commitado

Escopo:

- seção interativa `Como funciona` na home;
- seção de confiança na home;
- nova página `seguranca.html`;
- quatro hubs editoriais em `conteudo/`;
- navegação global com `Como funciona` e `Segurança`;
- `sitemap.xml` e `firebase.json` atualizados;
- cache-busting atualizado para `20260527-site-growth`;
- QA desktop/mobile com evidências em `documents/qa/`.

Validação:

- deploy Firebase Hosting concluído em 2026-05-27;
- produção validada em `https://gmove.app/` e `https://gmove-landing.web.app/`;
- `https://www.gmove.app/` não respondeu no último teste;
- rotas principais responderam HTTP 200;
- home, Editorial, `Como funciona` e menu mobile publicados sem overflow horizontal.

## Frentes Paralelas Recomendadas

Antes de abrir uma nova conversa, escolher uma frente:

- `docs`: revisar documentação, fechar handoff e preparar commit;
- `editorial`: Search Console, novos ensaios, revisão de artigos e calendário;
- `landing`: performance, imagens WebP/AVIF, testes de conversão e refinamentos visuais;
- `infra`: domínio `www`, analytics, Search Console, Ads/AdSense e headers;
- `assets`: inventário de imagens, peso, uso e substituições.

Regra: uma conversa não deve editar arquivos da frente de outra sem revisar o diff atual e registrar o motivo no handoff.

## Documentos Operacionais Pos-Deploy

Status: criados em 2026-05-27

- `documents/09_SEARCH_CONSOLE_INDEXACAO.md`;
- `documents/10_MATRIZ_PAGINAS_PUBLICAS.md`;
- `documents/12_INVENTARIO_ASSETS.md`;
- `documents/13_GIT_LEGADOS_RELEASE.md`;
- `documents/14_MELHORIAS_FEATURES_PESQUISA_2026.md`.

## Infra - WWW

Status: aguardando ajuste DNS externo

- Custom Domain `www.gmove.app` criado no Firebase Hosting em 2026-05-27.
- Firebase pediu CNAME `www -> gmove-landing.web.app`.
- Firebase tambem pediu TXT `_acme-challenge.www.gmove.app` com valor `rDJYrfPftE3tEqg9ad8cHwdqCXUFL8f9MGCTsltO75I` enquanto o certificado esta em validacao.
- DNS atual ainda esta como `www -> gmove.app`.
- Apos mudar no Hostinger, revalidar HTTPS e redirect para `gmove.app`.
