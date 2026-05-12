# Script de inicializacao do repositorio Git e push para o GitHub
# Execute no PowerShell estando dentro da pasta do projeto:
#   cd "C:\Users\gmfad\Documents\gmove-website-novo\G-MOVE Website"
#   .\setup-github.ps1

$ErrorActionPreference = "Stop"

Write-Host "==> Removendo .git corrompida (se existir)..." -ForegroundColor Cyan
if (Test-Path ".git") {
    Remove-Item -Recurse -Force ".git"
}

Write-Host "==> Inicializando repositorio..." -ForegroundColor Cyan
git init -b main

Write-Host "==> Configurando autor..." -ForegroundColor Cyan
git config user.email "gmfado@gmail.com"
git config user.name "Gerson"

Write-Host "==> Adicionando arquivos..." -ForegroundColor Cyan
git add -A

Write-Host "==> Primeiro commit..." -ForegroundColor Cyan
git commit -m "Initial commit: G-MOVE landing page"

Write-Host "==> Adicionando remote origin..." -ForegroundColor Cyan
git remote add origin https://github.com/gmfado/gmove_landing.git

Write-Host "==> Enviando para o GitHub..." -ForegroundColor Cyan
git push -u origin main

Write-Host ""
Write-Host "Pronto! Repositorio publicado em https://github.com/gmfado/gmove_landing" -ForegroundColor Green
