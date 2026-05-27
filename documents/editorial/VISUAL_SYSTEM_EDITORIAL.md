# GMOVE Visual System Editorial

> Sistema visual editorial · Versão 1.0 · Abril de 2026  
> Baseado em `css/style.css` e `css/editorial.css`

---

## 1. Princípio Visual

O Editorial GMOVE deve parecer uma extensão natural do produto, não uma área separada do site.

A experiência visual precisa comunicar:

- precisão;
- método;
- profundidade;
- leitura confortável;
- tecnologia discreta;
- premium sem excesso decorativo.

O editorial deve ter ritmo de ensaio: abertura forte, respiro, blocos conceituais, síntese e ação.

---

## 2. Paleta

### Base estrutural

- Fundo principal: `#090A0B`
- Superfície: `#0F1113`
- Superfície elevada: `#151719`
- Borda: `rgba(255, 255, 255, 0.06)`

Uso:

- fundo de páginas;
- cards editoriais;
- blocos conceituais;
- áreas de CTA;
- divisões sutis.

### Informação GMOVE

- Principal: `#57C7FF`
- Médio: `#2BA8E8`
- Dim: `rgba(87, 199, 255, 0.12)`

Uso:

- categorias;
- linhas de seção;
- gráficos conceituais;
- hover discreto;
- sinal de estrutura e método.

### Ação GMOVE

- Principal: `#B8F24B`
- Glow: `rgba(184, 242, 75, 0.22)`

Uso:

- ação;
- destaque de tese;
- CTA primário;
- pontos de ênfase real;
- marcação de frase importante.

Regra: a cor de ação deve ser usada com parcimônia. Se tudo chama atenção, nada tem prioridade.

### Texto

- Texto principal: `#F4F6F5`
- Texto secundário: `#ADB5B1`
- Texto terciário: `#737D78`

Uso:

- títulos em texto principal;
- corpo em texto secundário;
- metadados e notas em texto terciário.

---

## 3. Tipografia

Fonte oficial:

```css
Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
```

### Hierarquia editorial

- H1 do artigo: forte, curto, com quebra natural.
- Subtítulo: maior que corpo, menor que headline, com leitura fluida.
- Corpo: 16.5px a 18px, linha longa o suficiente para leitura confortável.
- H2: seção conceitual, não intertítulo decorativo.
- Metadados: pequenos, discretos, em texto terciário.

### Regras

- Não usar fontes alternativas sem decisão de sistema.
- Não usar caixa alta em blocos longos.
- Não usar tracking negativo em excesso.
- Não transformar o artigo em landing page.
- Priorizar legibilidade em mobile.

---

## 4. Layout da Listagem Editorial

Arquivo base:

`conteudo/index.html`

### Hero

Deve conter:

- eyebrow `Editorial GMOVE`;
- headline `Movimento Inteligente.`;
- subtítulo com promessa editorial;
- fundo escuro com grid sutil e acento de informação.

### Card em destaque

Usar para o artigo principal ou mais recente.

Elementos:

- imagem ou visual proprietário;
- categoria;
- título;
- excerpt de 2 a 4 linhas;
- tempo de leitura;
- data;
- CTA textual `Ler ensaio`.

O card deve parecer curado, não uma grade automática de blog.

### Grid secundário

Ativar quando houver mais de um artigo.

Regras:

- no mínimo 2 artigos além do destaque para justificar a grade;
- cards limpos;
- sem imagem obrigatória em todos os cards;
- excerpts curtos e específicos;
- metadados consistentes.

### Nota de continuidade

Enquanto houver poucos artigos, manter uma nota honesta:

> Novos ensaios, quando estiverem prontos. Sem cronograma — só critério.

Essa frase é coerente com o posicionamento do produto em evolução ativa.

---

## 5. Layout do Artigo

Arquivo base:

`conteudo/como-evoluir-no-treino-sem-motivacao/index.html`

### Hero do artigo

Componentes:

- link de retorno `Editorial`;
- categoria;
- H1;
- subtítulo;
- tempo de leitura;
- mês e ano;
- assinatura `Editorial GMOVE`.

O hero deve comunicar leitura premium, não notícia.

### Corpo

Largura recomendada:

- máximo: 680px;
- alinhamento central;
- blocos com respiro amplo.

O texto deve ser visualmente leve mesmo quando a ideia for densa.

---

## 6. Componentes Editoriais

### `article-impact`

Uso:

- frase central;
- quebra de ritmo;
- tese em forma curta.

Evitar usar mais de 2 vezes no mesmo artigo.

### `article-concept`

Uso:

- comparação entre dois modelos mentais;
- mini gráfico;
- representação de processo.

Exemplo atual:

- motivação oscila;
- consistência progride.

### `article-method`

Uso:

- sequência prática de até 3 passos;
- tradução do conceito para ação.

Não usar para listas genéricas.

### `article-pullkey`

Uso:

- síntese mais longa;
- parágrafo que merece pausa visual.

### `article-quote`

Uso:

- frase memorável do próprio artigo.

Não usar citações externas sem fonte e revisão.

### `article-cta`

Uso:

- fechamento do artigo;
- conexão natural com GMOVE;
- ação para lista ou manifesto.

---

## 7. Direção de Imagem

### O que funciona

- imagens proprietárias;
- screenshots reais do app;
- composições abstratas com sensação de método;
- texturas escuras e precisas;
- gráficos simples;
- movimento ou progressão visual;
- contraste entre estrutura e ruído.

### O que evitar

- banco de imagem de academia;
- corpos idealizados;
- poses fitness genéricas;
- estética de suplemento;
- excesso de neon;
- fotos motivacionais;
- mockups falsos que prometem telas inexistentes.

### Imagem de capa

Cada artigo pode ter uma imagem própria em:

```txt
conteudo/<slug>/preset-imagem-conteudo-1.jpg
```

A imagem deve apoiar o conceito do texto. Não precisa ilustrar literalmente o treino.

---

## 8. Responsividade

Em mobile:

- texto deve continuar legível;
- CTAs devem ocupar largura confortável;
- blocos visuais devem empilhar;
- hero deve manter impacto sem ocupar tela demais;
- cards devem ficar em coluna única;
- nada deve depender de hover para compreensão.

Regra editorial: mobile não é versão reduzida. É leitura principal.

---

## 9. Acessibilidade

Obrigatório:

- `lang="pt-BR"`;
- `meta charset="UTF-8"`;
- hierarquia correta de heading;
- links com texto compreensível;
- imagens com `alt` quando informativas;
- `aria-hidden="true"` em visuais puramente decorativos;
- contraste suficiente;
- foco preservado em botões e links.

Não usar elementos visuais que comuniquem informação sem texto equivalente.

---

## 10. Regras de Consistência

- Reutilizar `css/style.css` e `css/editorial.css`.
- Não criar um CSS paralelo para cada artigo sem necessidade.
- Não alterar tokens globais para resolver problema local.
- Não usar estilos inline, exceto quando já existir padrão pontual validado.
- Não criar componentes visuais que pareçam de outra marca.
- Não usar a cor de ação como decoração.
- Não publicar artigo sem revisar mobile.

---

## 11. Critério Final

A página editorial deve parecer inevitável dentro do GMOVE: mesma filosofia, mesma contenção visual, mesma precisão de linguagem.

