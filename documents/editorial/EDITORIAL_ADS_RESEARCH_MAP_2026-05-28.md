# Pesquisa editorial orientada a Google Ads - 2026-05-28

## Objetivo

Definir como continuar criando posts do Editorial GMOVE com uma regra nova: cada artigo deve continuar sendo um ensaio de criterio, mas tambem precisa nascer preparado para alimentar Google Ads, Search Console, assets de campanha e aprendizados de intencao de busca.

Este documento nao cria novos artigos nem altera HTML. Ele mapeia a proxima fila editorial.

## Contexto local

Estado atual do Editorial:

- 10 artigos publicados em `conteudo/<slug>/` apos ED-008.
- 4 hubs publicados: treino com criterio, progressao, consistencia e recuperacao.
- SEO estrutural ja implementado: canonical, meta description, Open Graph, Twitter Card, JSON-LD, sitemap, imagens editoriais visiveis e bloco de leitura rapida.
- Worktree em 2026-05-28 contem alteracoes editoriais/visuais em andamento; por isso este mapeamento fica isolado em documento novo.

Artigos ja cobertos:

1. Como evoluir no treino sem motivacao.
2. Por que voce comeca e para no treino.
3. O treino perfeito que voce nunca consegue seguir.
4. Treinar cansado funciona?
5. O problema nao e falta de disciplina. E falta de estrutura.
6. Treinar sem registrar e repetir sem saber se esta evoluindo.
7. Por que trocar de treino toda hora atrapalha sua evolucao.
8. O treino que voce consegue repetir vale mais do que o treino que parece perfeito.

## Auditoria dos artigos publicados para a nova regua Ads

Conclusao: nao vale reescrever os oito artigos antigos agora. Eles ja tem tese clara, leitura rapida, imagem editorial visivel, JSON-LD, keywords, CTA e linkagem basica. O ajuste correto e transformar os publicados em suporte dos novos clusters, com links internos e pequenas pontes de contexto quando o artigo novo correspondente existir.

| Artigo | Status Ads/SEO | Acao recomendada |
| --- | --- | --- |
| 01 - Como evoluir no treino sem motivacao | Bom para o cluster "consistencia sem motivacao". Ja tem tensao pesquisavel e baixo risco. | Ajuste leve apos ED-007: criar ponte para semana como unidade, sem mudar a tese. |
| 02 - Por que voce comeca e para no treino | Bom para abandono/retorno. Menos transacional para Ads agora. | Preservar ate ED-013 existir; depois criar ponte para semana ruim e retorno ao plano. |
| 03 - O treino perfeito que voce nunca consegue seguir | Bom para estrutura e treino viavel. | Ajuste leve apos ED-007/ED-010: conectar semana real, organizacao de treino e ficha enxuta. |
| 04 - Treinar cansado funciona? | Bom para recuperacao, mas mais sensivel para Ads por encostar em saude/cansaco. | Nao impulsionar primeiro. Preservar ate ED-017; depois revisar linguagem tecnica e disclaimers leves. |
| 05 - Falta de disciplina e falta de estrutura | Forte para "disciplina no treino" e "organizar rotina". | Ajuste leve apos ED-007: linkar estrutura semanal como resposta pratica. |
| 06 - Treinar sem registrar e repetir sem saber se esta evoluindo | Melhor base atual para Ads de "registrar treino". | Ajuste prioritario apos ED-008: linkar artigo novo como versao mais buscavel/transacional. |
| 07 - Trocar de treino toda hora atrapalha | Forte para progressao, troca de treino e ruido. | Ajuste apos ED-009: linkar quando aumentar carga e quando manter referencia. |
| 08 - Treino repetivel vale mais que treino perfeito | Forte ponte para ED-007 e organizacao semanal. | Ajuste imediato apos ED-007: linkar a semana como teste real do plano. |

Ordem de retrabalho dos publicados:

1. Criar ED-007.
2. Adicionar pontes internas em 01, 03, 05 e 08 para ED-007.
3. Criar ED-008.
4. Ajustar artigo 06 para apontar para ED-008.
5. Criar ED-009.
6. Ajustar artigo 07 para apontar para ED-009.
7. Reavaliar 02 e 04 somente quando ED-013 e ED-017 forem rascunhados.

