# EDITORIAL_ESTADO_ATUAL

## OBJETIVO

Registrar o estado atual da área editorial do website GMOVE.

Este documento existe para manter a governança editorial separada da documentação do app GMOVE.

---

## REGRA CENTRAL

APP ≠ EDITORIAL.

- App GMOVE: produto Flutter/Firebase.
- Editorial do website: conteúdo, artigos, SEO, sitemap e fluxo de publicação.

Qualquer alteração em artigos, SEO editorial, listagem `/conteudo/` ou documentação editorial deve ser registrada aqui ou em `EDITORIAL_SPRINTS.md`, não nos documentos do app.

---

## ESTADO ATUAL

A área editorial pública existe em:

`/conteudo/`

O editorial está publicado como seção estática do website, com listagem própria e artigos em slugs individuais.

Não há CMS implementado nesta fase.

---

## ARTIGOS PUBLICADOS

Total atual: **8 artigos publicados** e **4 hubs editoriais**.

1. `conteudo/como-evoluir-no-treino-sem-motivacao/`
2. `conteudo/por-que-voce-comeca-e-para-no-treino/`
3. `conteudo/o-treino-perfeito-que-voce-nunca-consegue-seguir/`
4. `conteudo/treinar-cansado-funciona/`
5. `conteudo/o-problema-nao-e-falta-de-disciplina-e-falta-de-estrutura/`
6. `conteudo/treinar-sem-registrar-e-repetir-sem-saber-se-esta-evoluindo/`
7. `conteudo/por-que-trocar-de-treino-toda-hora-atrapalha-sua-evolucao/`
8. `conteudo/o-treino-que-voce-consegue-repetir-vale-mais-do-que-o-treino-que-parece-perfeito/`

Hubs publicados:

1. `conteudo/treino-com-criterio/`
2. `conteudo/progressao/`
3. `conteudo/consistencia/`
4. `conteudo/recuperacao/`

Cada artigo possui:
- `index.html`;
- asset social/editorial próprio no slug;
- metadados SEO próprios;
- CTA editorial;
- linkagem interna dentro da sequência editorial.

---

## ESTRUTURA ATUAL

### Website

- `conteudo/index.html` → listagem editorial;
- `conteudo/<slug>/index.html` → artigo publicado;
- `conteudo/treino-com-criterio/index.html` → hub pilar;
- `conteudo/progressao/index.html` → hub pilar;
- `conteudo/consistencia/index.html` → hub pilar;
- `conteudo/recuperacao/index.html` → hub pilar;
- `conteudo/como-evoluir-no-treino-sem-motivacao/preset-imagem-conteudo-1.jpg` → imagem social/editorial do artigo 01;
- `conteudo/por-que-voce-comeca-e-para-no-treino/preset-imagem-conteudo-2.jpg` → imagem social/editorial do artigo 02;
- `conteudo/o-treino-perfeito-que-voce-nunca-consegue-seguir/preset-imagem-conteudo-3.jpg` → imagem social/editorial do artigo 03;
- `conteudo/treinar-cansado-funciona/preset-imagem-conteudo-4.jpg` → imagem social/editorial do artigo 04;
- `conteudo/o-problema-nao-e-falta-de-disciplina-e-falta-de-estrutura/preset-imagem-conteudo-5.jpg` → imagem social/editorial do artigo 05;
- `conteudo/treinar-sem-registrar-e-repetir-sem-saber-se-esta-evoluindo/preset-imagem-conteudo-6.jpg` → imagem social/editorial do artigo 06;
- `conteudo/por-que-trocar-de-treino-toda-hora-atrapalha-sua-evolucao/preset-imagem-conteudo-7.jpg` → imagem social/editorial do artigo 07;
- `conteudo/o-treino-que-voce-consegue-repetir-vale-mais-do-que-o-treino-que-parece-perfeito/preset-imagem-conteudo-8.jpg` → imagem social/editorial do artigo 08;
- `sitemap.xml` → inclui `/conteudo/`, os quatro hubs e os oito artigos publicados.

