import { Monogram } from './Brand'
import { waLink } from '../config'
// LCP: imagem servida de /public com preload no index.html.
// Entrada animada só por transform (nunca opacity) — opacity 0 adiaria FCP/LCP.

export default function Hero() {
  return (
    <section id="top" className="grain relative overflow-hidden bg-ink pt-16 sm:pt-20">
      {/* monograma marca d'água */}
      <Monogram className="hero-monogram-bg hidden md:block" />
      {/* brilho vermelho sutil */}
      {/* brilho vermelho: blur(120px) é caro no mobile */}
      <div className="pointer-events-none absolute -left-40 top-40 hidden h-96 w-96 rounded-full bg-red/10 blur-[120px] md:block" />

      <div className="section-pad relative grid items-center gap-10 pb-16 pt-6 md:grid-cols-[1.05fr_0.95fr] md:pb-24 md:pt-10 lg:pb-28 lg:pt-12">
        {/* coluna texto */}
        <div>
          <span className="eyebrow rise mb-6">Uniformes personalizados &amp; Streetwear</span>

          <h1 className="rise rise-1 font-display text-[2.6rem] font-bold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Vista sua marca
            <br />
            com <span className="relative whitespace-nowrap text-white">presença
              <span className="absolute -bottom-2 left-0 h-[5px] w-full bg-red" />
            </span>.
          </h1>

          <p className="rise rise-2 mt-7 max-w-xl text-base leading-relaxed text-mute sm:text-lg">
            Uniformes personalizados para empresas, equipes e marcas que querem transmitir mais
            padrão, confiança e identidade desde o primeiro contato.
          </p>

          <p className="rise rise-3 mt-3 max-w-xl text-sm text-mute/80">
            Camisetas, moletons, calças, bermudas e bonés personalizados com estampa DTF de alta
            definição — fabricação própria para representar melhor o seu negócio.
          </p>

          <div className="rise rise-4 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Solicitar orçamento pelo WhatsApp
            </a>
            <a href="#uniformes" className="btn-ghost">
              Conhecer o padrão Duarty
            </a>
          </div>

          <p className="rise rise-5 mt-6 max-w-md text-xs leading-relaxed text-mute/70">
            Atendimento consultivo para entender sua ideia, orientar a personalização e indicar o
            melhor caminho para a sua marca.
          </p>
        </div>

        {/* coluna imagem */}
        <div className="hero-visual-in relative lg:-ml-6 xl:-ml-12">
          <div className="hero-visual">
            <img
              src="/hero-model.webp"
              srcSet="/hero-model-sm.webp 560w, /hero-model.webp 1050w"
              sizes="(max-width: 768px) 92vw, 620px"
              alt="Equipe vestindo uniformes personalizados Duarty — polo, moletom e boné"
              className="hero-model"
              width="1050"
              height="1312"
              fetchpriority="high"
              decoding="async"
            />
            {/* etiqueta de marcação */}
            <div className="absolute bottom-1 left-1 z-[3] flex items-center gap-2">
              <span className="h-[5px] w-8 bg-red" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/90">
                Padrão Duarty
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
