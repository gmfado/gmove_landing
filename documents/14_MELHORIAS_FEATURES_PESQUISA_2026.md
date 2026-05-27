# 14 - Melhorias e Features Pesquisa 2026

## Objetivo

Registrar oportunidades pesquisadas para melhorar o GMOVE Website, o Editorial e a narrativa de produto sem prometer funcionalidades que ainda nao estao prontas.

Este documento complementa `documents/06_FEATURES_PESQUISA_2026.md` com uma priorizacao mais operacional.

## Fontes Consultadas

- ACSM 2026 Fitness Trends: https://acsm.org/top-fitness-trends-2026/
- Google Search Central - AI features and your website: https://developers.google.com/search/docs/appearance/ai-features
- Google Search Central - recrawl and sitemap guidance: https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
- web.dev - Image performance: https://web.dev/learn/performance/image-performance
- web.dev - Interaction to Next Paint: https://web.dev/articles/inp
- ETASR 2026 - Integrating Mobile Apps and Wearables for Health Behavior Change: https://www.etasr.com/index.php/ETASR/article/view/17887
- Scientific Reports 2026 - Knowledge-grounded LLM for personalized sports training plan generation: https://www.nature.com/articles/s41598-026-37075-z
- Google AdSense - site readiness: https://support.google.com/adsense/answer/7299563

## Leitura Da Pesquisa

### 1. Wearables e apps continuam relevantes, mas precisam virar decisao util

ACSM coloca wearable technology como tendencia numero 1 de 2026 e mobile exercise apps no top 5. O ponto mais importante para o GMOVE nao e mostrar mais numeros, e sim interpretar padroes com cuidado: sono, atividade recente, carga percebida, historico de treino e resposta do usuario.

Implicacao:

- nao vender "dashboard de dados";
- vender "decisao de treino com contexto";
- manter Health Connect como integracao opcional, nao dependencia do produto.

### 2. A pesquisa favorece self-monitoring, goal-setting e feedback em tempo real

Revisoes recentes de apps e wearables apontam self-monitoring, definicao de objetivo e feedback em tempo real como tecnicas importantes para engajamento.

Implicacao:

- o loop `treino recomendado -> execucao -> feedback -> proxima recomendacao` deve ser o centro do produto;
- cada feature nova precisa alimentar esse ciclo;
- registro manual precisa ser curto para evitar fadiga.

### 3. IA em treino precisa ser explicavel, contextual e limitada

Pesquisa recente sobre recomendacao de treino com LLM reforca a necessidade de modelos ancorados em conhecimento, dados do usuario e validacao de seguranca. Para o GMOVE, isso confirma a direcao de uma inteligencia explicavel e contida.

Implicacao:

- evitar "coach livre" como promessa publica;
- priorizar explicacao da decisao, confianca e limites;
- diferenciar sugestao inteligente de prescricao medica.

### 4. SEO para AI Search continua sendo SEO forte, nao truque novo

Google afirma que as melhores praticas de SEO continuam valendo para AI Overviews e AI Mode: conteudo rastreavel, texto importante visivel, links internos, boa experiencia, imagens de qualidade e dados estruturados coerentes com o conteudo visivel.

Implicacao:

- fortalecer paginas pilar, artigos e ferramentas editoriais;
- manter o site como fonte oficial clara sobre o produto;
- evitar criar conteudo artificial so para capturar busca.

### 5. Performance visual virou feature de marca

web.dev reforca WebP/AVIF, `<picture>`, dimensoes explicitas, lazy loading abaixo da dobra e atencao ao INP. Como o GMOVE tem muitos prints, performance e parte da experiencia premium.

Implicacao:

- otimizar prints antes de adicionar novas midias;
- nao usar video pesado na home;
- medir mobile antes de aumentar efeitos.

## Priorizacao Recomendada

### P0 - Agora

#### 1. Quiz de Entrada Para Lista

Objetivo: segmentar interessados e aprender com o cohort.

Campos:

- objetivo principal;
- experiencia;
- dias por semana;
- equipamento;
- maior trava atual;
- interesse em acesso assistido.

Por que agora:

- baixo risco tecnico;
- melhora copy e cohort;
- conversa com a tese de treino contextual.

Uso no site:

- substituir formulario simples por email + mini-perfil opcional;
- manter entrada rapida para nao reduzir conversao.

#### 2. Fechamento De Sessao Como Narrativa Publica

Objetivo: transformar o final do treino em prova de inteligencia.

Para o app:

- resumo curto;
- pergunta de esforco;
- progresso detectado;
- o que muda no proximo treino.

Para o site:

- nova tela/print quando existir;
- bloco "o app aprende com o retorno";
- artigo editorial sobre por que feedback simples melhora consistencia.

#### 3. Explicacao Da Carga Sugerida

Objetivo: aumentar confianca na recomendacao.

Elementos:

- ultima carga;
- reps feitas;
- confianca da sugestao;
- faixa segura;
- motivo da subida, manutencao ou reducao.

Para o site:

- adicionar micro-demo visual na secao `Como funciona`;
- transformar em copy de diferenciacao: "nao so sugere, explica".

#### 4. Otimizacao De Imagens

Objetivo: preservar sensacao premium no mobile.

Acoes:

- gerar WebP/AVIF para prints;
- usar `<picture>` com fallback PNG/JPG;
- criar variantes menores para mobile;
- evitar lazy loading em imagem LCP;
- manter `width` e `height` para reduzir layout shift.

