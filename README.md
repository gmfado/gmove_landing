# G-MOVE Landing

Site institucional da G-MOVE.

## Estrutura

- `index.html` — página principal
- `manifesto.html`, `privacidade.html`, `termos.html` — páginas estáticas
- `css/`, `js/` — assets do site
- `conteudo/`, `documents/` — recursos e documentos
- `firebase.json`, `.firebaserc` — configuração de deploy Firebase Hosting

## Desenvolvimento local

Abra `index.html` em um navegador, ou use um servidor estático:

```powershell
# com Python
python -m http.server 8000

# ou com Node
npx serve .
```

## Deploy

Deploy via Firebase Hosting:

```powershell
firebase deploy
```
