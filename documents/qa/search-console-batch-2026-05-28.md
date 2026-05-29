# Search Console Batch - 2026-05-28

## Escopo

Preparar a proxima rodada de Search Console sem tocar nos HTMLs ou imagens do Editorial, ja que a melhoria visual das imagens esta em outra frente.

Base auditada em producao: `https://gmove.app/`

Data da auditoria: 2026-05-28

## Resultado Da Auditoria Ao Vivo

- Propriedade URL-prefix `https://gmove.app/` verificada no Search Console por arquivo HTML.
- Arquivo de verificacao: `google6e48a74231fe8281.html`.
- URL do arquivo: `https://gmove.app/google6e48a74231fe8281.html`.
- Sitemap `https://gmove.app/sitemap.xml`: HTTP 200.
- Sitemap enviado no Search Console em 2026-05-28.
- Status no Search Console: processado.
- URLs no sitemap: 19.
- Paginas encontradas pelo Search Console: 19.
- URL Inspection solicitada para `/conteudo/` e 4 hubs editoriais em 2026-05-28.
- Falhas criticas encontradas: 0.
- Todas as URLs auditadas responderam HTTP 200 apos redirects esperados.
- Nenhuma URL auditada apresentou `noindex`.
- Todas as paginas HTML auditadas possuem 1 H1.
- JSON-LD parseou sem erro nas paginas que possuem dados estruturados.
- Artigos do Editorial possuem capa visivel e referencias AVIF/WebP.
- OG images principais responderam HTTP 200 quando presentes.

## URLs Para URL Inspection

Prioridade 1:

| URL | Tipo | Status tecnico | Acao |
| --- | --- | --- | --- |
| `https://gmove.app/conteudo/` | Editorial index | OK | Indexacao solicitada em 2026-05-28 |
| `https://gmove.app/conteudo/treino-com-criterio/` | Hub editorial | OK | Indexacao solicitada em 2026-05-28 |
| `https://gmove.app/conteudo/progressao/` | Hub editorial | OK | Indexacao solicitada em 2026-05-28 |
| `https://gmove.app/conteudo/consistencia/` | Hub editorial | OK | Indexacao solicitada em 2026-05-28 |
| `https://gmove.app/conteudo/recuperacao/` | Hub editorial | OK | Indexacao solicitada em 2026-05-28 |

Prioridade 2:

| URL | Tipo | Status tecnico | Acao |
| --- | --- | --- | --- |
| `https://gmove.app/conteudo/como-evoluir-no-treino-sem-motivacao/` | Artigo | OK | Inspecionar depois da rodada de imagens |
| `https://gmove.app/conteudo/por-que-voce-comeca-e-para-no-treino/` | Artigo | OK | Inspecionar depois da rodada de imagens |
| `https://gmove.app/conteudo/o-treino-perfeito-que-voce-nunca-consegue-seguir/` | Artigo | OK | Inspecionar depois da rodada de imagens |
| `https://gmove.app/conteudo/treinar-cansado-funciona/` | Artigo | OK | Inspecionar depois da rodada de imagens |
| `https://gmove.app/conteudo/o-problema-nao-e-falta-de-disciplina-e-falta-de-estrutura/` | Artigo | OK | Inspecionar depois da rodada de imagens |
| `https://gmove.app/conteudo/treinar-sem-registrar-e-repetir-sem-saber-se-esta-evoluindo/` | Artigo | OK | Inspecionar depois da rodada de imagens |
| `https://gmove.app/conteudo/por-que-trocar-de-treino-toda-hora-atrapalha-sua-evolucao/` | Artigo | OK | Inspecionar depois da rodada de imagens |
| `https://gmove.app/conteudo/o-treino-que-voce-consegue-repetir-vale-mais-do-que-o-treino-que-parece-perfeito/` | Artigo | OK | Inspecionar depois da rodada de imagens |

Prioridade 3:

| URL | Tipo | Status tecnico | Acao |
| --- | --- | --- | --- |
| `https://gmove.app/` | Home | OK | Inspecionar se ainda nao estiver indexada |
| `https://gmove.app/manifesto/` | Marca | OK | Inspecionar |
| `https://gmove.app/atualizacoes/` | Changelog publico | OK | Inspecionar |
| `https://gmove.app/seguranca/` | Confianca | OK | Inspecionar |
| `https://gmove.app/privacidade/` | Legal | OK | Inspecionar se necessario |
| `https://gmove.app/termos/` | Legal | OK | Inspecionar se necessario |

## Sitemap

Status: concluido.

O sitemap `/sitemap.xml` foi enviado, processado e retornou 19 paginas encontradas.

Importante: nao remover `google6e48a74231fe8281.html` do deploy publico. O Search Console usa esse arquivo para manter a propriedade verificada.

## Proxima Rodada Apos Artigo 10

Deploy do artigo 10 concluido em 2026-05-28. Proxima acao manual:

1. Reenviar `sitemap.xml` no Search Console.
2. Confirmar que o sitemap passa a listar 21 URLs.
3. Fazer URL Inspection de `https://gmove.app/conteudo/a-semana-e-a-menor-unidade-real-de-evolucao-no-treino/`.
4. Fazer URL Inspection de `https://gmove.app/conteudo/o-que-anotar-no-treino-para-saber-se-voce-esta-evoluindo/`.
5. Solicitar indexacao das duas URLs se ainda nao estiverem no Google.

## Observacao Tecnica Para O Proximo Deploy

O Firebase Hosting esta com `cleanUrls: true` e `trailingSlash: true`.

As URLs abaixo redirecionam com HTTP 301 para a versao final com barra:

- `https://gmove.app/manifesto.html` -> `/manifesto/`
- `https://gmove.app/atualizacoes.html` -> `/atualizacoes/`
- `https://gmove.app/privacidade.html` -> `/privacidade/`
- `https://gmove.app/seguranca.html` -> `/seguranca/`
- `https://gmove.app/termos.html` -> `/termos/`

Recomendacao para o proximo pacote, junto com a frente de imagens:

- trocar canonicals e `og:url` dessas paginas para as URLs finais com barra;
- trocar o sitemap para usar as URLs finais com barra;
- trocar links internos publicos que apontam para `.html` para apontarem direto para `/manifesto/`, `/atualizacoes/`, `/privacidade/`, `/seguranca/` e `/termos/`;
- revalidar sitemap, redirects e Search Console depois do deploy.

Nao aplicar essa troca no meio da frente de imagens para evitar conflito em HTMLs editoriais.
