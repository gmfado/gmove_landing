# 03 - SEO, Editorial e Ads

## Princípio

SEO do GMOVE deve ser consequência de conteúdo útil, não fábrica de post.

Pesquisa consultada:

- Google Search Central recomenda conteúdo útil, confiável e feito para pessoas.
- Google SEO Starter Guide reforça conteúdo único, bem organizado e atualizado.
- Google Article structured data recomenda `Article`, `NewsArticle` ou `BlogPosting` para ajudar o Google a entender páginas de artigo.
- Políticas do Google AdSense exigem evitar implementação enganosa, inventário sem valor e conteúdo pobre.

## Estado Atual

O Editorial existe em `/conteudo/` e possui onze artigos publicados mais quatro hubs editoriais.

Pontos positivos:

- slugs próprios;
- meta title e description;
- canonical;
- Open Graph;
- Twitter Card;
- JSON-LD `Article`;
- JSON-LD `BreadcrumbList` nos onze artigos publicados;
- JSON-LD `CollectionPage` com `ItemList` na listagem editorial;
- hubs editoriais para treino com critério, progressão, consistência e recuperação;
- datas estruturadas nos artigos;
- imagens editoriais visíveis nos artigos com `<picture>`, AVIF, WebP, JPG fallback, alt contextual e legenda;
- sitemap com URLs editoriais;
- termos e privacidade existem.
- CSS/JS versionados no HTML público para evitar cache antigo em deploys de copy, links e visual.

## Direção Editorial

O Editorial GMOVE deve publicar:

- ensaios sobre método;
- consistência;
- progressão;
- clareza de treino;
- produto em construção;
- bastidores de decisão do app.

Evitar:

- conteúdo genérico de academia;
- títulos caça-clique;
- promessa de resultado físico;
- volume artificial para SEO;
- artigos criados só para palavra-chave.

## Preparação Para Google Ads/AdSense

Antes de solicitar AdSense:

- revisar todas as páginas públicas em mobile;
- garantir conteúdo original e substancial;
- manter navegação clara entre home, editorial, manifesto e legais;
- evitar espaços de anúncio antes de existir aprovação;
- não posicionar futuros anúncios perto de CTAs de forma enganosa;
- manter política de privacidade atualizada com qualquer tecnologia de anúncios usada.

## Próximos Passos

1. QA mobile periódico dos onze artigos e dos quatro hubs.
2. Reenviar sitemap de 22 URLs no Search Console e solicitar URL Inspection do artigo 11.
3. Criar rotina de revisão de artigos antigos.
4. Planejar próximos ensaios a partir de `documents/editorial/CONTENT_IDEAS.md`.
5. Só adicionar snippets de anúncios depois de aprovação e nova revisão de política.

## Ajuste ED-005 - 2026-05-26

- Listagem `/conteudo/` reposicionada como Editorial premium, com guias de leitura por fricção real em vez de blog genérico.
- Links locais do Editorial passaram a evitar URLs de diretório quando o ambiente não resolve `index.html` automaticamente.
- `main.js` e CSS receberam cache-busting para impedir que o destaque rotativo use links antigos após deploy.
- Pesquisa usada como base: conteúdo people-first, títulos claros, linkagem interna útil, dados estruturados de artigo e escaneabilidade de leitura.

## Ajuste ED-006 - 2026-05-28

- Pesquisa aprofundada registrada em `documents/editorial/EDITORIAL_RESEARCH_2026-05-28.md`.
- Oito artigos receberam resumo "Leitura rapida", capa editorial real, AVIF/WebP e `alt` contextual.
- JSON-LD dos artigos ganhou `articleSection`, `keywords`, `isAccessibleForFree`, `dateModified` atualizado e `BreadcrumbList`.
- Listagem `/conteudo/` passou a usar imagem social editorial real e backgrounds WebP.
- `sitemap.xml` recebeu `lastmod` nas URLs editoriais tocadas.
- QA local validou JSON-LD, links, assets AVIF/WebP, sitemap e Browser desktop/mobile sem overflow horizontal.

## Ajuste ED-007 - 2026-05-28

- Auditoria dos oito artigos existentes contra a nova regua de Google Ads registrada em `documents/editorial/EDITORIAL_ADS_RESEARCH_MAP_2026-05-28.md`.
- Decisao: nao reescrever os artigos antigos por atacado; usar pontes internas conforme os novos clusters forem publicados.
- Criado localmente o artigo `conteudo/a-semana-e-a-menor-unidade-real-de-evolucao-no-treino/`.
- O novo artigo recebeu SEO completo, `Article`, `BreadcrumbList`, capa JPG/WebP/AVIF, leitura rapida, CTA e linkagem interna.
- Artigos 01, 03, 05 e 08 receberam pontes leves para o novo ensaio.
- Listagem `/conteudo/`, destaque rotativo, hub `progressao/` e `sitemap.xml` foram atualizados localmente para incluir o Ensaio 09.

## Ajuste ED-008 - 2026-05-28

- Criado e publicado o artigo `conteudo/o-que-anotar-no-treino-para-saber-se-voce-esta-evoluindo/`.
- O novo artigo trabalha o cluster de Ads/SEO sobre registrar treino, anotar treino, carga, repeticoes, execucao e contexto sem prometer resultado fisico.
- Capa final foi corrigida para uma cena editorial distinta, sem repetir personagem, roupa, celular ou tela de app do artigo anterior.
- Artigo 06 recebeu ponte interna para o novo ensaio como resposta pratica sobre o que registrar.
- Hub `progressao/`, `/conteudo/`, destaque rotativo, `sitemap.xml` e `atualizacoes.html` foram atualizados para o Ensaio 10.
- Producao validada em `https://gmove.app/` com HTTP 200 no artigo, listagem, changelog, sitemap e imagens da capa.

## Ajuste ED-011 - 2026-05-30

- Criado o artigo `conteudo/como-montar-uma-semana-de-treino-que-voce-consegue-repetir/`.
- O novo artigo aprofunda o cluster de consistencia com foco em semana de treino repetivel, prioridade, margem, revisao e decisao pratica.
- Capa editorial nova foi gerada e normalizada em JPG, WebP e AVIF.
- Hubs `consistencia/` e `treino-com-criterio/`, `/conteudo/`, destaque rotativo, `sitemap.xml` e `atualizacoes.html` foram atualizados para o Ensaio 11.
- `main.js` recebeu tracking leve para cliques de CTA, formulario de acesso antecipado e leitura editorial quando houver provedor de analytics disponivel.
