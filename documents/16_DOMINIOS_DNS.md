# 16 - Dominios e DNS

## Estado Atual

Data da ultima checagem: 2026-05-29, horario de Sao Paulo.

- Dominio canonico do site: `https://gmove.app/`.
- Dominio adicional ativo no Firebase Hosting: `https://gmove.com.br/`.
- Redirect adicional ativo: `https://www.gmove.com.br/` -> `https://gmove.com.br/`.
- Redirect ativo: `https://www.gmove.app/` -> `https://gmove.app/`.
- Site Firebase Hosting: `gmove-landing`.
- URL padrao Firebase: `https://gmove-landing.web.app/`.
- DNS autoritativo de `gmove.com.br`: `a.auto.dns.br` e `b.auto.dns.br`.
- Provedor DNS: Registro.br.

Enquanto a decisao canonica continuar sendo `gmove.app`, `gmove.com.br` deve ser tratado como dominio adicional. O sitemap, robots, canonicals e dados estruturados continuam apontando para `https://gmove.app/` para evitar duplicacao de SEO.

## Registros Ativos No Registro.br

Registros observados na zona DNS de `gmove.com.br`.

| Host no Registro.br | Tipo | Valor |
| --- | --- | --- |
| `@` ou em branco | `A` | `199.36.158.100` |
| `@` ou em branco | `TXT` | `hosting-site=gmove-landing` |
| `www` | `CNAME` | `gmove-landing.web.app` |
| `_acme-challenge` | `TXT` | `XUgbYkWxj01buzCjUKRlSuz7g2Lgh4KL2dMpaOsnFwA` |
| `_acme-challenge.www` | `TXT` | `uyQ4DQTf0_cOYQIC0p6znaY72CyjuavXkG_pcLPZ_9M` |

Manter o TXT existente:

| Host no Registro.br | Tipo | Valor |
| --- | --- | --- |
| `@` ou em branco | `TXT` | `v=spf1 -all` |

Se o painel pedir o host completo, usar:

- `gmove.com.br` para os registros de apex.
- `www.gmove.com.br` para o CNAME de `www`.
- `_acme-challenge.gmove.com.br` para o TXT ACME do apex.
- `_acme-challenge.www.gmove.com.br` para o TXT ACME do `www`.

## Estado Validado Em Producao

- `https://gmove.com.br/` respondeu `HTTP 200` e serviu o mesmo site publicado.
- `https://www.gmove.com.br/` respondeu `HTTP 301` para `https://gmove.com.br/`.
- `https://www.gmove.app/` respondeu `HTTP 301` para `https://gmove.app/`.
- `nslookup -type=A gmove.com.br 8.8.8.8` retornou `199.36.158.100`.
- `nslookup -type=TXT gmove.com.br 8.8.8.8` retornou `hosting-site=gmove-landing`.
- `nslookup -type=CNAME www.gmove.com.br 8.8.8.8` retornou `gmove-landing.web.app`.
- TXT ACME de apex e `www` responderam no Google DNS.

Como HTTPS ja responde nos dois dominios, a verificacao externa indica certificado valido e dominio servido pelo Firebase Hosting.

## Rotina De Revalidacao

Quando mexer nos dominios, revalidar:

1. Verificar DNS:
   - `nslookup -type=A gmove.com.br 8.8.8.8`
   - `nslookup -type=TXT gmove.com.br 8.8.8.8`
   - `nslookup -type=CNAME www.gmove.com.br 8.8.8.8`
   - `nslookup -type=TXT _acme-challenge.gmove.com.br 8.8.8.8`
   - `nslookup -type=TXT _acme-challenge.www.gmove.com.br 8.8.8.8`
2. Consultar o Firebase Hosting Custom Domain e confirmar `HOST_ACTIVE`, `OWNERSHIP_ACTIVE` e `CERT_ACTIVE`.
3. Testar:
   - `https://gmove.com.br/` deve abrir o site.
   - `https://www.gmove.com.br/` deve redirecionar para `https://gmove.com.br/`.
   - `https://www.gmove.app/` deve redirecionar para `https://gmove.app/`.
4. Confirmar que `gmove.app` segue como canonical no HTML, sitemap e robots.

Observacao: os TXT de ACME podem mudar se o Firebase regenerar o desafio antes da configuracao no Registro.br. Se a validacao travar, consultar novamente o Custom Domain no Firebase e substituir os valores ACME pelos novos.
