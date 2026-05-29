# 16 - Dominios e DNS

## Estado Atual

Data da ultima checagem: 2026-05-27, horario de Sao Paulo.

- Dominio canonico do site: `https://gmove.app/`.
- Dominio adicional criado no Firebase Hosting: `gmove.com.br`.
- Redirect adicional criado no Firebase Hosting: `www.gmove.com.br` -> `gmove.com.br`.
- Site Firebase Hosting: `gmove-landing`.
- URL padrao Firebase: `https://gmove-landing.web.app/`.
- DNS autoritativo de `gmove.com.br`: `a.auto.dns.br` e `b.auto.dns.br`.
- Provedor DNS: Registro.br.

Enquanto a decisao canonica continuar sendo `gmove.app`, `gmove.com.br` deve ser tratado como dominio adicional. O sitemap, robots, canonicals e dados estruturados continuam apontando para `https://gmove.app/` para evitar duplicacao de SEO.

## Registros Para Adicionar No Registro.br

Adicionar estes registros na zona DNS de `gmove.com.br`.

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

## Estado Firebase Apos Criacao

`gmove.com.br`:

- `hostState`: `HOST_UNHOSTED`.
- `ownershipState`: `OWNERSHIP_MISSING`.
- `certState`: `CERT_VALIDATING`.
- `redirectTarget`: nenhum, deve servir o site.
- DNS requerido: `A 199.36.158.100` e `TXT hosting-site=gmove-landing`.

`www.gmove.com.br`:

- `hostState`: `HOST_UNHOSTED`.
- `ownershipState`: `OWNERSHIP_MISSING`.
- `certState`: `CERT_VALIDATING`.
- `redirectTarget`: `gmove.com.br`.
- DNS requerido: `CNAME gmove-landing.web.app`.

## Validacao Depois De Alterar DNS

Depois de salvar os registros no Registro.br:

1. Aguardar propagacao. O SOA atual do Registro.br usa TTL de 900s, mas a validacao de certificado pode levar mais.
2. Verificar DNS:
   - `nslookup -type=A gmove.com.br 8.8.8.8`
   - `nslookup -type=TXT gmove.com.br 8.8.8.8`
   - `nslookup -type=CNAME www.gmove.com.br 8.8.8.8`
   - `nslookup -type=TXT _acme-challenge.gmove.com.br 8.8.8.8`
   - `nslookup -type=TXT _acme-challenge.www.gmove.com.br 8.8.8.8`
3. Consultar o Firebase Hosting Custom Domain ate `HOST_ACTIVE`, `OWNERSHIP_ACTIVE` e `CERT_ACTIVE`.
4. Testar:
   - `https://gmove.com.br/` deve abrir o site.
   - `https://www.gmove.com.br/` deve redirecionar para `https://gmove.com.br/`.
5. Confirmar que `gmove.app` segue como canonical no HTML, sitemap e robots.

Observacao: os TXT de ACME podem mudar se o Firebase regenerar o desafio antes da configuracao no Registro.br. Se a validacao travar, consultar novamente o Custom Domain no Firebase e substituir os valores ACME pelos novos.
