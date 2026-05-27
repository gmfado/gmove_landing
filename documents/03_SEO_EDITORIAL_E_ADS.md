# 03 - SEO, Editorial e Ads

## Princípio

SEO do GMOVE deve ser consequência de conteúdo útil, não fábrica de post.

Pesquisa consultada:

- Google Search Central recomenda conteúdo útil, confiável e feito para pessoas.
- Google SEO Starter Guide reforça conteúdo único, bem organizado e atualizado.
- Google Article structured data recomenda `Article`, `NewsArticle` ou `BlogPosting` para ajudar o Google a entender páginas de artigo.
- Políticas do Google AdSense exigem evitar implementação enganosa, inventário sem valor e conteúdo pobre.

## Estado Atual

O Editorial existe em `/conteudo/` e possui oito artigos publicados mais quatro hubs editoriais.

Pontos positivos:

- slugs próprios;
- meta title e description;
- canonical;
- Open Graph;
- Twitter Card;
- JSON-LD `Article`;
- JSON-LD `CollectionPage` com `ItemList` na listagem editorial;
- hubs editoriais para treino com critério, progressão, consistência e recuperação;
- datas estruturadas nos artigos;
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

1. QA mobile periódico dos oito artigos e dos quatro hubs.
2. Validar Search Console após deploy.
3. Criar rotina de revisão de artigos antigos.
4. Planejar próximos ensaios a partir de `documents/editorial/CONTENT_IDEAS.md`.
5. Só adicionar snippets de anúncios depois de aprovação e nova revisão de política.

## Ajuste ED-005 - 2026-05-26

- Listagem `/conteudo/` reposicionada como Editorial premium, com guias de leitura por fricção real em vez de blog genérico.
- Links locais do Editorial passaram a evitar URLs de diretório quando o ambiente não resolve `index.html` automaticamente.
- `main.js` e CSS receberam cache-busting para impedir que o destaque rotativo use links antigos após deploy.
- Pesquisa usada como base: conteúdo people-first, títulos claros, linkagem interna útil, dados estruturados de artigo e escaneabilidade de leitura.
