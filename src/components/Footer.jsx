import { Wordmark } from './Brand'
import { waLink, INSTAGRAM_URL, INSTAGRAM_HANDLE, EMAIL, REGION_NOTE } from '../config'

const LINKS = [
  ['Início', '#top'],
  ['Sobre', '#sobre'],
  ['Uniformes', '#uniformes'],
  ['Streetwear', '#streetwear'],
  ['Processo', '#processo'],
  ['Portfólio', '#portfolio'],
  ['FAQ', '#faq'],
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-ink">
      <div className="section-pad py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Wordmark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-mute">
              Uniformes personalizados para empresas, equipes e marcas que querem transmitir mais
              padrão, confiança e identidade.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-eyebrow text-mute/70">Navegar</p>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-6">
              {LINKS.map(([l, h]) => (
                <li key={h}>
                  <a href={h} className="text-sm text-mute transition-colors hover:text-white">{l}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-eyebrow text-mute/70">Contato</p>
            <div className="flex flex-col gap-3">
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="text-sm text-tech transition-colors hover:text-red">
                WhatsApp — orçamento
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-tech transition-colors hover:text-red">
                Instagram @{INSTAGRAM_HANDLE}
              </a>
              <a href={`mailto:${EMAIL}`} className="text-sm text-tech transition-colors hover:text-red">
                {EMAIL}
              </a>
              <p className="mt-1 text-xs leading-relaxed text-mute">{REGION_NOTE}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-white/[0.07]" />

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-mute/60">
            © {new Date().getFullYear()} Duarty — Uniformes Personalizados &amp; Streetwear.
          </p>
          <p className="max-w-xl text-[11px] leading-relaxed text-mute/45">
            Prazos, valores, disponibilidade de peças, quantidades mínimas e formas de
            personalização são definidos conforme briefing, orçamento e condições de produção.
          </p>
        </div>
      </div>
    </footer>
  )
}