### P1 - Proximo Ciclo

#### 5. Retorno Inteligente Depois De Falhar

Objetivo: reduzir abandono quando o usuario perde dias.

Fluxos:

- retomar leve;
- reorganizar semana;
- pular para proximo foco;
- registrar motivo opcional.

Valor de marca:

- forte ligacao com o Editorial;
- diferencia o GMOVE de apps punitivos ou rigidos;
- excelente para copy: "o app sabe voltar junto com voce".

#### 6. Substituicao Inteligente De Exercicio

Objetivo: resolver academia cheia, equipamento ausente ou desconforto.

Regras:

- preservar grupo muscular;
- preservar padrao de movimento;
- ajustar carga/reps quando necessario;
- explicar impacto da troca.

Para o site:

- ferramenta editorial "troca de exercicio por equipamento";
- demo no `Como funciona` com contexto "equipamento limitado".

#### 7. Pagina Publica De Changelog

Objetivo: mostrar produto vivo sem prometer abertura ampla.

Conteudo:

- updates de app;
- melhorias de site;
- prints novos;
- decisoes de produto;
- status de cohort.

Cuidados:

- sem datas de promessa;
- sem features P1 como se estivessem prontas;
- sempre distinguir "publicado", "em teste" e "pesquisado".

#### 8. Ferramentas Editorial-SEO

Objetivo: criar utilidade original, nao apenas artigos.

Ferramentas recomendadas:

- checklist de retorno depois de ficar parado;
- simulador simples de progressao de carga;
- calculadora de volume semanal por grupo muscular;
- guia de troca de exercicio por equipamento.

Regra:

- cada ferramenta precisa resolver uma duvida real e terminar com ponte natural para o GMOVE.

### P2 - Depois

#### 9. Prontidao Do Dia Com Health Connect

Objetivo: usar dados externos para adaptar o treino.

Sinais possiveis:

- sono;
- atividade recente;
- frequencia cardiaca, quando disponivel;
- sessoes anteriores;
- feedback subjetivo.

Cuidados:

- opt-in claro;
- explicacao de limites;
- nao tratar dados experimentais como verdade absoluta;
- fallback completo para quem nao conecta wearable.

#### 10. Mapa De Carga Muscular

Objetivo: tornar recuperacao e distribuicao de treino visualmente proprietarias.

Uso:

- app: estado por grupo muscular;
- site: visual premium forte;
- editorial: artigos sobre recuperacao e progressao.

#### 11. Coach Contextual Durante O Treino

Objetivo: orientar dentro da execucao sem virar chat generico.

Escopo seguro:

- mensagens curtas por contexto;
- sugestoes baseadas na sessao atual;
- ajuste de descanso/carga;
- nada de diagnostico de lesao.

Nao priorizar antes de:

- fechar feedback pos-treino;
- melhorar explicacao da carga;
- ter dados de uso do cohort.

## Melhorias De Site Recomendadas

### Landing

- Evoluir `Como funciona` para mostrar uma cadeia completa: contexto -> decisao -> execucao -> feedback -> proxima sessao.
- Criar quiz leve de entrada na lista.
- Adicionar uma pequena area de "status do produto" para cohort assistido.
- Otimizar prints para WebP/AVIF antes de novos efeitos.
- Usar mais copy de produto real e menos abstracao: "quando voce tem 35 min", "quando a academia esta cheia", "quando voce perdeu dois treinos".

### Editorial

- Criar ferramentas editoriais, nao apenas posts.
- Criar autor/revisor editorial ou "Equipe GMOVE" com criterio claro.
- Criar rotinas de revisao trimestral para artigos antigos.
- Fortalecer linkagem entre hubs e artigos satelite.
- Usar Search Console para escolher proximas pautas, nao somente intuicao.

### SEO e AI Search

- Garantir que cada pilar tenha texto substancial e links internos.
- Evitar dependencia de imagens para explicar conteudo importante.
- Manter dados estruturados coerentes com o texto visivel.
- Criar respostas claras para duvidas long-tail sem transformar o site em FAQ generico.

### Performance

- Remocao de `video.mp4` foi correta.
- Priorizar conversao dos prints grandes.
- Testar LCP e INP mobile antes de novas animacoes.
- Preferir microinteracoes CSS a JS pesado.

## Roadmap Pratico

### Sprint A - Conversao e Performance

1. Gerar WebP/AVIF dos prints.
2. Adicionar `<picture>` nos prints principais.
3. Criar quiz de entrada na lista.
4. Medir mobile depois da troca.

### Sprint B - Narrativa De Produto

1. Expandir `Como funciona` para incluir fechamento de sessao.
2. Criar bloco sobre explicacao de carga sugerida.
3. Criar changelog publico simples.

### Sprint C - Editorial Utilitario

1. Publicar checklist de retorno depois de falhar.
2. Publicar simulador de progressao de carga.
3. Criar pagina de metodologia editorial e revisao.

### Sprint D - Produto Futuro

1. Especificar Health Connect opt-in.
2. Desenhar mapa de carga muscular.
3. Prototipar substituicao inteligente de exercicio.

## O Que Nao Fazer Agora

- Chat AI livre no site.
- Video pesado na primeira dobra.
- Ads antes de Search Console e politica de privacidade atualizada.
- Conteudo em massa gerado por IA.
- Prometer wearable, Health Connect ou coach contextual como pronto.
- Criar social feed ou ranking publico antes de validar retencao individual.
