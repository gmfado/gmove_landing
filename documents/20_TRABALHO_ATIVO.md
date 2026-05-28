# 20 - Trabalho Ativo e Escopo de Commit

## Objetivo

Evitar mistura entre mudanças do site, conteúdo editorial, assets e futuras frentes paralelas.

## 2026-05-25 - Atualização para app atual

Status: publicado em produção; consolidado no commit da release `v0.3.1`

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

Status: publicado em produção; consolidado no commit da release `v0.3.1`

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

### Atualizacao 2026-05-27 - prints otimizados

- Prints do app ja possuem variantes `-720.webp` e `-720.avif`.
- `index.html` usa `<picture>` com AVIF, WebP e PNG fallback.
- QA visual desktop/mobile passou em Chrome local.
- Deploy Firebase Hosting concluido e validado em `https://gmove.app/`.
- Proximo passo desta frente: otimizar imagens editoriais quando houver novo lote ou crescimento de peso.

### Atualizacao 2026-05-27 - pagina de updates

- Criada `atualizacoes.html` para registrar updates publicos do GMOVE com versionamento.
- Versao publica atual: `v0.3.1`.
- Historico inicial ampliado para 8 entradas, cobrindo Renew, produto/seguranca/Editorial, deploy, documentacao, CTA, www, performance de prints e changelog publico.
- Toda atualizacao significativa deve entrar na pagina com versao, data, status, impacto e mensagem clara.
- Nova URL adicionada a navegacao global, footer, sitemap e Firebase rewrite `/atualizacoes`.

### Atualizacao 2026-05-27 - navegacao desktop/mobile

- `v0.3.1` registrada em `atualizacoes.html` com status `Publicado`.
- Desktop ficou mais enxuto: Manifesto, Seguranca, Privacidade e Termos foram agrupados em `Sobre`.
- Mobile passou a usar barra inferior fixa com Inicio, App, Editorial, Updates e Mais.
- `Mais` abre o menu completo e preserva acesso a paginas institucionais e legais.
- Cache-busting global de `css/style.css` e `js/main.js` atualizado para `20260527-nav-v031`.
- Paginas raiz usam assets e links root-relative para funcionar tambem em rotas limpas com `trailingSlash`.
- QA local desktop/mobile passou sem overflow horizontal e sem erros no console.
- Deploy Firebase Hosting concluido e republicado apos ajuste de rota limpa.
- Producao validada em `https://gmove.app/`, `/atualizacoes/`, `/manifesto/`, CSS e JS versionados.

### Regra permanente - updates publicos

- Antes de encerrar qualquer frente, conferir `documents/15_ATUALIZACOES_PUBLICAS.md`.
- Se a mudanca for update significativo, atualizar `atualizacoes.html` antes de deploy, commit final ou entrega.
- Se nao entrar em `atualizacoes.html`, registrar o motivo no handoff ou neste documento quando houver risco de duvida.

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
