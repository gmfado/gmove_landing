$ErrorActionPreference = 'Stop'

$repoRoot = Split-Path -Parent $PSScriptRoot

$rootHtml = Get-ChildItem -Path $repoRoot -Filter '*.html' -File |
  Where-Object { $_.Name -notlike 'Microsoft Copilot*' }

$contentHtml = Get-ChildItem -Path (Join-Path $repoRoot 'conteudo') -Filter '*.html' -File -Recurse

$htmlFiles = @($rootHtml + $contentHtml) | Sort-Object FullName -Unique

$rules = @(
  [pscustomobject]@{
    Name = 'SEO ou metadados internos'
    Pattern = '(?i)\bSEO\b|Search Console|Google Ads|Ads/AdSense|AdSense|sitemap|robots(?:\.txt)?|indexa(?:ç|c)(?:ã|a)o|indexar|SERP|CTR|palavras?-chave|keywords?|meta description|canonical|JSON-LD|schema|breadcrumb|cache-busting'
  },
  [pscustomobject]@{
    Name = 'Organizacao editorial interna'
    Pattern = '(?i)(?<![a-z_-])hubs?(?![a-z_-])|p[áa]ginas? pilar|conte[úu]do pilar|clusters?|links internos|linkagem|slugs?\b|\bposts\b|arquitetura editorial|estrat[eé]gia editorial|inten[cç][aã]o de leitura'
  },
  [pscustomobject]@{
    Name = 'Infraestrutura ou formato tecnico'
    Pattern = '(?i)\bDNS\b|Firebase(?: Hosting)?|Hosting\b|HTTP\s*200|deploy(?:s|ado|ada)?|redirects?|URLs?\b|assets?\b|AVIF|WebP|JPG|fallback|<picture>|CSS|text-wrap|lazy loading|alt text|build\b|QA\b|overflow'
  }
)

function Get-PublicCopyText {
  param([string]$Html)

  $titleValues = [regex]::Matches($Html, '(?is)<title\b[^>]*>(.*?)</title>') |
    ForEach-Object { $_.Groups[1].Value }

  $metaValues = [regex]::Matches($Html, '(?is)<meta\b[^>]*>') | ForEach-Object {
    $tag = $_.Value
    if ($tag -match '(?i)\b(?:name|property)\s*=\s*("description"|"og:title"|"og:description"|"twitter:title"|"twitter:description"|''description''|''og:title''|''og:description''|''twitter:title''|''twitter:description'')') {
      $contentMatch = [regex]::Match($tag, '(?is)\bcontent\s*=\s*("([^"]*)"|''([^'']*)'')')
      if ($contentMatch.Success) {
        if ($contentMatch.Groups[2].Success) { $contentMatch.Groups[2].Value } else { $contentMatch.Groups[3].Value }
      }
    }
  }

  $bodyMatch = [regex]::Match($Html, '(?is)<body\b[^>]*>(.*?)</body>')
  if (-not $bodyMatch.Success) {
    $headOnly = "$($titleValues -join ' ') $($metaValues -join ' ')"
    return ([regex]::Replace([System.Net.WebUtility]::HtmlDecode($headOnly), '\s+', ' ')).Trim()
  }

  $body = $bodyMatch.Groups[1].Value

  $attributeValues = [regex]::Matches(
    $body,
    '(?is)\b(?:alt|aria-label|title|placeholder)\s*=\s*("([^"]*)"|''([^'']*)'')'
  ) | ForEach-Object {
    if ($_.Groups[2].Success) { $_.Groups[2].Value } else { $_.Groups[3].Value }
  }

  $visible = $body
  $visible = [regex]::Replace($visible, '(?is)<!--.*?-->', ' ')
  $visible = [regex]::Replace($visible, '(?is)<script\b.*?</script>', ' ')
  $visible = [regex]::Replace($visible, '(?is)<style\b.*?</style>', ' ')
  $visible = [regex]::Replace($visible, '(?is)<svg\b.*?</svg>', ' ')
  $visible = [regex]::Replace($visible, '(?is)<[^>]+>', ' ')

  $combined = "$($titleValues -join ' ') $($metaValues -join ' ') $visible $($attributeValues -join ' ')"
  $decoded = [System.Net.WebUtility]::HtmlDecode($combined)
  return ([regex]::Replace($decoded, '\s+', ' ')).Trim()
}

$violations = New-Object System.Collections.Generic.List[object]

foreach ($file in $htmlFiles) {
  $html = Get-Content -LiteralPath $file.FullName -Raw -Encoding UTF8
  $publicText = Get-PublicCopyText -Html $html

  foreach ($rule in $rules) {
    foreach ($match in [regex]::Matches($publicText, $rule.Pattern)) {
      $start = [Math]::Max(0, $match.Index - 70)
      $length = [Math]::Min(180, $publicText.Length - $start)
      $excerpt = $publicText.Substring($start, $length)

      $violations.Add([pscustomobject]@{
        File = Resolve-Path -LiteralPath $file.FullName -Relative
        Rule = $rule.Name
        Term = $match.Value
        Excerpt = $excerpt
      })
    }
  }
}

if ($violations.Count -gt 0) {
  Write-Host "Public copy guard failed. Rewrite the public-facing text before publishing." -ForegroundColor Red
  $violations | Format-Table -AutoSize
  exit 1
}

Write-Host "Public copy guard passed: $($htmlFiles.Count) HTML files checked." -ForegroundColor Green