### Documentação editorial

- `documents/editorial/ARTICLE_TEMPLATE.md`;
- `documents/editorial/CONTENT_IDEAS.md`;
- `documents/editorial/CONTENT_STRATEGY.md`;
- `documents/editorial/EDITORIAL_GUIDELINES.md`;
- `documents/editorial/PUBLISHING_FLOW.md`;
- `documents/editorial/VISUAL_SYSTEM_EDITORIAL.md`;
- `documents/editorial/EDITORIAL_SPRINTS.md`;
- `documents/editorial/EDITORIAL_ESTADO_ATUAL.md`.

---

## STATUS DE SEO

Status atual: **SEO estrutural completo nas páginas públicas principais, nos oito artigos publicados e nos quatro hubs editoriais**.

Verificado:
- `<title>` e meta description próprios na home, manifesto, listagem `/conteudo/`, oito artigos e quatro hubs;
- canonical correto nas páginas públicas principais, artigos e hubs;
- Open Graph e Twitter Card coerentes na home, manifesto, listagem `/conteudo/`, artigos e hubs;
- JSON-LD global `Organization`, `WebSite` e `SoftwareApplication` na home;
- `<title>` individual por artigo e hub;
- meta description individual;
- canonical por artigo e hub;
- Open Graph;
- Twitter Card;
- `og:image` apontando para asset real do slug;
- JSON-LD `Article` nos oito artigos;
- JSON-LD `CollectionPage` na listagem `/conteudo/` e nos hubs;
- `datePublished` e `dateModified` normalizados nos oito artigos;
- H1 único por artigo;
- `lang="pt-BR"`, `charset UTF-8` e viewport nas páginas públicas principais;
- alt em imagens relevantes;
- linkagem interna entre home, manifesto, editorial e artigos;
- URLs editoriais incluídas no `sitemap.xml`;
- listagem `/conteudo/` com metadados próprios.
- `robots.txt` presente, permitindo indexação e apontando para o sitemap público.
- assets CSS/JS públicos versionados com `?v=20260527-site-growth` para evitar cache antigo após deploy.

Ainda não registrado como concluído:
- validação externa de indexação no Google Search Console;
- monitoramento de performance orgânica;
- rotina formal de atualização de artigos antigos.

---

## ÚLTIMA SPRINT EDITORIAL

### ED-005 — Correção de abertura e refinamento premium da listagem editorial

Resultado:
- links públicos e internos do Editorial corrigidos para evitar abertura de diretórios sem CSS em previews locais;
- `firebase.json` alinhado com `trailingSlash: true`;
- listagem `/conteudo/` refinada com novo hero, guias de leitura por fricção, copy premium, bloco de padrão editorial e CTA conectado ao produto;
- JSON-LD `CollectionPage` adicionado na listagem;
- JSON-LD `Article` dos oito artigos normalizado com datas;
- CSS/JS versionados com `?v=20260526-editorial-images`;
- QA desktop e mobile executado com evidências em `documents/qa/`.

Registro completo:

`documents/editorial/EDITORIAL_SPRINTS.md`

### ED-004-R1 — Refinamento premium de copy e imagens dos artigos 06, 07 e 08

Resultado:
- artigos 06, 07 e 08 refinados em copy para reforçar teses proprietárias do GMOVE;
- imagens sociais/editoriais dos artigos 06, 07 e 08 substituídas por composições premium com app/interface, musculação real, registro, progressão e rotina;
- snippets de `/conteudo/` e destaque editorial dos artigos 06, 07 e 08 ajustados;
- title, slug, canonical, sitemap e estrutura visual global preservados;
- documentação mantida apenas no núcleo editorial do website.

Registro completo:

`documents/editorial/EDITORIAL_SPRINTS.md`

### ED-004 — Pacote editorial premium com 3 novos artigos

