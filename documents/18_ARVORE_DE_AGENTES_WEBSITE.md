# 18 - Arvore de Agentes do GMOVE Website

Data: 2026-05-29
Status: v1 operacional, sem automacao persistente propria

## Objetivo

Definir uma arvore de agentes para ajudar o agente principal a pesquisar,
estudar, implementar, revisar e publicar o GMOVE Website sem misturar escopos,
sem perder evidencias e sem aumentar risco em frentes paralelas.

Este documento nao substitui `CODEX.md`, `README.md`,
`documents/08_TRABALHO_SIMULTANEO.md` nem
`documents/17_REGISTRO_OPERACIONAL.md`. Ele adiciona uma camada de
coordenacao para trabalho multiagente.

## Pesquisa Consultada

Fontes usadas para a decisao:

- Anthropic, "How we built our multi-agent research system":
  https://www.anthropic.com/engineering/multi-agent-research-system
- OpenAI Agents SDK, agentes e padroes multiagente:
  https://openai.github.io/openai-agents-python/agents/
- OpenAI Agents SDK, handoffs:
  https://openai.github.io/openai-agents-python/handoffs/
- LangGraph Supervisor:
  https://langchain-ai.github.io/langgraphjs/reference/modules/langgraph-supervisor.html
- LangChain/LangGraph, handoffs:
  https://docs.langchain.com/oss/python/langchain/multi-agent/handoffs
- CrewAI, processos sequenciais e hierarquicos:
  https://crewai.mintlify.app/en/concepts/processes
- Microsoft Agent Framework, Group Chat Orchestration:
  https://learn.microsoft.com/en-us/agent-framework/workflows/orchestrations/group-chat
- Anthropic, "Demystifying evals for AI agents":
  https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents
- OWASP GenAI Security Project, LLM06:2025 Excessive Agency:
  https://genai.owasp.org/llmrisk/llm062025-excessive-agency/

## Decisao De Arquitetura

Para este projeto, o padrao principal deve ser:

`agente principal -> supervisores especializados -> agentes efemeros`

Evitar um swarm livre. O GMOVE Website precisa de rastreabilidade, copy
reader-facing, SEO tecnico, QA visual, deploy controlado e preservacao de
trabalho paralelo. Um modelo hierarquico e mais facil de auditar.

Principios:

- O agente principal mantem a conversa com o usuario e decide o escopo final.
- Subagentes sao chamados para tarefas delimitadas, com formato de saida claro.
- Pesquisa pode rodar em paralelo; edicao de arquivo deve ter escopo pequeno.
- Um subagente nao publica, commita, apaga arquivo legado ou muda DNS sozinho.
- O resultado final sempre volta para sintese, revisao e validacao central.

## Arvore V1

```text
Codex Principal GMOVE Website
|
+-- A0 Coordenador de Escopo e Worktree
|   +-- A0.1 Leitor de estado atual
|   +-- A0.2 Auditor de frentes paralelas
|   +-- A0.3 Registrador de handoff
|
+-- A1 Supervisor de Pesquisa
|   +-- A1.1 Pesquisador de fontes primarias
|   +-- A1.2 Pesquisador de concorrentes, SERP e mercado
|   +-- A1.3 Pesquisador de imagens, midia e referencias visuais
|   +-- A1.4 Auditor de citacoes e evidencias
|
+-- A2 Supervisor Editorial e Copy
|   +-- A2.1 Estrategista editorial
|   +-- A2.2 Redator PT-BR reader-facing
|   +-- A2.3 Revisor de tom publico
|   +-- A2.4 Revisor de promessas de produto
|
+-- A3 Supervisor de Design, UX e Assets
|   +-- A3.1 Auditor mobile/desktop
|   +-- A3.2 Curador de screenshots e capas
|   +-- A3.3 Otimizador AVIF/WebP/JPG
|   +-- A3.4 Revisor de consistencia visual premium
|
+-- A4 Supervisor Tecnico Website
|   +-- A4.1 Implementador HTML/CSS/JS
|   +-- A4.2 SEO tecnico e dados estruturados
|   +-- A4.3 Infra Firebase, cache, dominios e sitemap
|   +-- A4.4 Auditor de links e rotas
|
+-- A5 Supervisor QA e Release
|   +-- A5.1 Executor de validadores locais
|   +-- A5.2 QA Browser desktop/mobile
|   +-- A5.3 Validador de producao pos-deploy
|   +-- A5.4 Registrador de evidencias
|
+-- A6 Faixa de Guardrails
    +-- A6.1 Verificador de copy publica
    +-- A6.2 Critico/evaluator independente
    +-- A6.3 Revisor de seguranca e permissao
    +-- A6.4 Checklist final de publicacao
```

