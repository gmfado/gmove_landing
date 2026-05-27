# 11 - Implementation Log

## 2026-05-25 - Atualização para GMOVE Renew

### Estado

- Site foi adaptado para o app atual em `gmove-app-renew`.
- Marca pública mudou para `GMOVE`.
- Assets finais de marca foram importados do app.
- Favicons e ícones foram regenerados.
- Prints novos foram capturados do Android físico e aplicados na landing.
- Landing passou a comunicar treinador inteligente de musculação.
- Paleta foi alinhada ao app atual.
- Documentação do site foi reorganizada em padrão semelhante ao app.

### Arquivos-chave

- `index.html`
- `css/style.css`
- `css/premium.css`
- `css/editorial.css`
- `js/main.js`
- `assets/brand/`
- `assets/screenshots/`
- `documents/`

### Validação

- `git diff --check` passou; o Git apenas avisou sobre CRLF no Windows.
- Varredura de links e assets locais passou.
- Varredura de guardrails passou fora dos ignores de deploy.
- QA visual em navegador local passou em desktop 1280 x 720 e mobile 390 x 844.
- Menu mobile, home, Editorial e artigo foram verificados sem overflow horizontal.
- Prints do app foram recapturados via `adb shell screencap` + `adb pull` para preservar PNG binário válido.

### Próximo Passo

Antes de deploy, revisar o diff final e decidir se arquivos antigos (`print1.png` a `print5.png`, logos legados e referências do Copilot) devem ser removidos do repositório ou apenas permanecer ignorados no Firebase.

## 2026-05-27 - Camada de produto, confiança e Editorial

### Estado

- Home recebeu a seção `Como funciona`, com simulador de decisão do treino.
- Hero ficou mais direto: plano, histórico, energia, equipamento, carga e retorno.
- Home recebeu seção de confiança com ponte para `seguranca.html`.
- Criada a página `seguranca.html` com princípios de dados, limites da inteligência, ads/mensuração e contato.
- Editorial recebeu páginas pilar: `treino-com-criterio`, `progressao`, `consistencia` e `recuperacao`.
- Listagem do Editorial ganhou cards de hubs com imagens, linkagem interna e JSON-LD `hasPart`.
- Navegação global foi atualizada para incluir `Como funciona` e `Segurança`.
- `sitemap.xml` e `firebase.json` foram atualizados para as novas URLs.

### Validação

- `node --check js/main.js` passou.
- `git diff --check` passou; o Git apenas avisou sobre conversão LF/CRLF no Windows.
- JSON-LD: 15 blocos parseados sem erro.
- Varredura local de `href/src`: todos os destinos internos existem.
- Sitemap XML parseou com 18 URLs, incluindo os quatro hubs e `seguranca.html`.
- Browser desktop 1366 x 900: home, Editorial e hub `progressao` sem overflow horizontal, sem imagens quebradas e com CSS carregado.
- Browser mobile 390 x 844: home, menu mobile, `seguranca.html` e Editorial sem overflow horizontal.
- Simulador da home validado: ao selecionar `Casa`, o resultado muda para treino adaptado.
- Console do navegador sem erros durante a rodada visual.

### Evidências locais

- `documents/qa/gmove-home-decision-desktop-2026-05-27.png`
- `documents/qa/gmove-home-decision-mobile-2026-05-27.png`
- `documents/qa/gmove-editorial-hubs-desktop-2026-05-27.png`
- `documents/qa/gmove-editorial-hubs-mobile-2026-05-27.png`
- `documents/qa/gmove-security-mobile-2026-05-27.png`

### Ajuste visual da seção Como funciona

- Adicionados efeitos de trilha nos passos do raciocínio, sinal nos cards de contexto e brilho controlado nos chips ativos.
- O painel agora pulsa quando a recomendação muda, reforçando visualmente que o app recalculou a decisão.
- No mobile, efeitos contínuos ficam desligados para preservar legibilidade e desempenho; apenas a atualização por interação permanece.
- Validação mobile 390 x 844 passou sem overflow horizontal e sem erros no console.

