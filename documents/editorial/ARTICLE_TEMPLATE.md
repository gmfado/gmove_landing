# GMOVE Article Template

> Template editorial interno · Versão 1.0 · Abril de 2026  
> Usar para novos ensaios em `conteudo/<slug>/index.html`

---

## 1. Metadados do Artigo

Preencher antes de escrever o HTML.

```md
Título:
Subtítulo:
Slug:
Categoria editorial:
Tempo estimado de leitura:
Mês e ano:
Descrição SEO:
Descrição Open Graph:
Imagem principal:
CTA final:
Status: rascunho | revisão | pronto para implementar | publicado
```

### Categorias recomendadas

- Método
- Consistência
- Progressão
- Clareza
- Estrutura
- Produto

Usar apenas uma categoria principal por artigo.

---

## 2. Critério de Escolha do Tema

Antes de escrever, responder:

1. Qual crença comum sobre treino este artigo questiona?
2. Qual é a alternativa proposta pelo GMOVE?
3. O que o leitor deve entender de forma diferente ao terminar?
4. Como isso conversa com método, progressão ou clareza?
5. Qual conexão natural existe com o produto?

Se as respostas forem vagas, o artigo ainda não deve ser escrito.

---

## 3. Estrutura de Conteúdo

### Hero

```md
Categoria:
Título:
Subtítulo:
Meta: Leitura · X min · Mês de 2026 · Editorial GMOVE
```

Diretriz:

- O título deve abrir uma tensão.
- O subtítulo deve explicar o ângulo sem entregar tudo.
- O hero não deve vender o app.

### Abertura

Função: fazer o leitor reconhecer o problema.

Modelo:

```md
[Situação real e específica.]
[Tensão: por que a resposta comum não funciona.]
[Primeira virada de ponto de vista.]
```

### Ideia central

Função: nomear a tese do artigo.

Modelo:

```md
O problema não é [sintoma].
É [causa estrutural].
```

ou

```md
[Muleta comum] oscila.
[Estrutura proposta] progride.
```

### Desenvolvimento

Usar de 3 a 5 blocos principais.

Cada bloco deve conter:

- um subtítulo claro;
- uma ideia por seção;
- exemplos concretos;
- conexão com processo, semana, sessão, registro ou progressão.

### Blocos visuais opcionais

Usar com intenção, não como enfeite.

- `article-impact`: frase de impacto curta.
- `article-concept`: comparação visual entre dois conceitos.
- `article-method`: sequência prática de 3 passos.
- `article-pullkey`: síntese conceitual.
- `article-quote`: frase memorável.
- `article-divider`: pausa visual entre blocos densos.

### Fechamento

Função: consolidar a mudança de lente.

Evitar:

- “agora é com você”;
- frase motivacional;
- promessa de resultado;
- resumo burocrático.

Preferir:

- síntese forte;
- retorno à tensão inicial;
- frase que reforce método acima de improviso.

### CTA final

Modelo:

```md
Título:
[Frase curta conectada ao tema.]

Texto:
[O GMOVE organiza/ajuda/estrutura algo ligado ao artigo, sem exagerar.]

Ações:
Entrar na lista
Ler o manifesto
```

---

## 4. Modelo de Copy Completo

```md
# [Título do artigo.]

[Subtítulo com ponto de vista. Uma ou duas frases.]

## [Primeiro subtítulo]

[Abertura com tensão reconhecível.]

[Reenquadramento: por que a pergunta comum está incompleta.]

> [Frase de impacto opcional.]

## [Segundo subtítulo]

[Explicação do mecanismo.]

[Exemplo prático ligado à semana, sessão ou decisão de treino.]

## [Terceiro subtítulo]

[Aplicação prática.]

[Conectar estrutura e critério.]

## [Quarto subtítulo]

[Síntese do argumento.]

[Como o leitor deve pensar a partir daqui.]

## O que fica, no fim.

[Fechamento com retorno à tese.]

[CTA conectado ao produto.]
```

---

## 5. Modelo HTML Base

Usar o artigo existente como referência principal:

`conteudo/como-evoluir-no-treino-sem-motivacao/index.html`

### Itens obrigatórios no `<head>`

- `lang="pt-BR"`
- `<meta charset="UTF-8" />`
- descrição SEO específica
- canonical do slug
- Open Graph com título, descrição, URL, imagem e locale
- Twitter Card
- favicons com caminho relativo correto
- JSON-LD do tipo `Article`
- `css/style.css`
- `css/editorial.css`

### Itens obrigatórios no corpo

- nav consistente com o site;
- breadcrumb simples de volta para Editorial;
- hero do artigo;
- corpo dentro de `.article-body__inner`;
- CTA final;
- rodapé com link de volta ao Editorial;
- footer padrão;
- `js/main.js`.

---

## 6. Padrão de SEO

### Title tag

```md
[Título do artigo] — GMOVE
```

### Meta description

Até 155 caracteres. Deve conter:

- a tensão principal;
- o ponto de vista do artigo;
- nenhuma promessa de resultado.

Exemplo:

```md
Motivação não é combustível de processo. É sintoma dele. Por que estrutura supera inspiração em qualquer janela maior que uma semana.
```

### Slug

Regras:

- minúsculo;
- sem acento;
- com hífen;
- direto;
- sem data;
- sem palavra irrelevante.

Exemplo:

```md
como-evoluir-no-treino-sem-motivacao
```

---

## 7. Checklist Antes de Implementar

- O título tem tensão.
- O subtítulo tem ponto de vista.
- O artigo tem uma tese, não apenas dicas.
- Há pelo menos um bloco visual com função clara, se o tema pedir.
- O CTA conversa com o tema.
- A categoria está consistente.
- A descrição SEO não é genérica.
- O slug é limpo.
- A imagem principal existe e tem caminho correto.
- Não há promessa de prazo, resultado corporal ou funcionalidade não validada.

---

## 8. Checklist Pós-Implementação

- Artigo abre sem erro pelo caminho `conteudo/<slug>/`.
- A listagem `conteudo/index.html` aponta para o novo artigo.
- A ordem dos ensaios foi atualizada.
- `aria-current` e links relativos estão corretos.
- Metadados sociais apontam para a URL final.
- JSON-LD está válido.
- Acentuação aparece corretamente em UTF-8.
- O layout funciona em mobile.
- O CTA final aponta para `index.html#cta-final`.
- O artigo volta para `conteudo/` sem quebrar navegação.