## Papeis

| Agente | Quando usar | Saida esperada | Pode editar? |
| --- | --- | --- | --- |
| A0 Coordenador de Escopo e Worktree | Antes de qualquer frente media/grande | Escopo, arquivos sujos, riscos de conflito, docs a ler | So docs de handoff quando aprovado |
| A1 Supervisor de Pesquisa | Pesquisas amplas, Editorial, SEO, Ads, imagens, benchmark | Achados com fontes, fatos, inferencias e recomendacoes | Nao |
| A2 Supervisor Editorial e Copy | Artigos, landing, manifesto, updates, revisao de linguagem | Copy pronta ou critica de copy | Sim, em HTML/docs editoriais aprovados |
| A3 Supervisor de Design, UX e Assets | Mudanca visual, screenshots, capas, responsividade | Diagnostico visual, assets recomendados, QA de imagem | Sim, em assets/CSS aprovados |
| A4 Supervisor Tecnico Website | HTML/CSS/JS, SEO tecnico, Firebase, sitemap, rotas | Patch tecnico e lista de validacoes | Sim, com write set delimitado |
| A5 Supervisor QA e Release | Antes de entrega, commit ou deploy | Comandos rodados, evidencias, pendencias reais | So registros/evidencias aprovados |
| A6 Faixa de Guardrails | Sempre que houver risco publico, seguranca ou qualidade | Bloqueios, riscos, checklist e criterios de pronto | Normalmente nao |

## Contrato Padrao Para Subagentes

Todo subagente deve receber:

- objetivo concreto;
- escopo de leitura;
- escopo de escrita, se houver;
- arquivos proibidos ou sensiveis;
- formato de saida;
- criterio de pronto;
- limite de autonomia;
- exigencia de nao reverter trabalho de outros.

Modelo curto:

```text
Voce e o agente <papel> do GMOVE Website.
Objetivo: <resultado especifico>.
Escopo: <pastas/arquivos/fontes>.
Nao faca: <acoes proibidas>.
Se editar: toque apenas <write set> e liste os arquivos alterados.
Saida: <formato>.
Criterio de pronto: <validacao/evidencia>.
```

## Regras De Delegacao

Use subagentes quando:

- a tarefa pode ser dividida em perguntas independentes;
- a pesquisa precisa cobrir fontes diferentes em paralelo;
- a revisao independente aumenta qualidade;
- a verificacao pode rodar enquanto a implementacao continua;
- o agente principal nao depende imediatamente daquela resposta para o proximo
  passo local.

Evite subagentes quando:

- a tarefa exige o mesmo contexto completo em todos os passos;
- o trabalho e muito acoplado a um arquivo pequeno;
- ha risco alto de conflito no mesmo arquivo;
- a decisao depende de uma aprovacao humana imediata;
- o custo de coordenar sera maior que executar direto.

## Guardrails Permanentes

- Nao usar `git add .` em worktree com frentes paralelas.
- Nao publicar deploy sem validacao local e decisao explicita.
- Nao prometer abertura publica ampla, iOS, preco, wearable, IA livre ou P1
  sem validacao do produto.
- Copy publica nao deve explicar SEO, Search Console, sitemap, JSON-LD, hubs,
  paginas pilar, assets, deploy, DNS ou organizacao interna.
- Pesquisa deve separar fato, inferencia e recomendacao.
- Edicao em `conteudo/` normalmente exige revisar listagem, sitemap, matriz,
  docs editoriais, `atualizacoes.html` e QA.
- Mudanca em docs, sitemap ou matriz publica exige `.\tools\verify-docs.ps1`.
- Mudanca em copy publica exige `.\tools\verify-public-copy.ps1`.
- Mudanca em JS exige `node --check js/main.js`.
- Mudanca visual exige QA desktop/mobile com Browser.
- Deploy exige validacao de producao depois da publicacao.

## Fluxos De Trabalho

### Pesquisa editorial ou SEO

1. A0 verifica escopo e trabalho paralelo.
2. A1 divide pesquisa em fontes primarias, concorrentes/SERP, imagens e
   citacoes.
3. A2 transforma achados em tese, outline e copy reader-facing.
4. A6 critica promessas, tom publico e evidencias.
5. A4 implementa somente se o usuario pediu execucao.
6. A5 valida links, JSON-LD, sitemap, copy publica e mobile.

