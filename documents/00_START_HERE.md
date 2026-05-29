# 00 - Start Here

## Objetivo

Este é o documento de abertura do GMOVE Website.

O site público deve acompanhar o GMOVE atual, que vive em:

`C:\Users\gmfad\Documents\Projetos\gmove-app-renew`

## Produto Que o Site Deve Comunicar

GMOVE é um treinador inteligente de musculação.

Ele:

- entende o usuário;
- cria um plano;
- recomenda o treino ideal de hoje;
- guia a execução série por série;
- adapta carga, volume e exercícios;
- respeita dor, restrição e equipamento;
- mostra evolução real.

## Estrutura do Site

- `index.html`: landing pública.
- `manifesto.html`: ponto de vista expandido.
- `atualizacoes.html`: histórico público de versões e updates significativos.
- `conteudo/`: Editorial GMOVE.
- `privacidade.html` e `termos.html`: páginas legais.
- `assets/brand/`: marca atual importada do app.
- `assets/screenshots/`: prints atuais usados na landing.
- `documents/`: documentação de produto, design, SEO, assets e QA do site.
- `documents/06_FEATURES_PESQUISA_2026.md`: pesquisa e roadmap sugerido de features.
- `documents/07_DIRECAO_PREMIUM.md`: critérios para a camada visual premium.
- `documents/08_TRABALHO_SIMULTANEO.md`: protocolo para conversas paralelas e handoff entre frentes.
- `documents/09_SEARCH_CONSOLE_INDEXACAO.md`: rotina de Search Console, sitemap, robots e Ads/AdSense.
- `documents/10_MATRIZ_PAGINAS_PUBLICAS.md`: matriz de URLs, owners, SEO e próxima ação.
- `documents/12_INVENTARIO_ASSETS.md`: inventário de imagens, vídeos, marca e otimização.
- `documents/13_GIT_LEGADOS_RELEASE.md`: modelo de branch, commit, release e decisão sobre legados.
- `documents/14_MELHORIAS_FEATURES_PESQUISA_2026.md`: pesquisa aplicada de melhorias e features para site, Editorial e produto.
- `documents/15_ATUALIZACOES_PUBLICAS.md`: regra para registrar updates publicos e versionar marcos relevantes.
- `documents/16_DOMINIOS_DNS.md`: estado dos dominios, registros DNS e validacao de Firebase Hosting.
- `documents/17_REGISTRO_OPERACIONAL.md`: mapa de onde registrar log, QA, deploy, handoff, DNS, SEO, assets e updates publicos.

## Ordem de Trabalho

1. Entender o estado atual do app.
2. Atualizar marca, paleta, copy e assets do site.
3. Validar screenshots e mobile.
4. Atualizar `atualizacoes.html` quando houver update significativo.
5. Atualizar docs do site.
6. Validar links, SEO, performance básica e deploy Firebase.

Quando houver mais de uma conversa trabalhando ao mesmo tempo, começar por `documents/08_TRABALHO_SIMULTANEO.md` e registrar a frente em `documents/20_TRABALHO_ATIVO.md`.

## Onde Registrar O Trabalho

Antes de encerrar uma frente, consultar `documents/17_REGISTRO_OPERACIONAL.md`.

Resumo rapido:

- mudanca relevante e decisao interna: `documents/11_IMPLEMENTATION_LOG.md`;
- QA, evidencia e deploy: `documents/05_QA_RELEASE.md`;
- pendencia e handoff: `documents/20_TRABALHO_ATIVO.md`;
- update publico significativo: `atualizacoes.html`;
- duvida sobre changelog publico: `documents/15_ATUALIZACOES_PUBLICAS.md`.

## Regras de Produto

Não comunicar o site como se o app estivesse amplamente público.

O estado correto é:

- app real existe;
- release atual foi validado em device físico;
- cohort assistido pequeno está autorizado como próximo passo;
- abertura pública ampla ainda não deve ser prometida.

## Regra Editorial

Editorial não é blog genérico.

Ele existe para aprofundar a tese do produto e preparar SEO/engajamento com conteúdo original, útil e coerente com o app.