Resultado:
- editorial público passou de 5 para 8 artigos publicados;
- artigos 06, 07 e 08 publicados com SEO completo;
- imagens sociais/editoriais próprias criadas nos slugs como `preset-imagem-conteudo-6.jpg`, `preset-imagem-conteudo-7.jpg` e `preset-imagem-conteudo-8.jpg`;
- listagem `/conteudo/`, destaque editorial rotativo e `sitemap.xml` atualizados;
- documentação mantida apenas no núcleo editorial do website.

Registro completo:

`documents/editorial/EDITORIAL_SPRINTS.md`

### ED-003 — Novo artigo editorial: falta de disciplina e estrutura

Resultado:
- editorial público passou de 4 para 5 artigos publicados;
- artigo `conteudo/o-problema-nao-e-falta-de-disciplina-e-falta-de-estrutura/` publicado com SEO completo;
- imagem social/editorial própria criada no slug como `preset-imagem-conteudo-5.jpg`;
- listagem `/conteudo/`, destaque editorial rotativo e `sitemap.xml` atualizados;
- documentação mantida apenas no núcleo editorial do website.

Registro completo:

`documents/editorial/EDITORIAL_SPRINTS.md`

### ED-002 — SEO estrutural do website GMOVE

Resultado:
- JSON-LD global da home passa a declarar `Organization`, `WebSite` e `SoftwareApplication`;
- imagens sociais dos quatro artigos passam a usar URLs absolutas em Open Graph e Twitter Card;
- metadados de home, manifesto, listagem `/conteudo/` e artigos foram revisados;
- canonical, Open Graph, Twitter Card, H1 único, alt, `lang`, charset, viewport, linkagem interna, `robots.txt` e `sitemap.xml` foram conferidos;
- documentação mantida apenas no núcleo editorial do website.

Registro completo:

`documents/editorial/EDITORIAL_SPRINTS.md`

### ED-002 — Correção de assets e destaque editorial premium

Resultado:
- imagens editoriais dos artigos 02, 03 e 04 passam a ter caminhos próprios por slug;
- cards pequenos da listagem `/conteudo/` ficam sem imagem de fundo;
- destaque editorial passa a alternar entre os quatro artigos com imagem, texto, link e indicador visual;
- metadados sociais dos artigos 02, 03 e 04 apontam para as imagens corretas;
- documentação mantida apenas no núcleo editorial do website.

Registro completo:

`documents/editorial/EDITORIAL_SPRINTS.md`

### ED-001 — Padronização SEO e expansão editorial do site público

Resultado:
- editorial público passou de 1 para 4 artigos publicados;
- artigo existente recebeu SEO padronizado;
- três novos artigos foram publicados;
- linkagem interna em cadeia foi criada;
- listagem editorial foi atualizada;
- sitemap passou a incluir a área editorial e os quatro artigos.

Registro completo:

`documents/editorial/EDITORIAL_SPRINTS.md`

---

## PRÓXIMOS PASSOS SUGERIDOS

1. Fazer QA visual em desktop e mobile da listagem `/conteudo/` e dos oito artigos.
2. Validar as URLs editoriais, hubs e páginas principais no Google Search Console após deploy.
3. Definir a próxima sprint editorial a partir de `CONTENT_IDEAS.md`.
4. Criar rotina leve para revisar artigos antigos sem misturar com sprint do app.
5. Considerar uma estrutura de dados simples para artigos somente quando a manutenção manual começar a gerar risco real.

---

## GOVERNANÇA

Documentos do app:

`C:\Users\gmfad\Documents\Projetos\gmove-app-renew\documents`

Uso: produto, Flutter, Firebase, arquitetura do app, estado técnico do app e sprints do app.

Documentos editoriais:

`C:\Users\gmfad\Documents\Projetos\gmove-website\documents\editorial`

Uso: conteúdo do website, artigos, SEO editorial, calendário editorial, fluxo de publicação e estado editorial.

---

## REGRA FINAL

O estado editorial deve permanecer limpo, próprio e separado do estado do app.

Nenhuma sprint editorial deve voltar a ser registrada como sprint do app.
