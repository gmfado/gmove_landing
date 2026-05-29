param(
  [string]$Root = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$rootPath = (Resolve-Path $Root).Path
$failures = New-Object System.Collections.Generic.List[string]

function Add-Failure {
  param([string]$Message)
  [void]$script:failures.Add($Message)
}

function Get-RelativePath {
  param([string]$Path)
  return $Path.Substring($rootPath.Length).TrimStart("\", "/")
}

function Resolve-DocTarget {
  param(
    [System.IO.FileInfo]$SourceFile,
    [string]$Target
  )

  $targetPath = $Target.Trim()
  if ($targetPath.StartsWith("<") -and $targetPath.EndsWith(">")) {
    $targetPath = $targetPath.Substring(1, $targetPath.Length - 2)
  }

  $targetPath = ($targetPath -split "#", 2)[0]
  $targetPath = ($targetPath -split "\?", 2)[0]
  if ([string]::IsNullOrWhiteSpace($targetPath)) {
    return $null
  }

  if ($targetPath -match "^[a-zA-Z][a-zA-Z0-9+.-]*:") {
    return $null
  }

  $targetPath = [Uri]::UnescapeDataString($targetPath).Replace("/", [IO.Path]::DirectorySeparatorChar)

  if ([IO.Path]::IsPathRooted($targetPath)) {
    $trimmed = $targetPath.TrimStart("\", "/")
    return Join-Path $rootPath $trimmed
  }

  return Join-Path $SourceFile.DirectoryName $targetPath
}

function Convert-SitePathToFile {
  param([string]$SitePath)

  if ($SitePath -eq "/") {
    return Join-Path $rootPath "index.html"
  }

  $cleanPath = $SitePath.TrimStart("/")
  if ($cleanPath.EndsWith("/")) {
    return Join-Path $rootPath (Join-Path $cleanPath "index.html")
  }

  if ($cleanPath.EndsWith(".html")) {
    return Join-Path $rootPath $cleanPath
  }

  return Join-Path $rootPath (Join-Path $cleanPath "index.html")
}

$markdownFiles = @()
foreach ($entry in @("README.md", "CODEX.md")) {
  $path = Join-Path $rootPath $entry
  if (Test-Path -LiteralPath $path) {
    $markdownFiles += Get-Item -LiteralPath $path
  }
}

$documentsPath = Join-Path $rootPath "documents"
if (Test-Path -LiteralPath $documentsPath) {
  $markdownFiles += Get-ChildItem -LiteralPath $documentsPath -Recurse -File -Filter "*.md"
}

$linkPattern = "(!?\[[^\]]*\]\((?<target>[^)]+)\))"
foreach ($file in $markdownFiles) {
  $content = Get-Content -LiteralPath $file.FullName -Raw
  $matches = [regex]::Matches($content, $linkPattern)
  foreach ($match in $matches) {
    $target = $match.Groups["target"].Value
    $resolved = Resolve-DocTarget -SourceFile $file -Target $target
    if ($null -eq $resolved) {
      continue
    }

    if (-not (Test-Path -LiteralPath $resolved)) {
      Add-Failure ("Broken local markdown link in {0}: {1}" -f (Get-RelativePath $file.FullName), $target)
    }
  }
}

$sitemapPath = Join-Path $rootPath "sitemap.xml"
$matrixPath = Join-Path $rootPath "documents\10_MATRIZ_PAGINAS_PUBLICAS.md"

if (Test-Path -LiteralPath $sitemapPath) {
  $sitemapContent = Get-Content -LiteralPath $sitemapPath -Raw
  $locMatches = [regex]::Matches($sitemapContent, "<loc>(?<loc>[^<]+)</loc>")
  $sitemapPaths = @()

  foreach ($match in $locMatches) {
    $loc = $match.Groups["loc"].Value.Trim()
    try {
      $uri = [Uri]$loc
      $sitePath = $uri.AbsolutePath
      if ([string]::IsNullOrWhiteSpace($sitePath)) {
        $sitePath = "/"
      }
      $sitemapPaths += $sitePath

      $localFile = Convert-SitePathToFile -SitePath $sitePath
      if (-not (Test-Path -LiteralPath $localFile)) {
        Add-Failure ("Sitemap URL has no local file: {0}" -f $loc)
      }
    }
    catch {
      Add-Failure ("Invalid sitemap URL: {0}" -f $loc)
    }
  }

  if (Test-Path -LiteralPath $matrixPath) {
    $matrixLines = Get-Content -LiteralPath $matrixPath
    $summaryLine = $matrixLines | Where-Object { $_ -match "Total no sitemap:\s*(\d+)\s+URLs" } | Select-Object -First 1
    if ($summaryLine -and $summaryLine -match "Total no sitemap:\s*(\d+)\s+URLs") {
      $declaredCount = [int]$Matches[1]
      if ($declaredCount -ne $sitemapPaths.Count) {
        Add-Failure ("Public matrix declares {0} sitemap URLs, but sitemap.xml has {1}" -f $declaredCount, $sitemapPaths.Count)
      }
    }
    else {
      Add-Failure "Public matrix does not declare 'Total no sitemap: N URLs'."
    }

    $matrixRows = @()
    foreach ($line in $matrixLines) {
      if ($line -match "^\|") {
        $cells = $line.Trim().Trim("|").Split("|") | ForEach-Object { $_.Trim() }
        if ($cells.Count -ge 2) {
          $urlCell = $cells[0].Trim([char]0x60)
          if (-not $urlCell.StartsWith("/")) {
            continue
          }
          $matrixRows += [pscustomobject]@{
            Url = $urlCell
            File = $cells[1].Trim([char]0x60)
          }
        }
      }
    }

    $matrixUrls = @($matrixRows | ForEach-Object { $_.Url })
    foreach ($sitePath in $sitemapPaths) {
      if ($matrixUrls -notcontains $sitePath) {
        Add-Failure ("Sitemap URL missing from public matrix: {0}" -f $sitePath)
      }
    }

    foreach ($row in $matrixRows) {
      if ($sitemapPaths -notcontains $row.Url) {
        Add-Failure ("Public matrix URL missing from sitemap.xml: {0}" -f $row.Url)
      }

      $listedFile = Join-Path $rootPath $row.File.Replace("/", [IO.Path]::DirectorySeparatorChar)
      if (-not (Test-Path -LiteralPath $listedFile)) {
        Add-Failure ("Public matrix file does not exist for {0}: {1}" -f $row.Url, $row.File)
      }
    }
  }
  else {
    Add-Failure "Public matrix document is missing."
  }
}
else {
  Add-Failure "sitemap.xml is missing."
}

if ($failures.Count -gt 0) {
  Write-Host "Documentation guard failed:" -ForegroundColor Red
  foreach ($failure in $failures) {
    Write-Host ("- {0}" -f $failure)
  }
  exit 1
}

Write-Host ("Documentation guard passed: {0} Markdown files checked, sitemap URLs: {1}." -f $markdownFiles.Count, $sitemapPaths.Count)