## 2026-05-27 - Publicação Firebase Hosting

### Estado

- Site publicado em produção no Firebase Hosting, projeto `gmove-landing`.
- URL padrão: `https://gmove-landing.web.app/`.
- Domínio `https://gmove.app/` validado com HTTP 200 e conteúdo novo.
- `https://www.gmove.app/` não respondeu no teste desta rodada.

### Validação

- `node --check js/main.js` passou.
- `git diff --check` passou; o Git apenas avisou sobre conversão LF/CRLF no Windows.
- Varredura local de HTML, links internos e JSON-LD passou.
- Dry-run do Firebase passou antes do deploy real.
- Rotas ao vivo verificadas: `/`, `/conteudo/`, `/seguranca/`, `/privacidade/`, `/termos/`, `/sitemap.xml` e `/robots.txt`.
- Browser na versão publicada: home, `#como-funciona`, Editorial e menu mobile sem overflow horizontal, sem imagens quebradas e sem erros de console.

### Evidências ao vivo

- `documents/qa/gmove-live-how-mobile-2026-05-27.png`
- `documents/qa/gmove-live-editorial-mobile-2026-05-27.png`

## 2026-05-27 - Documentacao operacional para frentes paralelas

### Estado

- Criado protocolo de trabalho simultaneo em `documents/08_TRABALHO_SIMULTANEO.md`.
- Criado roteiro de Search Console, indexacao, robots, sitemap e Ads/AdSense em `documents/09_SEARCH_CONSOLE_INDEXACAO.md`.
- Criada matriz de paginas publicas em `documents/10_MATRIZ_PAGINAS_PUBLICAS.md`.
- Criado inventario de assets em `documents/12_INVENTARIO_ASSETS.md`.
- Criado modelo de Git, legados e release em `documents/13_GIT_LEGADOS_RELEASE.md`.
- Criada pesquisa aplicada de melhorias e features em `documents/14_MELHORIAS_FEATURES_PESQUISA_2026.md`.
- `README.md`, `00_START_HERE.md`, `20_TRABALHO_ATIVO.md` e docs editoriais foram atualizados para apontar o novo fluxo.
- `firebase.json` passou a ignorar `video.mp4`, pois o arquivo nao esta referenciado no site atual e tem peso alto.
- `video.mp4` foi removido do workspace pelo usuario por nao ser necessario; o ignore permanece como protecao.

### Validacao

- Matriz de paginas foi baseada em HTML real, canonicals e sitemap atual.
- Inventario de assets foi baseado em auditoria local de tamanho dos arquivos.
- Fontes oficiais consultadas para Search Console, sitemap, robots, conteudo people-first e AdSense foram registradas no documento 09.

## 2026-05-27 - Ajuste de CTA publicado

### Estado

- CTA principal do hero passou de `Ver como decide` para `Como o treino é escolhido`.
- Alteracao publicada via Firebase Hosting no projeto `gmove-landing`.

### Validacao

- `node --check js/main.js` passou.
- Varredura local de links e JSON-LD passou.
- `git diff --check` passou; apenas avisos LF/CRLF do Windows.
- `https://gmove.app/` validado com o CTA novo e sem o texto antigo.
- Rotas `/`, `/conteudo/`, `/sitemap.xml` e `/robots.txt` responderam HTTP 200 apos deploy.

## 2026-05-27 - Diagnostico e configuracao inicial de www

### Estado

- DNS atual de `www.gmove.app`: CNAME para `gmove.app`.
- `https://www.gmove.app/` ainda nao responde corretamente.
- Custom Domain `www.gmove.app` criado no Firebase Hosting com `redirectTarget` para `gmove.app`.
- Firebase reconheceu `HOST_ACTIVE` e `OWNERSHIP_ACTIVE`.
- Certificado SSL ficou em `CERT_PREPARING`.

### Pendencia

- Atualizar DNS no Hostinger: CNAME `www` deve apontar para `gmove-landing.web.app`, conforme `requiredDnsUpdates` retornado pelo Firebase.
- Revalidar `https://www.gmove.app/` apos propagacao DNS e emissao do certificado.
