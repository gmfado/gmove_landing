# 06 - Pesquisa de Features 2026

## Leitura Rapida

A oportunidade do GMOVE nao esta em virar uma biblioteca maior de exercicios.
O diferencial mais forte e decidir melhor o treino de hoje, explicar a decisao e usar historico real para manter o aluno consistente.

Complemento operacional: `documents/14_MELHORIAS_FEATURES_PESQUISA_2026.md`.

Fontes consultadas:

- ACSM 2026: wearable technology aparece como tendencia numero 1; mobile exercise apps e data-driven training technology tambem aparecem entre as tendencias relevantes.
- Android Health Connect: centraliza dados como sono, batimentos, passos e sessoes de atividade no Android.
- Apple Workout Buddy: usa historico de treino e dados da sessao para gerar feedback motivacional contextual.
- Fitbit Readiness: combina recuperacao, carga-alvo, objetivos, preferencias e historico para recomendar treino.
- WHO/CDC/AHA: reforcam musculacao ao menos 2 dias por semana e a importancia de combinar atividade, recuperacao e consistencia.
- Google Search Central: conteudo editorial deve ser util, original, confiavel e feito para pessoas; nao apenas para capturar busca.
- web.dev INP: interacoes e animacoes precisam ser leves para nao prejudicar responsividade.

## Features Prioritarias para o App

### 1. Prontidao do Dia

Objetivo: transformar a tela Hoje em uma decisao ainda mais contextual.

Como funcionaria:

- conectar opcionalmente com Health Connect;
- ler sono, passos recentes, frequencia cardiaca e atividade anterior quando disponivel;
- calcular um estado simples: pronto, moderado, recuperar;
- adaptar o treino do dia com intensidade, volume ou descanso sugeridos;
- explicar em uma frase por que o treino foi mantido, reduzido ou trocado.

Por que faz sentido:

- conversa diretamente com a tese atual do GMOVE;
- usa a tendencia de wearable sem depender de hardware proprio;
- melhora retencao porque o app se adapta ao dia ruim sem abandonar o plano.

Complexidade: alta.
Prioridade: alta.

### 2. Explicacao da Carga Sugerida

Objetivo: fazer o usuario confiar na sugestao de carga.

Como funcionaria:

- mostrar o motivo da sugestao: ultima carga, reps, descanso, confianca, feedback e historico recente;
- exibir uma faixa segura quando a confianca for baixa;
- permitir aceitar, reduzir ou aumentar com um toque;
- registrar o ajuste para melhorar a proxima recomendacao.

Por que faz sentido:

- o app ja mostra sugestao e confianca;
- e uma evolucao natural, com menor risco tecnico;
- reforca a percepcao de treinador inteligente.

Complexidade: media.
Prioridade: alta.

### 3. Retorno Inteligente Depois de Falhar

Objetivo: resolver o momento em que o usuario perde dias e nao sabe como voltar.

Como funcionaria:

- detectar treino perdido, semana incompleta ou pausa longa;
- oferecer tres opcoes: retomar leve, reorganizar semana, pular para o proximo foco;
- preservar progressao sem punir o usuario com culpa;
- registrar motivo opcional: viagem, dor, tempo, desanimo, agenda.

Por que faz sentido:

- consistencia e mais importante do que perfeicao;
- cria uma resposta concreta para um problema comum de abandono;
- gera excelente materia editorial e copy de produto.

Complexidade: media.
Prioridade: alta.

### 4. Mapa de Carga Muscular

Objetivo: evoluir o foco muscular para uma leitura de carga e recuperacao.

Como funcionaria:

- cada serie registrada alimenta grupos musculares;
- o app mostra estado por musculo: fresco, estimulado, pesado, recuperar;
- o plano usa esse mapa para decidir o proximo treino;
- o usuario entende por que vai treinar pernas, costas ou corpo todo.

Por que faz sentido:

- o app ja tem foco muscular visual;
- cria um ativo visual proprietario para landing, onboarding e redes;
- diferencia o GMOVE de apps que so contam volume.

Complexidade: alta.
Prioridade: media-alta.

