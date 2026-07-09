import { motion } from 'framer-motion'
import { Monogram } from './Brand'
import { waLink } from '../config'
// LCP: servida de /public com preload no index.html (descoberta antecipada no mobile)

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  return (
    <section id="top" className="grain relative overflow-hidden bg-ink pt-16 sm:pt-20">
      {/* monograma marca d'água */}
      <Monogram className="hero-monogram-bg hidden md:block" />
      {/* brilho vermelho sutil */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-red/10 blur-[120px]" />

      <div className="section-pad relative grid items-center gap-10 pb-16 pt-6 md:grid-cols-[1.05fr_0.95fr] md:pb-24 md:pt-10 lg:pb-28 lg:pt-12">
        {/* coluna texto */}
        <div>
          <motion.span
            className="eyebrow mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            Uniformes personalizados &amp; Streetwear
          </motion.span>

          <motion.h1
            className="font-display text-[2.6rem] font-bold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
          >
            Vista sua marca
            <br />
            com <span className="relative whitespace-nowrap text-white">presença
              <span className="absolute -bottom-2 left-0 h-[5px] w-full bg-red" />
            </span>.
          </motion.h1>

          <motion.p
            className="mt-7 max-w-xl text-base leading-relaxed text-mute sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease }}
          >
            Uniformes personalizados para empresas, equipes e marcas que querem transmitir mais
            padrão, confiança e identidade desde o primeiro contato.
          </motion.p>

          <motion.p
            className="mt-3 max-w-xl text-sm text-mute/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.26 }}
          >
            Camisetas, moletons, calças, bermudas e bonés personalizados com estampa DTF de alta
            definição — fabricação própria para representar melhor o seu negócio.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease }}
          >
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Solicitar orçamento pelo WhatsApp
            </a>
            <a href="#uniformes" className="btn-ghost">
              Conhecer o padrão Duarty
            </a>
          </motion.div>

          <motion.p
            className="mt-6 max-w-md text-xs leading-relaxed text-mute/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.42 }}
          >
            Atendimento consultivo para entender sua ideia, orientar a personalização e indicar o
            melhor caminho para a sua marca.
          </motion.p>
        </div>

        {/* coluna imagem */}
        <motion.div
          className="relative lg:-ml-6 xl:-ml-12"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
        >
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
        </motion.div>
      </div>
    </section>
  )
}
