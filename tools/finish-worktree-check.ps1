param(
  [switch]$AllowDirty
)

$ErrorActionPreference = 'Stop'

$repoRoot = Split-Path -Parent $PSScriptRoot
Set-Location $repoRoot

function Write-Step {
  param([string]$Message)
  Write-Host ""
  Write-Host "== $Message ==" -ForegroundColor Cyan
}

$gitDir = git rev-parse --git-dir
$pendingOps = @(
  'MERGE_HEAD',
  'REBASE_HEAD',
  'CHERRY_PICK_HEAD',
  'BISECT_LOG',
  'rebase-merge',
  'rebase-apply'
) | Where-Object { Test-Path (Join-Path $gitDir $_) }

Write-Step 'Git state'
$branch = git branch --show-current
$statusBranch = git status --short --branch
$statusBranch | ForEach-Object { Write-Host $_ }

if ($pendingOps.Count -gt 0) {
  Write-Host "Pending Git operation found: $($pendingOps -join ', ')" -ForegroundColor Red
  exit 1
}

$unmerged = @(git ls-files -u)
if ($unmerged.Count -gt 0) {
  Write-Host 'Unmerged files found.' -ForegroundColor Red
  $unmerged | ForEach-Object { Write-Host $_ }
  exit 1
}

$porcelain = @(git status --porcelain=v1)
$staged = @($porcelain | Where-Object { $_ -match '^[MADRCU][ MDARCUT]' })
$modified = @($porcelain | Where-Object { $_ -match '^ M ' })
$untracked = @($porcelain | Where-Object { $_ -match '^\?\? ' })

Write-Host "Branch: $branch"
Write-Host "Staged: $($staged.Count)"
Write-Host "Modified: $($modified.Count)"
Write-Host "Untracked: $($untracked.Count)"

if ($porcelain.Count -gt 0) {
  Write-Host ""
  Write-Host 'Open work grouped by top-level folder:'
  $porcelain |
    ForEach-Object {
      $path = $_.Substring(3)
      if ($path -like '*/*') { $path.Split('/')[0] }
      elseif ($path -like '*\*') { $path.Split('\')[0] }
      else { '<root>' }
    } |
    Group-Object |
    Sort-Object Count -Descending |
    ForEach-Object { Write-Host "  $($_.Name): $($_.Count)" }
}

Write-Step 'Whitespace check'
git diff --check

$changedFiles = @(
  git diff --name-only
  git diff --cached --name-only
  git ls-files --others --exclude-standard
) | Sort-Object -Unique

if ($changedFiles -contains 'js/main.js') {
  Write-Step 'JavaScript syntax'
  node --check js/main.js
}

$publicCopyChanged = $changedFiles | Where-Object { $_ -match '\.html$' }
if ($publicCopyChanged.Count -gt 0 -and (Test-Path '.\tools\verify-public-copy.ps1')) {
  Write-Step 'Public copy guard'
  powershell -ExecutionPolicy Bypass -File .\tools\verify-public-copy.ps1
}

if ($porcelain.Count -gt 0 -and -not $AllowDirty) {
  Write-Host ""
  Write-Host 'Worktree is still dirty. Commit, explicitly leave pending work documented, or rerun with -AllowDirty for an intentional handoff.' -ForegroundColor Red
  exit 1
}

Write-Host ""
Write-Host 'Finish check passed.' -ForegroundColor Green
