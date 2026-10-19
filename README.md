# LP C2S IA para incorporadoras

Site estático (HTML/CSS/JS) + uma função serverless (`api/lead.js`) para o formulário.

## Estrutura
- `index.html`, `styles.css`, `script.js`: a página.
- `assets/`: logo do C2S e QR Code do WhatsApp (`wa.me/551152864415`).
- `api/lead.js`: recebe o formulário e envia para `LEAD_WEBHOOK_URL`.

## Rodar localmente
```bash
npx serve .          # só a página (o formulário vai dar erro, pois não há /api)
npx vercel dev       # página + API, usando as variáveis do projeto
```

## Publicar na Vercel
1. Suba esta pasta para um repositório no GitHub.
2. Na Vercel: Add New → Project → importe o repositório → Deploy (sem build command, sem framework).
3. Em Settings → Environment Variables, crie `LEAD_WEBHOOK_URL` com a URL que vai receber os leads
   (CRM do C2S, Zapier, Make, n8n...). O corpo enviado é JSON:
   `nome, email, whatsapp, cargo, tipo_empresa, empresa, mensagem, pagina, utm, origem, recebido_em`.
4. Em Settings → Domains, adicione o domínio e crie o registro DNS indicado.

## Pendências antes de ir ao ar
- E-mail do rodapé (`contato@[PREENCHER]` em `index.html`).
- Links reais de Instagram, LinkedIn e YouTube no rodapé.
- Logos reais na seção de integrações (hoje são textos).
- Confirmar que o QR Code do "Veja na prática" é o número ativo.
- Colar Meta Pixel / GA4 / GTM no `<head>` do `index.html`.
- Política de privacidade (o formulário coleta dados pessoais).
- Validar textos de Gerências, Diretorias e FAQ.