## Fontes e aprendizados usados

### Google Ads

Fontes:

- Google Ads - Keyword Planner: https://support.google.com/google-ads/answer/7337243
- Google Ads - Create effective Search ads: https://support.google.com/google-ads/answer/9873431
- Google Ads - Improve your landing page experience: https://support.google.com/google-ads/answer/2404197
- Google Ads - About App campaigns: https://support.google.com/google-ads/answer/6247380
- Google Ads - Create App campaign assets: https://support.google.com/google-ads/answer/6167151
- Google Ads policy - Personalized advertising: https://support.google.com/adspolicy/answer/143465

Implicacoes para o Editorial:

- O post precisa ter aderencia clara entre busca, anuncio e pagina final. Se o anuncio fala de "app para registrar treino", a primeira dobra do artigo ou da landing precisa reconhecer essa dor sem rodeio.
- Keyword Planner deve validar cada cluster antes de publicar ou impulsionar: termos, concorrencia, previsao, lances estimados e variacoes proximas.
- Search Ads funcionam melhor quando cada grupo de anuncios tem tema estreito, palavras-chave coerentes, varias opcoes de titulo/descricao e uma landing page que cumpre a promessa.
- App Campaigns precisam de muitos assets reutilizaveis: frases curtas, descricoes, imagens e eventualmente videos. Cada artigo deve gerar recortes publicitarios, nao apenas texto longo.
- Em fitness/saude, evitar personalizacao sensivel, promessa corporal, linguagem de vergonha, claims medicos e chamadas do tipo "emagreca rapido", "resultado garantido" ou "seu corpo esta errado".

### Google Search e conteudo organico

Fontes:

- Google Search Central - Helpful content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google Search Central - SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google Search Central - Image SEO: https://developers.google.com/search/docs/appearance/google-images
- Google Search Central - Article structured data: https://developers.google.com/search/docs/appearance/structured-data/article

Implicacoes para o Editorial:

- O artigo deve responder a uma necessidade real do leitor antes de tentar converter.
- Titulos e subtitulos precisam usar linguagem que pessoas pesquisam, mas sem virar formula generica de blog.
- Imagem, `alt`, legenda e texto proximo devem reforcar o assunto da pagina.
- Linkagem interna deve ajudar o leitor a continuar a jornada: artigo -> hub -> manifesto/lista.
- Dados estruturados continuam sendo parte da rotina de publicacao, mas nao substituem qualidade editorial.

### Mercado, SERP e apps de treino

Fontes e sinais pesquisados:

- Buscas brasileiras sobre "app de treino", "registrar treino", "progressao de carga", "ficha de treino", "treino ABC", "anotar carga" e "planilha de treino".
- Benchmarks de apps e paginas de produto: Hevy, Caliber, Intensity, NattyApp e paginas de Google Play relacionadas a treino/log/progressao.
- Diretrizes tecnicas de atividade fisica e treino resistido usadas como freio de precisao: CDC e ACSM.

Leitura do mercado:

- Apps concorrentes comunicam log rapido, historico, graficos, progressive overload, rotinas e templates.
- A busca brasileira mistura intencao educativa com intencao transacional. A pessoa quer tanto "como fazer" quanto "qual app usar".
- O GMOVE nao deve competir como biblioteca de exercicios ou banco de fichas prontas. A vantagem editorial e explicar criterio, leitura de progresso e decisao.
- Os termos mais promissores para Ads estao perto de "app de treino", "registrar treino", "progressao de carga", "ficha de treino", "treino semanal" e "organizar treino".

## Direcao recomendada

O Editorial deve virar um laboratorio de intencao para Ads.

Cada post novo precisa sair com quatro camadas:

1. **Camada editorial:** tese forte, voz GMOVE, profundidade e ausencia de promessa facil.
2. **Camada SEO:** termo principal, variantes, pergunta que a pagina responde, titulo claro, meta description, linkagem interna e imagem contextual.
3. **Camada Ads:** hipotese de grupo de anuncio, headlines, descricoes, CTA, politica de risco e final URL sugerida.
4. **Camada de asset:** capa, recortes curtos, 3 frases de anuncio, 1 imagem quadrada, 1 imagem horizontal e 1 roteiro curto para video futuro.

