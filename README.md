# Duarty — Site Institucional (Uniformes Personalizados & Streetwear)

Site one-page premium. Vite + React + Tailwind + Framer Motion. Sem backend — conversão via WhatsApp.

## Rodar
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera /dist
npm run preview
```

## ⚠️ ANTES DE PUBLICAR — preencher em `src/config.js`
- `WHATSAPP_NUMBER` — número comercial real, formato `55DDDNUMERO` (só dígitos). **Placeholder atual: `5500000000000`.**
- `REGION` — cidade/região de atendimento (SEO/copy). Vazio = omitido.
- `DOMAIN` — domínio final quando confirmado.

## Identidade
- Cores (tokens Tailwind): `ink #050505`, `graphite #111`, `urban #181818`, `tech #E9E9E9`, `mute #B8B8B8`, `red #E10613`, `red-deep #7A0A0F`.
- Fontes: Space Grotesk (títulos) + Inter (corpo), via Google Fonts em `index.html`.
- Elemento-assinatura: **Linha de Corte Vermelha** (`CutRule`, eyebrows, ticks, underlines).

## Logo
Nenhum arquivo de logo (PNG/SVG) foi enviado — o monograma "DA" e o wordmark foram **recriados em SVG** (`src/components/Brand.jsx`, `public/favicon.svg`). Substituir pelo SVG/PNG oficial quando disponível.

## Imagens
32 fotos reais do cliente, selecionadas das 98 enviadas, tratadas e otimizadas para `.webp` em `src/assets/img/`. Feedbacks são prints reais de WhatsApp. `public/og-image.jpg` = imagem Open Graph.

## Estrutura
- `src/App.jsx` — ordem das seções.
- `src/components/` — Header, Hero, Sections (todas as seções de conteúdo), Footer, WhatsAppFloat, Brand, ui.
- `src/config.js` — marca, WhatsApp, links.
