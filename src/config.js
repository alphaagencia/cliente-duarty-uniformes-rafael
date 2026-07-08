// ============================================================
// CONFIG DA MARCA — Duarty Uniformes Personalizados & Streetwear
// ============================================================

// Número comercial (WhatsApp) — formato 55DDDNUMERO.
export const WHATSAPP_NUMBER = '5554999311566'

export const EMAIL = 'contato.duarty@gmail.com'

// Atendimento presencial + envio.
export const REGION = 'Canela e Gramado'
export const REGION_NOTE = 'Entrega grátis em Canela e Gramado · Envio para todo o Brasil'

// PLACEHOLDER — domínio final quando confirmado.
export const DOMAIN = ''

export const INSTAGRAM_HANDLE = 'duarty.streetwear'
export const INSTAGRAM_URL = 'https://instagram.com/duarty.streetwear'

const WA_MSG_DEFAULT =
  'Olá, vim pelo site da Duarty e gostaria de solicitar um orçamento para uniformes personalizados.'

export function waLink(message = WA_MSG_DEFAULT) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