## Regra para escolher novas pautas

Priorizar um post quando ele atende a pelo menos 4 dos 6 criterios:

- Captura uma dor pesquisavel.
- Conecta com uma decisao real do produto.
- Pode ser usado como landing ou pre-landing de Ads.
- Nao depende de feature futura nao validada.
- Tem baixo risco de politica em saude/peso/corpo.
- Gera assets reaproveitaveis em Search, App Campaigns, email e redes.

Adiar ou descartar quando:

- A pauta vira "dica de treino" que qualquer blog publicaria.
- O termo atrai busca por ficha pronta, PDF gratuito ou prescricao detalhada.
- A promessa encosta em resultado fisico garantido, emagrecimento rapido, condicao medica ou comparacao corporal.
- A pagina nao teria uma conexao natural com o GMOVE real.

## Brief obrigatorio para cada proximo post

Antes de escrever, preencher:

```md
Codigo editorial:
Titulo de trabalho:
Slug:
Pilar:
Cluster de busca:
Termo principal:
Variantes:
Intencao:
Leitor em uma frase:
Tese GMOVE:
O que o artigo nao vai prometer:
Final URL para Ads:
CTA primario:
CTA secundario:
Grupo de anuncio hipotetico:
3 headlines Search Ads:
2 descricoes Search Ads:
Assets derivados:
Risco de politica:
Links internos obrigatorios:
Validacao apos publicar:
```

## Mapa dos proximos posts

### Prioridade A - criar primeiro

| Ordem | Codigo | Titulo de trabalho | Pilar | Cluster de busca | Intencao para Ads | CTA | Por que agora |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | ED-007 | A semana e a menor unidade real de evolucao no treino | Progressao | treino semanal, organizar treino, treino ABC semana, evolucao no treino | Consideracao. Pessoa quer organizar a rotina antes de escolher app. | Entrar na lista | Conecta todos os artigos atuais e cria uma ponte forte para hubs e campanhas sobre organizacao. |
| 2 | ED-008 | O que anotar no treino para saber se voce esta evoluindo | Clareza | registrar treino, anotar treino, app para registrar treino, carga e repeticoes | Alta intencao. Pessoa ja sente necessidade de ferramenta. | Entrar na lista | E o melhor cluster para Ads de produto sem prometer resultado fisico. |
| 3 | ED-009 | Quando aumentar a carga no treino sem virar tentativa no escuro | Progressao | progressao de carga, aumentar carga, evoluir carga musculacao | Educativa com forte encaixe em app/log. | Ler manifesto + entrar na lista | Termo de grande aderencia ao produto e a tese de criterio. |
| 4 | ED-010 | Uma ficha de treino boa nao e a mais cheia | Metodo | ficha de treino, treino musculacao, treino com estrutura | Meio de funil. Pessoa pesquisa ficha, mas pode ser educada sobre criterio. | Entrar na lista | Captura demanda alta sem virar biblioteca de fichas prontas. |

### Prioridade B - segundo bloco

| Ordem | Codigo | Titulo de trabalho | Pilar | Cluster de busca | Intencao para Ads | CTA | Por que entra depois |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5 | ED-011 | Treino ABC, ABCD ou full body: a pergunta errada antes do criterio | Metodo | treino ABC, divisao de treino, full body, ABCD | Descoberta/consideracao. Alto volume, risco de atrair busca por ficha pronta. | Ler hub Treino com criterio | Bom para SEO e topo de funil, mas precisa de copy cuidadosa para nao prometer prescricao. |
| 6 | ED-012 | Um app de treino nao deveria fazer voce virar planilha | Produto | app de treino, planilha de treino, registrar treino app | Conversao. Pessoa compara planilha e app. | Entrar na lista | Post mais comercial, melhor depois de publicar ED-008 e ED-009. |
| 7 | ED-013 | O que fazer quando uma semana de treino sai do plano | Consistencia | perdi treino, falhei no treino, voltar ao treino, semana ruim treino | Problema real, baixo funil emocional. | Entrar na lista | Complementa consistencia sem cair em discurso motivacional. |
| 8 | ED-014 | Mais dados podem deixar seu treino menos claro | Clareza | grafico treino, historico de treino, metricas treino, app academia | Diferenciacao. Pessoa ja usa ferramenta ou planilha. | Ler manifesto | Fortalece posicionamento premium e evita competir por feature list. |

