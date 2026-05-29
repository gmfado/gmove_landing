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
- Firebase Hosting - Connect a custom domain: https://firebase.google.com/docs/hosting/custom-domain
- Firebase Hosting REST - Custom Domains: https://firebase.google.com/docs/reference/hosting/rest/v1beta1/projects.sites.customDomains

## Estado Atual

- Dominio canonico: `https://gmove.app/`.
- Firebase Hosting padrao: `https://gmove-landing.web.app/`.
- Dominios adicionais ativos no Firebase Hosting: `gmove.com.br` e `www.gmove.com.br`.
- `gmove.com.br` abre o site; `www.gmove.com.br` redireciona para `gmove.com.br`.
- Sitemap publico: `https://gmove.app/sitemap.xml`.
- Robots publico: `https://gmove.app/robots.txt`.
- Sitemap atual tem 21 URLs: home, manifesto, atualizacoes, Editorial, 4 hubs, 10 artigos, privacidade, seguranca e termos.
- `robots.txt` permite crawling geral e aponta para o sitemap.
- Enquanto o canonico for `gmove.app`, `gmove.com.br` deve manter canonicals, sitemap e robots apontando para `https://gmove.app/`.
- Ultimo deploy validado: 2026-05-29, incluindo `v0.3.8`, paineis visuais maiores no Editorial, dominios ativos e CSS editorial `20260529-editorial-photo-panels`.
- Search Console URL-prefix `https://gmove.app/` verificado em 2026-05-28 via arquivo HTML `google6e48a74231fe8281.html`.
- Sitemap `https://gmove.app/sitemap.xml` enviado e processado no Search Console em 2026-05-28, com 19 paginas encontradas.
- Primeira rodada de URL Inspection solicitada em 2026-05-28 para `/conteudo/` e os 4 hubs editoriais.
- Deploy editorial ED-009 publicado em 2026-05-28; proximo passo no Search Console e reenviar o sitemap de 21 URLs.

## Setup Recomendado No Search Console

1. Criar propriedade de dominio para `gmove.app`, se ainda nao existir.
2. Confirmar propriedade por DNS.
3. Criar propriedade de dominio para `gmove.com.br`, se quiser monitorar o dominio adicional no Search Console.
4. Adicionar tambem propriedade URL-prefix para `https://gmove.app/`, se precisar de visao mais direta das URLs publicadas.
5. Enviar sitemap `https://gmove.app/sitemap.xml`.
6. Inspecionar URLs prioritarias pela URL Inspection.
7. Solicitar indexacao apenas para URLs realmente publicadas, revisadas e canonicas.

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

## Rodada Pos-Deploy 2026-05-28

Status: producao publicada e validada em `https://gmove.app/`.

Batch operacional: `documents/qa/search-console-batch-2026-05-28.md`.

Validacoes ja feitas:

- `https://gmove.app/` respondeu HTTP 200.
- `https://gmove.app/google6e48a74231fe8281.html` respondeu HTTP 200 e confirmou propriedade no Search Console.
- `https://gmove.app/conteudo/` respondeu HTTP 200.
- `https://gmove.app/conteudo/treinar-sem-registrar-e-repetir-sem-saber-se-esta-evoluindo/` respondeu HTTP 200 com imagem editorial.
- `https://gmove.app/atualizacoes/` respondeu HTTP 200 com v0.3.7 publicado.
- `https://gmove.app/sitemap.xml` respondeu HTTP 200 com `lastmod` de 2026-05-28 para URLs editoriais.
- Search Console processou `/sitemap.xml` com 19 paginas encontradas.
- URL Inspection com solicitacao de indexacao enviada para `https://gmove.app/conteudo/` e para os hubs `treino-com-criterio`, `progressao`, `consistencia` e `recuperacao`.
- Producao ED-008 validou `/sitemap.xml` com 21 URLs, incluindo os artigos 09 e 10.
- Sitemap reenviado no Search Console em 2026-05-29; a tabela passou a mostrar envio em 29 de mai. de 2026, ainda com ultima leitura em 28 de mai. de 2026 e 19 paginas encontradas no momento da checagem.
- URL Inspection do artigo 09 mostrou `O URL nao esta no Google`, motivo `Detectada, mas nao indexada no momento`; solicitacao de indexacao enviada em 2026-05-29.
- URL Inspection do artigo 10 mostrou `O URL esta no Google`, pagina indexada, HTTPS valido e 1 item valido de breadcrumb.
- CSS/JS com cache-busting novo carregaram em producao.
- QA visual no navegador confirmou logo mobile menor em `/atualizacoes/` e Editorial sem overflow horizontal.
- Auditoria ao vivo anterior confirmou 19 URLs, sem falhas criticas de status, `noindex`, H1 ou JSON-LD; validacao posterior de producao confirmou o sitemap com 21 URLs.

Proxima acao manual no Search Console:

1. Entrar na propriedade `https://gmove.app/`.
2. Aguardar o processamento do sitemap reenviado em 2026-05-29 ate a tabela atualizar a ultima leitura e as paginas encontradas.
3. Acompanhar o artigo 09 ate sair de `Detectada, mas nao indexada no momento`.
4. Fazer URL Inspection dos 8 artigos anteriores depois da frente de imagens, se ainda nao tiverem sido solicitados.
5. Conferir se `atualizacoes/` aparece como URL publicada e canonica.
6. Revalidar cobertura em alguns dias, considerando que o Google pode levar dias ou semanas para indexar.

Observacao tecnica: o Firebase Hosting redireciona as URLs `.html` de paginas raiz para as versoes finais com barra por causa de `cleanUrls` e `trailingSlash`. A recomendacao e alinhar canonicals, `og:url`, links internos e sitemap para as URLs finais com barra no proximo pacote tecnico, para evitar conflito em HTMLs editoriais.

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

- Manter `google6e48a74231fe8281.html` no deploy publico para preservar a verificacao URL-prefix do Search Console.
- Avaliar criacao futura de propriedade de dominio `gmove.app` por DNS, se for necessario consolidar subdominios.
- Manter os registros de `gmove.com.br` documentados em `documents/16_DOMINIOS_DNS.md`.
- Revalidar `https://gmove.com.br/` e `https://www.gmove.com.br/` quando houver mudanca de dominio, canonical ou Firebase Hosting.
- Criar segunda rodada de URL Inspection para os 10 artigos, priorizando artigos 09 e 10.
- Definir se havera analytics antes de AdSense.
