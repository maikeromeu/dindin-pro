# DinDin Pro

Controle financeiro para casais com sincronização em tempo real (Firebase) e Conselheiro IA.

## Arquivos
- `index.html` — o app inteiro
- `icon-192.png`, `icon-512.png` — ícones
- `netlify.toml` — configuração do deploy (publica a raiz e liga `/api/chat` à função)
- `netlify/functions/chat.js` — função da IA (usa a variável `ANTHROPIC_API_KEY` no Netlify)

## Como atualizar
Troque o `index.html` aqui no GitHub (Add file → Upload files → Commit). O Netlify publica sozinho.