### 5. Substituicao Inteligente de Exercicio

Objetivo: deixar o treino mais resiliente quando equipamento, dor leve ou lotacao atrapalham.

Como funcionaria:

- botao de trocar exercicio durante Hoje ou Execucao;
- filtro por equipamento disponivel no perfil;
- preservar grupo muscular, padrao de movimento e objetivo do dia;
- explicar o impacto da troca no plano.

Por que faz sentido:

- usa o perfil treinavel que ja existe;
- resolve uma dor real de academia cheia;
- reduz abandono no meio do treino.

Complexidade: media.
Prioridade: media-alta.

### 6. Fechamento de Sessao

Objetivo: transformar o final do treino em aprendizado.

Como funcionaria:

- resumo curto: series feitas, carga total, foco muscular, exercicios-chave;
- pergunta simples: facil, certo, pesado demais;
- destaque de progresso quando houver;
- sugestao do que o app vai ajustar no proximo treino.

Por que faz sentido:

- fecha o ciclo entre execucao e evolucao;
- gera dados de qualidade sem formulario longo;
- aumenta a sensacao de acompanhamento.

Complexidade: baixa-media.
Prioridade: alta.

## Features para o Site

### 1. Narrativa Interativa do Produto

Criar uma secao sticky com um telefone limpo e captions que mudam no scroll:

- Hoje decide;
- Plano organiza;
- Execucao guia;
- Evolucao prova;
- Perfil ensina o app.

Usar os prints limpos atuais. Evitar video pesado no primeiro ciclo.

### 2. Quiz de Entrada na Lista

Antes ou depois do email, perguntar:

- objetivo principal;
- experiencia;
- dias por semana;
- equipamento disponivel;
- maior trava atual.

Isso melhora segmentacao, gera linguagem para copy e prepara cohort assistido.

### 3. Ferramentas Editorial-SEO

Criar ferramentas simples e honestas:

- calculadora de volume semanal por grupo muscular;
- checklist de retorno depois de ficar parado;
- guia de troca de exercicio por equipamento;
- simulador de progressao de carga.

Cada ferramenta deve terminar com uma ponte natural para o GMOVE.

### 4. Paginas Pilar do Editorial

Organizar clusters:

- Decisao do treino;
- Progressao de carga;
- Recuperacao e consistencia;
- Plano semanal;
- Treino para quem falha e volta.

Cada cluster deve ter uma pagina pilar, artigos satelite, links internos e autor/revisor identificavel.

### 5. Changelog Publico

Uma pagina simples de updates:

- prints novos;
- melhorias do app;
- decisoes de produto;
- proximos testes de cohort.

Ajuda confianca, SEO de marca e percepcao de produto vivo.

## Efeitos Visuais Recomendados

- Phone sticky com scroll-driven captions, usando `animation-timeline` quando suportado.
- View transition entre lista do Editorial e artigo, sem depender disso para navegar.
- Spotlight leve em cards ou ferramentas, sempre com `prefers-reduced-motion`.
- Skeleton/placeholder elegante para prints se imagens pesadas demorarem.
- Sem animacoes que bloqueiem clique, scroll ou input; INP continua sendo restricao.

## O Que Eu Nao Faria Agora

- Coach de voz completo antes de ter o loop de dados bem calibrado.
- Computer vision de tecnica antes de resolver execucao, feedback e historico.
- Social feed no app antes de provar retencao individual.
- Conteudo em massa para SEO; melhor poucos artigos fortes com experiencia real.
- Ads antes de ter paginas legais, politica editorial, densidade de conteudo e navegacao madura.

## Roadmap Sugerido

### Agora

- Fechamento de sessao.
- Explicacao da carga sugerida.
- Quiz de entrada na lista.
- Search Console, rotina editorial e acompanhamento das paginas pilar publicadas.

### Proximo Ciclo

- Retorno inteligente depois de falhar.
- Substituicao inteligente de exercicio.
- Narrativa interativa com phone sticky no site.

### Depois

- Prontidao do dia com Health Connect.
- Mapa de carga muscular.
- Coach contextual durante o treino.
