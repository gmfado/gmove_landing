# 15 - Atualizacoes Publicas

## Objetivo

Garantir que updates relevantes do GMOVE nao fiquem fora da pagina publica `atualizacoes.html`.

Esta pagina e o registro publico de evolucao do produto, site, Editorial, infra e acesso assistido.

## Regra Central

Todo update significativo deve entrar em `atualizacoes.html` antes de deploy, commit final ou entrega da frente.

Se a mudanca nao entrar na pagina, registrar explicitamente em `documents/20_TRABALHO_ATIVO.md` por que ela nao foi considerada update publico.

## O Que Conta Como Update Significativo

Entrar na pagina quando houver:

- mudanca de produto, promessa, narrativa ou posicionamento;
- nova pagina publica, nova secao relevante ou nova URL indexavel;
- mudanca visual importante na landing, Editorial ou paginas institucionais;
- novo artigo, hub editorial ou reorganizacao editorial relevante;
- otimizacao de performance perceptivel para o usuario;
- deploy em producao;
- mudanca de dominio, Firebase, sitemap, robots, Search Console, analytics ou Ads;
- ajuste legal, de privacidade, seguranca ou dados;
- mudanca de status de acesso assistido, cohort, teste ou validacao.

Nao precisa entrar quando for:

- correcao pequena de typo sem impacto publico;
- ajuste interno de docs sem efeito na experiencia ou governanca;
- alteracao experimental descartada antes de entrega;
- mudanca local que nao foi validada nem publicada.

## Status Permitidos

- `Publicado`: ja esta no site/app ou em producao.
- `Em validacao`: configurado ou preparado, mas depende de propagacao, DNS, certificado, review ou teste externo.
- `Documentado`: mudanca operacional importante, sem superficie direta para o usuario final.
- `Pesquisado`: aprendizado ou direcao, sem compromisso de entrega.

## Regra De Versao

Enquanto o GMOVE estiver em acesso assistido:

- usar `v0.x.y`;
- subir `minor` quando mudar experiencia, narrativa publica ou capacidade importante;
- subir `patch` quando for ajuste, performance, infra, documentacao operacional ou refinamento sem mudar a promessa central;
- reservar `v1.0.0` para uma mudanca real de contrato publico do produto.

## Template De Entrada

Cada update publico deve ter:

- versao;
- data;
- status;
- titulo claro;
- resumo em uma frase;
- bloco `O que mudou`;
- bloco `Por que importa`;
- quando houver pendencia, deixar claro que esta em validacao ou pesquisado.

## Regra De Linguagem Publica

`atualizacoes.html` e o Editorial devem falar com usuario/leitor, nao com operador de SEO ou infraestrutura.

Evitar no texto publico: SEO, Search Console, sitemap, JSON-LD, hubs, paginas pilar, assets, deploy, DNS, HTTP, formatos de imagem e organizacao interna do Editorial.

Traduzir o detalhe tecnico para impacto percebido: leitura mais clara, pagina mais leve, caminho mais simples, conteudo mais facil de encontrar ou experiencia mais confiavel.

## Checklist Antes De Encerrar Uma Frente

- Conferir `documents/17_REGISTRO_OPERACIONAL.md` para decidir onde cada registro deve ficar.
- Conferir se a mudanca se encaixa em `O Que Conta Como Update Significativo`.
- Atualizar `atualizacoes.html`, se sim.
- Rodar `.\tools\verify-public-copy.ps1` quando tocar copy publica.
- Atualizar JSON-LD `ItemList` da pagina, se uma entrada nova foi criada.
- Validar links, JSON-LD e sitemap quando a pagina ou URLs mudarem.
- Registrar a decisao em `documents/11_IMPLEMENTATION_LOG.md` e `documents/05_QA_RELEASE.md` quando houver QA, deploy ou mudanca estrutural.
