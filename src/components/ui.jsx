import { useEffect, useRef, useState } from 'react'

// Observa o elemento e marca como visível uma única vez (substitui framer-motion).
function useInView(margin = '-80px') {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || inView) return
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { rootMargin: margin },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [inView, margin])

  return [ref, inView]
}

// Reveal sutil no scroll
export function Reveal({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  )
}

// Assinatura: Linha de Corte Vermelha — divisória que "desenha" no scroll
export function CutRule({ className = '' }) {
  const [ref, inView] = useInView('0px')
  return (
    <div className={`relative mx-auto max-w-content px-5 sm:px-8 ${className}`}>
      <div ref={ref} className="relative h-px w-full bg-white/[0.06]">
        <span className={`cut-line absolute -top-[2px] left-0 h-[5px] w-14 bg-red ${inView ? 'is-visible' : ''}`} />
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
