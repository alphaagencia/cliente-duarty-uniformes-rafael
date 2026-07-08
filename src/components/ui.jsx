import { motion } from 'framer-motion'

// Reveal sutil no scroll
export function Reveal({ children, delay = 0, y = 24, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

// Assinatura: Linha de Corte Vermelha — divisória que "desenha" no scroll
export function CutRule({ className = '' }) {
  return (
    <div className={`relative mx-auto max-w-content px-5 sm:px-8 ${className}`}>
      <div className="relative h-px w-full bg-white/[0.06]">
        <motion.span
          className="absolute -top-[2px] left-0 h-[5px] w-14 origin-left bg-red"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export function Eyebrow({ children, className = '' }) {
  return <span className={`eyebrow ${className}`}>{children}</span>
}

export function SectionHeading({ eyebrow, children, className = '' }) {
  return (
    <div className={className}>
      {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
      <h2 className="max-w-3xl font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
        {children}
      </h2>
    </div>
  )
}