### Novo artigo

1. A1 pesquisa tema, fontes, linguagem e imagens.
2. A2 cria outline e texto final.
3. A3 seleciona ou cria capa e checa formatos.
4. A4 integra artigo, listagem, destaque, sitemap e dados estruturados.
5. A6 verifica copy publica, promessas e citacoes.
6. A5 roda validadores, Browser desktop/mobile e registra evidencia.

### Revisao de copy publica

1. A2 revisa texto visivel e acessivel.
2. A6 procura vazamento de linguagem interna.
3. A4 aplica ajuste minimo.
4. A5 roda `.\tools\verify-public-copy.ps1`.

### Mudanca visual

1. A3 compara com `documents/02_DESIGN_E_UX.md` e criterios premium.
2. A4 implementa HTML/CSS/JS.
3. A5 abre desktop e mobile, checa console, overflow e links.
4. A6 avalia se a mudanca alterou promessa publica ou leitura.

### Infra, Search Console ou deploy

1. A0 confirma worktree e escopo.
2. A4 revisa Firebase, sitemap, robots, cache, dominios ou Search Console.
3. A6 revisa permissao e risco de acao externa.
4. A5 valida localmente, executa deploy quando aprovado e checa producao.
5. Registro entra em `documents/05_QA_RELEASE.md`,
   `documents/09_SEARCH_CONSOLE_INDEXACAO.md`,
   `documents/16_DOMINIOS_DNS.md` ou `documents/20_TRABALHO_ATIVO.md`,
   conforme `documents/17_REGISTRO_OPERACIONAL.md`.

## Leitura Inicial Por Tipo De Agente

Base para todos:

1. `README.md`
2. `CODEX.md`
3. `documents/00_START_HERE.md`
4. `documents/CODEX_HANDOFF.md`
5. `documents/08_TRABALHO_SIMULTANEO.md`
6. `documents/17_REGISTRO_OPERACIONAL.md`
7. `documents/20_TRABALHO_ATIVO.md`

Editorial:

1. `documents/03_SEO_EDITORIAL_E_ADS.md`
2. `documents/editorial/EDITORIAL_ESTADO_ATUAL.md`
3. `documents/editorial/EDITORIAL_SPRINTS.md`
4. `documents/editorial/PUBLISHING_FLOW.md`
5. `documents/editorial/EDITORIAL_GUIDELINES.md`

Design e assets:

1. `documents/02_DESIGN_E_UX.md`
2. `documents/04_ASSETS_E_PRINTS.md`
3. `documents/07_DIRECAO_PREMIUM.md`
4. `documents/12_INVENTARIO_ASSETS.md`

Infra e release:

1. `documents/05_QA_RELEASE.md`
2. `documents/09_SEARCH_CONSOLE_INDEXACAO.md`
3. `documents/10_MATRIZ_PAGINAS_PUBLICAS.md`
4. `documents/13_GIT_LEGADOS_RELEASE.md`
5. `documents/15_ATUALIZACOES_PUBLICAS.md`
6. `documents/16_DOMINIOS_DNS.md`

## Criterios De Pronto

Uma rodada multiagente so esta pronta quando:

- o agente principal integrou os achados;
- fatos externos tem fontes;
- inferencias estao marcadas como inferencias;
- arquivos alterados estao listados;
- validadores pertinentes foram rodados;
- pendencias reais foram nomeadas;
- nada de outra frente foi revertido;
- o usuario recebeu uma resposta clara do estado final.

## Estado Atual Observado Em 2026-05-29

O repo tem trabalho local aberto em varias frentes, incluindo HTMLs de
`conteudo/`, docs, `css/editorial.css`, `firebase.json` e
`tools/verify-docs.ps1`. Portanto, para esta arvore, a regra operacional
imediata e:

- preferir agentes read-only para exploracao;
- criar arquivos novos quando possivel;
- evitar editar documentos ja sujos sem revisar o diff;
- stage somente por lista explicita;
- registrar included vs left out quando houver commit futuro.

## Primeira Celula De Agentes Recomendada

Para o proximo trabalho real no website, usar esta celula pequena:

```text
Codex Principal
+-- Repo Scout read-only
+-- Research Scout read-only
+-- Copy/Editorial Reviewer
+-- Implementation Worker, apenas se houver write set claro
+-- QA/Release Reviewer
```

Essa celula cobre pesquisa, estudo, execucao e revisao sem inflar a operacao.
Novos agentes devem nascer por necessidade concreta, nao por entusiasmo.
