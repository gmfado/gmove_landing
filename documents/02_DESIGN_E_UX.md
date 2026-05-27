# 02 - Design e UX

## Direção Visual

O site deve parecer extensão do app atual.

Tokens importados do app:

- fundo: `#090A0B`;
- superfícies: `#0F1113`, `#151719`, `#101214`;
- texto principal: `#F4F6F5`;
- texto secundário: `#ADB5B1`;
- ação: `#B8F24B`;
- informação: `#57C7FF`;
- sucesso: `#47D18C`;
- alerta: `#FFC857`;
- risco: `#FF5C5C`.

## Marca

- Usar `GMOVE`, sem hífen.
- Wordmark principal: `assets/brand/brand-wordmark.png`.
- Símbolo/favicons: `assets/brand/brand-symbol*`.
- Evitar lockup obrigatório entre símbolo e wordmark.

## Regras Visuais

- Hero deve usar produto real como sinal de primeira dobra.
- Prints do app são material nobre, não decoração.
- Cards devem ter raio até `8px`.
- Não usar paleta antiga azul/amarelo como tema dominante.
- Não usar texto que pareça marketing fitness genérico.
- Não depender de animação para explicar conteúdo.
- Respeitar `prefers-reduced-motion`.

## Efeitos Adotados

Pesquisa consultada:

- MDN Scroll-driven Animations: `animation-timeline` permite efeitos ligados ao scroll sem depender de listener JS pesado.
- MDN View Transition API: navegação entre páginas pode usar `@view-transition { navigation: auto; }` quando mesma origem.
- MDN `prefers-reduced-motion`: usuários que pedem menos movimento devem receber animações reduzidas.
- web.dev INP/long tasks: efeitos precisam evitar bloquear a thread principal.

Aplicação no site:

- barra de progresso no topo com `animation-timeline` e fallback seguro;
- hero com prints reais em profundidade visual;
- spotlight leve em cards de capacidade;
- transição de página progressiva via View Transition API;
- redução global de motion quando o sistema pedir.

## Próximos Efeitos Possíveis

- Destaque de seções por `view-timeline`, só depois de medir mobile.
- Animação editorial entre cards e artigos com View Transition nomeada.
- Imagens WebP/AVIF para prints e artigos, mantendo PNG/JPG fallback.
- Microinterações de botões por transform/opacity, sem layout shift.
