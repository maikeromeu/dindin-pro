# DinDin Pro

Controle financeiro para casais, com sincronização em tempo real (Firebase) e Conselheiro IA.

## Estrutura
- `index.html`  → o app inteiro (HTML + CSS + JS)
- `icon-192.png`, `icon-512.png` → ícones
- `api/chat.js` → função serverless da IA (NÃO está neste pacote: use a do seu projeto atual)

## Deploy
Importe este repositório na Vercel (Add New → Project). Não precisa de build.
A IA precisa da variável de ambiente `ANTHROPIC_API_KEY` configurada na Vercel (Settings → Environment Variables).