### Prioridade C - maturar com dados

| Ordem | Codigo | Titulo de trabalho | Pilar | Cluster de busca | Intencao para Ads | CTA | Condicao para publicar |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | ED-015 | Por que o GMOVE comeca entendendo seu treino antes de recomendar | Produto | app de treino personalizado, treino personalizado app, onboarding treino | Conversao. Explica a diferenca do produto. | Entrar na lista | Publicar quando onboarding/proposta estiver estavel o suficiente para nao soar promessa futura. |
| 10 | ED-016 | Como saber se o treino esta funcionando antes do espelho mostrar | Progressao | treino funcionando, como saber se evolui no treino, progresso musculacao | Educativa com apelo alto, mas risco de promessa corporal. | Ler hub Progressao | Usar somente se o texto focar sinais de processo, nao estetica garantida. |
| 11 | ED-017 | Descanso tambem e dado de treino | Recuperacao | descanso treino, recuperacao muscular, treinar cansado | Descoberta. Pode atrair busca de saude. | Ler hub Recuperacao | Precisa de base tecnica e disclaimers leves, sem aconselhamento medico. |
| 12 | ED-018 | Treinar mais nao corrige um processo mal desenhado | Metodo | treinar mais, treino sem resultado, volume treino | Topo/meio de funil. | Entrar na lista | Bom ensaio de marca, mas menos diretamente transacional que os primeiros. |

## Clusters de campanha derivados

### Cluster 1 - App para registrar treino

Posts base:

- ED-008
- ED-012
- Artigo 06 ja publicado

Palavras-semente:

- app para registrar treino
- registrar treino musculacao
- anotar treino academia
- app carga repeticoes
- historico de treino

Promessa segura:

Organizar o que voce fez para decidir melhor o proximo treino.

Evitar:

- resultado garantido;
- "ganhe massa rapido";
- comparacao corporal;
- segmentacao por condicao de saude ou inseguranca fisica.

### Cluster 2 - Progressao de carga com criterio

Posts base:

- ED-009
- ED-016
- Hub Progressao
- Artigo 07 ja publicado

Palavras-semente:

- progressao de carga
- quando aumentar carga
- como evoluir carga musculacao
- treino sem progresso
- evolucao no treino

Promessa segura:

Entender sinais de progresso e evitar decisoes no escuro.

Evitar:

- prescricao numerica universal;
- "aumente X kg em Y semanas";
- promessas de hipertrofia garantida.

### Cluster 3 - Organizar treino semanal

Posts base:

- ED-007
- ED-010
- ED-011
- Hubs Treino com criterio e Consistencia

Palavras-semente:

- organizar treino semanal
- treino semanal musculacao
- ficha de treino
- divisao de treino
- treino ABC

Promessa segura:

Trocar improviso por uma estrutura que voce consegue repetir e ler.

Evitar:

- entregar ficha pronta generica;
- competir com buscadores de exercicio;
- prometer personalizacao absoluta.

### Cluster 4 - Consistencia sem motivacao

Posts base:

- ED-013
- Artigos 01, 02, 03, 05 e 08 ja publicados

Palavras-semente:

- falta de motivacao treino
- como manter constancia no treino
- voltei a treinar e parei
- disciplina no treino
- treino que cabe na rotina

Promessa segura:

Reduzir decisao repetida e criar uma rotina treinavel.

Evitar:

- culpa moral;
- linguagem de vergonha;
- promessa de transformacao pessoal rapida.

## Headlines e descricoes iniciais para teste

Usar como ponto de partida, nao como copy final.

### App para registrar treino

Headlines:

