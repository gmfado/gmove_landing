# 09 - Search Console e Indexacao

## Objetivo

Dar um roteiro operacional para indexacao, Search Console, sitemap, robots e preparacao futura para Ads/AdSense.

Este documento deve ser usado pela frente `infra` ou `editorial` depois de deploys, mudancas em sitemap, novos artigos, hubs editoriais ou alteracoes relevantes de SEO.

## Fontes Oficiais Consultadas

- Google Search Central - Ask Google to recrawl URLs: https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
- Google Search Central - Build and submit a sitemap: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Google Search Central - robots.txt guide: https://developers.google.com/search/docs/crawling-indexing/robots/intro
- Google Search Central - Helpful, reliable, people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google Search Central - Technical requirements: https://developers.google.com/search/docs/essentials/technical
- Google AdSense - Make sure your site's pages are ready: https://support.google.com/adsense/answer/7299563
- Google AdSense - Program policies: https://support.google.com/adsense/answer/48182
- Google AdSense - ads.txt guide: https://support.google.com/adsense/answer/12171612

## Estado Atual

- Dominio canonico: `https://gmove.app/`.
- Firebase Hosting padrao: `https://gmove-landing.web.app/`.
- `https://www.gmove.app/` nao respondeu no ultimo teste de 2026-05-27.
- Sitemap publico: `https://gmove.app/sitemap.xml`.
- Robots publico: `https://gmove.app/robots.txt`.
- Sitemap atual tem 18 URLs: home, manifesto, Editorial, 4 hubs, 8 artigos, privacidade, seguranca e termos.
- `robots.txt` permite crawling geral e aponta para o sitemap.

## Setup Recomendado No Search Console

1. Criar propriedade de dominio para `gmove.app`, se ainda nao existir.
2. Confirmar propriedade por DNS.
3. Adicionar tambem propriedade URL-prefix para `https://gmove.app/`, se precisar de visao mais direta das URLs publicadas.
4. Enviar sitemap `https://gmove.app/sitemap.xml`.
5. Inspecionar URLs prioritarias pela URL Inspection.
6. Solicitar indexacao apenas para URLs realmente publicadas, revisadas e canonicas.

Prioridade inicial:

1. `https://gmove.app/`
2. `https://gmove.app/conteudo/`
3. `https://gmove.app/conteudo/treino-com-criterio/`
4. `https://gmove.app/conteudo/progressao/`
5. `https://gmove.app/conteudo/consistencia/`
6. `https://gmove.app/conteudo/recuperacao/`
7. `https://gmove.app/manifesto.html`
8. `https://gmove.app/seguranca.html`
9. Artigos novos ou alterados no ciclo.

## Rotina Apos Deploy

Depois de qualquer deploy que altere SEO, URLs ou conteudo:

1. Verificar HTTP 200 das rotas publicas.
2. Confirmar que `robots.txt` segue apontando para `https://gmove.app/sitemap.xml`.
3. Validar que o sitemap usa URLs absolutas canonicas.
4. Conferir se novas URLs aparecem no sitemap.
5. Rodar varredura local de links e JSON-LD.
6. Enviar sitemap no Search Console, quando houver mudanca estrutural.
7. Inspecionar as URLs alteradas.
8. Registrar a validacao em `documents/05_QA_RELEASE.md`.

Observacao importante: pedido de recrawl nao garante indexacao imediata. O Google informa que crawling pode levar de alguns dias a algumas semanas e que a inclusao depende da qualidade e utilidade do conteudo.

## Checklist De Indexacao Por URL

Para cada URL publica:

- HTTP 200 em `https://gmove.app/...`;
- canonical aponta para a URL final correta;
- esta no `sitemap.xml`, quando for indexavel;
- nao tem `noindex`;
- nao esta bloqueada por `robots.txt`;
- title e meta description existem;
- H1 unico e coerente;
- conteudo principal aparece sem depender de login;
- imagens importantes carregam;
- links internos relevantes existem;
- JSON-LD parseia, quando existir;
- mobile sem overflow horizontal;
- URL Inspection sem erro critico.

## Regras Para Robots

- `robots.txt` serve para orientar crawling, nao para esconder conteudo sensivel.
- Para remover uma pagina de resultados, usar `noindex`, remocao no Search Console ou proteger a pagina por autenticacao, conforme o caso.
- Nao bloquear `/conteudo/`, `/css/`, `/js/` ou assets usados na renderizacao publica.
- Manter `Sitemap: https://gmove.app/sitemap.xml`.

## Preparacao Para Ads e AdSense

Nao adicionar snippets de anuncios antes de aprovacao e nova revisao de politica.

Antes de solicitar AdSense:

- manter conteudo original, util e substancial;
- manter navegacao clara entre home, Editorial, manifesto, termos e privacidade;
- garantir que paginas legais reflitam qualquer tecnologia de ads, analytics ou consentimento;
- evitar paginas vazias, ralas ou criadas so para SEO;
- evitar posicionamento enganoso de anuncio perto de CTA;
- revisar politicas do AdSense antes de implementar;
- criar `ads.txt` apenas quando houver publisher ID real.

Quando houver conta AdSense aprovada:

1. Criar `ads.txt` com o publisher ID correto.
2. Adicionar `ads.txt` ao deploy publico.
3. Atualizar `firebase.json` se necessario.
4. Atualizar privacidade com ads/cookies/medicao.
5. Fazer QA mobile para garantir que anuncios nao prejudiquem leitura.

## Pendencias

- Confirmar propriedade `gmove.app` no Search Console.
- Resolver DNS de `www.gmove.app`: o dominio foi criado no Firebase Hosting em 2026-05-27 com redirect para `gmove.app`, mas o Firebase ainda pede trocar o CNAME de `www -> gmove.app` para `www -> gmove-landing.web.app`.
- Enviar sitemap no Search Console depois do commit final.
- Criar primeira rodada de URL Inspection para home, Editorial, hubs e artigos principais.
- Definir se havera analytics antes de AdSense.
