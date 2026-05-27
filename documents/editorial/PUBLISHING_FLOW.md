# GMOVE Editorial Publishing Flow

> Fluxo de publicação editorial · Versão 1.0 · Abril de 2026  
> Aplicável a novos artigos em `conteudo/`

---

## 1. Visão Geral

O fluxo editorial do GMOVE deve preservar três coisas:

- qualidade de pensamento;
- coerência com o produto;
- precisão técnica na publicação.

Nenhum artigo deve ser publicado apenas porque está escrito. Ele precisa estar certo para o GMOVE.

---

## 2. Estados do Artigo

```txt
ideia
brief aprovado
rascunho
revisão editorial
revisão visual
implementação
QA
publicado
```

### Definição rápida

- **ideia:** pauta ainda não validada.
- **brief aprovado:** tese, ângulo e CTA definidos.
- **rascunho:** texto completo em markdown.
- **revisão editorial:** ajuste de voz, precisão e estrutura.
- **revisão visual:** definição de blocos, imagem e ritmo.
- **implementação:** criação do HTML e assets.
- **QA:** revisão final em navegador e metadados.
- **publicado:** link ativo na listagem.

---

## 3. Etapa 1: Seleção da Pauta

Fonte principal:

`documents/editorial/CONTENT_IDEAS.md`

Critérios:

- tem tensão clara;
- reforça método, estrutura, progressão ou clareza;
- conversa com o GMOVE real;
- não depende de promessa futura;
- não parece post genérico de treino.

Saída da etapa:

```md
Pauta escolhida:
Pilar:
Tese:
Leitor:
Conexão com o produto:
CTA:
```

---

## 4. Etapa 2: Brief Editorial

Antes do rascunho, preencher:

```md
Título provisório:
Subtítulo provisório:
Slug:
Categoria:
Ideia central:
Crença comum questionada:
Alternativa GMOVE:
Blocos do artigo:
Bloco visual principal:
CTA final:
Riscos de promessa exagerada:
```

Validação:

- se a ideia central não cabe em uma frase, o brief ainda está fraco;
- se o CTA parece colado no fim, a conexão com produto ainda está fraca;
- se o título parece lista genérica, reescrever antes de avançar.

---

## 5. Etapa 3: Rascunho

Usar:

`documents/editorial/ARTICLE_TEMPLATE.md`

Regras:

- escrever primeiro em markdown;
- não implementar HTML durante o primeiro rascunho;
- manter uma tese por artigo;
- evitar parágrafos longos demais;
- alternar tensão, explicação e aplicação;
- marcar onde entram blocos visuais.

Checklist do rascunho:

- abertura reconhecível;
- tese clara;
- exemplos concretos;
- progressão lógica;
- fechamento forte;
- CTA coerente.

---

## 6. Etapa 4: Revisão Editorial

Revisar com base em:

`documents/editorial/EDITORIAL_GUIDELINES.md`

Verificar:

- voz GMOVE;
- ausência de clichês fitness;
- precisão das promessas;
- clareza dos conceitos;
- ritmo de leitura;
- termos proibidos;
- conexão com o produto.

Perguntas de revisão:

1. Este artigo poderia ser publicado por qualquer app de fitness?
2. O texto explica algo ou só soa bem?
3. A tese está presente do começo ao fim?
4. O leitor sai com mais clareza prática?
5. O CTA parece consequência natural?

Se a resposta da primeira pergunta for sim, voltar ao rascunho.

---

## 7. Etapa 5: Revisão Visual

Usar:

`documents/editorial/VISUAL_SYSTEM_EDITORIAL.md`

Definir:

- imagem principal;
- componente visual principal;
- frases de impacto;
- blocos de método;
- pull quote;
- CTA final;
- ritmo de espaçamento.

Regras:

- não usar visual decorativo sem função;
- não usar imagem genérica de academia;
- não criar componente novo se os atuais resolvem;
- manter a linguagem visual escura, precisa e contida;
- usar a cor de ação apenas para ação ou tese central.

---

## 8. Etapa 6: Implementação

Criar pasta:

```txt
conteudo/<slug>/
```

Criar arquivo:

```txt
conteudo/<slug>/index.html
```

Adicionar assets, se houver:

```txt
conteudo/<slug>/preset-imagem-conteudo-1.jpg
```

Base de implementação:

```txt
conteudo/como-evoluir-no-treino-sem-motivacao/index.html
```

Atualizar listagem:

```txt
conteudo/index.html
```

Quando houver segundo artigo:

- atualizar o card em destaque, se o novo artigo for destaque;
- descomentar ou ativar a grade secundária;
- remover ou ajustar a nota de poucos ensaios se necessário;
- manter contagem `Ensaio · 02`, `Ensaio · 03` etc.

---

## 9. Etapa 7: SEO e Metadados

Verificar no artigo:

- `<title>`;
- `meta description`;
- canonical;
- Open Graph;
- Twitter Card;
- JSON-LD `Article`;
- `inLanguage: pt-BR`;
- author como `GMOVE`;
- publisher como `GMOVE`;
- imagem social correta.

Regras:

- descrição social pode ser mais editorial que a meta description;
- não usar descrição genérica;
- não prometer resultado físico;
- manter datas consistentes com a publicação real.

---

## 10. Etapa 8: QA

### QA de navegação

- link da listagem abre o artigo;
- link `Editorial` volta para `conteudo/`;
- CTA `Entrar na lista` aponta para `index.html#cta-final` ou caminho relativo correto;
- CTA `Ler o manifesto` aponta para `manifesto.html` ou caminho relativo correto;
- menu mobile contém Editorial;
- footer contém Editorial.

### QA visual

- hero não quebra em mobile;
- corpo está legível;
- blocos visuais não estouram largura;
- CTAs cabem na tela;
- imagem carrega;
- hover não é necessário para entender o conteúdo;
- a cor de ação aparece apenas onde há prioridade real.

### QA textual

- acentuação correta em UTF-8;
- sem mojibake;
- sem termos banidos;
- sem promessa não validada;
- data e leitura corretas;
- título igual entre HTML, OG e listagem, salvo ajustes intencionais.

---

## 11. Etapa 9: Publicação

Antes de considerar publicado:

- artigo implementado;
- listagem atualizada;
- metadados revisados;
- QA mobile e desktop feito;
- texto revisado em tela;
- links testados.

Depois de publicar:

- registrar o artigo no planejamento interno, se houver;
- criar recortes para email ou redes;
- observar métricas de leitura e CTA;
- não alterar a tese do artigo por otimização superficial.

---

## 12. Regra de Segurança

Se houver dúvida entre publicar agora ou revisar mais uma vez, revisar.

O editorial do GMOVE ganha valor por critério. Publicar pouco e bem é coerente com a marca. Publicar muito e genérico enfraquece o produto.