- Registre seu treino
- Carga, series e progresso
- Treino com criterio
- Menos planilha. Mais clareza
- Saiba o que repetir

Descricoes:

- Organize cargas, repeticoes e historico para decidir melhor o proximo treino.
- O GMOVE ajuda a transformar registro em leitura de progresso.

### Progressao de carga

Headlines:

- Evolua com criterio
- Quando aumentar a carga
- Progresso sem chute
- Leia seu treino melhor
- Carga nao e tudo

Descricoes:

- Entenda sinais de progresso antes de mudar carga, treino ou rotina.
- Treino precisa de historico legivel para virar evolucao.

### Organizar treino semanal

Headlines:

- Organize sua semana
- Treino sem improviso
- Semana com estrutura
- Menos decisao no treino
- Metodo para repetir

Descricoes:

- Planeje a semana de treino com clareza e reduza a decisao de ultima hora.
- O GMOVE parte da semana, do registro e do criterio para organizar o treino.

## Negativos provaveis para validar no Keyword Planner

Validar antes de campanha, nao aplicar cegamente:

- gratis
- pdf
- planilha pronta
- ficha pronta
- treino em casa gratis
- emagrecer rapido
- dieta
- remedio
- lesao
- dor
- fisioterapia
- personal trainer perto de mim
- academia perto de mim

## Rotina de criacao recomendada

1. Escolher uma pauta Prioridade A.
2. Rodar Keyword Planner com o cluster da pauta.
3. Ajustar titulo, slug e brief a partir dos termos reais.
4. Escrever rascunho em Markdown antes de implementar HTML.
5. Criar bloco de "Leitura rapida" com tese e 3 decisoes.
6. Criar imagem editorial com versoes JPG, WebP e AVIF.
7. Criar pacote Ads do post: headlines, descricoes, UTM sugerida, asset horizontal e quadrado.
8. Implementar artigo, atualizar listagem, hubs relacionados, sitemap e JSON-LD.
9. Validar mobile/desktop, links, assets, structured data e sitemap.
10. Depois de publicar, registrar no Search Console e guardar queries reais para decidir a proxima pauta.

## Decisao final

Proximo melhor post: **ED-007 - A semana e a menor unidade real de evolucao no treino**.

Motivo:

- amplia o tema de progressao sem repetir os artigos ja publicados;
- conversa com "organizar treino", "treino semanal" e "treino ABC" sem virar ficha pronta;
- cria ponte natural para Ads de organizacao, registro e app;
- tem baixo risco de politica;
- reforca a tese central do GMOVE: treino precisa ser legivel para virar processo.

Segundo melhor post: **ED-008 - O que anotar no treino para saber se voce esta evoluindo**.

Motivo:

- e o cluster mais proximo de conversao para Google Ads;
- conversa diretamente com app, registro, historico, carga e repeticoes;
- pode gerar variações fortes de anuncio e assets de produto;
- complementa o artigo 06 com uma entrada mais buscavel e mais transacional.

## Execucao iniciada - 2026-05-28

ED-007 foi implementado e publicado em `conteudo/a-semana-e-a-menor-unidade-real-de-evolucao-no-treino/`.

Entregas locais:

- artigo completo com SEO, `Article`, `BreadcrumbList`, leitura rapida, CTA e links internos;
- capa editorial gerada com a skill `imagegen` e normalizada em JPG, WebP e AVIF 2048x1152;
- listagem `/conteudo/`, destaque rotativo, hub `progressao/` e `sitemap.xml` atualizados;
- pontes internas adicionadas nos artigos 01, 03, 05 e 08;
- ED-008 tambem foi implementado e publicado em `conteudo/o-que-anotar-no-treino-para-saber-se-voce-esta-evoluindo/`;
- artigo 06 passou a apontar para ED-008 como entrada transacional sobre registro de treino;
- capa de ED-008 foi corrigida antes da publicacao para nao repetir personagem, roupa, celular ou tela de app do artigo anterior;
- proximo trabalho sequencial: ED-009, seguido pelo ajuste do artigo 07 para apontar para a nova entrada sobre progressao de carga.
